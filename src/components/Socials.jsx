import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Socials = () => {
	return (
		<div className="socials">
			<ul className="socials__list">
				<li>
					<a
						href="https://github.com/f-llewellyn"
						className="socials__link transition"
						target="_"
					>
						<FaGithub />
					</a>
				</li>
				<li>
					<a
						href="https://https://www.instagram.com/fin.ifus/"
						className="socials__link transition"
						target="_"
					>
						<FaInstagram />
					</a>
				</li>
				<li>
					<a
						href="https://https://www.instagram.com/fin.ifus/"
						className="socials__link transition"
						target="_"
					>
						<FaLinkedin />
					</a>
				</li>
				<li>
					<a
						href="https://https://www.instagram.com/fin.ifus/"
						className="socials__link transition"
						target="_"
					>
						<FaTwitter />
					</a>
				</li>
			</ul>
			<div className="socials__line"></div>
		</div>
	);
};

export default Socials;
