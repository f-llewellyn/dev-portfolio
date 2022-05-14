const Hero = () => {
	const subheading = "I make things for real people to use <>";
	return (
		<div className="hero">
			<img className="code" src="/3d-code.png" alt="" />
			<h1 className="hero__title">Finn Llewellyn</h1>
			<p className="hero__sub">{subheading}</p>
		</div>
	);
};

export default Hero;
