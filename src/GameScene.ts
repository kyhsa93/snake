import { Types, GameObjects } from 'phaser';

import { Snake } from './Snake';
import { Food } from './Food';
import { updateScore } from './utility';
import { config, GRID_SIZE } from './config';

export class GameScene extends Phaser.Scene {
  snake?: Snake;
  food?: Food;
  cursors?: Types.Input.Keyboard.CursorKeys;
  scoreText?: GameObjects.Text;

  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    this.cameras.main.setBounds(0, 0, config.width, config.height);

    this.snake = new Snake(this);
    this.food = new Food(this);
    this.cursors = this.input.keyboard?.createCursorKeys();
    this.scoreText = this.add.text(16, 16, "Score: 0", { fontSize: "32px", color: "#FFF" });
    this.cameras.main.setPosition((config.width - this.cameras.main.width) / 2, (config.height - this.cameras.main.height) / 2);
  }

  update(time: number): void {
    if (!this.snake?.alive) return;
    if (!this.cursors || !this.food) return;

    const { left, right, up, down } = this.cursors;
    const { x, y } = this.snake.direction;

    if (Phaser.Input.Keyboard.JustDown(left) && x !== GRID_SIZE) {
      this.snake.direction = Phaser.Math.Vector2.LEFT;
    } else if (Phaser.Input.Keyboard.JustDown(right) && x !== -GRID_SIZE) {
      this.snake.direction = Phaser.Math.Vector2.RIGHT;
    } else if (Phaser.Input.Keyboard.JustDown(up) && y !== GRID_SIZE) {
      this.snake.direction = Phaser.Math.Vector2.UP;
    } else if (Phaser.Input.Keyboard.JustDown(down) && y !== -GRID_SIZE) {
      this.snake.direction = Phaser.Math.Vector2.DOWN;
    }

    if (this.snake.update(time) && this.snake.collideWithFood(this.food)) {
      this.snake.grow();
      this.food.avoidOverlap(this.snake);
      if (this.scoreText) updateScore(this.scoreText, 10);
    }
  }
}
