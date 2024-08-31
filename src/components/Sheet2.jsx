"use client";

import React, { useState, useEffect, useCallback } from "react";
import Spreadsheet from "./Spreadsheet";
import io from 'socket.io-client';
import { useRouter } from "next/navigation";

let socket;

const Sheet2 = ({ roomId, username }) => {
  const initialData = Array.from({ length: 50 }, () =>
    Array.from({ length: 15 }, () => "")
  );

  const [data, setData] = useState(initialData);
  const [isBold, setIsBold] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const router = useRouter(); 
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isReadParam = urlParams.get('isRead');
    
    if (isReadParam === 'true') {
      setIsReadOnly(true); 
    }
    if (!(localStorage.getItem('user') && localStorage.getItem('accessToken'))) {
      router.push('/signin');
    }
    socket = io("https://backend-collabsheet-production.up.railway.app");
    socket.emit('joinRoom', roomId);
    socket.emit('requestInitialData', roomId);

    socket.on('initialData', (initialData) => {
      if (Array.isArray(initialData)) {
        setData(initialData.map(row => row.map(cell => typeof cell === 'object' ? cell.value : cell)));
      } else {
        console.error("Received data is not in expected format:", initialData);
      }
    });

    socket.on('cellUpdated', ({ cellId, value }) => {
      const [row, col] = cellId.split('-').map(Number);
      setData(prevData => {
        const updatedData = [...prevData];
        updatedData[row][col] = value;
        return updatedData;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId]);

  const handleInputChange = (rowIndex, colIndex, value) => {
    if (isReadOnly) return; 
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);

    const cellId = `${rowIndex}-${colIndex}`;
    socket.emit('updateCell', {
      cellId,
      value,
      username,
    });
  };

  const parseCell = (cell) => {
    const column = cell.charAt(0).toUpperCase();
    const row = parseInt(cell.slice(1), 10);
    const colIndex = column.charCodeAt(0) - "A".charCodeAt(0);
    const rowIndex = row - 1;
    return [colIndex, rowIndex];
  };

  const evaluateExpression = (expression) => {
    try {
      if (/^[0-9+\-*/().\s]+$/.test(expression)) {
        return eval(expression); 
      }

      const sumMatch = expression.match(/^SUM\(([^)]+)\)$/);
      if (sumMatch) {
        const range = sumMatch[1];
        const [start, end] = range.split(":");
        const [startCol, startRow] = parseCell(start);
        const [endCol, endRow] = parseCell(end);
        let sum = 0;

        for (let r = startRow; r <= endRow; r++) {
          for (let c = startCol; c <= endCol; c++) {
            const cellValue = parseFloat(data[r][c]);
            if (!isNaN(cellValue)) {
              sum += cellValue;
            }
          }
        }

        return sum;
      }

      const subMatch = expression.match(/^SUB\(([^)]+)\)$/);
      if (subMatch) {
        const range = subMatch[1];
        const [start, end] = range.split(":");
        const [startCol, startRow] = parseCell(start);
        const [endCol, endRow] = parseCell(end);
        const startValue = parseFloat(data[startRow][startCol]) || 0;
        let result = startValue;

        for (let r = startRow + 1; r <= endRow; r++) {
          for (let c = startCol; c <= endCol; c++) {
            const cellValue = parseFloat(data[r][c]);
            if (!isNaN(cellValue)) {
              result -= cellValue;
            }
          }
        }

        return result;
      }

      const mulMatch = expression.match(/^MUL\(([^,]+),([^)]+)\)$/);
      if (mulMatch) {
        const [a, b] = [mulMatch[1], mulMatch[2]];
        return evaluateExpression(a) * evaluateExpression(b);
      }

      const powMatch = expression.match(/^POW\(([^,]+),([^)]+)\)$/);
      if (powMatch) {
        const [base, exponent] = [powMatch[1], powMatch[2]];
        return Math.pow(evaluateExpression(base), evaluateExpression(exponent));
      }

      return undefined;
    } catch (error) {
      console.error("Error evaluating expression:", error);
      return undefined;
    }
  };

  const evaluateCell = (rowIndex, colIndex) => {
    const cellValue = data[rowIndex][colIndex].trim();
    if (cellValue.startsWith("=")) {
      const result = evaluateExpression(cellValue.substring(1));
      if (result !== undefined) {
        handleInputChange(rowIndex, colIndex, result.toString());
      } else {
        console.error("Invalid expression or calculation error.");
      }
    }
  };

  const handleKeyDown = (e, rowIndex, colIndex) => {
    if (e.key === "Enter") {
      e.preventDefault();
      evaluateCell(rowIndex, colIndex);
    }
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  return (
    <div>
      <div className={`spreadsheet-wrapper ${isReadOnly ? 'pointer-events-none' : ''}`}>
        <Spreadsheet
          data={data.map(row => row.map(cell => (typeof cell === 'object' ? cell.value : cell)))}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          isBold={isBold}
        />
      </div>
    </div>
  );
};

export default Sheet2;
