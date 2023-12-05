import { useState } from "react";

export default function SeedFertilizer() {
  const [input, setInput] = useState("");
  const [finalLocation, setFinalLocation] = useState(null);

  const processMap = (seeds, map) => {
    return seeds.map((seed) => {
      const mapEntry = map.find(
        (entry) => seed >= entry.src && seed < entry.src + entry.range
      );
      return mapEntry ? mapEntry.dest + (seed - mapEntry.src) : seed;
    });
  };

  const handleInput = () => {
    const lines = input.split("\n").filter((line) => line.trim() !== "");
    let currentMap = null;
    let tempSeeds = [];
    const tempMaps = {};

    lines.forEach((line) => {
      if (line.startsWith("seeds:")) {
        tempSeeds = line.split(":")[1].trim().split(" ").map(Number);
      } else if (line.includes("map:")) {
        currentMap = line.split(":")[0].trim().replace(" map", "");
        tempMaps[currentMap] = [];
      } else if (line && currentMap) {
        const [dest, src, range] = line.split(" ").map(Number);
        tempMaps[currentMap].push({ dest, src, range });
      }
    });

    const mapKeys = [
      "seed-to-soil",
      "soil-to-fertilizer",
      "fertilizer-to-water",
      "water-to-light",
      "light-to-temperature",
      "temperature-to-humidity",
      "humidity-to-location",
    ];

    mapKeys.forEach((key) => {
      if (tempMaps[key]) {
        tempSeeds = processMap(tempSeeds, tempMaps[key]);
      }
    });

    setFinalLocation(Math.min(...tempSeeds));
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
            onClick={handleInput}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Find Location
          </button>
          <h3 className="text-lg font-semibold text-gray-800">
            Location: {finalLocation}
          </h3>
        </div>
      </div>
    </div>
  );
}
