const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Faouzia's Music",
        width: 250,
        height: 300,
        frame: false,
        resizable: false,
        alwaysOnTop: true,
        accentColor: false,
        icon: path.join(__dirname, './Assets/Icons/icon.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
        }
    });

    Menu.setApplicationMenu(null);

    // if (isDev) {
    //     mainWindow.webContents.openDevTools();
    // }

    mainWindow.loadFile(path.join(__dirname, './Renderer/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();

    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit();
    }
});

// quit app
ipcMain.on('quit app', (event, options) => quitApp());

function quitApp() {
    app.quit();
}