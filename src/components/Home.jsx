import Header from '../components/Header'; 
import Post from '../components/Post';
import Publish from '../components/Publish';
import Hamburguer from './Hamburguer';
import { useEffect, useState } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [postsFile, setPostsFile] = useState([]);

    useEffect( () => {
        async function getData() {
            const rpta = await fetch('http://localhost:8000/publicacion/');
            const dataPublicaciones = await rpta.json();

            const rptaFile = await fetch('http://localhost:8000/publicacionFile/');
            const dataFile = await rptaFile.json();


            setPosts(dataPublicaciones)
            setPostsFile(dataFile)

            console.log(dataFile)
        }
        getData()
    }, [])

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
                        {
                            (postsFile && posts) ? posts?.map( (e, index) => {
                                return (
                                    <div className='card p-4 m-3' styles = {{ backgroundColor: "#f4f4f9",}}>
                                        <div className='card-body' >
                                            <Post data={e} file={postsFile[index]}></Post>
                                        </div>
                                    </div>
                                )
                            }): null
                        }

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