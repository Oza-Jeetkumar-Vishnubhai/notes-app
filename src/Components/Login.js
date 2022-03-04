import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './login.css'
import Navbar from './Navbar';

export default function Login() {
    const history = useHistory();
    const check = async () => {
        var username = document.getElementById('uname').value;
        var password = document.getElementById('pass').value;
        console.log(username, password);
        if(username!="" && password!="")
        {
            var data = await fetch(`/api/users/${username}/${password}`);
            var parsedData = await data.json();
            console.log(parsedData);
            if(parsedData.length!=0)
            {
                history.push({
                    pathname: '/newnote',
                    state: { username: username, password: password }
                })
            }
            else
                alert("Please confirm the password or username");
        }
        else {
            alert("Please confirm the password or username");
        }
    }
    return (
        <>
        <div className="login-container">
        <Navbar username="" dis={true}/>
            <div className="flex">
            <div className="login-box">
                <span className="resize">Login</span><br/>
                <b>Enter the username :</b> <input type="text" name="username" id="uname"/> <br />
                <b>Enter the password :</b> <input type="password" name="password" id="pass"/> <br />
                <button onClick={check}>Login</button><br/>
                <div>
                    <b>Don't have an Account?</b>
                    <Link to='/signup'><button>Signup</button></Link>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
