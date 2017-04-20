const submitBtn = document.getElementById('submit-btn');
const h1 = document.querySelector('h1');

if (!h1.dataset.content) {
  h1.dataset.content = 'Marissa'
}

submitBtn.addEventListener('click', function() {
  const inputField = document.getElementById('input-field');

  h1.dataset.content = inputField.value;

  const title = document.getElementById('title');

  title.innerText = inputField.value;

});
