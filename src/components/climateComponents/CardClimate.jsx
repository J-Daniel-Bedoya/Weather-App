import React from 'react';
import '../../assets/css/styles.css'

const CardClimate = ({
  // estas son las importaciones de los hooks
  city, 
  countryDefault,
  imgClimate, 
  description,  
  temp, 
  celciour1, 
  fahrenheit1,
  setTemp,
  speed,
  clouds,
  cloudsPorcentage,
  hPa,
  imgCountry,
  countryOfficial,
  capital,
  continent,
}) => {



// console.log(countryOfficial)
  return (
    <div className="climate">
      {/* esta es la card que contiene la información del clima */}
       <div>
        <h2 className='direction'>{capital}, <b>{city}</b></h2>
        <img className='icon-climate' src={`https://openweathermap.org/img/wn/${imgClimate}.png`}></img>
        <p className='climate-description'> 
          <b className='climate-description_grados'>{temp ? `${celciour1} °C` : `${fahrenheit1} °F`}</b>
          <b>{description} </b>
        </p>
        <img className='imgCountry' src={imgCountry} alt="" />

        <div id='infoCountries' className='infoCountries' >
          <h1 id='nameOfficial' className='nameOfficial'><b>Official Name: </b>{countryOfficial}</h1> 
          <p id='namaCapital' className='namaCapital'><b>Capital: </b>{capital}</p>
          <p id='subRegion' className='subRegion'><b>Continent: </b>{continent}</p>
        </div>

        <div className='climate-Meteorological-Conditions'>
          <p>
            <i className="fa-solid fa-wind"></i>
            <b> </b>
            <b>Wind speed: </b>
            {speed} m/s
          </p>
          <p>
            <i className="fa-solid fa-smog"></i>
            <b> </b>
            <b>{clouds}: </b>
            {cloudsPorcentage}%
          </p>
          <p>
            <i className="fa-solid fa-earth-asia"></i>
            <b> </b>
            <b>Pressure: </b>
            {hPa} hPa
          </p>

        </div>
        <button className='btn-grados' onClick={() => setTemp(!temp)}>{temp ? "Fahrenheit" : "Celcious"}</button>
      </div> 
    </div>
  );
};

export default CardClimate;