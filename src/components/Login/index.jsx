// import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Login() {
  return (
    <div style={{ backgroundImage: `url(assets/images/cinnamon_dark_bg.jpg)`, backgroundRepeat: "no-repeat" }}>
        <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container}>
						<h1>Login to <span style={{color:"#A12C2F"}}>CINNAMON</span></h1><br/>
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
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<Link to="/AdminHome">
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
						</Link>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1><br/>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
					<br/>
					<Link to="/">
							<button type="button" className={styles.white_btn}>
								Back to Home
							</button>
					</Link>
				</div>
			</div>
		</div>
    </div>
  )
}
