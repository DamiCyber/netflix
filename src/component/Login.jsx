import React from 'react'
import "../assets/style.css/style.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const login = () => {
        navigate("/home")
    }
    return (
        <div>
            <div className="cover">
                <div className="container">
                    <div className="logo">
                        <img src="https://res.cloudinary.com/dgxvuw8wd/image/upload/v1718796714/ppqlbl875tfb1flsrvcy.png" alt="" />
                    </div>
                    <div className="login">
                        <div className="login-details">
                            <div className="header">
                                <h1>Sign In</h1>
                            </div>
                            <input type="email" placeholder='Email or Phone number' />
                            <input type="password" placeholder='Password' />
                            <button onClick={login} className='sign-in'>Sign In </button>
                            <p className='or'>OR</p>
                            <button className='code'>Use a Sign-In Code</button>
                            <div className="forgot">
                                <a href="#" className='forgot'>Forgot password?</a>
                            </div>
                            <div className="remember">
                                <input type="checkbox" />
                                <h3 className='move '>Remember me</h3>
                            </div>
                            <div className="new">
                                <div className="h3">New to Netflix?</div>
                                <button className='btn3'>Sign up now.</button>
                            </div>
                            <div className="captcha">
                                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className='learn'>Learn more.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body2"></div>
            </div>

        </div>
    )
}
export default Login



