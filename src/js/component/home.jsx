import React, { useState } from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	
	const randomColor = () => {
        const colors = ["red", "yellow", "green"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

	const RandomizeColor = () => {
        const newColor = randomColor();
        setColor(newColor);
    };

	return (
		// Estos <> los pone automáticos codespace sino me da error. Entiendo que tiene que ser una etiqueta vacía para hacer el palo.
		<><div className="traffic-pole"></div>
			<div className="container">
				<div className="traffic-light">
					<div onClick={() => setColor("red")}
						className={"red" + ((color === "red") ? " glow" : "")}></div>
					<div onClick={() => setColor("yellow")}
						className={"yellow" + ((color === "yellow") ? " glow" : "")}></div>
					<div onClick={() => setColor("green")}
						className={"green" + ((color === "green") ? " glow" : "")}></div>
				</div>
			</div>
			<button onClick={RandomizeColor}>Random Color</button>
		</>
		
	);
};

export default Home;
