import { config, GRID_SIZE } from './config.js';
import { snapToGrid } from './utility.js';

export class Snake {
  constructor(scene) {
    this.scene = scene;
    this.body = [];
    this.direction = Phaser.Math.Vector2.RIGHT;
    this.growAmount = 0;
    this.moveDelay = 150;
    this.lastMoveTime = 0;
    this.alive = true;

    const centerX = snapToGrid(config.width / 2);
    const centerY = snapToGrid(config.height / 2);

    const randomColor = Phaser.Display.Color.RandomRGB().color32;
    for (let i = 0; i < 3; ++i) {
      this.body.push(
        this.scene.add
          .rectangle(centerX - i * GRID_SIZE, centerY, GRID_SIZE, GRID_SIZE, randomColor)
          .setOrigin(0)
      );
    }
  }

  update(time) {
    if (time >= this.lastMoveTime + this.moveDelay) {
      this.lastMoveTime = time;
      return this.move();
    }
    return false;
  }

  move() {
    const head = this.body[0];
    const targetX = head.x + this.direction.x * GRID_SIZE;
    const targetY = head.y + this.direction.y * GRID_SIZE;

    if (
      targetX < 0 ||
      targetX >= config.width ||
      targetY < 0 ||
      targetY >= config.height
    ) {
      this.alive = false;
      return false;
    }

    for (let i = this.body.length - 1; i > 0; --i) {
      if (this.body[i].x === targetX && this.body[i].y === targetY) {
        this.alive = false;
        return false;
      }
    }

    let last = this.body.pop();
    last.setPosition(targetX, targetY);
    this.body.unshift(last);

    if (this.growAmount > 0) {
      const randomColor = Phaser.Display.Color.RandomRGB().color32;
      this.body.push(
        this.scene
          .add
          .rectangle(last.x, last.y, GRID_SIZE, GRID_SIZE, randomColor)
          .setOrigin(0)
      );
      this.growAmount--;
    }

    return true;
  }

  grow() {
    this.growAmount += 1;
  }

  collideWithFood(food) {
    const head = this.body[0];
    return head.x === food.x && head.y === food.y;
  }
}
