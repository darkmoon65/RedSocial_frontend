import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faImage, faPhotoFilm, faVideoCamera} from '@fortawesome/free-solid-svg-icons';
import ModalPublish from '../components/ModalPublish';

const Perfil = () => { 
  

  const cardGeneral = {
   // background: "#f4f4f9",
    paddingLeft: "0px",
    width: "100%"

  }

  const ladoDerecho = {
   // backgroundColor: "#f4f4f9" si modifico esto se mueve todo el nacho del publish ,
    boxShadow: '0 0 rgba(0, 0, 0)',
    width: "104%"
  }


  const quePiensas = {
    backgroundColor: "#fff",
    padding: '20px',
    borderRadius:"5px",
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: "100%"
  }
  
  
  
  const buscadorContainer = {
    flex: 1,  
    display: "flex",
    justifyContent: "center", 
    width : "100%",
  }


  const iconoPerfil = {
    width:"45px",
    borderRadius: "50%",
  }


  const iconoCamara = {
    color: "green",
    fontSize: "25px",
  }
   

  return (
    <div  style={cardGeneral}>
        <div className="col-md-11" style ={ladoDerecho}>

          <div className='row'  style ={quePiensas}>
            <div className='col-1' >
              <img href="#" style={iconoPerfil} src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="perfil" />
            </div>
                         
            <div className='col-11'  style={buscadorContainer}>
              <ModalPublish></ModalPublish>
 
              <div className='col-1' >
                <button style = {{textDecoration:"none", background: "none", border: "none", paddingLeft: "13px"}}>
                  <FontAwesomeIcon icon={faImage} style={iconoCamara} /> 
                </button> 
              </div>    
            </div> 
          </div> 
        </div> 
      </div>
  );
};

export default Perfil;
