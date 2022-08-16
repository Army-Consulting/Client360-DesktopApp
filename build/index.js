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
};
electron_1.app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.whenReady().then(() => {
    loadMainWindow();
    electron_1.app.on("activate", () => {
        if (electron_1.BrowserWindow.getAllWindows().length == 0) {
            loadMainWindow();
        }
    });
});
