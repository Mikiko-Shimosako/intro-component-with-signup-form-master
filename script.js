const submitButton = document.querySelector('.submit');
const inputGroups = document.querySelectorAll('.input-group');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  inputGroups.forEach(group => {
    const input = group.querySelector('.input');
    const iconError = group.querySelector('.icon-error');
    const errorMessage = group.querySelector('.error-message');

    if (input.value.trim() === '' || (input.type === 'email' && !validateEmail(input.value))) {
      iconError.style.display = 'block';
      errorMessage.style.display = 'block';
      input.classList.add('error');
    } else {
      iconError.style.display = 'none';
      errorMessage.style.display = 'none';
      input.classList.remove('error');
    }
  });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};