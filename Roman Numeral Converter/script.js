const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputSpan = document.getElementById('output');
convertButton.addEventListener('click', () => {
    console.log('Button clicked');
    const number = parseInt(numberInput.value, 10);
    if (isNaN(number)) {
        outputSpan.textContent = 'Please enter a valid number ';
        return;
    } else if (number < 1) {
        outputSpan.textContent = 'Please enter a number greater than or equal to 1';
        return;
    }
    else if (number > 3999) {
        outputSpan.textContent = 'Please enter a number less than or equal to 3999';
        return;
    }
    const romanMap = [
        { "value": 1000, "numeral": "M" },
        { "value": 900, "numeral": "CM" },
        { "value": 500, "numeral": "D" },
        { "value": 400, "numeral": "CD" },
        { "value": 100, "numeral": "C" },
        { "value": 90, "numeral": "XC" },
        { "value": 50, "numeral": "L" },
        { "value": 40, "numeral": "XL" },
        { "value": 10, "numeral": "X" },
        { "value": 9, "numeral": "IX" },
        { "value": 5, "numeral": "V" },
        { "value": 4, "numeral": "IV" },
        { "value": 1, "numeral": "I" }
    ]
    let result = "";
    let remaining = number;
    romanMap.forEach((item) => {
        while (remaining >= item.value) {
            result += item.numeral;
            remaining -= item.value;
        }
    });
    outputSpan.classList.remove('show'); // Reset
    setTimeout(() => {
        outputSpan.textContent = result;
        outputSpan.classList.add('show');
    }, 10);

    outputSpan.textContent = result;
    outputSpan.classList.add('show');
});