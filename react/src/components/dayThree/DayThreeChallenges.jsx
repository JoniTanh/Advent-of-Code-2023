import EnginePartCalculator from "./EnginePartCalculator";
import GearRatioCalculator from "./GearRatioCalculator";

export default function DayThreeChallenges() {
  return (
    <div className="text-center my-8">
      <a
        href="https://adventofcode.com/2023/day/3"
        className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Advent of Code 2023 - Day 3
      </a>
      <div className="flex justify-center gap-4 mt-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Part 1</h3>
          <EnginePartCalculator />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Part 2</h3>
          <GearRatioCalculator />
        </div>
      </div>
    </div>
  );
}
