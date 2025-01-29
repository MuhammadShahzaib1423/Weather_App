import React, { Component } from "react";
import WeatherItem from "./weatheritem";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";

export class MainWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
    };
  }

  async componentDidMount() {
    let url =
      "https://api.weatherapi.com/v1/forecast.json?key=c0eaceea47fe42999d7101810252801&q=Pakistan&days=7&aqi=no&alerts=no";
    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData);
    this.setState({ weather: parsedData });
  }

  render() {
    const { weather } = this.state;
  
    if (!weather.location || !weather.current || !weather.forecast) {
      return <div className="loading">Loading...</div>;
    }
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-1 col-12"> 
    
     
        <div className="current-weather">
          <h1>Current Weather in {weather.location.name}</h1>
          <WeatherItem
            Name={weather.location.name}
            region={weather.location.region}
            temp_f={weather.current.temp_f}
            temp_c={weather.current.temp_c}
            humidity={weather.current.humidity}
            forecast={weather.current.condition.text}
            icon={weather.current.condition.icon}
          />
        </div>
  
       
        <div className="container">
          <h2 className="text-center">7-Day Forecast</h2>
          <div className="row justify-content-center">
            {weather.forecast.forecastday.map((day, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
                <div className="weather-item">
                  <WeatherItem
                    Name={weather.location.name}
                
                    temp_f={day.day.maxtemp_f}
                    temp_c={day.day.maxtemp_c}
                    humidity={day.day.avghumidity}
                    forecast={day.day.condition.text}
                    icon={day.day.condition.icon}
                    date={day.date}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      </div>

    );
  }
  
  }


export default MainWeather;
