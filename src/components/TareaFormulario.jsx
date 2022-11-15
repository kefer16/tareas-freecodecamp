import React, { useState } from "react";
import "../css/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

export function TareaFormulario(props) {
	const [input, setinput] = useState("");

	const manejarCambio = (e) => {
		setinput(e.target.value);
	};

	const manejarEnvio = (e) => {
		e.preventDefault();

		const tareaNueva = {
			id: uuidv4(),
			texto: input,
			completada: false,
		};

        props.onSubmit(tareaNueva)
	};

	return (
		<form className="tarea-formulario" onSubmit={manejarEnvio}>
			<input
				className="tarea-input"
				type="text"
				placeholder="Escribe una Tarea"
				name="texto"
				onChange={manejarCambio}
			/>
			<button className="tarea-boton">Agregar Tarea</button>
		</form>
	);
}
