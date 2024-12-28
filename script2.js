let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let currentInput = e.target.innerHTML;

        if (currentInput == '=') {
            try {
                string = eval(string); // Evaluates the mathematical expression
                input.value = string;
            } catch (err) {
                input.value = 'Error'; // Handle any errors
            }
        } 
        else if (currentInput == 'AC') {
            string = "";
            input.value = string;
        }
        else if (currentInput == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (currentInput == '%') {
            // Handle percentage as a percentage calculation
            if (string) {
                string = (parseFloat(string) / 100).toString();
                input.value = string;
            }
        } 
        else {
            string += currentInput; // Add the pressed button to the string
            input.value = string;
        }
    });
});
