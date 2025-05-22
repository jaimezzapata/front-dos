export default function Home() {
  let usuario = JSON.parse(localStorage.getItem("usuario"))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 font-sans">
      <header className="bg-blue-900 text-white p-6 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">EduForma</h1>
          <nav className="space-x-6 text-sm">
            <h2 className="text-xl">{usuario.nombre}</h2>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-4">
          Front 2
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Formación especializada en desarrollo front-end moderno con enfoque en React, SPA, pruebas unitarias y consumo de APIs.
        </p>
      </section>

      <section id="programa" className="py-16 px-6 bg-gradient-to-tr from-blue-200 to-blue-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">Programa Detallado</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-900">
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Tema 1</h4>
              <p>Pacto Pedagógico y Proyecto Integrador</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Tema 2</h4>
              <p>Generalidades de un SPA</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Tema 3</h4>
              <p>Introducción a React</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Tema 4</h4>
              <p>Rutas y Conexiones en React</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Tema 5</h4>
              <p>JSX y Props</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Tema 6</h4>
              <p>Hooks: useState y useEffect</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Tema 7</h4>
              <p>Hook useContext</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Tema 8</h4>
              <p>Consumo de APIs (Fetch y Axios)</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Tema 9</h4>
              <p>Introducción a Pruebas Unitarias en JS</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Tema 10</h4>
              <p>Seguimiento al Proyecto Integrador</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white text-center text-sm p-4 mt-10">
        &copy; {new Date().getFullYear()} EduForma. Todos los derechos reservados.
      </footer>
    </div>
  );
}
