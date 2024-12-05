# Weather Monitoring Web App

This is a simple weather monitoring web application where users can enter a city name and get real-time weather data, such as temperature, humidity, and atmospheric pressure. The data is fetched using the OpenWeatherMap API.

## Features

- **City Search**: Users can input a city name to get weather details.
- **Real-time Weather**: The app fetches the current temperature (°C), humidity, and atmospheric pressure of the selected city.
- **Error Handling**: If the city is invalid or the API request fails, an error message is displayed.

## Technologies Used

- **HTML**: Structure and layout of the web page.
- **CSS**: Styling for the app interface.
- **JavaScript**: Used for handling user input, making API requests, and dynamically displaying the data.
- **OpenWeatherMap API**: Provides live weather data.

## How It Works

1. **Enter a City**: Type a city name in the input field and click on the "Get Weather" button.
2. **Fetch Weather Data**: The app sends a request to the OpenWeatherMap API with the city name and fetches the weather details.
3. **Display Weather Info**: The app shows the temperature, humidity, and pressure for the city.
4. **Error Handling**: If the city is not found or there’s an issue with the API request, an error message is displayed.

## Setup Instructions

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/weather-monitoring-web-app.git
