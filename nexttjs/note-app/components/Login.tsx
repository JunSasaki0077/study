import { faBrain } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

const Login = () => {
	return (
		<>
		<div className="login-container">
			<h1 className="text-gradient">MDNOTES</h1>
			<h2>Organize note taking made easy</h2>
			<p>Build your very own archinve of easily navigated and indexed information and notes.</p>
		
		<div className="full-line"></div>
		<h6>Sign in</h6>
		<div>
			<p>Email</p>
			<input type="text" placeholder="Enter your email address" />
		</div>
		<div>
			<p>Password</p>
			<input type="password" placeholder="*******" />
		</div>
		
		<button className="submit-btn">
			<h6>Submit</h6>
		</button>
		<div className="secondary-btns-container">
			<button className="card-button-secondary">
				<small>Log in</small>
			</button>
			<button className="card-button-secondary">
				<small>Forgot password?</small>
			</button>
		</div>
		<div className="full-line"></div>
		<footer>
			<Link target="_blank" href="/">
			<Image src="https://avatars.githubusercontent.com/u/71161710?v=4" alt="github" width={200} height={200} />
			<h6>@jun</h6>
			<FontAwesomeIcon icon={faBrain}  width={23} height={23}/>
			</Link>
		</footer>
		</div>
		</>
	)
}
export default Login