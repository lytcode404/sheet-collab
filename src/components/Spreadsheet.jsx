import React from "react";

const Spreadsheet = ({ data, onInputChange, onKeyDown, isBold }) => {
  console.log(data);
  const rows = data.length; // Number of rows from data
  const cols = data[0].length; // Number of columns from data

  // Function to generate column labels like A, B, C, etc.
  const getColumnLabel = (index) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[index] || "";
  };

  return (
    <div className="overflow-x-auto overflow-y-auto">
      <div className="inline-block min-w-full py-2 align-middle">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                {/* Empty corner cell */}
                <th className="border p-0 w-8 h-8 sticky top-0 bg-gray-100 z-10"></th>
                {Array.from({ length: cols }).map((_, colIndex) => (
                  <th
                    key={colIndex}
                    className="border p-0 w-8 h-8 text-center text-lg sticky top-0 bg-gray-100 z-10"
                  >
                    {getColumnLabel(colIndex)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 cursor-default">
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {/* Row number */}
                  <td className="border p-0 w-8 h-8 text-center text-lg">
                    {rowIndex + 1}
                  </td>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex} className="border p-0">
                      <input
                        type="text"
                        value={cell} // Use the value from data
                        maxLength={15} // Fixed length
                        className={`w-full h-8 text-lg border-none focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${
                          isBold ? "font-bold" : ""
                        }`} // Apply bold styling if isBold is true
                        onChange={(e) =>
                          onInputChange(rowIndex, colIndex, e.target.value)
                        } // Handle input change
                        onKeyDown={(e) => onKeyDown(e, rowIndex, colIndex)} // Handle keyboard events
                        placeholder=""
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Spreadsheet;
