import React from 'react'
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
	return (
		<div style={{ backgroundImage: `url(assets/images/cinnamon_dark_bg.jpg)`, backgroundRepeat: "no-repeat" }}>
			<div className={styles.signup_container}>
				<div className={styles.signup_form_container}>
					<div className={styles.left}>
						<h1>Welcome Back</h1>
						<br />
						<Link to="/login">
							<button type="button" className={styles.white_btn}>
								Sing in
							</button>
						</Link>
						<br/>
						<Link to="/">
							<button type="button" className={styles.white_btn}>
								Back to Home
							</button>
						</Link>
					</div>
					<div className={styles.right}>
						<form className={styles.form_container}>
							<h1>Create Account</h1>
							<input
								type="text"
								placeholder="First Name"
								name="firstname"
								// onChange={handleChange}
								// value={data.firstName}
								required
								className={styles.input}
							/>
							<input
								type="text"
								placeholder="Last Name"
								name="lastname"
								// onChange={handleChange}
								// value={data.lastName}
								required
								className={styles.input}
							/>
							<input
								type="text"
								placeholder="Address"
								name="address"
								// onChange={handleChange}
								// value={data.email}
								required
								className={styles.input}
							/>
							<input
								type="text"
								placeholder="City"
								name="city"
								// onChange={handleChange}
								// value={data.password}
								required
								className={styles.input}
							/>
							<input
								type="text"
								placeholder="District"
								name="district"
								// onChange={handleChange}
								// value={data.firstName}
								required
								className={styles.input}
							/>
							<input
								type="tel"
								placeholder="User Mobile Number"
								name="userMobile"
								// onChange={handleChange}
								// value={data.lastName}
								required
								className={styles.input}
							/>
							<input
								type="email"
								placeholder="Email"
								name="email"
								// onChange={handleChange}
								// value={data.email}
								required
								className={styles.input}
							/>
							<input
								type="password"
								placeholder="Password"
								name="password"
								// onChange={handleChange}
								// value={data.password}
								required
								className={styles.input}
							/>
							<select className="form-select col-md-6" aria-label="Default select example" name='type'>
								<option value="estate-owner">Estate Owner</option>
								<option value="entreprenure">Entreprenure</option>
							</select>
							{/* {error && <div className={styles.error_msg}>{error}</div>} */}
							<br/>
							<button type="submit" className={styles.green_btn}>
								Sing Up
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
