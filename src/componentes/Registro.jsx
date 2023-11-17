import React from 'react';
 
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


const Registro= () => {
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
              <input  style={boxInput} type="text" />
            </div>
            <div style={margen} >
              <label>Apellido</label>
              <input  style={boxInput} type="text" />
            </div>
            <div  style={margen}>
              <label>Email</label>
              <input style={boxInput}  type="email" />
            </div>
            <div style={margen}>
              <label>Contraseña</label>
              <input style={boxInput}  type="password" />
            </div>
            <div style={margen}>
              <label>Confirmar Contraseña</label>
              <input  style={boxInput} type="password" />
            </div>
           <div style={card3}>
              <div style={margen}>
                  <label>Fecha de Nacimiento</label>
                  <input  style={boxInput} type="date" />
              </div>
              <div style={margen}>
                <label>Género</label>
                  <select  style={boxInput} >
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                    <option value="other">Otro</option>
                  </select>
              </div>
           </div>
          </form>
          <div style={{textAlign: 'center', }}>
             <button style={botonRegistrarse}  type="submit">Registrarse</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
