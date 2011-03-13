
Titanium.UI.setBackgroundColor('#000');

var win = Ti.UI.createWindow();


win.orientationModes = [
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT
];


var b1 = Ti.UI.createButton({
	title:'Take it!',
	width:  500,
	height: 300,
	top:    100,
	borderRadius: 80
});
b1.addEventListener('click', function() {
	// need to figure out what to call here...
});
win.add(b1);

win.open();
