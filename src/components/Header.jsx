const Header = () => {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<a href="#projects">
					<li className="nav__item transition raise">Projects</li>
				</a>
				<a href="#about">
					<li className="nav__item transition raise">About Me</li>
				</a>
				<a href="#contact">
					<li className="nav__item transition raise">Contact</li>
				</a>
			</ul>

			<a
				href="./CV.html"
				className="btn btn--primary nav__btn transition raise"
			>
				View My CV
			</a>
		</nav>
	);
};

export default Header;
