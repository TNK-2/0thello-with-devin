import React from 'react';
import { CellState } from '../../types/game';

interface BoardProps {
  grid: CellState[][];
  onCellClick?: (row: number, col: number) => void;
}

export function Board({ grid, onCellClick }: BoardProps) {
  return (
    <div className="grid gap-1 bg-green-800 p-2 rounded-lg shadow-lg">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                ${cell === 'empty' ? 'bg-green-700' : ''}
                ${cell === 'black' ? 'bg-black' : ''}
                ${cell === 'white' ? 'bg-white' : ''}
              `}
              onClick={() => onCellClick?.(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
