import React, { useEffect, useState } from 'react';
import '../../assets/css/styles.css'

const NavarSide = ({addCountries}) => {


  return (
    <div className='navar-side'>
      {/* este es el nav para guardar resultados de búsqueda */}
      <h1>{addCountries}</h1>
    </div>
  );
};

export default NavarSide;