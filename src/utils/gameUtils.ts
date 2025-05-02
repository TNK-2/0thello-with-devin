import { CellState, GameBoard, GameMove } from '../types/game';

/**
 * Creates an initial game board with the standard Othello starting position
 */
export function createInitialBoard(size: number = 8): GameBoard {
  const grid: CellState[][] = Array(size).fill(null).map(() => 
    Array(size).fill('empty')
  );
  
  const mid = Math.floor(size / 2);
  grid[mid-1][mid-1] = 'white';
  grid[mid][mid] = 'white';
  grid[mid-1][mid] = 'black';
  grid[mid][mid-1] = 'black';
  
  return {
    grid,
    currentPlayer: 'black',
    blackScore: 2,
    whiteScore: 2
  };
}
