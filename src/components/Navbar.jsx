import React from "react"
import "../index.css"

export default function Navbar(){
    return (
        <div>
            <nav className="navbar">
            <img src="./images/logo.png" alt="React Logo" className="imglogo"></img>
            <h3>ReactFacts</h3>
            <h4>React Course-Project 1</h4>
            </nav>
        </div>
    )
}