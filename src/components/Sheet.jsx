'use client';

import React, { useState, useEffect, useCallback } from "react";
import Spreadsheet from "react-spreadsheet";
import io from 'socket.io-client';

let socket;

const SpreadsheetComponent = ({ roomId, username }) => {
  const initialData = Array.from({ length: 50 }, () =>
    Array.from({ length: 10 }, () => ({
      value: "",
      isBold: false,
      username: "",
    }))
  );

  const [data, setData] = useState(initialData);
  const [isBold, setIsBold] = useState(false);

  useEffect(() => {
    socket = io('http://localhost:3001');
    socket.emit('joinRoom', roomId);
    socket.emit('requestInitialData', roomId);

    socket.on('initialData', (initialData) => {
      if (Array.isArray(initialData)) {
        setData(initialData);
      } else {
        console.error("Received data is not in expected format:", initialData);
      }
    });

    socket.on('cellUpdated', ({ cellId, value, isBold, username }) => {
      console.log(`Cell updated: ${cellId} by ${username} with value: ${value}`);
      const [row, col] = cellId.split('-').map(Number);
      setData(prevData => {
        const updatedData = [...prevData];
        updatedData[row][col] = { value, isBold, username, borderColor: updatedData[row][col]?.borderColor || "" };
        return updatedData;
      });
    });
    return () => {
      socket.disconnect();
    };
  }, [roomId]);

  const handleCellChange = useCallback((newData, rowIndex, colIndex) => {
    const cellValue = newData[rowIndex][colIndex]?.value || "";
    const cellId = `${rowIndex}-${colIndex}`;
    console.log(`User ${username} changed cell ${cellId} to value: ${cellValue}`);

    socket.emit('updateCell', {
      cellId,
      value: cellValue,
      isBold,
      username,
    });

    setData(prevData => {
      const updatedData = [...prevData];
      updatedData[rowIndex][colIndex] = { value: cellValue, isBold, username, borderColor: updatedData[rowIndex][colIndex]?.borderColor || "" };
      return updatedData;
    });
  }, [isBold, username]);

  const toggleBold = () => {
    setIsBold(prev => !prev);
  };

  return (
    <div>
      <div>
        <button onClick={toggleBold}>{isBold ? "Remove Bold" : "Bold"}</button>
      </div>
      <Spreadsheet
        data={data.map(row =>
          row.map(cell => ({
            ...cell,
            style: {
              ...cell.style,
            }
          }))
        )}
        onChange={(newData) => {
          let changedRow, changedCol;
          for (let row = 0; row < data.length; row++) {
            for (let col = 0; col < data[row].length; col++) {
              if (data[row][col].value !== newData[row][col].value) {
                changedRow = row;
                changedCol = col;
                break;
              }
            }
            if (changedRow !== undefined && changedCol !== undefined) break;
          }

          if (changedRow !== undefined && changedCol !== undefined) {
            handleCellChange(newData, changedRow, changedCol);
          }
        }}
      />
    </div>
  );
};

export default SpreadsheetComponent;