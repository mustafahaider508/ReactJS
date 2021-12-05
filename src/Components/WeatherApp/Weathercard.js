import React, { useState,useEffect } from "react";

const Weathercard = ({country,temp,pressure,humidity,weathermood,name,speed,sunset}) => {
    const [weatherIcon,setweatherIcon] = useState("");
    
    useEffect(() => {
        if (weathermood) {
          switch (weathermood) {
            case "Clouds":
                setweatherIcon("wi-day-cloudy");
              break;
            case "Haze":
                setweatherIcon("wi-fog");
              break;
            case "Clear":
                setweatherIcon("wi-day-sunny");
              break;
            case "Mist":
                setweatherIcon("wi-dust");
              break;
    
            default:
                setweatherIcon("wi-day-sunny");
              break;
          }
        }
      }, [weathermood]);


  

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherIcon}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i style={{color:"yellow"}} className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i style={{color:"lightgreen"}} className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
              {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i style={{color:"lightblue"}} className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
             {pressure}<br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i style={{color:"grey"}} className={"wi wi-strong-wind"}></i>
              </p>
              <p  className="extra-info-leftside">
              {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;