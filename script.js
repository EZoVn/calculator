const output = document.getElementById('output');
const equals = document.getElementById('equals');
const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
  const btnValue = event.target.innerText;
  switch (btnValue) {
    case 'Reset':
      output.innerText = '';
      break;
    case '.':
      if (output.innerText.includes('.')) return;
      output.innerText += btnValue;
      break;
    case 'DEL':
      output.innerText = output.innerText.slice(0, -1);
      break;
    case '=':
      output.innerText = math.evaluate(output.innerText);
      break;
    default:
      output.innerText += btnValue;
  }
}

const themeSwitch = document.querySelectorAll('input[name="theme"]');
const calculatorSection = document.getElementById('calculator');
const body = document.body;

const toggle = document.getElementById('toggle');
const toggleBall = document.getElementById('toggle-ball');

let toggleState = 0;

toggle.addEventListener('click', () => {
  toggleState = (toggleState + 1) % 3;
  toggleBall.style.left = `${toggleState * 1.25}rem`;
  themeSwitch[toggleState].checked = true;
  // calculatorSection.classList = `theme${toggleState + 1}`;
  body.classList = `theme${toggleState + 1}`;
});