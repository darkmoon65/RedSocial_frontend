import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart , } from '@fortawesome/free-solid-svg-icons';
import Publish from './Publish';
import Post from './Post';


const Perfil = () => { 
 

  const portada = {
    width : "100%",
    height : "100%",
    cursor: "pointer",     
  }
  const fotoPerfil = {
    margin: "10px",
    width : "30%",
    borderRadius: "50%",
    marginRight: "10px",
  }
  const fondo = {
    background : " #00307a ",
    width:"100%",
    height:"20vh",  
    alignItems: "center", 
  }

  const fondo2 = {
    background: "#f4f4f9",
    width: "100%",
    display: "flex",
 //   justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "5%",
    
  }


  const fondo3 = {
    display: "flex",
    flex:1,
    background: "#f4f4f9",
    width:"100%",
    height:"10vh",  
    alignItems: "center", 
  }


  const fondo4 = {
    background: "#f4f4f9",
    width:"100%",
    height:"15vh",  
    alignItems: "center", 
  }

  const fondo5 = {
    background: "#f4f4f9",
    width:"100%",
    height:"30vh",  
    alignItems: "center", 
  }

  const textoContainer = {
    display: "flex",
    alignItems: "center",
    color: "#000",
    paddingLeft: "50px",
    position: "relative",
    top: -100,
    left: 0,
  }

  const informacionContainer = {
    flex: 1,  
    display: "flex",
    justifyContent: "center", 
    width : "100%",
    
  }
 

  const informacionTexto = {
    marginLeft: "1px",  
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize:"20px",
    color: "#000"
  }
 

  const nombreUsuario = {
    marginLeft: "1px",  
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize:"30px"
  };

  const amigosTexto = {
    color: "#000",
  };



  const informacionAmigos = {
    marginLeft: "1px",  
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#000"
  };
 

  const textoSoltero= {
    marginLeft: "1px",  
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize:"15px",
    color: "#000"
  }

  
  const textoDetalles = {
    display: "flex",
    alignItems: "center",
    color: "#000",
  }


  const iconoDetalles = {
    margin: "10px",
    borderRadius: "50%",
    marginRight: "10px",
    color: "gray",

  }
  

  const cardGeneral = {
    padding:"45px",
    background: "#f4f4f9",

  }

  const contenidoPubDetaAmig= {
    paddingBottom: "150px",
    position: "relative",
    top: -100,
    left: 0,
  }
    
  
 

  return (
    <div  style={cardGeneral}>
      <div style={fondo}> 
            <img href="#" style={portada} src={process.env.PUBLIC_URL + '/imagenes/portada.jpg'} alt="portada" />
      </div>

      <div  style={fondo2}> 
        <div className='col-6 justify-content-start ' style={textoContainer}>
          <img href="#"   src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="fotoperfil"  style={fotoPerfil} />  
          <div className='col-md-4 p-0'>
                <span style={nombreUsuario}>Smith Jems</span> 
                <div  style={amigosTexto}>
                  <span >170 Amigos</span>
                </div> 
              </div>  
        </div>
      </div>
       
      <div style = {contenidoPubDetaAmig} className="container">
        <div className='row'>
          <div className="col-md-6">
            <div className='row' style={fondo3}> 
              <div className='' style={informacionContainer} >
                <span style={informacionTexto}>Publicaciones</span>
              </div>

              <div className=''  style={informacionContainer}>
                <span style={informacionTexto}>Información</span>
              </div>
              
              <div className=''  style={informacionContainer}>
                <span style={informacionTexto}>Amigos</span>
              </div>
                    
              <div className=''  style={informacionContainer}>
                <span style={informacionTexto}>Fotos</span>
              </div>
            </div>

            <div className='row' style={fondo4}> 
              <div className='justify-content-start ' style={informacionContainer} >
                <span style={informacionTexto}>Detalles</span>
      
              </div>
                      
              
              <div   style={textoDetalles}>
                <FontAwesomeIcon icon={faHeart} style={iconoDetalles} />  
                <div >
                  <span style={textoSoltero}>Soltero</span>
                </div>
              </div>
              <div   style={textoDetalles}>
                <FontAwesomeIcon icon={faHome} style={iconoDetalles} />  
                <div >
                  <span style={textoSoltero}>Vivo en Arequipa</span>
                </div>
              </div>
              
            </div>

            <div className='row' style={fondo5}> 
            <div  style={informacionAmigos}>
              <span style={informacionTexto}>Amigos</span>
            </div>

            <div className='col-12 d-flex justify-content-between'>
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className='d-flex flex-column align-items-center'>
                  <img
                    src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}
                    alt={`Imagen ${index}`}
                    className='rounded-circle'
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  <span style={{ marginTop: '5px', fontSize: '14px' }}>Amigo {index}</span>
                </div>
              ))}
            </div>


            <div className='col-12 d-flex justify-content-between'>
              {[6, 7, 8, 9, 10].map((index) => (
                <div key={index} className='d-flex flex-column align-items-center'>
                  <img
                    src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}
                    alt={`Imagen ${index}`}
                    className='rounded-circle'
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  <span style={{ marginTop: '5px', fontSize: '14px' }}>Amigo {index}</span>
                </div>
              ))}
            </div>

          </div>   
          </div> 
          <div className='col-md-6'>
            <Publish></Publish>  
            <Post></Post>   
          </div>
        </div>
      </div>

 

    </div>
  );
};

export default Perfil;
