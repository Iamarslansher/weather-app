import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

import { FaSearchengin } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiCelsiusFill } from "react-icons/ri";
import { LuWind } from "react-icons/lu";
import { FaSmog } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

function Weather() {
  const searchArray = [];
  const [value, setValue] = useState("");
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("");
  const [wind, setWind] = useState("");
  const [condition, setCondition] = useState("");
  const [humidity, setHumidity] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();
  let api_key = "ca812ddc98859cfe6ff214335f64fba2";

  const getWeather = async () => {
    try {
      searchArray.push({ value: value });
      localStorage.setItem("userHistroy", JSON.stringify(searchArray));
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=Matric&appid=${api_key}`;
      let response = await fetch(url);
      let data = await response.json();
      const temprature = document.getElementsByClassName("weather-tem");
      const location = document.getElementsByClassName("location");
      const wind = document.getElementsByClassName("wind");
      const condition = document.getElementsByClassName("condition");
      const humidity = document.getElementsByClassName("humidity");
      const country = document.getElementsByClassName("country");
      setWeather((temprature[0].innerHTML = data.main.temp));
      setLocation((location[0].innerHTML = data.name));
      setWind((wind[0].innerHTML = data.wind.speed + "km/h"));
      setCondition((condition[0].innerHTML = data.weather[0].main));
      setHumidity((humidity[0].innerHTML = data.main.humidity));
      setCountry((country[0].innerHTML = data.sys.country));

      setValue("");
    } catch (e) {
      alert("Not Found this City/Country");
      searchArray.push(value);
      setValue("");
    }
  };

  return (
    <div className="container">
      <div className="main-contant">
        <div>
          <h1 className="heading">Weather App</h1>
          <div className="inpuField">
            <input
              className="input"
              type="text"
              placeholder="Search City"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              onClick={() => getWeather()}
              className="btn searchBtn"
              title="Search"
            >
              <FaSearchengin />
            </button>
            <button
              onClick={() => navigate("/histroy")}
              className="btn histroyBtn"
              title="Histroy"
            >
              <HiDotsVertical />
            </button>
          </div>
          <div>
            <div className="img-div">
              <img
                src="https://clipart-library.com/images_k/transparent-rainbow-gif/transparent-rainbow-gif-15.png"
                alt=""
                className="weatherImg"
              />
            </div>
            <div className="temp">
              <h1>
                <span>temprature</span>
                <br />
                <span className="weather-tem">{weather}</span>
                <span>
                  <RiCelsiusFill />
                </span>
              </h1>
            </div>
            <div className="loc">
              <span className="location">{location}</span>/
              <span className="country">{country}</span>
            </div>
            <div className="info-div">
              <div>
                <span className="wind">{wind}</span>
                <span>
                  <LuWind />
                </span>
              </div>
              <div>
                <span className="condition">{condition}</span>
                <span>
                  <FaSmog />
                </span>
              </div>
              <div>
                <span className="humidity">{humidity}</span>
                <span>
                  <WiHumidity />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
