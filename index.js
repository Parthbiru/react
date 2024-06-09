// var React = require('react');
import React from "react";
// var ReactDOM = require('react-dom');
import ReactDOM from "react-dom";
import "./index.css";

const img1 = "https://picsum.photos/236/354";
const img2 = "https://picsum.photos/300/355";
const img3 = "https://picsum.photos/400/356";
const Links = "https://www.lipsum.com/";

ReactDOM.render(
    <>
        <h1 class="heading">Parth Biru Favorite Skills </h1>
        <p>
            List of programming language
        </p>
        <div className="list">
        <ol>
                <li>Python</li>
                <li>php</li>
                <li>javascript</li>
                <li>C programming</li>
                <li>C#</li>
        </ol>

        </div>
        <div className="img">
        <img src={img1} alt="randomImages"/>
        <img src={img2} alt="randomImages"/>
        <img src={img3} alt="randomImages"/>
        <a href={Links} target="_lipsum"></a>

        </div>
    </>
    
    ,document.getElementById('root'));