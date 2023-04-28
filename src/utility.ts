import { GameObjects } from 'phaser';

import { GRID_SIZE } from "./config";

let score = 0;

export function snapToGrid(value: number): number {
  return Math.floor(value / GRID_SIZE) * GRID_SIZE;
}

export function updateScore(scoreText: GameObjects.Text, points: number): void {
  score += points;
  scoreText.setText("Score: " + score);
}
