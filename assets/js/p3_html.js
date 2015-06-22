(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"img_p3/_1_creamy.jpg", id:"_1_creamy"},
		{src:"img_p3/bg2.jpg", id:"bg2"},
		{src:"img_p3/copy1.png", id:"copy1"},
		{src:"img_p3/copy2.png", id:"copy2"},
		{src:"img_p3/light2.png", id:"light2"},
		{src:"img_p3/pro.png", id:"pro"},
		{src:"img_p3/shaozi.png", id:"shaozi"},
		{src:"img_p3/shaozi2pngcopy.png", id:"shaozi2pngcopy"},
		{src:"img_p3/shaozi3.png", id:"shaozi3"},
		{src:"img_p3/suannai1.png", id:"suannai1"},
		{src:"img_p3/suannai2.png", id:"suannai2"}
	]
};



// symbols:



(lib._1_creamy = function() {
	this.initialize(img._1_creamy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,729,1136);


(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,68);


(lib.copy2 = function() {
	this.initialize(img.copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,533,253);


(lib.light2 = function() {
	this.initialize(img.light2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.pro = function() {
	this.initialize(img.pro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,559,652);


(lib.shaozi = function() {
	this.initialize(img.shaozi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,565,230);


(lib.shaozi2pngcopy = function() {
	this.initialize(img.shaozi2pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,633,163);


(lib.shaozi3 = function() {
	this.initialize(img.shaozi3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,565,230);


(lib.suannai1 = function() {
	this.initialize(img.suannai1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,122);


(lib.suannai2 = function() {
	this.initialize(img.suannai2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,122);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy2();
	this.instance.setTransform(-266.5,-126.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-266.5,-126.5,533,253);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy1();
	this.instance.setTransform(-170.5,-34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-170.5,-34,341,68);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.suannai1();
	this.instance.setTransform(-130.6,58.4,1,1.14,0,-175,5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-130.6,-80.1,261.2,160.3);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.suannai1();
	this.instance.setTransform(-130.6,58.4,1,1.14,0,-175,5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-130.6,-80.1,261.2,160.3);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shaozi();
	this.instance.setTransform(-282.5,117.1,1,1.018,0,180,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-282.5,-117,565,234.1);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg2();
	this.instance.setTransform(-364.5,-568);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-364.5,-568,729,1136);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shaozi2pngcopy();

	// suannai1.png
	this.instance_1 = new lib.suannai1();
	this.instance_1.setTransform(241,166.5,1,1.021,-174.3);

	this.instance_2 = new lib.suannai1();
	this.instance_2.setTransform(-8.5,92.5,1,1.14,0,-175,5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.5,-46.1,641.6,212.6);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shaozi3();
	this.instance.setTransform(0,218.1,1,0.948,0,180,0);

	// Layer 2
	this.instance_1 = new lib.suannai2();
	this.instance_1.setTransform(0,190,1,1.034,0,180,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,565,218.1);


(lib.ppp = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(248,217,142,0.247)","rgba(243,210,152,0.188)","rgba(217,166,18,0)"],[0,0.243,0.486,1],0,0,0,0,0,189.3).s().p("A0qUqQojojAAsHQAAsFIjolQIlojMFAAQMHAAIjIjQIkIlAAMFQAAMHokIjQojIksHAAQsFAAolokg");
	this.shape.setTransform(187.1,187.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,374.1,374.1);


(lib.light2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.light2();
	this.instance.setTransform(-65.5,-65.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.5,-65.5,131,131);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(-149.1,162,1,1,-33.9);
	this.instance._off = true;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(-173.1,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance_1}]},7).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({_off:true,rotation:0,x:-173.1,y:9.9},7,cjs.Ease.get(1)).wait(63));

	// Layer 1
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(-146.1,88,1,1,0,0,0,-146.1,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,rotation:-0.2,x:-0.4,y:-0.6},0).wait(1).to({rotation:-1,x:-1.6,y:-2.6},0).wait(1).to({rotation:-2.6,x:-4.1,y:-6.5},0).wait(1).to({rotation:-5.2,x:-8.6,y:-12.9},0).wait(1).to({rotation:-9.2,x:-16,y:-22.2},0).wait(1).to({rotation:-14.1,x:-25.8,y:-32.9},0).wait(1).to({rotation:-18.2,x:-34.8,y:-41.3},0).wait(1).to({rotation:-20.8,x:-40.8,y:-46.2},0).wait(1).to({rotation:-22.1,x:-43.8,y:-48.5},0).wait(1).to({regX:-146.1,regY:88,rotation:-22.4,x:-146,y:88},0).to({rotation:-3.3,x:-156.1,y:112.1},5,cjs.Ease.get(-1)).to({rotation:3.8,x:-166.1,y:80.1},5,cjs.Ease.get(1)).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.5,-117,565,234.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tween 6
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(131,150,1,0.918);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.06,y:139.1},2,cjs.Ease.get(1)).to({scaleY:1.03,y:141.2},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(138,213.6,1,1,3.8,0,0,-146.1,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,579.2,270.9);


(lib.light1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light2_1("synched",0);
	this.instance.setTransform(-151.3,-30.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:227.8,y:36.3,alpha:1},13).to({x:638.9,y:-30.2,alpha:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.8,-95.7,131,131);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(152,-455.1,1,0.889,0,180,0,282.5,109.1);

	this.instance_1 = new lib.Symbol2("synched",0,false);
	this.instance_1.setTransform(149.1,-466.6,1,0.906,0,-173.3,6.7,289.6,135.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},62).to({state:[{t:this.instance_1}]},2).wait(37));

	// Layer 4
	this.instance_2 = new lib.Symbol4("synched",0);
	this.instance_2.setTransform(172,-467.5,1,1,0,0,0,316.5,81.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({_off:true},2).wait(39));

	// Layer 6
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.setTransform(152,-475,1,1,0,0,0,282.5,109.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58).to({_off:false},0).to({_off:true},2).wait(41));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgecAuHQjZgZifgbQmTgrtOitQmmhXlThNUAADAAAABVgp8UABVgp9gAEAAAUCE6gCNgAGAABQgEABlYVjQlZVkAEAAQACAB/7YbQ/5YcADABQARADkBAiQkoAokSANQg4ACg+AAQjzAAlYgogEhBFgsiIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:140,y:-566.9}).wait(30).to({graphics:null,x:0,y:0}).wait(71));

	// Layer 2
	this.instance_4 = new lib.Tween3("synched",0,false);
	this.instance_4.setTransform(320,-958.2);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:150,y:-340.1,startPosition:13},13,cjs.Ease.get(1)).to({startPosition:23},10).wait(1).to({regX:-33.5,regY:18.1,x:116.5,y:-322.7,startPosition:24},0).wait(1).to({y:-325.3,startPosition:25},0).wait(1).to({y:-330.5,startPosition:26},0).wait(1).to({y:-339.5,startPosition:27},0).wait(1).to({y:-354,startPosition:28},0).wait(1).to({y:-374.7,startPosition:29},0).wait(1).to({y:-395.4,startPosition:30},0).wait(1).to({y:-409.3,startPosition:31},0).wait(1).to({y:-417.2,startPosition:32},0).wait(1).to({y:-420.9,startPosition:33},0).wait(1).to({regX:0,regY:0,x:150,y:-440.1,startPosition:34},0).to({y:-460.1,startPosition:57},23).to({_off:true},1).wait(43));

	// Layer 1
	this.instance_5 = new lib.pro();
	this.instance_5.setTransform(-279.5,-326);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.5,-866.1,853.1,1192.1);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light2.png
	this.instance = new lib.light1("synched",0);
	this.instance.setTransform(162.3,447.5,2.223,2.223,2.3,0,0,131.9,-1.2);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},34).wait(1));

	// light2.png
	this.instance_1 = new lib.light1("synched",0);
	this.instance_1.setTransform(226.6,437.6,1.133,1.133,2.3,0,0,132.1,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},34).wait(1));

	// Layer 3
	this.instance_2 = new lib.ppp("synched",0);
	this.instance_2.setTransform(300.4,406.8,2.528,2.528,0,0,0,187.1,187);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:5.04,scaleY:5.04,x:288.4,y:401,alpha:1},18,cjs.Ease.get(1)).to({regX:187,scaleX:2.95,scaleY:2.95,x:284.1,y:391,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-615.3,-66,1388.6,945.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.Symbol5("synched",0,false);
	this.instance.setTransform(370.4,377.6,0.833,0.833,0,0,0,393.5,401.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91));

	// copy2.png
	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(330.5,412.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({alpha:1},20).wait(4));

	// copy1.png
	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.setTransform(332.5,164.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({alpha:1},21).wait(36));

	// pro.png
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(440.7,812.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:380.7,startPosition:26},26,cjs.Ease.get(1)).to({x:360.7,startPosition:52,loop:false},26).wait(39));

	// bg2.jpg
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.setTransform(336.5,568);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:276.5},52,cjs.Ease.get(1)).wait(39));

	// Layer 9
	this.instance_5 = new lib._1_creamy();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-470.3,-54,1484.6,1192.1);


