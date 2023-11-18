import Header from '../components/Header';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHome, faMessage, faPaperPlane, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import Post from '../components/Post';
import Publish from '../components/Publish';


const iconoShare = {
    color: "#3498db",
    fontSize: "15px",
    textDecoration: "none",
    decoration: "none",
  }

const iconoContainer = {
    color: "#3498db",
    fontSize: "15px",
    textDecoration: "none",
    decoration: "none",
    underline: "none",
  }

const Home = () => {
    return (
        <div style={{height: '100vh', backgroundColor: '#f4f4f9'}}>
            <Header/>
            <div className='container-fluid'>
                <div className='row ms-4 me-4'>
                    <div className='col-3'>
                        <div className='card' style={{height: '80vh'}}>
                            <div className='card-body'>
                                Cesar Santillana
                                <ul style={{ textDecoration: 'none', underline: 'none',}} > 
                                  
                                    <li style={iconoContainer}>
                                        <FontAwesomeIcon icon={faHome} style={iconoShare}></FontAwesomeIcon>
                                        <Link to="/">Inicio</Link>
                                    </li>              

                                    <li style={iconoContainer}>
                                        <FontAwesomeIcon icon={faComment} style={iconoShare}></FontAwesomeIcon>
                                        <Link to="/mensajes">Mensajes</Link>
                                    </li>              

                                    <li style={iconoContainer}>
                                        <FontAwesomeIcon icon={faUserCircle} style={iconoShare}></FontAwesomeIcon>
                                        <Link to="/perfil">Perfil</Link>
                                    </li>

                                    <li style={iconoContainer}>
                                        <FontAwesomeIcon icon={faMessage} style={iconoShare}></FontAwesomeIcon>
                                        <Link to="/perfil">Grupos</Link>
                                    </li>

                                    <li style={iconoContainer}>
                                        <FontAwesomeIcon icon={faUsers} style={iconoShare}/>
                                        <Link to="/perfil">Amigos</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='card p-4 m-3'>
                            <div className='card-body'>
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
                                Contactos
                            </div>
                            <div className='card-body'>
                                Contactos 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Home