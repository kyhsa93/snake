import { Scene, Display } from 'phaser';

import { config, GRID_SIZE } from "./config";
import { Snake } from './Snake';

export class Food {
  scene
  x
  y
  sprite

  constructor(scene: Scene) {
    this.scene = scene;
    this.x = 0;
    this.y = 0;

    this.sprite = this.scene.add
      .rectangle(this.x, this.y, GRID_SIZE, GRID_SIZE, Display.Color.RandomRGB().color32)
      .setOrigin(0);

    this.randomize();
  }

  randomize() {
    const maxGridX = (config.width / GRID_SIZE) - 1;
    const maxGridY = (config.height / GRID_SIZE) - 1;

    this.x = Math.floor(Math.random() * maxGridX) * GRID_SIZE;
    this.y = Math.floor(Math.random() * maxGridY) * GRID_SIZE;

    this.sprite.setFillStyle(Display.Color.RandomRGB().color32);
    this.sprite.setPosition(this.x, this.y);
  }

  avoidOverlap(snake: Snake) {
    let overlapping = true;

    while (overlapping) {
      this.randomize();
      overlapping = snake.body.some((segment) => segment.x === this.x && segment.y === this.y);
    }
  }
}
