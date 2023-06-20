import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [first_name, setfirst_name] = useState("")
	const [last_name, setlast_name] = useState("")
	const [email, setEmail] = useState("");
	const [phone_number, setphone_number] = useState("")
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();
	const [validationErrors, setValidationErrors] = useState({})

	const handleSubmit = async (e) => {
		e.preventDefault();

		let errors = {}
		if (!first_name) errors.first_name = "First name required. Please enter your first name."
		if (!last_name) errors.last_name = "Last name required. Please enter your last name."
		if (!email) errors.email = "Please enter your email address."
		if (!password) errors.password = "Please enter a password between 6-12 characters (no spaces)."
		if (!username) errors.username="Please enter a username"
		if (!phone_number) errors.phone_number = "Please enter a valid phone number!"
		if(phone_number.length<10 || phone_number.length>10) errors.phone_number="Phone number must be 10 integers long"
		if(isNaN(phone_number)) errors.phone_number="phone number cannot include non-numerical values"
		if (!password) errors.password = "Password is required"
		setValidationErrors(errors)

		if (Object.keys(errors).length) return

		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, first_name, last_name, email, phone_number, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="signup-form">
					<div className="m1">
						<h3>Create an Account</h3>
					</div>
					<div className="beaut-insider">
						<img className="beaut-lg" src="https://cdn.discordapp.com/attachments/1062942242450460744/1120225007969247302/Screenshot_2023-06-18_at_10.33.58_PM.png" />
						{/* <h2 className="beaut">Beauty</h2>
						<h2 className="insider">INSIDER</h2> */}
					</div>
					<div className="the-rest">
						Join the Beauty Insider loyalty program. Earn points, get FREE standard shipping, redeem rewards, and more.
					</div>
					{errors.map((error, idx) => (
						<>

							<p className="error" key={idx}>{error}</p>
						</>
					))}
					<div className="first-last-sign-up">


						<div className="m1-fname">
							<label>
								{/* First Name */}
								<input
									placeholder="First Name"
									type='text'
									value={first_name}
									onChange={(e) => setfirst_name(e.target.value)}
								/>
							</label>
							{console.log("~~~~~~~~~", validationErrors.first_name)}

							{validationErrors.first_name ? (<p className="error">{validationErrors.first_name}</p>) : null}
						</div>

						<div className="m1-lname">
							<label>
								{/* Last Name */}
								<input
									placeholder="Last Name"
									type='text'
									value={last_name}
									onChange={(e) => setlast_name(e.target.value)}
								/>
							</label>
							{validationErrors.last_name ? (<p className="error">{validationErrors.last_name}</p>) : null}
						</div>

					</div>

					<div className="su-other-input">

							<div>
								<label>

							<input
								placeholder="Email Adress"
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}

							/>
						</label>
							</div>
					<div className="div-e">
						{validationErrors.email ? (<p className="error">{validationErrors.email}</p>) : null}
					</div>


					</div>


					<div className="su-other-input">
						<label>

							<input
								placeholder="Username"
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}

							/>
						</label>
						{validationErrors.username ? (<p className="error">{validationErrors.username}</p>) : null}
					</div>

					<div className="su-other-input">
						<label>

							<input
								placeholder="Phone Number"
								type='text'
								value={phone_number}
								onChange={(e) => setphone_number(e.target.value)}
							/>
						</label>
						{validationErrors.phone_number ? (<p className="error">{validationErrors.phone_number}</p>) : null}
					</div>
					<div className="su-other-input">


						<label>

							<input
								placeholder="Password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}

							/>
						</label>
						{validationErrors.password ? (<p className="error">{validationErrors.password}</p>) : null}

					</div>

					<div className="su-other-input">
						<label>

							<input
								placeholder="Confirm Password"
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}

							/>
						</label>
					</div>
					<div className="su-other-input">

						<button type="submit">Join Now</button>
					</div>
					<div className="m1-terms">
						<h5 className="terms-text-m1">This is not the official sephora page. By clicking join now you acknowledge that you understand this is not the real site but a clone. </h5>
					</div>
				</div>
			</form>
		</>
	);
}

export default SignupFormModal;
