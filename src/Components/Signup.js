import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/login.css'
import Navbar from './Navbar'

export default function Signup() {
    return (
        <div className="login-container">
            <Navbar username="" dis={true}/>
            <div className="flex">
            <form method="POST" className="login-box">
                <span className="resize">Create New Account</span><br/>
                <b>Enter the username :</b> <input type="text" name="username" required /> <br />
                <b>Enter the password :</b> <input type="password" name="password" required /> <br />
                <input type="submit" value="Signup" id="btn"/><br/>
                <div>
                    Already have an Account?
                    <Link to='/login'><button>Login</button></Link>
                </div>
            </form>
            </div>
        </div>
    )
}
