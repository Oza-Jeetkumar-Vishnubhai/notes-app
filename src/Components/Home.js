import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../CSS/home.css'

export default function Home() {
    const login = () => {
        console.log("Login buton has been clicked");
    }
    const signup = () => {
        console.log("Signup buton has been clicked");
    }
    return (
        <div className="abc">
        <Navbar username="" dis={true}/>
        <div className="home">
            <h1>Notes web-app <br /><h3><sub>Create account and save your notes</sub></h3></h1>
            <div className="links">
                <Link to="/login"><button className="login" onClick={login}>Login</button></Link>
                <Link to="/signup"><button className="signup" onClick={signup}>signup</button></Link>
            </div>
        </div>
        </div>
    )
}
