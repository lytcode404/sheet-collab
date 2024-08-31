"use client";

import React, { useState } from "react";
import Spreadsheet from "./Spreadsheet"; // Use the custom Spreadsheet component

const Sheet2 = () => {
  const initialData = Array.from({ length: 20 }, (_, rowIndex) =>
    Array.from({ length: 15 }, () => "")
  );

  const [data, setData] = useState(initialData);
  const [isBold, setIsBold] = useState(false);

  const handleInputChange = (rowIndex, colIndex, value) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);
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
      // Handle simple arithmetic
      if (/^[0-9+\-*/().\s]+$/.test(expression)) {
        return eval(expression); // Be cautious with eval
      }

      // Handle SUM formula
      const sumMatch = expression.match(/^SUM\(([^)]+)\)$/);
      if (sumMatch) {
        const range = sumMatch[1];
        const [start, end] = range.split(":");
        const [startCol, startRow] = parseCell(start);
        const [endCol, endRow] = parseCell(end);
        let sum = 0;

        for (let r = startRow; r <= endRow; r++) {
          for (let c = startCol; c <= endCol; c++) {
            const cellValue = data[r][c];
            const number = parseFloat(cellValue);
            if (!isNaN(number)) {
              sum += number;
            }
          }
        }

        return sum;
      }

      // Handle SUB formula
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
            const cellValue = data[r][c];
            const number = parseFloat(cellValue);
            if (!isNaN(number)) {
              result -= number;
            }
          }
        }

        return result;
      }

      // Handle MUL formula
      const mulMatch = expression.match(/^MUL\(([^,]+),([^)]+)\)$/);
      if (mulMatch) {
        const [a, b] = [mulMatch[1], mulMatch[2]];
        return evaluateExpression(a) * evaluateExpression(b);
      }

      // Handle POW formula
      const powMatch = expression.match(/^POW\(([^,]+),([^)]+)\)$/);
      if (powMatch) {
        const [base, exponent] = [powMatch[1], powMatch[2]];
        return Math.pow(evaluateExpression(base), evaluateExpression(exponent));
      }

      return undefined; // For unsupported expressions
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
      <div className="spreadsheet-wrapper">
        <Spreadsheet
          data={data}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          isBold={isBold}
        />
      </div>
    </div>
  );
};

export default Sheet2;
