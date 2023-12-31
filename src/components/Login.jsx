import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import LoginWithGoogle from './LoginGoogle';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const showToast = (message, type) => {
    const toastElement = document.getElementById('customToast');
    toastElement.innerText = message;
  
    toastElement.style.color = '#fff';   
    toastElement.className = `toast show bg-${type} text-white`; 
    toastElement.style.position = 'fixed';
    toastElement.style.top = '10px';
    toastElement.style.right = '10px';
  
    setTimeout(() => {
      toastElement.className = 'toast hide';
    }, 3000);
  };

  const handleLogin = async () => {
    console.log('Email:', email);
    console.log('Password:', password);

    try{
      var rpta = await fetch("http://localhost:8000/login/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify ({"correo": email, "contrasena": password})
      });
      if(!rpta.ok){
        showToast('Ocurrió un error al iniciar sesión. Por favor, inténtelo de nuevo.', 'danger');
        return
      }
      showToast('Inicio de sesión exitoso!', 'success');
      var data = await rpta.json();
      localStorage.setItem('token', data.access);
      localStorage.setItem('user', data.email);
      navigate('/');
      
    }catch(err){
      console.log(err)
    }


  };

  const logo = {
    width : "20%",
    borderRadius: "50%",
    margin: "50px",
    cursor: "pointer",     

  }
  const fondo = {
    background : " #f4f4f9 ",
    width:"100%",
    height:"100vh",
    justifyContent: "center",
    textAlign: "center",
  }

  const botonIniciarSesion = {
    background : " #00307a ",
    width:"33%", 
    borderRadius: "20px", 
    color: "white",
    margin: "10px",
    border: "none",
    height:"25px",
    cursor: "pointer",     

  }

  const botonRegistro = {
    background : " #00307a ",
    width:"15.5%", 
    borderRadius: "20px", 
    color: "white",
    margin: "10px",
    border: "none",
    height:"25px",
    cursor: "pointer",     

  }
  const botonRegistroFirst = {
    background : " #00307a ",
    borderRadius: "20px", 
    color: "white",
    margin: "10px",
    border: "none",
    height:"25px",
    cursor: "pointer",
    paddingLeft: "15px",
    paddingRight: "15px",
    width: "100%"
  }

  const formulario ={ 
    color: "#00307a",
    fontWeight:"bold",

  }

  const boxInput ={
    margin: "10px",
    height:"20px",
    border: "none",
    borderRadius: "10px", 
    width:"25%", 
  }
  
  const boxInputEmail ={
    margin: "10px",
    height:"20px", 
  }

  return (
    <div style = {fondo}>
        <div>
            <img href="#" style={logo} src={process.env.PUBLIC_URL + '/imagenes/logo_OS.jpg'} alt="Descripción de la imagen" />
            <form style={formulario}>
                <div   >
                    <label style={boxInputEmail}>Email:</label>
                    <input style={boxInput}
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div >
                    <label>Password:</label>
                    <input style={boxInput}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button style = {botonIniciarSesion}  type="button" onClick={handleLogin}>
                    Iniciar sesión
                </button>  
            </form>
            <LoginWithGoogle/>
            <Link style={botonRegistroFirst} to="/register"> Registrarse </Link>
            <button style = {botonRegistro}  type="button" onClick={handleLogin}>
                Registrarse con Google
            </button>
            <div id="customToast" className="toast hide"></div>
        </div>
    </div>
  );
};

export default Login;
