import React, { useState } from 'react'
import './card.css';

export default function Card(props) {
    const del = async () => {
        if (window.confirm("You note will be deleted!! Want to delete note?")) {
            const options = {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' }
            };
            window.location.href = '/savednote';
            await fetch(`/api/delete/${props.id}`, options);
        }
    }
    const [divname, setDivname] = useState("notediv");
    const [toggle, setToggle] = useState(false);
    const [textToggle, setTextToggle] = useState("Zoom In");
    const display = () => {
        setToggle(!toggle);
        if (!toggle) {
            setDivname("zoomdiv");
            setTextToggle("Zoom Out");
        }
        else {
            setDivname("notediv");
            setTextToggle("Zoom In");
        }
    }
    return (
        <div>
            <div className={divname}>
                <div className="title"><b>{props.title}</b><br /></div>
                <br />
                <div className="note" style={{overflowWrap: "anywhere"}}>{props.note}</div>
                <div className="footer"><button onClick={del} id="delbtn">Delete</button><button onClick={display} id="zoombtn">{textToggle}</button></div>
            </div>
        </div>
    )
}
