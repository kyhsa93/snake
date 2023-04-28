import { config } from './config.js';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  create() {
    this.add.rectangle(0, 0, config.width, config.height, 0x000000, 0.8).setOrigin(0);

    const startButton = this.add.text(0, 0, 'Start Game', { fontSize: '32px', fill: '#FFF' }).setOrigin(0.5);
    startButton.setInteractive();
    startButton.on('pointerdown', () => this.scene.start('GameScene'));
    startButton.setPosition(config.width / 2, config.height / 2);

    this.cameras.main.centerOn(config.width / 2, config.height / 2);
  }
}
