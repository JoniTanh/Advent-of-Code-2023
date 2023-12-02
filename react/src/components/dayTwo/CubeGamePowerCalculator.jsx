import { useState } from "react";

const CubeGamePowerCalculator = () => {
  const [input, setInput] = useState("");
  const [sum, setSum] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const calculatePowerSum = () => {
    const games = parseInput(input);
    const powerSum = Object.values(games)
      .map(calculateMinimumCubes)
      .reduce((sum, power) => sum + power, 0);
    setSum(powerSum);
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

  const calculateMinimumCubes = (cubes) => {
    const minCubes = { red: 0, green: 0, blue: 0 };
    cubes.forEach(({ color, amount }) => {
      minCubes[color] = Math.max(minCubes[color], amount);
    });
    return Object.values(minCubes).reduce((acc, val) => acc * val, 1);
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
          onClick={calculatePowerSum}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Calc Powers
        </button>
        <h3 className="text-lg font-semibold text-gray-800">
          Total sum: {sum}
        </h3>
      </div>
    </div>
  );
};

export default CubeGamePowerCalculator;
