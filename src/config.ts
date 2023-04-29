import { BootScene } from './BootScene';
import { GameOverScene } from './GameOverScene';
import { GameScene } from './GameScene';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#222222",
  scene: [BootScene, GameScene, GameOverScene],
};

export const GRID_SIZE = 16;
