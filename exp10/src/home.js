import React from "react";
import './home.css';
class Home extends React.Component
{
    render()
    {
        return(
            <div>
            <div className="nav">
            <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/Menu">MENU</a></li>
                <li><a href="/book">BOOK A TABLE</a></li>   
            </ul>
            </div>

            <div className="container" id ="home">
                <h1>Welcome</h1>
            </div>
        </div>
        )
    }
}
export default Home