import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
function App() {


  return (
    <form className='contenedor_general'>
      <h1 className='title tipo_letra'>Discover what's out there.</h1>
      <section className='buscador_y_btn'>
        <div className='inputext_location_icon'>
          <div className='icon'>
            <FontAwesomeIcon icon={faLocationDot}/>
          </div>
          <input type="text" placeholder='Where do you want to go?' className='input_text tipo_letra'></input>
        </div>
        <button className='btn_search tipo_letra'>Search</button>
      </section>
    </form>
  )
}

export default App
