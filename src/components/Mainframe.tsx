import * as React from "react"
import {Component} from "react"
//const {ipcRenderer} = require('electron');


const Mainframe: React.FC<{}> = () =>{

   const onClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
       event.preventDefault()
       fetch("http://localhost:5000/", {method: 'GET'}).then(res => {})
       .catch((err)=>{
           console.log(err)
       })
   } 
    return (<div>
        <h1>Welcome to the timesheet app!</h1>
        <button onClick={onClickButton}>Click on API</button>
    </div>)
}

export default Mainframe