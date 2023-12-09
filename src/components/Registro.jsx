import React, { useEffect , useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

const botonRegistrarse = {
  background : " #00307a ",
  width:"50%", 
  borderRadius: "20px", 
  color: "white",
  border: "none",
  height:"25px",
  cursor: "pointer",     
  textAlign: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  padding: '10px'
}
 

const formulario ={ 
  color: "#00307a",
  fontWeight:"bold",
  display: 'flex', flexDirection: 'column',
  margin: "10px",
  borderColor: "#74DDDB 1px solid",
  
}
 

const boxInput ={
  height:"20px",
  borderRadius: "10px", 
  width:"90%", 
  display: 'flex', justifyContent: 'space-between',
  padding: "3px",
  border: "none",
  outline: "1px solid rgb(218,218,218)"

} 

const general ={
  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' 
}
const cardGeneral ={ display: 'flex', width: '100%', border: '1px solid #ccc' }
const card1 ={ flex: 1 , background:"#00307a"}
const card2 ={ flex: 1, padding: '20px', background:" #F4F4F9 " }
const card3 ={ display: 'flex',  width:"80%", justifyContent: 'space-between' }

const imagen ={ width: '100%', objectFit: 'cover' , height:"100vh" }
const margen ={ marginBottom:"20px"  }


const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setapellidos] = useState('');
  const [email, setEmail] = useState('');
  const [genero, setGenero] = useState('');
  const [passw, setPassw] = useState('');
  const [fecha_nac, setFechaNac] = useState('');


  const navigate = useNavigate();

  const handleRegister = async ()=> {
    const data = {nombre, apellidos, email, genero, passw, fecha_nac}
    const rpta = await fetch('http://localhost:8000/usuarios/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if(rpta.ok){
      navigate('/login');
    }else{
      alert("Error al crear el usuario");
    }


  }


  return (
    <div style={general}>
      <div style={cardGeneral}>
        <div style={card1}>
          <img style={imagen} src={process.env.PUBLIC_URL + '/imagenes/logo_OS.jpg'} alt="Logo"
          />
        </div>
        <div style={card2}>
          <h2 style ={{textAlign:"center", color: "#00307a"}}>Regístrate</h2>
          <form style={formulario}>
            <div style={margen} >
              <label>Nombre</label>
              <input  style={boxInput} type="text" onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div style={margen} >
              <label>apellidos</label>
              <input  style={boxInput} type="text"  onChange={(e) => setapellidos(e.target.value)}/>
            </div>
            <div  style={margen}>
              <label>Email</label>
              <input style={boxInput}  type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div style={margen}>
              <label>Contraseña</label>
              <input style={boxInput}  type="password" onChange={(e) => setPassw(e.target.value)} />
            </div>
            <div style={margen}>
              <label>Confirmar Contraseña</label>
              <input  style={boxInput} type="password"/>
            </div>
           <div style={card3}>
              <div style={margen}>
                  <label>Fecha de Nacimiento</label>
                  <input  style={boxInput} type="date" onChange={(e) => setFechaNac(e.target.value)}/>
              </div>
              <div style={margen}>
                <label>Género</label>
                  <select  style={boxInput} onChange={(e) => setGenero(e.target.value)}>
                    <option value="M" selected>Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="O">Otro</option>
                  </select>
              </div>
           </div>
          </form>
          <div style={{textAlign: 'center', }}>
            <button style={botonRegistrarse} onClick={handleRegister}> Registrarse </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
