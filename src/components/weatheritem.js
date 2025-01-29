import React from "react";

const WeatherItem = ({ Name, temp_f, temp_c, humidity, forecast, icon, date }) => {
  return (
    <div className="weather-item-content">
      {date && <h3>{new Date(date).toLocaleDateString()}</h3>}
      <h3>{Name}</h3>
      <img src={icon} alt={forecast} />
      <p>{forecast}</p>
      <p>Temp: {temp_c}°C / {temp_f}°F</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

export default WeatherItem;

