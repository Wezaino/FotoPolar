const text = document.querySelector('.colorText');

setInterval(function() {
  const color = getRandomColor();
  text.style.color = color;
}, 1000);

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '.';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
