import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart , faCamera} from '@fortawesome/free-solid-svg-icons';

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
    height: "20vh",
    display: "flex",
 //   justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "5%",
  }


  const fondo3 = {
    display: "flex",
    flex:1,
    background: "#f4f4f9",
    width:"40%",
    height:"10vh",  
    alignItems: "center", 
  }


  const fondo4 = {
    background: "#f4f4f9",
    width:"40%",
    height:"15vh",  
    alignItems: "center", 
  }

  const fondo5 = {
    background: "#f4f4f9",
    width:"40%",
    height:"30vh",  
    alignItems: "center", 
  }

  const textoContainer = {
    display: "flex",
    alignItems: "center",
    color: "#000",
    paddingLeft: "50px",
    paddingBottom: "50px",
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

  const tituloAmigos= {
    display: "flex",
    justifyContent: "center", 
    width: "100%",
  }

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
  }
  

  const cardGeneral = {
    padding:"45px",
    background: "#f4f4f9",

  }

  const ladoDerecho = {
    backgroundColor: "#f4f4f9",
    padding: '20px',
    boxShadow: '0 0 rgba(0, 0, 0)',

  }


  const quePiensas = {
    backgroundColor: "#fff",
    padding: '20px',
    borderRadius:"5px",
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
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
    width:"98px",
    color: "green",
  }
  
  
  const post = {
    width:"100%",
    padding: "10px"
  }
  
  
 

  return (
    <div  style={cardGeneral}>
      <div style={fondo}> 
            <img href="#" style={portada} src={process.env.PUBLIC_URL + '/imagenes/portada.jpg'} alt="portada" />
      </div>

      <div  style={fondo2}> 
        <div className='col-6 justify-content-start ' style={textoContainer}>
          <img href="#"   src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="fotoperfil"  style={fotoPerfil} />  
          <div>
            <span style={nombreUsuario}>Smith Jems</span>
          </div>
          <div  style={amigosTexto}>
            <span >150 amigos</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-md-12">

          <div className='row' style={fondo3}> 
            <div className='col-4' style={informacionContainer} >
              <span style={informacionTexto}>Publicaciones</span>
            </div>

            <div className='col-6'  style={informacionContainer}>
              <span style={informacionTexto}>Información</span>
            </div>
            
            <div className='col-6'  style={informacionContainer}>
              <span style={informacionTexto}>Amigos</span>
            </div>
                  
            <div className='col-6'  style={informacionContainer}>
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

          {/* Sección de redondos y texto */}
          <div className='col-12 d-flex justify-content-between'>
            {/* Primer conjunto de redondos y texto */}
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className='d-flex flex-column align-items-center'>
                {/* Tu redondo aquí */}
                <div className='rounded-circle' style={{ width: '50px', height: '50px', background: 'red' }}></div>
                {/* Tu texto aquí */}
                <span style={{ marginTop: '5px', fontSize: '14px' }}>Texto {index}</span>
              </div>
            ))}
          </div>

          {/* Segundo conjunto de redondos y texto */}
          <div className='col-12 d-flex justify-content-between'>
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className='d-flex flex-column align-items-center'>
                <div className='rounded-circle' style={{ width: '50px', height: '50px', background: 'blue' }}></div>
                <span style={{ marginTop: '5px', fontSize: '14px' }}>Texto {index}</span>
              </div>
            ))}
          </div>
         </div>   
        </div> 

        <div className="col-md-8" style ={ladoDerecho}>

          <div className='row'  style ={quePiensas}>
            <div className='col-1' >
              <img href="#" style={iconoPerfil} src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="perfil" />
            </div>
                         
            <div className='col-8'  style={buscadorContainer}>
              <input  className='form-control' style={{width : '100%'}} type="text" placeholder="Qué estás pensando?" />      
            </div>

            <div className='col-1' >
            <FontAwesomeIcon icon={faCamera} style={iconoCamara} />  
            </div>

          </div>

          <div style={post}>




            <div className='row'  style ={quePiensas}>
              <div className='col-1' >
                <img href="#" style={iconoPerfil} src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="perfil" />
              </div>
                          
              <div className='col-8'  style={buscadorContainer}>
                <input  className='form-control' style={{width : '100%'}} type="text" placeholder="Escribe un comentario" />      
              </div>
  
            </div>

            
          </div>
          
        </div>

      </div>



    </div>
  );
};

export default Perfil;
