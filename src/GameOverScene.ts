export class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  create() {
    const { width, height } = this.scale;

    this.add.text(width / 2, height / 2, 'Game Over', {
      fontSize: '48px',
      color: '#ffffff',
    }).setOrigin(0.5);

    const restartButton = this.add.text(width / 2, height / 2 + 100, 'Restart', {
      fontSize: '32px',
      color: '#ffffff',
    }).setOrigin(0.5);

    restartButton.setInteractive();
    restartButton.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}
