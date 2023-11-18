import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera} from '@fortawesome/free-solid-svg-icons';

const Perfil = () => { 
  

  const cardGeneral = {
   // background: "#f4f4f9",
    paddingLeft: "0px",

  }

  const ladoDerecho = {
   // backgroundColor: "#f4f4f9",
    padding: '20px',
    boxShadow: '0 0 rgba(0, 0, 0)',

  }


  const quePiensas = {
    backgroundColor: "#fff",
    padding: '20px',
    borderRadius:"5px",
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
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
    width:"100%",
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
                         
            <div className='col-8'  style={buscadorContainer}>
              <input  className='form-control' style={{width : '100%'}} type="text" placeholder="Qué estás pensando?" />  
              <div className='col-1' >
                <button style = {{textDecoration:"none", background: "none", border: "none", paddingLeft: "13px"}}>
                  <FontAwesomeIcon icon={faCamera} style={iconoCamara} /> 
                </button> 
              </div>    
            </div> 
          </div> 
        </div> 
      </div>
  );
};

export default Perfil;
