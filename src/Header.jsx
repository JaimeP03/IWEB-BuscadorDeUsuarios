import copo from "./assets/copo.jpg"
import "./Header.css"
export default function Header() {
  return (
    <div id="cabecera">
      <img src={copo} className="logo"></img>
      <h3 className="mensaje">Bienvenido a la página de Jaime Poveda Hernández</h3>
    </div>
  )
}