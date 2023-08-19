import "./Formulario.css"
import { useState } from "react"
import SocialButton from './SocialButton';
import Alert from "./Alert";


export function Formulario() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [contrasena2, setContrasena2] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (evento) => {
        evento.preventDefault()

        if (nombre === "" || contrasena === "" || email === "" || contrasena2 === "") {
            setError(true)
            return
        }

        setError(false)
    }


    return (
        <section>
            <h1>Crear una Cuenta</h1>
            <SocialButton />
            <form className="formulario"
                onSubmit={handleSubmit}>
                <input type="text"
                    value={nombre} onChange={evento => setNombre(evento.target.value)} />

                <input type="email" value={email} onChange={evento => setEmail(evento.target.value)} />

                <input type="password" value={contrasena} onChange={evento => setContrasena(evento.target.value)} />
                <input type="password" value={contrasena2} onChange={evento => setContrasena2(evento.target.value)} />
                <button> Iniciar Registro</button>
            </form>

            {error && <p>Todos los campos son obligatrorios</p>}
        </section>
    )
}