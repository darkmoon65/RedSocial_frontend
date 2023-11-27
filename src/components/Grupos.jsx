import Header from './Header';
import Post from '../components/Post';
import Publish from '../components/Publish';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons';


const textoContainer = {
    display: "flex",
    alignItems: "center",
    color: "#000",
  }

const fotoPerfil = {
    width : "100%",
    borderRadius: "50%",
}

const amigosTexto = {
    color: "#000",
    fontSize:"12px"

};

const nombreUsuario = {
    marginLeft: "1px",  
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize:"17px"
  };

  const portada = {
    width : "100%",
    height : "100%",
    cursor: "pointer",     
  } 
  const fondo = {
    background : " #00307a ",
    width:"100%",
    height:"20vh",  
    alignItems: "center", 
  }
const Home = () => {
    
    return ( 
        <div>
            <div style={{height: '100vh', backgroundColor: '#f4f4f9'}}>
            <Header/>
            <div style={fondo}> 
                <img href="#" style={portada} src={process.env.PUBLIC_URL + '/imagenes/portada.jpg'} alt="portada" />
            </div>
            <div class='row text-center pe-5 ps-5 p-2 justify-content-start d-flex'> 
                <div class=' col-6 d-flex align-items-start justify-content-start'>
                <h2> GRUPO DE DERECHO   </h2>

                </div>
                <div class='col-6  d-flex align-items-end justify-content-end'>
                <button className='bg-primary ' style= {{textDecoration:'none', color: 'white', borderRadius: '5px', border:'none', padding: '10px', fontWeight:'bold'}}>
                                        
                                    <FontAwesomeIcon icon={faPlus}  style= {{textDecoration:'none', color: 'white', borderRadius: '5px', border:'none', paddingRight: '15px', }} /> 
UNIRME 
                                    </button>

                </div>
            </div>

            <div className='container-fluid'>
                <div className='row ms-4 me-4'>
                    <div className='col-3'>
                        <div className='card' style={{height: '80vh'}}>
                            <div className='card-body'>
                            <div className='card-header'>
                                Grupos
                            </div>
                           
                            {/* NOMBRE GRUPO */} 
                            <div className='row'   > 
                                <div className='col-2 p-2' style={textoContainer}>
                                    <img href="#"   src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="fotoperfil"  style={fotoPerfil} />  
                                </div>
                                
                                <div className='col-10 p-2'>
                                    <span style={nombreUsuario}>GRUPO SOFTWARE</span> 
                                    <div  style={amigosTexto}>
                                    <span >10 Miembros</span>
                                    </div> 
                                </div>    
                            </div> 
                            {/* NOMBRE GRUPO */} 
                            <div className='row'   > 
                                <div className='col-2 p-2' style={textoContainer}>
                                    <img href="#"   src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="fotoperfil"  style={fotoPerfil} />  
                                </div>
                                
                                <div className='col-10 p-2'>
                                    <span style={nombreUsuario}>GRUPO PYTHONISTAS</span> 
                                    <div  style={amigosTexto}>
                                    <span >10 Miembros</span>
                                    </div> 
                                </div>    
                            </div> 
                            {/* NOMBRE GRUPO */} 
                            <div className='row'   > 
                                <div className='col-2 p-2' style={textoContainer}>
                                    <img href="#"   src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="fotoperfil"  style={fotoPerfil} />  
                                </div>
                                
                                <div className='col-10 p-2'>
                                    <span style={nombreUsuario}>Finales SOfwtare</span> 
                                    <div  style={amigosTexto}>
                                    <span >10 Miembros</span>
                                    </div> 
                                </div>    
                            </div> 
                                <ul className="nav flex-column" style={{ padding: '0' }}> 
                                      
                                    <button className='bg-primary' style= {{textDecoration:'none', color: 'white', borderRadius: '5px', border:'none', padding: '10px', fontWeight:'bold'}}>
                                        
                                    <FontAwesomeIcon icon={faPlus}  style= {{textDecoration:'none', color: 'white', borderRadius: '5px', border:'none', paddingRight: '15px', }} /> 
CREAR GRUPO
                                    </button>

                                     
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 '>
                        
                        <div className='card p-4 m-3' >
                            <div className='card-body' >
                                <Publish></Publish>
                            </div>
                        </div>
                        <div className='card p-4 m-3' styles = {{ backgroundColor: "#f4f4f9",}}>
                            <div className='card-body' >
                            <Post></Post>
                            </div>
                        </div>
                        <div className='card p-4 m-3'>
                            <div className='card-body'>
                            <Post></Post>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='card' style={{height: '80vh'}}>
                            <div className='card-header'>
                                Miembros de la comunidad
                            </div>
                            <div className='card-body'>
                              {/* NOMBRE GRUPO */} 
                            <div className='row'   > 
                                <div className='col-2 p-2' style={textoContainer}>
                                    <img href="#"   src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="fotoperfil"  style={fotoPerfil} />  
                                </div>
                                
                                <div className='col-10 p-2'>
                                    <span style={nombreUsuario}>Juanita SMith</span> 
                                    <div  style={amigosTexto}>
                                    </div> 
                                </div>    
                            </div> 
                            {/* NOMBRE GRUPO */} 
                            <div className='row'   > 
                                <div className='col-2 p-2' style={textoContainer}>
                                    <img href="#"   src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="fotoperfil"  style={fotoPerfil} />  
                                </div>
                                
                                <div className='col-10 p-2'>
                                    <span style={nombreUsuario}>Martin Peraldo</span> 
                                    <div  style={amigosTexto}>
                                    </div> 
                                </div>    
                            </div> 
                            {/* NOMBRE GRUPO */} 
                            <div className='row'   > 
                                <div className='col-2 p-2' style={textoContainer}>
                                    <img href="#"   src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="fotoperfil"  style={fotoPerfil} />  
                                </div>
                                
                                <div className='col-10 p-2'>
                                    <span style={nombreUsuario}>Flor Smith</span> 
                                    <div  style={amigosTexto}>
                                    </div> 
                                </div>    
                            </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>

        </div> 
    )
}

export default Home