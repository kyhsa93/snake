import { config } from './config';

new Phaser.Game(config);

function resizeGame() {
  const canvas = document.querySelector('canvas');
  if (!canvas) return;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = config.width / config.height;

  let newWidth, newHeight;

  if (windowRatio < gameRatio) {
    newWidth = Math.min(windowWidth, config.width);
    newHeight = newWidth / gameRatio;
  } else {
    newHeight = Math.min(windowHeight, config.height);
    newWidth = newHeight * gameRatio;
  }

  canvas.style.width = `${newWidth}px`;
  canvas.style.height = `${newHeight}px`;
}

window.addEventListener('resize', resizeGame);

resizeGame();
