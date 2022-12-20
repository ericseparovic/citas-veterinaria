function Paciente() {
  return (
    <div className="mt-10 bg-white ml-3 shadow-md px-4 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Iker</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Eric</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">eric@gmail.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">10 Dicembre 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          tempora, esse asperiores unde repellendus ullam doloremque quam iusto
          error consectetur autem possimus beatae sint quibusdam adipisci libero
          illo culpa sequi?
        </span>
      </p>
    </div>
  );
}

export default Paciente;
