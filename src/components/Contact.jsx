const Contact = () => {
	return (
		<form name="contact" method="POST" className="contact__container">
			<input type="hidden" name="form-name" value="contact" />
			<div className="contact__inputs">
				<p className="hidden">
					<label>
						Don't fill this out if you're human:
						<input name="bot-field" />
					</label>
				</p>
				<input type="text" placeholder="Name" />
				<input type="email" name="email" placeholder="Email" />
			</div>
			<textarea name="message" placeholder="Message"></textarea>
			<input
				type="submit"
				value="Submit"
				className="btn btn--primary contact__btn transition"
			/>
		</form>
	);
};

export default Contact;
