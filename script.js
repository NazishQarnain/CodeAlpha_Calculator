const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', function(e) {
  const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/'];

  if (allowedKeys.includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
