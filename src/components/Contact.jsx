const Contact = () => {
	return (
		<>
			<p className="contact__text">
				I'm actively looking for jobs at the moment, so please feel free
				to get in touch if you fancy offering me one.
			</p>
			<form name="contact" method="POST" className="contact__container">
				<input type="hidden" name="form-name" value="contact" />
				<div className="contact__inputs">
					<p className="hidden">
						<label>
							Don't fill this out if you're human:
							<input name="bot-field" />
						</label>
					</p>
					<input type="text" placeholder="Name" required />
					<input
						type="email"
						name="email"
						placeholder="Email"
						required
					/>
				</div>
				<textarea
					name="message"
					placeholder="Message"
					required
				></textarea>
				<input
					type="submit"
					value="Submit"
					className="btn btn--primary contact__btn transition"
				/>
			</form>
		</>
	);
};

export default Contact;
