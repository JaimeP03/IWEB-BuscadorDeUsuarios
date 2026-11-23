import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import {mock1} from './constants/users.js' //Al usar export constant SIN DEFAULT se le ponen las llaves. Exportacion nombrada: como hay varias opciones posibles, al importar tienes que usar llaves y usar el nombre exacto 
import Resultados from './Resultados.jsx'
import config from './config/config.js' //Importamos para averiguar el use_server
function App() {
const [usuarios, setUsuarios] = useState(mock1.users)
const [query, setQuery] = useState("")
async function traerTodos() {
  if(config.use_server){ //si pide que usemos el use_server==true, hacemos el fetch con la url del server
    const respuesta = await fetch(`${config.server_url}?limit=${config.num_items}`);
    const data = await respuesta.json();
    setUsuarios(data.users);
  }else{ //si use_server esta a false directamente mostramos los usuarios del mock 
    setUsuarios(mock1.users);
  }
}

async function buscar(){
  if(config.use_server){
    const busqueda = await fetch(`${config.server_url}/search?q=${query}&limit=${config.num_items}`);
    const data2 = await busqueda.json();
    setUsuarios(data2.users);
  }
}
  return (
    <>
      <Header />
      <h2 id="buscador">Buscador de usuarios</h2>
      <input id="query" placeholder="Insertar un usuario..."
      value={query}
      onChange={(e)=>setQuery(e.target.value)}></input>
      <button id="botonsearch" onClick={buscar}>Buscar</button>
      <button id="botonall" onClick={traerTodos}>Ver Todos</button>
      <Resultados resultado={usuarios} />
    </>
  )
}

export default App
