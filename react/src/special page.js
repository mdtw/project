import React, { Component } from 'react'; import './App.css'; class OtherListing extends Component { render() { return (<div className="App"><h1>SURPRISE</h1><div><img className="SpecialTime" src="https://i.imgur.com/kjgSsc0.gif" alt="Run Coward" height="500" width="500" /></div>{setColor()}</div>); } } function randomColor() { return '#' + ('000000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6); } function setColor() { document.body.style.backgroundColor = randomColor(); setTimeout(setColor, 100); } export default OtherListing;//rgb(3,87,125)//rgb(168,2,15)