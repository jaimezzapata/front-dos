import { useState } from "react";
import { buscarUsuario } from "../../utils/auth";
import { alertaRedireccion, generarToken } from "../../utils/funciones";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        buscarUsuario(email, password)
        if (buscarUsuario(email, password)) {
            let token = generarToken()
            let usuario = buscarUsuario(email, password)
            localStorage.setItem("token", token);
            localStorage.setItem("usuario", JSON.stringify(usuario));
            alertaRedireccion("Bienvenido" + usuario.nombre, "Será redireccionado al contenido", "success", "/home")
        } else {
            alert("Credenciales incorrectas");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 to-blue-400">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <div className="flex items-center mb-6">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-3">
                        A
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Acceso</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Correo electrónico</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                            placeholder="tu@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Contraseña</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
}
