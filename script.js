document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.question').addEventListener('click', () => {
    const answer = item.querySelector('.answer');
    answer.classList.toggle('active');
  });
});
