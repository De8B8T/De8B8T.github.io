document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.question').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
