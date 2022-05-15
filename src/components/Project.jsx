import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ data }) => {
	return (
		<div className="project">
			<a
				href={data.previewURL}
				target="_"
				className="img__container transition"
			>
				<img
					className="project__img"
					src={`/projects/${data.image}`}
					alt=""
				/>
				<div className="img__overlay transition"></div>
			</a>
			<div className="project__info text-right">
				<div className="project__rule"></div>
				<h1 className="project__title">{data.title}</h1>
				<p className="project__tag">{data.tag}</p>
				<div className="project__card">
					<p>{data.content}</p>
				</div>
				<ul className="project__tech">
					{data.technologies.map((tech, index) => (
						<li key={index} className="tech__item">
							{tech}
						</li>
					))}
					{/* <li className="tech__item">Tailwind CSS</li>
					<li className="tech__item">GitHub API</li>
					<li className="tech__item">Vercel</li> */}
				</ul>
				<div className="project__links">
					<a href={data.previewURL} target="_">
						<FaExternalLinkAlt />
					</a>
					<a href={data.githubURL} target="_">
						<FaGithub />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
