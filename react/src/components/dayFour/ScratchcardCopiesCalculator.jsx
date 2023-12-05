import { useState } from "react";

export default function ScratchcardCopiesCalculator() {
  const [input, setInput] = useState("");
  const [sum, setSum] = useState("");

  const getNumbers = (str) => {
    return str.match(/\d+/g).map(Number);
  };

  const procLine = (line, index) => {
    const [winStr, haveStr] = line.split(": ")[1].split(" | ");
    const win = getNumbers(winStr);
    const have = getNumbers(haveStr);
    const matchCount = win.filter((n) => have.includes(n)).length;

    return { position: index + 1, copies: 0, matches: matchCount };
  };

  const procCopy = (cards, i) => {
    const multiplier = 1 + cards[i].copies;
    let matches = cards[i].matches;
    let offset = 1;

    while (matches > 0 && i + offset < cards.length) {
      cards[i + offset].copies += multiplier;
      matches--;
      offset++;
    }
  };

  const handleCalculate = () => {
    const lines = input.split("\n");
    let cards = [];

    for (let i = 0; i < lines.length; i++) {
      cards.push(procLine(lines[i], i));
    }

    for (let i = 0; i < cards.length; i++) {
      procCopy(cards, i);
    }

    const total = cards.reduce((acc, card) => acc + card.copies + 1, 0);
    setSum(total);
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
