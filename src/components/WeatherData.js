import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import moment from "moment/min/moment-with-locales"

// moment().format('LLL')
function WeatherData() {
  const { weather, city, country } = useContext(WeatherContext);

  const date = new Date();

  return (
    <div>
      <div>
        <h3 className="date">{`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}</h3>
      </div>
          {city && <h2>{city}/{country}</h2>}
      <div>
        {weather.map((weat, i) => (
          <div key={i} className="weather">
            <div className="box">
              <p className="bold">Tarih|Saat</p>
              {/* <p>{new Date(weat.dt*1000).toLocaleDateString()}-{new Date(weat.dt*1000).toLocaleTimeString()}</p> */}
              {/* <p className="italic">{weat.dt_txt}</p> */}
              <p className="italic">{moment(weat.dt_txt).locale("tr").format('LLL')}</p>
            </div>

            <div className="box">
              <p className="bold">Sıcaklık (°C)</p>
              <p>{weat.main.temp}</p>
            </div>

            <div className="box2">
              <p className="bold">Hissedilen Sıcaklık (°C)</p>
              <p>{weat.main.feels_like}</p>
            </div>

            <div className="box2">
              <p className="bold">Min.|Max. Sıcaklık (°C)</p>
              <p>
                {weat.main.temp_min} | {weat.main.temp_max}
              </p>
            </div>

            <div className="box2">
              <p className="bold">Basınç (hPa)</p>
              <p>{weat.main.pressure}</p>
            </div>

            <div className="box">
              <p className="bold">Nem (%)</p>
              <p>{weat.main.humidity}</p>
            </div>

            <div className="box">
              <p className="bold">Hava Durumu</p>
              <p>{`${weat.weather[0].description}`.toUpperCase()}</p>
            </div>
            <div className="box">
              <img
                src={`http://openweathermap.org/img/wn/${weat.weather[0].icon}@2x.png`}
                alt="weather"
              />
            </div>

            {/* <div className="box">
            <p className="bold">Rüzgar Yönü</p>
              <p className="arrow" style={{transform: `rotate(${weat.wind.deg - 2*(weat.wind.deg)}deg)`}}>&#8594;</p>
            </div> */}

            <div className="box2">
            <p className="bold">Rüzgar Yönü</p>
              <img src="https://www.pngmagic.com/product_images/arrow-png-icon.png" className="arrow"
              alt="wind" 
              style={{transform: `rotate(${weat.wind.deg - 2*(weat.wind.deg)}deg)` , width:"50px"}}/>
            </div>

            <div className="box2">
            <p className="bold">Rüzgar Hızı (km/sa)</p>
              <p>{(weat.wind.speed*3.6).toFixed(1)}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherData;
