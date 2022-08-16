import {app, BrowserWindow} from 'electron';
const path = require('path')

const loadMainWindow = () =>{
    const mainWindow = new BrowserWindow({
        width: 1400,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadFile(path.join(__dirname, "/index.html"))
    console.log("it works!")
}

app.on("ready", loadMainWindow)
app.on("window-all-closed", () => {
    if(process.platform != "darwin"){
        app.quit()
    }
})
app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length == 0){
        loadMainWindow()
    }
})