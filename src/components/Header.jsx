import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate} from "react-router-dom";

const Header = () => { 
  const navigate = useNavigate();
  const logo = {
    width : "200px",
    margin: "10px",
    cursor: "pointer",     
  }
  const endPart = {
    margin: "10px"
  }
  const fondo = {
    background : " #00307a ",
    height:"8vh",  
    alignItems: "center", 
  }
  const iconosContainer = {
    display: "flex",
    alignItems: "center",
    color: "#fff"
  }

  const buscadorContainer = {
    flex: 1,  
    display: "flex",
    justifyContent: "center", 
    width : "100%",
  }

  const cerrarSesionContainer = {
    display: "flex",
    alignItems: "center",
  };

  const cerrarSesionTexto = {
    marginLeft: "1px",  
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div >
      <div className='row' style={fondo}> 
        <div className='col-4' >
          <Link to="/">
            <img href="#" style={logo} src={process.env.PUBLIC_URL + '/imagenes/large.png'} alt="logo only students navbar" />   
          </Link>
            
        </div>

        <div className='col-6'  style={buscadorContainer}>
          <input  className='form-control' style={{width : '100%'}} type="text" placeholder="Busca a personas o grupos que conoces" />      
        </div>
        
        <div className='col-4 justify-content-end pe-5' style={iconosContainer}>
          <FontAwesomeIcon icon={faBell} style={endPart} />  
          <div style={cerrarSesionContainer}>
            <FontAwesomeIcon icon={faSignOutAlt} style={endPart} />
            <button onClick={handleLogout} style={{textDecoration: 'none', color: 'white', background: 'none', border: 'none'}}><span style={cerrarSesionTexto}>Cerrar Sesión</span></button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
