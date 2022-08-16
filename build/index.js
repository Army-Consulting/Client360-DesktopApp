"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require('path');
const loadMainWindow = () => {
    const mainWindow = new electron_1.BrowserWindow({
        width: 1400,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadFile(path.join(__dirname, "/index.html"));
    console.log("it works!");
};
electron_1.app.on("ready", loadMainWindow);
electron_1.app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", () => {
    if (electron_1.BrowserWindow.getAllWindows().length == 0) {
        loadMainWindow();
    }
});
