import logo from '../../assets/video/img-logo.jpg'
import '../../assets/css/styles.css'


const NavClimate = ({appiCountry, guardar}) => {
  

  return (
    <div className='content-nav'>
      {/* este es el nav principal de la página */}
      <nav className='nav'>
        <img className='icon' src={logo} alt="" />
        <h2 className='tittle'>Weather Response</h2>
        <div className='search'>
          <input 
            id='countrySearch' 
            type="search" 
            name='countrySearch' 
            placeholder='Copy country or city' 
            autoComplete='off' 
            onChange={appiCountry}
            />
          <button 
            className='btn-search' 
            onClick={guardar}>

            Guardar
          </button>  
        </div>     
      </nav>
    </div>
  );
};

export default NavClimate;