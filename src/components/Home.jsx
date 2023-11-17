
import Header from '../components/Header';
import Perfil from './Perfil';

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
                                <ul>
                                    <li>Inicio</li>
                                    <li>Mensajes</li>
                                    <li>Perfil</li>
                                    <li>Grupos</li>
                                    <li>Amigos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='card p-4 m-3'>
                            <div className='card-body'>
                                POSTS 1
                            </div>
                        </div>
                        <div className='card p-4 m-3'>
                            <div className='card-body'>
                                POSTS 1
                            </div>
                        </div>
                        <div className='card p-4 m-3'>
                            <div className='card-body'>
                                POSTS 1
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
            <Perfil></Perfil>
        </div>
    )
}

export default Home