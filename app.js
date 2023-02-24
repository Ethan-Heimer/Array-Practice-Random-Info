const weatherDisplay = document.getElementById("weather-display");
const randomInfoDisplay = document.getElementById("random-display");
const button = document.getElementById("random-button");

const weatherInfo = ["Glendale:", "Temp:", "80", "Weather:", "Rain"];

weatherDisplay.textContent = weatherInfo.join("    ");

button.addEventListener("click", ()=>{
    randomInfoDisplay.textContent = weatherInfo.splice(Math.floor(Math.random()*weatherInfo.length), 1)
})
