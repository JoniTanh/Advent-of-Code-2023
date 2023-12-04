export default function Home() {
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
    </div>
  );
}
