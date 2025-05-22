import { Link } from "react-router-dom";
import { temas } from "../data/dataBase";
import { cerrarSesion } from "../../utils/funciones";

export default function Home() {
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 font-sans">
      {/* Encabezado */}
      <header className="bg-blue-900 text-white p-6 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">EduForma</h1>
          <nav className="space-x-6 text-sm">
            <a className="text-xl">{usuario.nombre}</a>
            <a onClick={() => cerrarSesion()} className="text-xl">Cerrar Sesión</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-4">
          Front 2
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Formación especializada en desarrollo front-end moderno con enfoque en React, SPA, pruebas unitarias y consumo de APIs.
        </p>
      </section>

      {/* Programa */}
      <section className="py-16 px-6 bg-gradient-to-tr from-blue-200 to-blue-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl text-center font-semibold text-blue-900 mb-6">Programa Detallado</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-blue-900">
            {temas.map(({ tema, texto, ruta }) => (
              <div key={ruta} className="bg-white rounded-lg p-4 shadow">
                <h4 className="font-semibold mb-2">{tema}</h4>
                <Link
                  to={ruta}
                  className="text-blue-700 hover:underline block"
                >
                  {texto}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center text-sm p-4 mt-10">
        &copy; {new Date().getFullYear()} EduForma. Todos los derechos reservados.
      </footer>
    </div>
  );
}
