require('dotenv').config();
const axios = require('axios');

/**
 * 2. Menampilkan ramalan cuaca kota Jakarta untuk 5 hari kedepan

1. Silakan gunakan API yang disediakan http://openweathermap.org
2. Tolong tampilkan output berupa ramalan cuaca kota Jakarta untuk 5 hari ke depan
3. Yang ditampilkan hanya 1 suhu per hari
4. Soal ini tidak membutuhkan akun berbayar.
 */





const API_KEY = process.env.API_KEY
const CITY = 'Jakarta';
const DAYS = 5;



async function fetchWeatherForecast() {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${CITY}&cnt=${DAYS * 8}&appid=${API_KEY}&units=metric`);
        
        const forecasts = response.data.list;
        const weatherForecast = [];

        for (let i = 0; i < forecasts.length; i += 8) { 
            const forecast = forecasts[i];
            const date = new Date(forecast.dt * 1000); 

  
            const formattedDate = date.toLocaleDateString('en-GB', {
                weekday: 'short',
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }).replace(/,/g, '');

            const temperature = forecast.main.temp.toFixed(2);

            weatherForecast.push(`${formattedDate}: ${temperature}°C`);
        }

        return weatherForecast;
    } catch (error) {
        console.error('Error fetching >>>>', error);
        return [];
    }
}

async function displayWeatherForecast() {
    const weatherForecast = await fetchWeatherForecast();
    console.log('Weather forecast:');
    weatherForecast.forEach(forecast => {
        console.log(forecast);
    });
}

displayWeatherForecast();
