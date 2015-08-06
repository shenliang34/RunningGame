var StartGameLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		this.init();
	},
	init:function(){
		this._super();
		
		var size = cc.winSize;
		var bg = cc.Sprite(res.HelloBG_png);
		bg.setPosition(size.width>>1, size.height>>1)
		this.addChild(bg);

		//startBtn
		var startBtn = new cc.MenuItemImage(
				res.Start_n_png,
				res.Start_s_png,
				function(){
					cc.log("startBtn click");
					cc.director.pushScene(new GameScene());
				});
//		startBtn.attr({x:(size.width >>1),y:50});
		var menu = new cc.Menu(startBtn);
		menu.setPosition(size.width>>1, 100);
		this.addChild(menu);
	}
});
var StartGameScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer = new StartGameLayer()
		this.addChild(layer);
	},
	onExit:function(){
		this._super();
	}
});