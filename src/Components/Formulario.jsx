function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Agrega Pacientes y{" "}
        <span className="text-indigo-600 font-bold mb-10">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre mascota
          </label>
          <input
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="mascota"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="propietario"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Ingrese un email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            type="date"
            placeholder="Ingrese un email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="alta"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea id="sintomas" placeholder="Describe los sitomas" />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
