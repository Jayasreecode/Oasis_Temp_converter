function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value.trim();
    const unitSelect = document.getElementById("unitSelect");
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (isNaN(temperatureInput)) {
      alert("Please enter a valid number for temperature.");
      return;
    }

    const temperature = parseFloat(temperatureInput);

    let convertedTemperature;
    let unitSymbol;

        switch (selectedUnit) {
            case "celsius":
              convertedTemperature = (temperature * 9/5) + 32;
              unitSymbol = "°F";
              break;
            case "fahrenheit":
              convertedTemperature = (temperature - 32) * (5/9);
              unitSymbol = "°C";
              break;
            case "kelvin":
              convertedTemperature = temperature - 273.15;
              unitSymbol = "°C";
              break;
            default:
              break; 
    }

    document.getElementById("result").innerText = `Converted Temperature:
     ${convertedTemperature.toFixed(2)} ${unitSymbol}`;
  }