import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from './Card'
import Navbar from './Navbar';
// import { Link } from 'react-router-dom';

export default function SavedNote() {
    const location = useLocation();
    const history = useHistory();
    var err = 0;
    try {
        var username = location.state.username;

    } catch (error) {
        err = 1;
    }
    const add = () => {
            var info = location.state;
            history.push({
                pathname: '/newnote',
                state: { username: info.username, password: info.password }
            })
    }
    const [notes, setNotes] = useState([]);
    useEffect(async () => {
        if (err = 0) {
            var info = location.state;
            console.log("info", info);
            var data = await fetch(`/api/savednote/${info.username}/${info.password}`);
            var parsedData = await data.json();
            console.log(parsedData);
            setNotes(parsedData);
        }
    }, []);

    if (err)
        return(<><h1 className="text-center">PLease <Link to="/login">login</Link> and try again</h1></>)

    return (
        <>
            <Navbar username={username} />
            <div className="savedcontainer">
                <div className="heading">
                    Saved Notes
                </div>
                <div className="main">
                    {
                        notes.map((ele) => {
                            return <Card id={ele._id} note={ele.note} title={ele.title} />
                        })
                    }
                </div>
                <div className="add">
                    <button onClick={add}>Add Note</button>
                </div>
            </div>
        </>
    )
}
