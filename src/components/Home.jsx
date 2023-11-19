import Header from '../components/Header';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHome, faMessage, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import Post from '../components/Post';
import Publish from '../components/Publish';


const iconoShare = {
    color: "#3498db",
    fontSize: "15px",
    textDecoration: "none",
    decoration: "none",
    marginRight: '10px',
    marginBottom: '2px', 
  }

const iconoContainer = {
    color: "#3498db",
    fontSize: "15px",
    textDecoration: "none",
    decoration: "none",
    underline: "none",
    listStyle: 'none',
    margin: '10px 0',
    padding: '10px',
    borderRadius: '8px',
    alignItems: 'center',
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
                                <ul className="nav flex-column" style={{ padding: '0' }}>
                                    <li style={iconoContainer} className="nav-item">
                                        <FontAwesomeIcon icon={faHome} style={iconoShare} />
                                        <Link to="/" className="nav-link d-flex align-items-center">
                                        Inicio
                                        </Link>
                                    </li>

                                    <li style={iconoContainer} className="nav-item">
                                        <FontAwesomeIcon icon={faComment} style={iconoShare} />
                                        <NavLink to="/mensajes" className="nav-link d-flex align-items-center" 
                                        style = {{  textDecoration: 'none',
                                        display: 'flex', alignItems: 'center',}}>
                                        Mensajes
                                        </NavLink>
                                    </li>

                                    <li style={iconoContainer} className="nav-item">
                                        <FontAwesomeIcon icon={faUserCircle} style={iconoShare} />
                                        <Link to="/perfil" className="nav-link">
                                        Perfil
                                        </Link>
                                    </li>

                                    <li style={iconoContainer} className="nav-item">
                                        <FontAwesomeIcon icon={faMessage} style={iconoShare} />
                                        <Link to="/grupos" className="nav-link">
                                        Grupos
                                        </Link>
                                    </li>

                                    <li style={iconoContainer} className="nav-item">
                                        <FontAwesomeIcon icon={faUsers} style={iconoShare} />
                                        <Link to="/amigos" className="nav-link">
                                        Amigos
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
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