// stage content:
(lib.p3_html = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0,false);
	this.instance.setTransform(364.5,568,1,1,0,0,0,364.5,568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,514,1484.6,1192.1);

})(wsy_p3 = wsy_p3||{}, img_p3 = img_p3||{}, ctj = ctj||{}, ss = ss||{});
var wsy_p3, img_p3, ctj, ss;



var AnimationP3 = (function (wsy, img, ctj) {
	var noop = function () {
	};

	var Animation = function (canvas) {
		p.initialize.apply(this, arguments);
	};

	var p = Animation.prototype;
	var s = Animation;

	p.initialize = function (canvas) {
		var self = this;

		self.canvas = canvas;
		self.exportRoot = null;
		self.stage = null;
		self.status = 0;
		self.onSwipe = null;

		ctj.Ticker.useRAF = true;
		ctj.Ticker.setFPS(wsy.properties.fps);
		self._tickListen = ctj.proxy(self._tickFunc, this);
	};

	p.prohandleFileLoad = function (evt) {
		if (evt.item.type == "image") {
			img[evt.item.id] = evt.result;
		}
	};

	p.handleComplete = function handleComplete(evt) {
		var self = this;

		self.exportRoot = new wsy.p3_html("independent", 0, false);
		self.stage = new ctj.Stage(self.canvas);
		self.stage.addChild(this.exportRoot);

		self.stage.update();
		if (self.onComplete && typeof self.onComplete === 'function') {
			self.onComplete();
		}
	};

	p._tickFunc = function (evt) {
		var self = this;
		self.callbackQueue[self.status].call(self, self.exportRoot);
		if (self._onceEnd &&
			self.onEnd &&
			self.exportRoot.currentFrame === self.exportRoot.totalFrames &&
			typeof self.onEnd === 'function') {
			self.onEnd();
			self._onceEnd = false;
		}
		self.stage.update(evt);
	};

	p.play = function (position) {
		var self = this;
		self._onceEnd = true;
		ctj.Ticker.addEventListener("tick", self._tickListen);
		self.exportRoot.gotoAndPlay(position);
	};

	p.stop = function (position) {
		var self = this;
		self.exportRoot.gotoAndStop(position);
		ctj.Ticker.removeEventListener("tick", self._tickListen);
	};

	p.callbackQueue = [
		function (exportRoot) {
			if (exportRoot.currentFrame === 65) {
				exportRoot.stop();
				if (this.onShake && typeof this.onShake === 'function') {
					this.onShake();
				}
				this.nextStatus();
			}
		},
		noop,
		function(exportRoot){
			exportRoot.play();
			this.nextStatus();
		},
		noop
	];

	p.nextStatus = function () {
		if (this.status < this.callbackQueue.length - 1) {
			this.status += 1;
		}
	};
	p.prevStatus = function () {
		if (this.status > 0) {
			this.status -= 1;
		}
	};

	p.preload = function () {
		var self = this;
		self.loader = new ctj.LoadQueue(false);
		self.loader.addEventListener("fileload", ctj.proxy(self.prohandleFileLoad, self));
		self.loader.addEventListener("progress", function (evt) {
			if (self.onProgress && typeof self.onProgress === 'function') {
				self.onProgress(evt.progress);
			}
		});
		self.loader.addEventListener("complete", ctj.proxy(self.handleComplete, self));
		self.loader.loadManifest(wsy.properties.manifest, true, "./assets/images/");
	};
	return Animation;
})(wsy_p3 = wsy_p3 || {}, img_p3 = img_p3 || {}, ctj = ctj || {});