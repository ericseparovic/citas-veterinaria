import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListadoPacientes from "./Components/ListadoPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <Formulario />
      <ListadoPacientes />
    </div>
  );
}

export default App;
