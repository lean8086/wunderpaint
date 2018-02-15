/**
 * File
 *  - New ⌘N
 *  - Open ⌘O
 * Edit
 *  - Undo ⌘Z
 *  - Redo ⌘Y
 *  ---
 *  - Cut ⌘X
 *  - Copy ⌘C
 *  - Paste ⌘V
 * View
 *  - Toggle Grid ⌘G
 */

var gui = require('nw.gui'),
	win = gui.Window.get(),
	menu = new gui.Menu({'type': 'menubar'});

menu.createMacBuiltin("PixelArtist");

menu.append(new gui.MenuItem({
    label: 'File',
    submenu: new gui.Menu()
}));

menu.items[0].submenu.append(new gui.MenuItem({
    label: 'New',
    click: function () {
        gui.Window.open('index.html');
    }
}));
menu.items[0].submenu.append(new gui.MenuItem({
    type: 'separator'
}));
menu.items[0].submenu.append(new gui.MenuItem({
    label: 'Close',
    click: function () {
        gui.Window.get().close();
    }
}));

win.menu = menu;
