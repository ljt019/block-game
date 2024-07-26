import React from "react";

function GameBoard() {
  const rows = Array.from({ length: 20 }, () =>
    Array.from({ length: 20 }, () => false)
  );

  return (
    <div className="grid grid-cols-20 gap-0 w-[400px] h-[400px] bg-blue-200 border-2 border-black">
      {rows.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            className={`border border-black ${cell ? "bg-black" : "bg-white"}`}
          />
        ))
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <GameBoard />
    </div>
  );
}
