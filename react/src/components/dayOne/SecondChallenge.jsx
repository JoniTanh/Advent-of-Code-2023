import { useState } from "react";

export default function SecondChallenge() {
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(null);

  const numberWords = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  const findAllNumbers = (line) => {
    let numberInstances = [];

    for (let i = 0; i < line.length; i++) {
      if (!isNaN(line[i]) && line[i] !== " ") {
        numberInstances.push({ number: line[i], index: i });
      }
    }

    Object.keys(numberWords).forEach((word) => {
      let index = line.indexOf(word);
      while (index !== -1) {
        numberInstances.push({
          number: numberWords[word],
          index: index + word.length - 1,
        });
        index = line.indexOf(word, index + 1);
      }
    });

    numberInstances.sort((a, b) => a.index - b.index);

    return numberInstances.map((instance) => instance.number.toString());
  };

  const handleCalculate = () => {
    const lines = input.split("\n");
    const arrays = lines.map((line) => findAllNumbers(line));
    const totalSum = arrays.reduce((acc, array) => {
      if (array.length > 0) {
        const pair = `${array[0]}${array[array.length - 1]}`;
        return acc + parseInt(pair, 10);
      }
      return acc;
    }, 0);

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
            onClick={handleCalculate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Calc
          </button>
          <h3 className="text-lg font-semibold text-gray-800">
            Total Sum: {sum}
          </h3>
        </div>
      </div>
    </div>
  );
}
