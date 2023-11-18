import React, {useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinTears, faHeart, faThumbsUp, faComment, faShare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Perfil = () => { 
  

  const cardGeneral = {
      paddingLeft:"0px"

  }

  const ladoDerecho = {
    padding: '20px',
    boxShadow: '0 0 rgba(0, 0, 0)',

  }


  const escribe = {
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
 


  const fotoPerfil = {
    width : "100%",
    borderRadius: "50%",
  }

  const textoContainer = {
//    display: "flex",
    color: "#000",
  }
 


  const nombreUsuario = {
    marginLeft: "1px",  
    alignItems: "center",
    fontWeight: "bold",
    fontSize:"15px", 
    color:"#00307a",
  };

  const amigosTexto = {
//    paddingTop:"50px",
    color: "#A2A2A2",
    fontSize:"12px"

  };


  const informacionContainer = {
    flex: 1,  
    display: "flex",
    justifyContent: "center", 
    width : "100%",
  }
 

  const imagenPost = {
    width : "100%",
    height : "100%",
    cursor: "pointer",  
  }
  const iconoDivierte = {
    color: "#FFC107",
    fontSize: "25px",
  }
   
  const iconoEncanta = {
    color: "#e74c3c",
    fontSize: "25px",
  }
  
  const iconoLike = {
    color: "#0074cc",
    fontSize: "25px",
  }

  const iconoComentar = {
    color: "#00FF00",
    fontSize: "25px",
  }

  const iconoShare = {
    color: "#3498db",
    fontSize: "25px",
  }


  const publicacionTexto = {
    marginLeft: "1px",  
    display: "flex",
    alignItems: "center",
    fontSize:"15px",
    color: "gray"
  }


  const [hovered, setHovered] = useState(false);

  const iconoSend = {
    color: hovered ? '#00bcd4' : 'gray',  
    transition: 'color 0.3s',  
  };

  return (
    <div  style={cardGeneral}>
        <div className="col-md-11" style ={ladoDerecho}> 
          
          <div className='row'  style ={escribe}>


            {/* NOMBRE USUARIO */} 
            <div className='row'   > 
              <div className='col-md-1 p-0' style={textoContainer}>
                <img href="#"   src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="fotoperfil"  style={fotoPerfil} />  
              </div>
              
              <div className='col-md-4 p-0'>
                <span style={nombreUsuario}>Smith Jems</span> 
                <div  style={amigosTexto}>
                  <span >17 Nov</span>
                </div> 
              </div>    
            </div>  


            {/**COMENTARIO PUBLICACI´ON*/}  
            <div  >
                <span style={publicacionTexto}>Finalizando los parciales *-*</span>
              </div>

            {/**FOTO PUBLICACI´ON*/}  
            <div>
            <img href="#" style={imagenPost} src={process.env.PUBLIC_URL + '/imagenes/portada.jpg'} alt="portada" />

            </div> 

            {/*REACCIONES */}
            <div className='row'  style ={{padding:"10px"}}> 
              <div className='col-4' style={informacionContainer} >
                <button style = {{background:"none", textDecoration:"none", border: "none", display: "flex"}}>   
                  <FontAwesomeIcon icon={faGrinTears} style={iconoDivierte} />
                  <span style={publicacionTexto}>21</span>
                </button> 
              </div>

              <div className='col-6'  style={informacionContainer}>
                <button style = {{background:"none", textDecoration:"none", border: "none", display: "flex"}}>   
                  <FontAwesomeIcon icon={faHeart} style={iconoEncanta} />
                  <span style={publicacionTexto}>15</span>
                </button> 
              </div>
              
              <div className='col-6'  style={informacionContainer}>
                <button style = {{background:"none", textDecoration:"none", border: "none", display: "flex"}}>   
                  <FontAwesomeIcon icon={faThumbsUp} style={iconoLike} />
                  <span style={publicacionTexto}>10</span>
                </button> 
              </div>
                    
              <div className='col-6'  style={informacionContainer}>
              <button style = {{background:"none", textDecoration:"none", border: "none", display: "flex"}}>   
                <FontAwesomeIcon icon={faComment} style={iconoComentar} />
                <span style={publicacionTexto}>1</span>
                </button>
              </div>

              <div className='col-6'  style={informacionContainer}>
                <button style = {{background:"none", textDecoration:"none", border: "none", display: "flex"}}>   
                  <FontAwesomeIcon icon={faShare} style={iconoShare} />
                  <span style={publicacionTexto}>Compartir</span>
                </button> 
              </div>
              
            </div>

            {/* ESCRIBE */}

            <div className='col-1' >
              <img href="#" style={iconoPerfil} src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="perfil" />
            </div>
                         
            <div className='col-8'  style={buscadorContainer}>
              <input  className='form-control' style={{width : '100%'}} type="text" placeholder="Escribe un comentario" />      
              <button style = {{background:"none", textDecoration:"none", border: "none"}}>
                <FontAwesomeIcon icon={faPaperPlane} style={iconoSend} 
                    onClick={() => {} /*  lógica clic */}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}/>
              </button>
             
            </div>
 
          </div>

          
        </div>

      </div>



  );
};

export default Perfil;
