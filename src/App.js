import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Info from './Components/Info.js'
import Image from './Components/Image.js'
import Header from './Components/Header.js'


function App() {
  const [nasaInfo, setNasaInfo] = useState([])


  useEffect(() => {
    const getNasaData = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
          setNasaInfo(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }
      getNasaData() 
    }, [] )


    return (
      <div className="App">
        <Header/>
        {/* <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        </p> */}
        <Image title = {nasaInfo.title} source = {nasaInfo.hdurl} />
        <Info copyright = {nasaInfo.copyright} date = {nasaInfo.date} explanation = {nasaInfo.explanation}/>
      </div>
    );
}

export default App;
