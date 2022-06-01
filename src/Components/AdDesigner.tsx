import { useState } from "react";
import './AdDesigner.css';
import React from "react";

export default function AdDesigner() {
    const [flavor, setFlavor] = useState("Chocolate");
    const [theme, setTheme] = useState('light');
    const [fontSize, setFontSize] = useState(16);

    const styles = {
        fontSize: fontSize + "px"
    }
    return (
        <div className="AdDesigner">
            <h2>Ad Designer</h2>

            <div className={theme === "dark" ? "ad dark" : "ad" }>
                <h4>Vote For </h4>
                <h3 style = {styles}>{flavor}</h3>
            </div>

            <h3>What to support</h3>
            <div className = "buttons">
            <button disabled={flavor === "Chocolate"} onClick= {() =>{setFlavor("Chocolate")}}>Chocolate</button>
            <button disabled={flavor === "Vanilla"} onClick= {() =>{setFlavor("Vanilla")}}>Vanilla</button>
            <button disabled={flavor === "Strawberry"} onClick= {() =>{setFlavor("Strawberry")}}>Strawberry</button>
            </div>

            <h3>Color Theme</h3>
            <div className = "buttons">
            <button disabled={theme === "light"} onClick={() => {setTheme("light")}}>Light</button>
            <button disabled={theme === "dark" } onClick={() => {setTheme("dark")}}>Dark</button>
            </div>

            <h3>Font Size</h3>
            <div className="buttons">
            <button onClick={() => {setFontSize(fontSize - 1)}}>Down</button>
            <span>{fontSize}</span>
            <button onClick={() => {setFontSize(fontSize + 1)}}>Up</button>
            </div>
            
        </div>
    )
}
