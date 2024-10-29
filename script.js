
function addQuestion() {
  const questionInput = document.getElementById('question-input');
  const answerInput = document.getElementById('answer-input');

  if (questionInput.value.trim() && answerInput.value.trim()) {
    const faqContainer = document.getElementById('faq-container');

    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';

    const questionElement = document.createElement('h3');
    questionElement.innerText = questionInput.value;
    questionElement.onclick = function() {
      this.nextElementSibling.classList.toggle('show');
    };

    const answerElement = document.createElement('p');
    answerElement.className = 'answer';
    answerElement.innerText = answerInput.value;

    faqItem.appendChild(questionElement);
    faqItem.appendChild(answerElement);
    faqContainer.appendChild(faqItem);
    questionInput.value = '';
    answerInput.value = '';
  } else {
    alert("Please enter both a question and an answer.");
  }
}
document.addEventListener('click', function(event) {
  if (event.target.tagName === 'H3') {
    event.target.nextElementSibling.classList.toggle('show');
  }
});
