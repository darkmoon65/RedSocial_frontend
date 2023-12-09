import Header from '../components/Header'; 
import Post from '../components/Post';
import Publish from '../components/Publish';
import Hamburguer from './Hamburguer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons';
 


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

const Agregar = () => {
    return (
        <div style={{height: '100vh', backgroundColor: '#f4f4f9'}}>
            <Header/>
            <div className='container-fluid'>
                <div className='row ms-4 me-4'>
                    <div className='col-2'> <Hamburguer /></div> 
                    {/* AGREGAR PERSONAS */}

                    <div className='flex col-7 p-4'>
                        <div className='p-2'>
                            <h3>Personas</h3>
                        </div>
                         
                         
                    {/* 1 persona */}

                         <div className="flex">
                            <div className="flex col-6 p-2" style={textoContainer}>
                                <div>
                                    <img
                                    href="#" 
                                    src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}
                                    alt="fotoperfil"
                                    style={fotoPerfil}
                                    />
                                </div>
                                <div className="col-6 p-2">
                                    <span style={nombreUsuario}>Martin Peraldo</span>
                                </div>
                                <div className="col-4 bg-primary rounded">
                                <ul className="nav flex-column">
                                    <button
                                    className="bg-primary"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white',
                                            borderRadius: '5px',
                                            border: 'none',
                                            padding: '10px',
                                            fontWeight: 'bold',
                                        }}
                                        >
                                    <FontAwesomeIcon icon={faUserPlus} style={{ paddingRight: '15px' }} />
                                    Agregar
                                    </button>
                                </ul>
                                </div>
                            </div>
                        </div>
                        
     
                    {/* 1 persona */}

                    <div className="flex">
                            <div className="flex col-6 p-2" style={textoContainer}>
                                <div>
                                    <img
                                    href="#" 
                                    src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}
                                    alt="fotoperfil"
                                    style={fotoPerfil}
                                    />
                                </div>
                                <div className="col-6 p-2">
                                    <span style={nombreUsuario}>Martin Peraldo</span>
                                </div>
                                <div className="col-4 bg-primary rounded">
                                <ul className="nav flex-column">
                                    <button
                                    className="bg-primary"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white',
                                            borderRadius: '5px',
                                            border: 'none',
                                            padding: '10px',
                                            fontWeight: 'bold',
                                        }}
                                        >
                                    <FontAwesomeIcon icon={faUserPlus} style={{ paddingRight: '15px' }} />
                                    Agregar
                                    </button>
                                </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className='p-3'>
                            <h3>Grupos</h3>
                        </div>

                    {/* 1 persona */}

                    <div className="flex">
                            <div className="flex col-6 p-2" style={textoContainer}>
                                <div>
                                    <img
                                    href="#" 
                                    src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}
                                    alt="fotoperfil"
                                    style={fotoPerfil}
                                    />
                                </div>
                                <div className="col-6 p-2">
                                    <span style={nombreUsuario}>Grupo Peraldo</span>
                                </div>
                                <div className="col-4 bg-primary rounded">
                                <ul className="nav flex-column">
                                    <button
                                    className="bg-primary"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white',
                                            borderRadius: '5px',
                                            border: 'none',
                                            padding: '10px',
                                            fontWeight: 'bold',
                                        }}
                                        >
                                    <FontAwesomeIcon icon={faUserPlus} style={{ paddingRight: '15px' }} />
                                    Unirme
                                    </button>
                                </ul>
                                </div>
                            </div>
                        </div>
                        
     
                    {/* 1 persona */}

                    <div className="flex">
                            <div className="flex col-6 p-2" style={textoContainer}>
                                <div>
                                    <img
                                    href="#" 
                                    src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}
                                    alt="fotoperfil"
                                    style={fotoPerfil}
                                    />
                                </div>
                                <div className="col-6 p-2">
                                    <span style={nombreUsuario}>Martinez</span>
                                </div>
                                <div className="col-4 bg-primary rounded">
                                <ul className="nav flex-column">
                                    <button
                                    className="bg-primary"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white',
                                            borderRadius: '5px',
                                            border: 'none',
                                            padding: '10px',
                                            fontWeight: 'bold',
                                        }}
                                        >
                                    <FontAwesomeIcon icon={faUserPlus} style={{ paddingRight: '15px' }} />
                                    Unirme
                                    </button>
                                </ul>
                                </div>
                            </div>
                        </div>   

                    </div>


                     
                    
                    
                </div>
            </div>
        
        </div>
    )
}

export default Agregar