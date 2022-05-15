const About = () => {
	return (
		<>
			<div className="about__container">
				<p className="about__text">
					Hi. My name is Finn and I build things for the web that real
					people would use. I've been interested in programming since
					I received a Raspberry Pi for my 11th birthday and I've not
					really stopped since!
					<br />
					<br />
					In 2018, I started down the “web dev rabbit hole” with
					simple HTML and CSS static sites which has led me to today,
					able to use multiple front-end frameworks, as well as some
					full stack ones.
					<br />
					<br />
					I've recently hit it out as a freelance web developer,
					managing to grab myself a few clients in the form of some
					small businesses, but nothing major. I'm really looking to
					get myself a stable job as a developer with a proper salary
					and everything, to save up for a mortgage deposit for a
					house (exciting I know).
				</p>
				<img src="/me.png" alt="" />
			</div>
			<div className="about__container --two">
				<img src="/bike-pc.png" alt="" />
				<p className="about__text">
					As well as learning and applying new technologies, I also
					enjoy Mountain Biking and PC Building.
					<br />
					<br />
					I've been interested in the hardware aspect of computers for
					as long as I've enjoyed the software side of things.
					Starting off with an old Core 2 Quad (q6600) based machine,
					I have upgraded it peice by peice over the years, saving up
					my money until recently, when I had finally saved up enough
					for (in my poinion) a sweet gaming rig.
					<br />
					<br />
					Mountain Biking is a more recently developed hobby, although
					I have completely fallen in love with it, despite falling
					off a lot. I really enjoy having something that get's me up
					from my desk and allows my brain to have a rest from problem
					solving. Throwing myself down the side of hills on two
					wheels just has a certain appeal to it.
				</p>
			</div>
		</>
	);
};

export default About;
