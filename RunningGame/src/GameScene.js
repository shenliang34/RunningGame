var GameLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
	}
});
var BackGroundLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		this.init();
	},
	init:function(){
		this._super();
		var bg = cc.Sprite(res.PlayBG_png);
		var size = cc.winSize;
		bg.setPosition(size.width>>1, size.height>>1);
		this.addChild(bg);
	}
});
/**
 * 动画层
 */
var AnimationLayer = cc.Layer.extend({
	spriteSheet:null,
	runningAction:null,
	sprite:null,
	
	ctor:function(){
		this._super();
		this.init();
	},
	init:function(){
		this._super();
		
		cc.spriteFrameCache.addSpriteFrames(res.Running_plist);
		this.spriteSheet = new cc.SpriteBatchNode(res.Running_png);
		this.addChild(this.spriteSheet);
		
		var anims = [];
		for (var i = 0; i < 8; i++) {
			var str = "runner"+i+".png";
			var frame = cc.spriteFrameCache.getSpriteFrame(str);
			anims.push(frame);
		}
		var animation = new cc.Animation(anims,0.1);
		this.runningAction = new cc.RepeatForever(new cc.Animate(animation));
		this.sprite = new cc.Sprite("#runner0.png");
		this.sprite.attr({x:80,y:85});
		this.sprite.runAction(this.runningAction);
		this.sprite.runAction(new cc.Sequence(cc.moveTo(2,cc.p(300, 85))))
		this.spriteSheet.addChild(this.sprite);
//		var man = new cc.Sprite(res.Runner_png);
//		this.addChild(man);
//		man.attr({x:80,y:85})
//		
//		var actionTo = new cc.MoveTo(2,cc.p(300, 85));
//		man.runAction(new cc.Sequence(actionTo));
	}
});
/**
 * 显示分数层
 * 金币层
 */
var StatusLayer = cc.Layer.extend({
	_coin:0,
	_meter:0,
	_labelCoin:null,
	_labelMeter:null,//里程
	ctor:function(){
		this._super();
		this.init();
	},
	init:function(){
		this._super();
		
		var size = cc.winSize;
		this._coin = 0;
		this._labelCoin = new cc.LabelTTF("Coin: "+this._coin,"Helvetica",20);
		this._labelCoin.setPosition(70, size.height - 50);
		this._labelCoin.setColor(cc.color(255, 255, 255, 255));
		this.addChild(this._labelCoin);
		
		this._labelMeter = new cc.LabelTTF("Meter:"+this._meter+"M","Helvetica",20);
		this._labelMeter.setColor(cc.color(255, 255, 1, 255));
		this._labelMeter.setPosition(size.width - 100, size.height - 50);
		this.addChild(this._labelMeter);
	}
});
var GameScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		//背景
		var backLayer = new BackGroundLayer();
		this.addChild(backLayer);
		//游戏
		var gamelayer = new GameLayer();
		this.addChild(gamelayer);
		//动画
		var animationLayer = new AnimationLayer();
		this.addChild(animationLayer);
		//状态显示
		var statusLayer = new StatusLayer();
		this.addChild(statusLayer);
		
	},
	onExit:function(){
		this._super();
	}
});