const { app, BrowserWindow } = require('electron');
const path = require('path');

const public = 'public'; // Path for public webfiles

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 640,
    autoHideMenuBar: true
  });

  win.loadFile(path.join(__dirname, public, 'index.html'));
};

// Open a new window when the application is ready
app.whenReady().then(() => {
  createWindow();

  // On Darwin create a new window on activate if none is open
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Shutdown the application if all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
