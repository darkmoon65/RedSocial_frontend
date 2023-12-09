import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHome,
  faMessage,
  faUserCircle,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const textoMenu = {
  color: "#000",
  fontSize: "15px",
  marginRight: "10px",
  marginBottom: "2px",
};

const iconoContainer = {
  textDecoration: "none",
  listStyle: "none",
  padding: "10px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  //backgroundColor: "gray", 
};
 

const Hamburguer = () => {
  return (
    <div className="">
      <div className="card" style={{ height: "80vh"}}>
        <div className="card-body">
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <div style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#3498db",
                borderRadius: "50%",
                marginBottom:"15px",
                textAlign: "center",
                justifyContent:"center"
            }}>
          <img href="#"   src={process.env.PUBLIC_URL + '/imagenes/mandala.jpg'} alt="fotoperfil"  style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#3498db",
                borderRadius: "50%",
                marginBottom:"15px",
                textAlign: "center",
                justifyContent:"center"}} />  
            </div>
            Cesar Santillana
          </div>
          <ul className="nav flex-column" style={{ padding: "0" }}>
            <li style={iconoContainer} className="nav-item">
              <NavLink
                to="/"
                className="nav-link d-flex align-items-center"
                style={{
                  ...textoMenu,
                  color: "#000",  
                }}
              >
                <FontAwesomeIcon icon={faHome} style={textoMenu} />
                Inicio
              </NavLink>
            </li>

            <li style={iconoContainer} className="nav-item">
              <NavLink
                to="/mensajes"
                className="nav-link d-flex align-items-center"
                style={{
                    ...textoMenu,
                    color: "#000",  
                  }}
              >
                <FontAwesomeIcon icon={faComment} style={textoMenu} />
                Mensajes
              </NavLink>
            </li>

            <li style={iconoContainer} className="nav-item">
              <NavLink
                to="/perfil"
                className="nav-link d-flex align-items-center"
                style={{
                    ...textoMenu,
                    color: "#000",  
                  }}
              >
                <FontAwesomeIcon icon={faUserCircle} style={textoMenu} />
                Perfil
              </NavLink>
            </li>

            <li style={iconoContainer} className="nav-item">
              <NavLink
                to="/grupos"
                className="nav-link d-flex align-items-center"
                style={{
                    ...textoMenu,
                    color: "#000",  
                  }}
              >
                <FontAwesomeIcon icon={faMessage} style={textoMenu} />
                Grupos
              </NavLink>
            </li>

            <li style={iconoContainer} className="nav-item">
              <NavLink
                to="/amigos"
                className="nav-link d-flex align-items-center"
                style={{
                    ...textoMenu,
                    color: "#000",  
                  }}
              >
                <FontAwesomeIcon icon={faUsers} style={textoMenu} />
                Amigos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburguer;
