export type CellState = 'empty' | 'black' | 'white';

export interface GameBoard {
  grid: CellState[][];
  currentPlayer: 'black' | 'white';
  blackScore: number;
  whiteScore: number;
}

export interface GameMove {
  row: number;
  col: number;
  player: 'black' | 'white';
}
