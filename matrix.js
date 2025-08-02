const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// Horizontal green line on click
canvas.addEventListener("click", (e) => {
  const y = e.clientY;
  let x = 0;
  const interval = setInterval(() => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 5, y);
    ctx.strokeStyle = "#00ff00";
    ctx.stroke();
    x += 5;
    if (x > canvas.width) clearInterval(interval);
  }, 5);
});
