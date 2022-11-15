import "./App.css";
import freeCodeCampoLogo from "./img/free-code-camp.png";
import { ListaDeTareas } from "./components/ListaDeTareas";

function App() {
	return (
		<div className="aplicacion-tareas">
			<div className="freecodecamp-contenedor-logo">
				<img
					className="freecodecamp-logo"
					src={freeCodeCampoLogo}
					alt="free code camp logo"
				/>
			</div>
			<div className="tareas-lista-principal">
				<h1>Mis Tareas</h1>

				<ListaDeTareas />
			</div>
		</div>
	);
}

export default App;
