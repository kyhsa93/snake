import { BootScene } from './BootScene';
import { GameOverScene } from './GameOverScene';
import { GameScene } from './GameScene';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#222222",
  scene: [BootScene, GameScene, GameOverScene],
  mode: Phaser.Scale.RESIZE,
  autoCenter: Phaser.Scale.CENTER_BOTH,
};

export const GRID_SIZE = 16;
