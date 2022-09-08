// ------------- imports --------------

/*Herramientas de react */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
        /* Importación de videos */
import rain from '../../assets/video/rain10seg.mp4';
import foggy from '../../assets/video/foggy2.mp4';
import sunny from '../../assets/video/sunny2.mp4';
import atmosphere from '../../assets/video/Aurora.mp4'
import snow from '../../assets/video/Snow.mp4'
import logo from '../../assets/video/img-logo.jpg'
        /* Importación de componentes */
import CardClimate from './CardClimate';
import NavClimate from './NavClimate';
import NavarSide from './NavarSide';
import Clock from './Clock';
import ChargingScreen from './ChargingScreen';
import '../../assets/css/styles.css'

const ClimateBackground = () => {
  const [weather, setWeather] = useState({})
  const [temp, setTemp] = useState(true)
  const [loading, setLoading] = useState(true)
  const [AppiCountry, setAppiCountry] = useState(0)
  const [Appicountries, setAppiCountries] = useState('')
  const [nav, setNav] = useState('')
  const [save, setSeve] = useState(false)
  const [addCountries, setAddCountries] = useState(
    window.localStorage.getItem("country")
  )
  
  useEffect(() => {
    // UseEffect y el cosumo de la API
    navigator.geolocation.getCurrentPosition(success)
    function success(pos) {
      const crd = pos.coords; 
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);

      appiConsumption(crd.latitude, crd.longitude)
    }
  }, [])

  const appiCountry = (e) => {
    const text = e.target.value
    setNav(text)
    axios.get(`https://api.mymappi.com/v2/geocoding/direct?apikey=c829b7f1-0151-42ab-83b8-a7d1c7528d81&q=${nav}`)
    .then(res => {
      console.log(res.data.data[0])
      setAppiCountry(res.data.data[0])
    })
      appiConsumption(AppiCountry.lat, AppiCountry.lon)
      appicountries(countryDefault)
    }
    
  const guardar = () => {
    window.localStorage.setItem("country", nav)
    setAddCountries(window.localStorage.getItem("country"))
    setSeve(true)
    alert(`Se a agregado ${nav}`)
  }

  const appiConsumption = (latitude, longitude) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=feff2128f37aca8ea2748f52dd0e4c46`)
    .then(res => {
      console.log(res.data)
      setWeather(res.data)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => setLoading(false))
  }

    const appicountries = () => {
      let na = nav.slice(0,2)
      axios.get(`https://restcountries.com/v2/alpha/${na}`)
      .then(res => {
        console.log(res.data)
        setAppiCountries(res.data)
      })
    }
  
  // funcion para determinar el fondo de la Página
  const weatherAssistance = () => {
    if (weather.weather?.[0].id >= 200 && weather.weather?.[0].id <= 531){
      return  rain
    }else if (weather.weather?.[0].id >= 600 && weather.weather?.[0].id <= 650) {
      return snow
    }else if (weather.weather?.[0].id >= 700 && weather.weather?.[0].id <= 750) {
      return atmosphere
    }else if (weather.weather?.[0].id === 800){
      return sunny
    }else if (weather.weather?.[0].id >= 801 && weather.weather?.[0].id <= 804){
      return foggy
    }else{
      return "Este clima no existe en nuestros registros"
    }
  }

    /* Variables para los hooks */
  // Calculando celcious y Fahrenheith 
  const celcious = weather.main?.temp-273.15
  const celcious1 = celcious.toFixed(2)
  const fahrenheit = (weather.main?.temp-273.15)*9/5+32
  const fahrenheit1 = fahrenheit.toFixed(2)
  // Consumo de la API 
  const city = Appicountries.name
  const countryDefault = weather.sys?.country
  const capital = Appicountries.capital
  const continent = Appicountries.subregion
  const countryOfficial = Appicountries.altSpellings?.[1]
  const imgCountry = Appicountries.flag
  const imgClimate = weather.weather?.[0].icon
  const description = weather.weather?.[0].description
  const speed = weather.wind?.speed
  const clouds = weather.weather?.[0].main
  const cloudsPorcentage = weather.clouds?.all
  const hPa = weather.main?.pressure


  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  
  return (
    <div>
      {/* div para el fondo de la Página */}
      {
        loading ? (<ChargingScreen />) : (
          <>
            <div className="backgroundVideo">
              <ReactPlayer 
                url={weatherAssistance ()}
                playing
                muted
                loop
                width={"100%"}
                height={"auto"}
              />
            </div>
              {/* componente del nav */}
              <NavClimate appiCountry = {appiCountry} guardar = {guardar}/>
              
              {/* componente de la información del clima */}
            <div className="content">
              <div className='font'>
                <CardClimate 
                  city = {city}
                  countryDefault = {countryDefault}
                  imgClimate = {imgClimate}
                  description = {description}
                  temp = {temp}
                  celciour1 = {celcious1}
                  fahrenheit1 = {fahrenheit1}
                  setTemp = {setTemp}
                  speed = {speed}
                  clouds = {clouds}
                  cloudsPorcentage = {cloudsPorcentage}
                  hPa = {hPa}
                  imgCountry = {imgCountry}
                  countryOfficial = {countryOfficial}
                  capital = {capital}
                  continent = {continent}
                />
                <Clock time = {time} />
              </div>
                
            </div>
            {/* componente para guardar los resultados de búsqueda */}
            {(!!save) && <NavarSide addCountries = {addCountries}/>}
          </>
        )
      }
    </div>
  );
};

export default ClimateBackground;