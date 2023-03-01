const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let value = button.innerHTML;
    if (value === 'x') value = '*';
    if (value === '÷') value = '/';
    if (value === '⌫') value = 'del';
    if (value === 'C') {
      display.innerHTML = "";
      return;
    }
    if (value === '=') {
      display.innerHTML = eval(display.innerHTML);
      return;
    }
    if (value === 'del') {
      display.innerHTML = display.innerHTML.slice(0, -1);
      return;
    }
    display.innerHTML += value;
  });
});
