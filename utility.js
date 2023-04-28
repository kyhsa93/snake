import { GRID_SIZE } from "./config.js";

let score = 0;

export function snapToGrid(value) {
  return Math.floor(value / GRID_SIZE) * GRID_SIZE;
}

export function updateScore(scoreText, points) {
  score += points;
  scoreText.setText("Score: " + score);
}
