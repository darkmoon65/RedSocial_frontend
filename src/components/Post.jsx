import React, {useEffect, useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinTears, faHeart, faThumbsUp, faComment, faShare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Reacciones from './Reacciones';

const Perfil = (props) => { 
  const [comentarios, setComentarios] = useState([]);
  const [personalComment, setPersonalComment] = useState();

  useEffect(()=> {
    const datos = async ()=> {
      const rpta = await fetch('http://localhost:8000/publicacionComentario/');
      const coment = await rpta.json();
      setComentarios(coment);
      console.log(coment)
    }
    datos();
  },[])

  const cardGeneral = {
      paddingLeft:"0px"

  }

  const ladoDerecho = {
    boxShadow: '0 0 rgba(0, 0, 0)',
    width: "100%"
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


  const [hovere, setHovere] = useState(false);

  const iconoDivierte = {
    fontSize: hovere ? '40px' : '25px',  
    transition: 'color 0.3s', 
    color: hovere ? '#FFC107' : 'yellow',  
  }  
   

  const handleComment = async ( ) => {
    const rpta = await fetch('http://localhost:8000/publicacionComentario/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify ({"usuario": props.userData.id, "fecha": new Date(),  "descripcion":  personalComment, 
                              "publicacion": props.data?.id})
    });

    if(rpta.ok){
      const datos = async ()=> {
        const rpta = await fetch('http://localhost:8000/publicacionComentario/');
        const coment = await rpta.json();
        setComentarios(coment);
        console.log(coment)
      }
      datos();
      setPersonalComment('');
    }

  }
  const handleChangeComment = (e) => {
    setPersonalComment(e.target.value)
  }

  return (
    <div  style={cardGeneral}>
        <div className="col-md-11" style ={ladoDerecho}> 
          
          <div className='row'  style ={escribe}>


            {/* NOMBRE USUARIO */} 
            <div className='row'   > 
              <div className='col-md-1 p-0' style={textoContainer}>
                <img href="#"   src={process.env.PUBLIC_URL + '/imagenes/generic_user.jpg'} alt="fotoperfil"  style={fotoPerfil} />  
              </div>
              
              <div className='col-md-4 p-0'>
                <span style={nombreUsuario}>{props.userData?.nombre} {props.userData?.apellidos}</span> 
                <div  style={amigosTexto}>
                  <span >{props.data?.fecha}</span>
                </div> 
              </div>    
            </div>  


            {/**COMENTARIO PUBLICACI´ON*/}  
            <div  >
                <span style={publicacionTexto}>{props.data?.descripcion}</span>
              </div>

            {/**FOTO PUBLICACI´ON*/}  
            <div>
              {
                props.file?.tipo == 0 ?  (
                  <img href="#" style={imagenPost} src={'http://localhost:8000/' + props.file?.media} alt="portada" />
                ):
                (
                  <video controls autoplay name="media">
                    <source src={'http://localhost:8000/' + props.file?.media} type="video/mp4" />
                  </video>
                
                )
              }
            

            </div> 

            {/*REACCIONES */}
            <div className='row'  style ={{padding:"10px"}}> 
              <Reacciones ></Reacciones>
            </div>

            {/* ESCRIBE */}

            <div className='col-1' >
              
            {
                props.userData?.imagen_perfil ? (
                <img href="#"   src={'http://localhost:8000/'+ props.userData.imagen_perfil} alt="fotoperfil"  style={iconoPerfil} /> 
                )
              : (<img href="#"   src={process.env.PUBLIC_URL + '/imagenes/generic_user.jpg'} alt="fotoperfil"  style={iconoPerfil} /> )
                    
            } 
            </div>
                         
            <div className='col-8'  style={buscadorContainer}>
              <input  className='form-control' style={{width : '100%'}} type="text" placeholder="Escribe un comentario" onChange={handleChangeComment} />      
              <button onClick={handleComment} style = {{background:"none", textDecoration:"none", border: "none"}}>
                <FontAwesomeIcon icon={faPaperPlane} style={iconoSend} 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}/>
              </button>
             
            </div>
            <div>
              <h5>Comentarios</h5>
              {
                comentarios?.map( (c) => {
                  if(c.publicacion === props.data.id){
                    return(<div>{c.descripcion} </div>)
                  }
                })
              }
            </div>
 
          </div>

          
        </div>

      </div>



  );
};

export default Perfil;
