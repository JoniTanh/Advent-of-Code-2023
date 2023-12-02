import { useState } from "react";

export default function SumFirstLastDigits() {
  const [input, setInput] = useState("");
  const [sum, setSum] = useState("");

  const findNumbers = (line) => {
    const numbers = line.match(/\d/g);
    if (numbers && numbers.length >= 2) {
      return `${numbers[0]}${numbers[numbers.length - 1]}`;
    } else if (numbers && numbers.length === 1) {
      return `${numbers[0]}${numbers[0]}`;
    }
    return "0";
  };

  const handleSubmit = () => {
    const lines = input.split("\n");
    const calculatedResults = lines.map(findNumbers);

    const totalSum = calculatedResults.reduce(
      (acc, currentValue) => acc + parseInt(currentValue, 10),
      0
    );
    setSum(totalSum);
  };

  return (
    <div className="p-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text here"
        rows="10"
        cols="50"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Calc Sum
          </button>
          <h3 className="text-lg font-semibold text-gray-800">
            Total sum: {sum}
          </h3>
        </div>
      </div>
    </div>
  );
}
