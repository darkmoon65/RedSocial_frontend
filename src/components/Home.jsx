import Header from '../components/Header'; 
import Post from '../components/Post';
import Publish from '../components/Publish';
import Hamburguer from './Hamburguer';
 

const Home = () => {
    return (
        <div style={{height: '100vh', backgroundColor: '#f4f4f9'}}>
            <Header/>
            <div className='container-fluid'>
                <div className='row ms-4 me-4'>
                    <div className='col-2'> <Hamburguer /></div> 
                    <div className='col-7'>
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