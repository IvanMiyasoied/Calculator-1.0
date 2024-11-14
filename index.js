// Access the DOM Element 

const display = document.getElementById('display');


// function to add something on display

function appendToDisplay(input) {
   display.value += input
}

// clear

function clearDisplay() {
   display.value = '';
}

// eval + try catch

function calculate() {
   try {
      display.value = eval(display.value);
   }
   catch {
      display.value = 'Err'
   }
}
