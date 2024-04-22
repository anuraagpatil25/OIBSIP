document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let result = document.getElementById('result');

    if (isNaN(temperature)) {
        result.innerText = "Please enter a valid number for temperature.";
        return;
    }

    let convertedTemp;
    let resultText;

    switch (unit) {
        case 'celsius':
            convertedTemp = convertToCelsius(temperature);
            resultText = `${temperature} Fahrenheit is ${convertedTemp.toFixed(2)} Celsius.`;
            break;
        case 'fahrenheit':
            convertedTemp = convertToFahrenheit(temperature);
            resultText = `${temperature} Celsius is ${convertedTemp.toFixed(2)} Fahrenheit.`;
            break;
        case 'kelvin':
            convertedTemp = convertToKelvin(temperature, unit);
            resultText = `${temperature} Celsius is ${convertedTemp.toFixed(2)} Kelvin.`;
            break;
        default:
            resultText = "Invalid unit selection.";
    }

    result.innerText = resultText;
});

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertToKelvin(celsius) {
    return celsius + 273.15;
}
