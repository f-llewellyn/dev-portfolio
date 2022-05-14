import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = (props) => {
	return (
		<div className="project flex">
			<a
				href="https://read-me-murex.vercel.app"
				target="_"
				className="img__container transition"
			>
				<img
					className="project__img"
					src="/projects/readme.png"
					alt=""
				/>
				<div className="img__overlay transition"></div>
			</a>
			<div className="project__info text-right">
				<div className="project__rule"></div>
				<h1 className="project__title">read.me</h1>
				<p className="project__tag">Write a README like a pro!</p>
				<div className="project__card">
					<p>
						Read.me is a web app that enables users to create
						awesome READMEs for their open-source projects with an
						editor, live preview and pre-made markdown elements.
					</p>
				</div>
				<ul className="project__tech">
					<li className="tech__item">SvelteKit</li>
					<li className="tech__item">Tailwind CSS</li>
					<li className="tech__item">GitHub API</li>
					<li className="tech__item">Vercel</li>
				</ul>
				<div className="project__links">
					<a href="https://github.com/f-llewellyn/read.me">
						<FaExternalLinkAlt />
					</a>
					<a href="https://github.com/f-llewellyn/read.me">
						<FaGithub />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
