import { useState } from "react";

export default function ScratchcardCalculator() {
  const [input, setInput] = useState("");
  const [sum, setSum] = useState("");

  function calculateSum(input) {
    const lines = input.split("\n");
    let totalSum = 0;

    lines.forEach((line) => {
      const parts = line.split("|");
      if (parts.length === 2) {
        const winningNumbers = parts[0]
          .trim()
          .split(" ")
          .filter((str) => str.trim() !== "")
          .map(Number);
        const userNumbers = parts[1]
          .trim()
          .split(" ")
          .filter((str) => str.trim() !== "")
          .map(Number);

        let matches = 0;
        userNumbers.forEach((number) => {
          if (winningNumbers.includes(number)) {
            matches++;
          }
        });

        if (matches > 0) {
          totalSum += Math.pow(2, matches - 1);
        }
      }
    });

    return totalSum;
  }

  const handleCalculate = () => {
    const totalSum = calculateSum(input);
    setSum(totalSum);
  };

  return (
    <div className="p-4">
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Enter text here"
        rows="10"
        cols="50"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleCalculate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Calc Sum
          </button>
          <h3 className="text-lg font-semibold text-gray-800">
            Total Sum: {sum}
          </h3>
        </div>
      </div>
    </div>
  );
}
