import React, { useState } from "react";
import { WeatherContainer, InputBox, WeatherInfo } from './Weather.style'
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '52fac0087bc717f98db90dab5431896d';

  const searchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
      const { name, main, weather } = response.data;
      const temperature = convertToCelsius(main.temp);

      setWeatherData({ name, temperature, weather: weather[0].main });

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const convertToCelsius = (kelvin) => {
    return `${Math.round((kelvin - 273.15) * 10) / 10}°C`;
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
        searchWeather(location);
    }
  };

  const handleChange = (e) => {
    setLocation(e.target.value);

    if (e.target.value === '') {
        setWeatherData(null);
      }
  };

  return (
    <WeatherContainer>
      <InputBox
        type="text"
        placeholder="도시를 입력하세요"
        value={location}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {weatherData && (
        <WeatherInfo>
          <div className="city">{weatherData.name}</div>
          <div className="temperature">{weatherData.temperature}</div>
          <div className="weatherState">{weatherData.weather}</div>
        </WeatherInfo>
      )}
    </WeatherContainer>
  );
};

export default Weather;