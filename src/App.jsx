import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Socials from "./components/Socials";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("/projects/projects.json")
			.then((response) => response.json())
			.then((res) => {
				console.log(res[0].title);
				setData(res);
			});
	}, []);

	return (
		<div className="container">
			<Header />
			<Hero />
			<div className="content-container">
				<h1 id="projects" className="title">
					Projects
				</h1>
				<div className="project__container">
					{data.map((project, index) => (
						<Project key={index} data={project} />
					))}
				</div>
				<h1 id="about" className="title">
					About Me
				</h1>
				<About />
				<h1 id="contact" className="title">
					Contact
				</h1>
				<Contact />
				<Socials />
			</div>
		</div>
	);
}

export default App;

