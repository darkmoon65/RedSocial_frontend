 import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faImage, faTimes } from '@fortawesome/free-solid-svg-icons';


  //* -------  BOTON PUBLICAR */

const Modal = () => { 
  const [contenidoInput, setContenidoInput] = useState('');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const handleInputChange = (event) => {
    setContenidoInput(event.target.value);
};

const handlePublicarClick = () => {
    console.log('Publicar:', contenidoInput);
  };



 //* -------  BOTON PUBLICAR */
 
 const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setImagenSeleccionada(imageUrl);
    console.log('Archivo seleccionado:', selectedFile);
  };

  const handleEliminarImagen = () => {
    setImagenSeleccionada(null);
    iconoEliminarImagen.display = 'none';
  };

  const hayTexto = contenidoInput.trim() !== '';
  const hayImagenSeleccionada = imagenSeleccionada !== null;


  //* -------  ESTILOS */

  const iconoCamara = {
    color: "green",
    fontSize: "25px",
    cursor:"pointer"
  } 

  const iconoEliminarImagen = {
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
    position: 'absolute',
    top: '4px',
    right: '17px',
    width: "30px",
    height: "30px", 
    backgroundColor: "red",
    borderRadius: "50%"
  };

    return (
        <div style = {{paddingLeft :"10px",width:"100%",}}> 
            <input 
            className='form-control' data-bs-toggle="modal" data-bs-target="#dinamycBackdrop" placeholder="Qué estás pensando?" /> 

            {/* contenodo Modal */}
            <div class="modal fade " id="dinamycBackdrop" data-bs-backdrop="dynamic" data-bs-keyboard="false" tabindex="-1" aria-labelledby="dynamicBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                <div className='row'> {/*imagen y texto */}
                        <div className='col-4 ' style ={{display: "flex"}}> 
                            <Link> <img  src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} 
                                alt="user" width="50" class="rounded-circle" />
                            </Link>
                        </div>
                        <div  className='col-5'>
                            <div  style ={{display: "flex", justifyContent:"space-between"}}>
                                <h6 class="modal-title fs-5">Sharmelyn</h6>
                            </div> 
                        </div> 
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-10">
                            <input
                            className='form-control'
                            type="text"
                            placeholder="Qué estás pensando?"
                            value={contenidoInput}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div class= "col-2">
                        <label htmlFor="fileInput">
                                <FontAwesomeIcon icon={faImage} style={iconoCamara} /> 
                                </label>
                                <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                />
                        </div>
                        
                        {imagenSeleccionada && (
                            <div style={{ position: 'relative', maxWidth: '100%', marginTop: '10px' }}>
                             <img src={imagenSeleccionada} alt='Imagen seleccionada' style={{ maxWidth: '100%' }} />
                             <FontAwesomeIcon icon={faTimes} style={iconoEliminarImagen} onClick={handleEliminarImagen} />
                            </div>
                        )}
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        className={`btn ${hayTexto || hayImagenSeleccionada ? 'btn-primary' : 'btn-secondary'} w-100`}
                        disabled={!hayTexto && !hayImagenSeleccionada}
                        onClick={handlePublicarClick}
                    > Publicar</button>
                     
                </div>
                </div>
            </div>
            </div>
        </div>

);
};

export default Modal;