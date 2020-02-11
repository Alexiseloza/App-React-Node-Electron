const { app, BrowserWindow } = require('electron');


let appWindow;
function crearVentana() {
     appWindow = new BrowserWindow({
          width:1400,
          height: 800,
          minWidth: 800,
          minHeight: 600,
          center: true,
          show: false
     });

     // cierre de la APP
     appWindow.on('closed', ()=> {
          appWindow = null;
     });

     // cargar HTML 
     appWindow.loadFile('./index.html');

     // cuando la APP esta lista
     appWindow.once('ready-to-show', ()=> {
          appWindow.show();
     });
}

app.on('ready', crearVentana);