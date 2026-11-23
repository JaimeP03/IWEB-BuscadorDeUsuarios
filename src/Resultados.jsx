//import mockdata from './constants/users' //ESTO NO SE PONE AQUI. ES DATA QUE VA CAMBIANDO Y PASA DE PADRES A HIJOS, POR ESO USAS LOS PROPS. DEBE IR EN LA APLICACION
export default function Resultados ({resultado}){
    return (
    <ul id="resultados">
        {resultado.map((usuario)=> (
            <li key={usuario.id}>
                <p><b>Nombre: {usuario.firstName} {usuario.lastName}</b></p>
                <p>Correo: {usuario.email}</p>
                <p>Teléfono: {usuario.phone}</p>
                <img src={usuario.image} alt={usuario.firstName}></img>
            </li>
        ))
    }
    </ul>
    )
}