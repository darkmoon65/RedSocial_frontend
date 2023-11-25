import Header from './Header';
import Post from '../components/Post';
import Publish from '../components/Publish';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMortarPestle, faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    
    return ( 
        <div>
            <div style={{height: '100vh', backgroundColor: '#f4f4f9'}}>
            <Header/>
            <div className='container-fluid'>
                <div className='row ms-4 me-4'>
                    <div className='col-3'>
                        <div className='card' style={{height: '80vh'}}>
                            <div className='card-body'>
                                Cesar Santillana
                                <ul className="nav flex-column" style={{ padding: '0' }}>
                                     

                                    <li >
                                        Mensajes
                                      
                                    </li>
                                    <button className='bg-primary' style= {{textDecoration:'none', color: 'white', borderRadius: '5px', border:'none', padding: '10px', fontWeight:'bold'}}>
                                        
                                    <FontAwesomeIcon icon={faPlus}  style= {{textDecoration:'none', color: 'white', borderRadius: '5px', border:'none', paddingRight: '15px' }} /> 
CREAR GRUPO
                                    </button>

                                     
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

        </div> 
    )
}

export default Home