import React, { useState } from "react";
import axios from "axios";

import WeatherContext from "../context/WeatherContext";

import Header from "./Header";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Error from "./Error";

function Main() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState();
  const [error, setError] = useState();
  const [country, setCountry] = useState();

  const getData = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;

    const apiKey = "bb827f231c40891c31d4a0a9b3da5ad8";  //.env dosyasına bilerek konulmadı
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric&lang=tr`;

    try{
      const request = axios.get(url);
      const response = await request;
      setCity(response.data.city.name);
      setCountry(response.data.city.country);
      setError();

      let a=[]
      for(let i=0 ; i<9;i+=1){
        a.push(response.data.list[i])
      }
      setWeather(a)

    } catch(e){
      if (!location) {
        setError("Lütfen Bir Şehir İsmi Giriniz...");
        return setWeather();
      }
      if (e) {
        setError("Böyle bir şehir bulunmamakta...");
        return setWeather();
      }
    }
  };
  // console.log(city)
  // console.log(weather)

  const values = {
    getData,
    weather,
    city,
    error,
    country,
  };

  return (
    <div>
      <Header />
      <WeatherContext.Provider value={values}>
        
        <WeatherSearch />

        {weather && <WeatherData />}

        {error && <Error error={error} />}

      </WeatherContext.Provider>
    </div>
  );
}

export default Main;
