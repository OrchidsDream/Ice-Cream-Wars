import { useState } from "react";
import './Votes.css';
export default function Votes () {
    const [cVotes, setCVotes] = useState(0);
    const [vVotes, setVVotes] = useState(0);
    const [sVotes, setSVotes] = useState(0);

    let cPerc= cVotes / (cVotes + vVotes + sVotes) * 100;
    let vPerc= vVotes / (vVotes + cVotes + sVotes) * 100;
    let sPerc= sVotes / (sVotes + cVotes + vVotes) * 100;

    return (
        <div className = "Votes">
            <h2>Vote Here</h2>
            <div className="buttons">
                <button onClick={() => {setCVotes (cVotes + 1)}}>Chocolate</button>
                <button onClick={() => {setVVotes (vVotes + 1)}}>Vanilla</button>
                <button onClick={() => {setSVotes (sVotes + 1)}}>Strawberry</button>
            </div>
            <p>Chocolate: {cVotes}</p>
            <div className = "bars"style ={{backgroundColor: "brown", width: cPerc + "%"}}></div>
            <p>Vanilla: {vVotes}</p>
            <div className = "bars"style ={{backgroundColor: "tan", width: vPerc + "%"}}></div>
            <p>Strawberry: {sVotes}</p>
            <div className = "bars"style ={{backgroundColor: "pink", width:  sPerc + "%"}}> </div>
        </div>
    )
}