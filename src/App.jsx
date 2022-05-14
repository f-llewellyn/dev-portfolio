import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";

function App() {
	const [data, setData] = useState();

	useEffect(() => {
		fetch("/projects/projects.json")
			.then((response) => response.json())
			.then((res) => setData(res));
	}, []);

	return (
		<div className="container">
			<Header />
			<Hero />
			<div className="content-container">
				<h1 className="title">Projects</h1>
				<Project />
				{/* <button onClick={console.log(data)}>Data</button> */}
			</div>
		</div>
	);
}

export default App;

