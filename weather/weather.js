
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let place = document.getElementById("ip").value.trim();
    if (!place) {
        alert("Please enter a city name.");
        return place;
    }
    let key = "bd70342f8ead529e393b61a2f8896909";
    let prom = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${key}`);

    prom
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found or invalid API request.");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let location = data.name;
            document.getElementById("location").textContent = `Location: ${location}`;
            let temp = Math.round(data.main.temp);
            document.getElementById("temperature").textContent = `Temperature: ${temp} °C`;
            let hum = data.main.humidity;
            document.getElementById("hum").textContent = `Humidity: ${hum}%`;
            let pre = data.main.pressure;
            document.getElementById("pre").textContent = `Pressure: ${pre} hPa`;
            console.log(`Temperature: ${temp} °C`);
            console.log(`Humidity: ${hum}%`);
            console.log(`Pressure: ${pre} hPa`);
        })
        .catch((error) => {
            console.error("Error:", error);
            document.getElementById("location").textContent = "Error: City not found.";
            document.getElementById("temperature").textContent = "";
            document.getElementById("hum").textContent = "";
            document.getElementById("pre").textContent = "";
        });
});

