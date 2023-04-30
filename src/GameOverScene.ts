export class GameOverScene extends Phaser.Scene {
  score: number = 0;
  elapsedTime: string = "00:00";

  constructor() {
    super({ key: 'GameOverScene' });
  }

  init(data: any) {
    this.score = data.score;
    this.elapsedTime = data.elapsedTime;
  }

  create() {
    this.add.text(100, 150, `Score: ${this.score}`, { fontSize: '32px', color: '#FFF' });
    this.add.text(100, 200, `Time: ${this.elapsedTime}`, { fontSize: '32px', color: '#FFF' });

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
