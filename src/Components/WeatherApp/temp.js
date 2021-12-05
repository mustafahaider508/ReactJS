import React, { useState, useEffect } from "react";
import Weathercard from "./Weathercard";
import "./temp.css";

const Temp = () => {

    const [input,setinput] = useState("Peshawar");
    const [tempInfo, setTempInfo] = useState({});

    const WeatherInfo = async() => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=dccc147924a249b664ad69142ad0396b`
            let res = await fetch(url);
            let data = await res.json();
            // console.log(data);

        
            const {temp,pressure,humidity} = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;
                
            const newData = {
                country,temp,pressure,humidity,weathermood,name,speed,sunset
            }
            setTempInfo(newData);
            
        } catch (error) {
            
        }

    }
    useEffect(() => {
        WeatherInfo();
      }, []);

  

  

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={input}
            onChange={(e) => setinput(e.target.value)}
        
        
            
          />

          <button
            className="searchButton"
            type="button"
            onClick={WeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weathercard {...tempInfo} />
    </>
  );
};

export default Temp;