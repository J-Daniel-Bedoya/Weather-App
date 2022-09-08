// Este es el componente para el loading de la página
import React from 'react';
import '../../assets/css/styles.css'

// Este componente es simple, pero la magia sucede con CSS
const ChargingScreen = () => {
  return (
    <div className='loading'>
      <div className="lds-ellipsis"> 
        <div></div> 
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ChargingScreen;