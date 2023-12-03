import { useState } from "react";

const GearRatioCalculator = () => {
  const [input, setInput] = useState("");
  const [validNumbers, setValidNumbers] = useState([]);
  const [sum, setSum] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const compareNumbersAndSymbols = () => {
    const lines = input.split("\n");

    let dataWithIndices = extractNumbersAndSymbols(lines);
    let numbersToKeep = compareExtractedData(dataWithIndices);

    setValidNumbers(numbersToKeep);
    calculateSum(numbersToKeep);
  };

  const calculateSum = (numberPairs) => {
    const totalSum = numberPairs.reduce(
      (acc, [num1, num2]) => acc + num1 * num2,
      0
    );
    setSum(totalSum);
  };

  const extractNumbersAndSymbols = (lines) => {
    let dataWithIndices = [];

    lines.forEach((line, lineIndex) => {
      let i = 0;
      while (i < line.length) {
        if (isDigit(line[i])) {
          const { number, endIndex } = extractNumber(line, i);
          dataWithIndices.push({
            type: "Number",
            value: number,
            startIndex: i,
            endIndex: endIndex - 1,
            line: lineIndex,
          });
          i = endIndex;
        } else if (isSymbol(line[i])) {
          dataWithIndices.push({
            type: "Symbol",
            value: line[i],
            startIndex: i,
            endIndex: i,
            line: lineIndex,
          });
          i++;
        } else {
          i++;
        }
      }
    });

    return dataWithIndices;
  };

  const isAdjacentOrDiagonal = (symbol, number, data) => {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const adjacentIndex = symbol.startIndex + j;
        const adjacentLine = symbol.line + i;
        if (
          adjacentLine === number.line &&
          adjacentIndex >= number.startIndex &&
          adjacentIndex <= number.endIndex
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const compareExtractedData = (data) => {
    let validNumberPairs = [];

    data.forEach((item, idx) => {
      if (item.type === "Symbol") {
        const adjacentNumbers = data.filter(
          (numberItem) =>
            numberItem.type === "Number" &&
            isAdjacentOrDiagonal(item, numberItem, data)
        );

        if (adjacentNumbers.length >= 2) {
          validNumberPairs.push([
            adjacentNumbers[0].value,
            adjacentNumbers[1].value,
          ]);
        }
      }
    });

    return validNumberPairs;
  };

  const isDigit = (char) => {
    return !isNaN(parseInt(char, 10));
  };

  const isSymbol = (char) => {
    return char === "*" && !isDigit(char);
  };

  const extractNumber = (line, startIndex) => {
    let endIndex = startIndex;
    let number = "";

    while (endIndex < line.length && isDigit(line[endIndex])) {
      number += line[endIndex];
      endIndex++;
    }

    return { number: parseInt(number, 10), endIndex };
  };

  return (
    <div className="p-4">
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Enter text here"
        rows="10"
        cols="50"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <div className="flex items-center gap-4">
        <button
          onClick={compareNumbersAndSymbols}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Analyze and Calc
        </button>
        <h3 className="text-lg font-semibold text-gray-800">
          Total sum: {sum}
        </h3>
      </div>
    </div>
  );
};

export default GearRatioCalculator;
