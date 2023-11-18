import React from 'react';
import '../index.css'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';

const Chats = () => {
 
    return (
     
      <div className="maincontainer">
        <Header></Header>
      <div classname="container " style={{width: "100%", padding:"30px"}}> 
        <div class="row rounded-lg overflow-hidden ">
        
          <div class="col-4 px-0">
            <div class="bg-white">

              <div class="px-4 py-2 d-flex justify-content-center align-items-center " style= {{backgroundColor:"#002f77" , color: "white"}}>
                <p class="h4 mb-0 py-1">Chats Recientes</p>
              </div>

              <div class="px-4 py-2" style= {{backgroundColor:"#002f77", height: "vh"}}>
                <input  className='form-control' style={{width : '100%'}} type="text" placeholder="Busca a un amigo para chatear" />      

              </div>

              <div class="messages-box">
                <div class="list-group rounded-0">
                  <Link class="list-group-item list-group-item-action text-gray rounded-0" style = {{backgroundColor:"#e9f4ff"}}>
                    <div className='row'> {/*imagen y texto */}
                        <div className='col-2 px-4' style ={{display: "flex"}}> 
                            <img  src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" height="50" class="rounded-circle" />
                        </div>
                        <div  className='col-10'>
                            <div  style ={{display: "flex", justifyContent:"space-between"}}>
                                <h6 class="mb-0">Sharmelyn</h6>
                                <small class="small ">18 Nov</small>
                            </div>
                            <div    style ={{justifyContent:"flex-start"}}>
                                <p class="text-muted  text-small">Pronto dominaré el mundo jaaaaaaaa didunt ut la  shaar bore  manual.</p>
                            </div>
                        </div> 
                    </div>
                  </Link>


                  <Link href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div className='row'> {/*imagen y texto */}
                        <div className='col-2 px-4' style ={{display: "flex"}}> 
                            <img  src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" height="50" class="rounded-circle" />
                        </div>
                        <div  className='col-10'>
                            <div  style ={{display: "flex", justifyContent:"space-between"}}>
                                <h6 class="mb-0">Sharmelyn</h6>
                                <small class="small ">18 Nov</small>
                            </div>
                            <div    style ={{justifyContent:"flex-start"}}>
                                <p class="text-muted  text-small">Prue idunt ut la  shaar bore  manual.</p>
                            </div>
                        </div> 
                    </div>
                  </Link>

 

                  <Link href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div className='row'> {/*imagen y texto */}
                        <div className='col-2 px-4' style ={{display: "flex"}}> 
                            <img  src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" height="50" class="rounded-circle" />
                        </div>
                        <div  className='col-10'>
                                <div  style ={{display: "flex", justifyContent:"space-between"}}>
                                    <h6 class="mb-0">Sharmelyn</h6>
                                    <small class="small ">18 Nov</small>
                                </div>
                                <div    style ={{justifyContent:"flex-start"}}>
                                    <p class="text-muted  text-small">Pruconsectetur adipisicing elit, sed r bore   shaar bore  manual.</p>
                                </div>
                        </div> 
                    </div> 
                  </Link>






                  <Link href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div className='row'> {/*imagen y texto */}
                        <div className='col-2 px-4' style ={{display: "flex"}}> 
                            <img  src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" height="50" class="rounded-circle" />
                        </div>
                        <div  className='col-10'>
                            <div  style ={{display: "flex", justifyContent:"space-between"}}>
                                <h6 class="mb-0">Sharmelyn</h6>
                                <small class="small ">18 Nov</small>
                            </div>
                            <div    style ={{justifyContent:"flex-start"}}>
                                <p class="text-muted  text-small">Pruebaaconsectetur  smod tempor incididunt ut la  shaar bore  manual.</p>
                            </div>
                        </div> 
                    </div>
                  </Link>

                  <Link href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div className='row'> {/*imagen y texto */}
                        <div className='col-2 px-4' style ={{display: "flex"}}> 
                            <img  src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" height="50" class="rounded-circle" />
                        </div>
                        <div  className='col-10'>
                            <div  style ={{display: "flex", justifyContent:"space-between"}}>
                                <h6 class="mb-0">Sharmelyn</h6>
                                <small class="small ">18 Nov</small>
                            </div>
                            <div    style ={{justifyContent:"flex-start"}}>
                                <p class="text-muted  text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lal.</p>
                            </div>
                        </div> 
                    </div>
                  </Link>

                  <Link href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div className='row'> {/*imagen y texto */}
                        <div className='col-2 px-4' style ={{display: "flex"}}> 
                            <img  src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" height="50" class="rounded-circle" />
                        </div>
                        <div  className='col-10'>
                            <div  style ={{display: "flex", justifyContent:"space-between"}}>
                                <h6 class="mb-0">Sharmelyn</h6>
                                <small class="small ">18 Nov</small>
                            </div>
                            <div    style ={{justifyContent:"flex-start"}}>
                                <p class="text-muted  text-small">Pruebaaconsectetur  smod tempor incididunt ut la  shaar bore  manual.</p>
                            </div>
                        </div> 
                    </div>
                  </Link>

                  <Link href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div className='row'> {/*imagen y texto */}
                        <div className='col-2 px-4' style ={{display: "flex"}}> 
                            <img  src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" height="50" class="rounded-circle" />
                        </div>
                        <div  className='col-10'>
                            <div  style ={{display: "flex", justifyContent:"space-between"}}>
                                <h6 class="mb-0">Sharmelyn</h6>
                                <small class="small ">18 Nov</small>
                            </div>
                            <div    style ={{justifyContent:"flex-start"}}>
                                <p class="text-muted  text-small">Pruebaaconsectetur  smod tempor incididunt ut la  shaar bore  manual.</p>
                            </div>
                        </div> 
                    </div>
                  </Link>

                  <Link href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div className='row'> {/*imagen y texto */}
                        <div className='col-2 px-4' style ={{display: "flex"}}> 
                            <img  src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" height="50" class="rounded-circle" />
                        </div>
                        <div  className='col-10'>
                            <div  style ={{display: "flex", justifyContent:"space-between"}}>
                                <h6 class="mb-0">Sharmelyn</h6>
                                <small class="small ">18 Nov</small>
                            </div>
                            <div    style ={{justifyContent:"flex-start"}}>
                                <p class="text-muted  text-small">Pruebaaconsectetur  smod tempor incididunt ut la  shaar bore  manual.</p>
                            </div>
                        </div> 
                    </div>
                  </Link>

                  <Link href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div className='row'> {/*imagen y texto */}
                        <div className='col-2 px-4' style ={{display: "flex"}}> 
                            <img  src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" height="50" class="rounded-circle" />
                        </div>
                        <div  className='col-10'>
                            <div  style ={{display: "flex", justifyContent:"space-between"}}>
                                <h6 class="mb-0">Sharmelyn</h6>
                                <small class="small ">18 Nov</small>
                            </div>
                            <div    style ={{justifyContent:"flex-start"}}>
                                <p class="text-muted  text-small">Pruebaaconsectetur  smod tempor incididunt ut la  shaar bore  manual.</p>
                            </div>
                        </div> 
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
         
          <div class="col-8 px-0">
            <div class=" px-4 py-5 chat-box" style ={{display: "flex", flexDirection:"column", backgroundColor:"#f5f5f5" ,}}>
            
            <div class = "row" >
                <div class=" col-1"> {/** imagen*/}
                    <div class="media w-50 mb-3 " ><img src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" class="rounded-circle" />
                    </div>
                </div>

                <div class=" col-5" > {/** texto*/}
                    <div class="media-body ml-3">
                    <div class=" rounded py-2 px-3 mb-2" style ={{ backgroundColor:"white" , boxShadow:"0 0 10px rgba(0,0,0, 0.1)"}}>
                        <p class="text-small mb-0 text-muted" >Test which is  new   new approach all solutions approach all solutions a new approach all solutions</p>
                    </div>
                    <p class="small text-muted">12:00 PM | Nov 18</p>
                    </div>
                </div>
            </div>
            
            

            <div class = "row media w-50 mb-3 align-self-end">
                <div class=" col-10"> {/** texto*/}
                    <div class="media-body">
                    <div class="bg-primary rounded py-2 px-3 mb-2 text-right">
                        <p class="text-small mb-0 text-white">Test which is  new   new approach all solutions approach all solutions a new approach all solutions</p>
                    </div>
                    <p class="small text-muted">12:00 PM | Nov 18</p>
                    </div>
                </div>

                <div class=" col-1"> {/** imagen*/}
                    <div class="media w-50 mb-3 " ><img src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" class="rounded-circle" />
                    </div>
                </div>
            </div>


            <div class = "row">
                <div class=" col-1"> {/** imagen*/}
                    <div class="media w-50 mb-3 " ><img src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" class="rounded-circle" />
                    </div>
                </div>

                <div class=" col-5"> {/** texto*/}
                    <div class="media-body ml-3">
                    <div class="rounded py-2 px-3 mb-2"  style ={{ backgroundColor:"white" , boxShadow:"0 0 10px rgba(0,0,0, 0.1)"}}>
                        <p class="text-small mb-0 text-muted">Test which is  new   new approach all solutions approach all solutions a new approach all solutions</p>
                    </div>
                    <p class="small text-muted">12:00 PM | Nov 18</p>
                    </div>
                </div>
            </div>
            
            

            <div class = "row media w-50 mb-3 align-self-end">
                <div class=" col-10"> {/** texto*/}
                    <div class="media-body">
                    <div class="bg-primary rounded py-2 px-3 mb-2 text-right">
                        <p class="text-small mb-0 text-white">Test which is  new   new approach all solutions approach all solutions a new approach all solutions</p>
                    </div>
                    <p class="small text-muted">12:00 PM | Nov 18</p>
                    </div>
                </div>

                <div class=" col-1"> {/** imagen*/}
                    <div class="media w-50 mb-3 " ><img src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" class="rounded-circle" />
                    </div>
                </div>
            </div>

            <div class = "row">
                <div class=" col-1"> {/** imagen*/}
                    <div class="media w-50 mb-3 " ><img src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" class="rounded-circle" />
                    </div>
                </div>

                <div class=" col-5"> {/** texto*/}
                    <div class="media-body ml-3">
                    <div class="rounded py-2 px-3 mb-2"  style ={{ backgroundColor:"white" , boxShadow:"0 0 10px rgba(0,0,0, 0.1)"}}>
                        <p class="text-small mb-0 text-muted">Test which is  new   new approach all solutions approach all solutions a new approach all solutions</p>
                    </div>
                    <p class="small text-muted">12:00 PM | Nov 18</p>
                    </div>
                </div>
            </div>
            
            

            <div class = "row media w-50 mb-3 align-self-end">
                <div class=" col-10"> {/** texto*/}
                    <div class="media-body">
                    <div class="bg-primary rounded py-2 px-3 mb-2 text-right">
                        <p class="text-small mb-0 text-white">Test which is  new   new approach all solutions approach all solutions a new approach all solutions</p>
                    </div>
                    <p class="small text-muted">12:00 PM | Nov 18</p>
                    </div>
                </div>

                <div class=" col-1"> {/** imagen*/}
                    <div class="media w-50 mb-3 " ><img src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'}  alt="user" width="50" class="rounded-circle" />
                    </div>
                </div>
            </div>

            </div>

        
            <form action="#" class="bg-light">
              <div class="input-group">
                <input type="text" placeholder="Escribe un mensaje" aria-describedby="button-addon2" class="form-control rounded-0 border-0 py-4 bg-light" />
                <div class="input-group-append">
                  <button id="button-addon2" type="button" class="btn btn-link">
                    <FontAwesomeIcon icon={faCamera} style= {{padding:"6.5px"}} ></FontAwesomeIcon> 
                 
                    <FontAwesomeIcon icon={faPaperPlane} style= {{padding:"6.5px"}} ></FontAwesomeIcon> 

                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

      </div>
     
 );
};

export default Chats;