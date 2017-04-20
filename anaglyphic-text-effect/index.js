const submitBtn = document.getElementById('submit-btn');
const h1 = document.querySelector('h1');
const inputField = document.getElementById('input-field');

if (!h1.dataset.content) {
  h1.dataset.content = 'Marissa'
}

submitBtn.addEventListener('click', function() {
  const title = document.getElementById('title');

  h1.dataset.content = inputField.value;
  title.innerText = inputField.value;
});
