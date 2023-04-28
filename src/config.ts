import { BootScene } from './BootScene';
import { GameScene } from './GameScene';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#222222",
  scene: [BootScene, GameScene],
};

export const GRID_SIZE = 16;
