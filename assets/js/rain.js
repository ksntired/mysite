const rain = document.querySelector('.rain');
const fontSize = 20;
const columns = Math.floor(window.innerWidth / fontSize);
const drops = [];

rain.style.position = 'fixed';
rain.style.top = 0;
rain.style.left = 0;
rain.style.width = '100vw';
rain.style.height = '100vh';
rain.style.pointerEvents = 'none';
rain.style.zIndex = 0;

for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * window.innerHeight;
}

function drawRain() {
  rain.innerHTML = '';
  for (let i = 0; i < columns; i++) {
    // Длина "строчки" дождя
    const lineLength = 8 + Math.floor(Math.random() * 6); // от 8 до 13 символов
    for (let j = 0; j < lineLength; j++) {
      const span = document.createElement('span');
      span.textContent = Math.random() > 0.5 ? '0' : '1';
      span.style.position = 'absolute';
      span.style.left = `${i * fontSize}px`;
      span.style.top = `${drops[i] + j * fontSize}px`;
      span.style.color = '#ff69b4';
      span.style.fontSize = `${fontSize}px`;
      span.style.fontFamily = 'monospace';
      span.style.opacity = 0.7 - j * 0.05; // затухание вниз
      rain.appendChild(span);
    }
    drops[i] += 2 + Math.random() * 2; // скорость падения
    if (drops[i] > window.innerHeight) {
      drops[i] = -lineLength * fontSize;
    }
  }
  requestAnimationFrame(drawRain);
}

drawRain();