import { useState } from "react";

export default function Home() {
  const [showHints, setShowHints] = useState(false);

  const toggleHints = () => {
    setShowHints(!showHints);
  };

  return (
    <div>
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <p className="text-xl mb-4">Check out the daily coding challenges:</p>
        <a
          href="https://adventofcode.com/"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Advent of Code 2023
        </a>
      </div>
      <div className="text-center">
        <button
          onClick={toggleHints}
          className="bg-gray-400 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded"
        >
          {showHints ? "Hide Hints" : "Show Hints"}
        </button>
      </div>

      {showHints && (
        <div className="p-10">
          <div className="mb-4 w-1/3 mx-auto">
            <div className="mb-10">
              <h3 className="font-bold mb-4 text-center text-xl">
                Day 1 / Part 1 - Sum First and Last Digits
              </h3>
              Coming soon...
            </div>
            <div className="mb-10">
              <h3 className="font-bold mb-4 text-center text-xl">
                Day 1 / Part 2 - Calculate Mixed Format Numbers
              </h3>
              Coming soon...
            </div>
          </div>
          <div className="mb-4 w-1/3 mx-auto">
            <div className="mb-10">
              <h3 className="font-bold mb-4 text-center text-xl">
                Day 2 / Part 1 - Cube Game Analyzer
              </h3>
              Coming soon...
            </div>
            <div className="mb-10">
              <h3 className="font-bold mb-4 text-center text-xl">
                Day 2 / Part 2 - Gube Game Power Calculator
              </h3>
              Coming soon...
            </div>
          </div>
          <div className="mb-4 w-1/3 mx-auto">
            <div className="mb-10">
              <h3 className="font-bold mb-4 text-center text-xl">
                Day 3 / Part 1 - Engine Part Calculator
              </h3>
              <ol>
                <li className="mb-6">
                  <span className="font-bold">
                    Process Lines Individually:{" "}
                  </span>{" "}
                  Go through the schematic line by line. Each line should be
                  handled separately to maintain accurate location information
                  for the numbers and symbols.
                </li>
                <li className="mb-6">
                  <span className="font-bold">
                    Identify and Record All Numbers:{" "}
                  </span>{" "}
                  Note down all the numbers in their entirety and the indexes of
                  their first and last characters on each line. Pay attention to
                  the numbers that are adjacent to any symbol (excluding dots).
                </li>
                <li className="mb-6">
                  <span className="font-bold">
                    Record All Symbols (Except Dots) and Their Locations:{" "}
                  </span>
                  Identify and note the locations of all symbols that are not
                  dots. These symbols will be used to determine which numbers to
                  include.
                </li>
                <li className="mb-6">
                  <span className="font-bold">
                    Check for Adjacent Numbers:{" "}
                  </span>
                  For each symbol, check if there is any number directly next to
                  it (on the same or adjacent line). Record all such numbers.
                </li>
                <li className="mb-6">
                  <span className="font-bold">Sum the Numbers:</span> Add up all
                  the numbers that you identified as being adjacent to the
                  symbols (excluding dots).
                </li>
              </ol>
            </div>
            <div className="mb-10">
              <h3 className="font-bold mb-4 text-center text-xl">
                Day 3 / Part 2 - Gear Ratio Calculator
              </h3>
              <ol>
                <li className="mb-6">
                  <span className="font-bold">
                    Process Lines Individually:{" "}
                  </span>{" "}
                  Go through the schematic line by line. Each line should be
                  handled separately to maintain accurate location information
                  for the numbers and symbols.
                </li>
                <li className="mb-6">
                  <span className="font-bold">
                    Record All Numbers and Their Locations:
                  </span>{" "}
                  Note down all the numbers in their entirety and the indexes of
                  their first and last characters on each line.
                </li>
                <li className="mb-6">
                  <span className="font-bold">
                    Record All '*' Symbols and Their Indexes:
                  </span>{" "}
                  Find and record the location of each '*' symbol in the
                  schematic.
                </li>
                <li className="mb-6">
                  <span className="font-bold">Check Each '*' Symbol:</span> For
                  each '*' symbol, check if there are two numbers adjacent to it
                  in any direction. If so, record these numbers as a pair.
                </li>
                <li className="mb-6">
                  <span className="font-bold">
                    Calculate the Multiplications:
                  </span>{" "}
                  Perform a multiplication for each recorded pair of numbers
                  (multiply the two numbers together).
                </li>
                <li className="mb-6">
                  <span className="font-bold">Calculate the Sum:</span> Add up
                  all the multiplication results to get the final answer to the
                  puzzle.
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
