import { useState } from "react";

const CubeGameAnalyzer = () => {
  const [input, setInput] = useState("");
  const [sum, setSum] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const analyzeGames = () => {
    const games = parseInput(input);
    const possibleGamesSum = calculatePossibleGamesSum(games);
    setSum(possibleGamesSum);
  };

  const parseInput = (input) => {
    const games = {};
    const gameLines = input.split("\n");
    gameLines.forEach((line) => {
      const [gameIdPart, cubesPart] = line.split(": ");
      const gameId = parseInt(gameIdPart.replace("Game ", ""));
      const cubes = cubesPart.split("; ").flatMap((set) =>
        set.split(", ").map((cube) => {
          const [amount, color] = cube.split(" ");
          return { color, amount: parseInt(amount) };
        })
      );
      games[gameId] = cubes;
    });
    return games;
  };

  const calculatePossibleGamesSum = (games) => {
    const availableCubes = { red: 12, green: 13, blue: 14 };
    let sum = 0;
    for (const [gameId, cubes] of Object.entries(games)) {
      if (isGamePossible(cubes, availableCubes)) {
        sum += parseInt(gameId);
      }
    }
    return sum;
  };

  const isGamePossible = (cubes, availableCubes) => {
    const cubesShown = { red: 0, green: 0, blue: 0 };
    for (const { color, amount } of cubes) {
      cubesShown[color] = Math.max(cubesShown[color], amount);
    }
    return Object.keys(cubesShown).every(
      (color) => cubesShown[color] <= availableCubes[color]
    );
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
          onClick={analyzeGames}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Analyze Games
        </button>
        <h3 className="text-lg font-semibold text-gray-800">
          Total sum: {sum}
        </h3>
      </div>
    </div>
  );
};

export default CubeGameAnalyzer;
