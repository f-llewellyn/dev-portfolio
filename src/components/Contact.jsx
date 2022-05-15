const Contact = () => {
	return (
		<form
			name="contact"
			method="POST"
			data-netlify="true"
			netlify-honeypot="bot-field"
			className="contact__container"
		>
			<div className="contact__inputs">
				<p class="hidden">
					<label>
						Don't fill this out if you're human:
						<input name="bot-field" />
					</label>
				</p>
				<input type="text" placeholder="Name" />
				<input type="email" name="email" placeholder="Email" />
			</div>
			<textarea name="message" placeholder="Message"></textarea>
			<button className="btn btn--primary contact__btn">Submit</button>
		</form>
	);
};

export default Contact;
