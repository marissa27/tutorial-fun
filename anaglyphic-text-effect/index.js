const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function() {
  const inputField = document.getElementById('input-field');
  const title = document.getElementById('title');
  title.innerText = inputField.value;
});
