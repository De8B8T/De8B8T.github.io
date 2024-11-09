document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.question').addEventListener('click', () => {
    const answer = item.querySelector('.answer');
    answer.classList.toggle('active');
  });
});

const banner = document.querySelector('.banner-follow');
document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  const moveX = (x / window.innerWidth - 0.5) * 30;
  const moveY = (y / window.innerHeight - 0.5) * 30;
  banner.style.transform = `translate(-50%, -50%) rotateX(${moveY}deg) rotateY(${moveX}deg)`;
});

function toggleContent(item) {
  const content = item.querySelector('.changelog-content');
  content.classList.toggle('active');
  item.classList.toggle('active');
}
