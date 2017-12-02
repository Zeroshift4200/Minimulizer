//META{"name":"Minimulizer"}*//
/*globals BdApi*/

'use strict';
var Minimulizer = function () {};
Minimulizer.prototype.getAuthor = function () {
	return "ヒデホヒ";
};
Minimulizer.prototype.getName = function () {
	return "Minimulizer";
};
Minimulizer.prototype.getDescription = function () {
	return "みにまらいざー！！";
};
Minimulizer.prototype.getVersion = function () {
	return "0.1.0";
};

Minimulizer.prototype.start = function () {
	this.isMinimulizer = false
	this.iconBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAATUlEQVQoz2P4//8/AxJGBwzomAGLIEkawCA5M58oDciKGWA0Lg0oivFhUhSD1YCtJkYxXAMhJ6C7AJ8irM7Fayo2vxHlDIIaYAGBLUAAohC+UIjIfPkAAAAASUVORK5CYII="
	this.titleBar = $('[class^=typeWindows]');
	this.MinMaxButton = $('[class^=winButtonMinMax]');
	this.MinimulizerButtonDiv = $('<div>',{
		class:this.MinMaxButton.attr('class')
	}).eq(0);
	this.defultSize = [940, 500]
	this.oldsize;
	this.flag = false;
	this.win = require('electron').remote.getCurrentWindow()
	this.MinimulizerButtonDiv.append($('<img>').attr('src',this.iconBase64));
	this.titleBar.append(this.MinimulizerButtonDiv);

	this.MinimulizerButtonDiv.on('click',()=>{
		if(this.flag){
			this.win.setMinimumSize(...this.defultSize);
			$('[class^=channels]').css({display:''})
			$('.channel-members-wrap').css({display:''})
			this.MinMaxButton.css({display:''})
			this.win.setAlwaysOnTop(false)
			this.win.setResizable(true)
			this.win.setMaximizable(true)
			this.win.setSize(...this.oldsize)
		}else{
			this.win.setMinimumSize(300,300)
			$('[class^=channels]').css({display:'none'})
			$('.channel-members-wrap').css({display:'none'})
			this.MinMaxButton.css({display:'none'})
			this.oldsize = this.win.getSize();
			this.win.setSize(300,300)
			this.win.setAlwaysOnTop(true)
			this.win.setResizable(false)
			this.win.setMaximizable(false)
		}
		this.flag = !this.flag
	})
};
Minimulizer.prototype.stop = function () {
	this.MinimulizerButtonDiv.remove()
};
Minimulizer.prototype.load = function () {};
Minimulizer.prototype.unload = function () {};
Minimulizer.prototype.onMessage = function () {};
Minimulizer.prototype.onSwitch = function () {};

Minimulizer.prototype.getSettingsPanel = function () {
	return ""
};


