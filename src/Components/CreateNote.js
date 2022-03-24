import React,{useEffect} from 'react'
import { useHistory, useLocation } from 'react-router'; //this has been updated 
import { Link } from 'react-router-dom';
import '../CSS/createnote.css'
import Navbar from './Navbar';

export default function CreateNote() {
    const location = useLocation();
    const history = useHistory();
    var err=0;
    try{
        // console.log("dat = ",location.state.username)
        // console.log("dat = ",location.state.password)
        var username = location.state.username;
        var password = location.state.password;
    }
    catch{
        err=1;
    }
    const saved = () => {

        // var username = location.state.username;
        // var password = location.state.password;
        history.push({
            pathname: '/savednote',
            state: { username: username, password: password }
        })
    }
    const save = async () => {
            var title = document.getElementById('title').value;
            var note = document.getElementById('note').value;
            console.log(title)
        if(title.length==0)
        {
            alert("Give some title to the note");
        }
        else if (window.confirm("Are you sure you want to save?")) {
            var title = document.getElementById('title').value;
            var note = document.getElementById('note').value;
            console.log(location.state);
            const data = { note: note, username: location.state.username, password: location.state.password, title: title};
            console.log(data);
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
            await fetch('/api/newnote', options);
            document.getElementById('note').value="";
            document.getElementById('title').value="";
        }
    }
    if(err==1)
    {
        return(<><h1 className="text-center">PLease <Link to="/login">login</Link> and try again</h1></>)
    }
    return (
        <div className="bg">
            <Navbar username={username}/>
        <div className="card">
            {/* <span style={{"font-size":"24px"}}>Title</span> */}
            <input type="text" name="title" id="title" placeholder="TITLE"/><br />
            <textarea cols="100" rows="15" id="note" placeholder="Write some note here"></textarea><br />
            <div>
            <button onClick={save} id="save">Save</button>
            <button onClick={saved} id="saved">Saved Notes</button>
            </div>
        </div>
        </div>
    )
}
