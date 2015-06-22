(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 25,
	color: "#FFDDDD",
	manifest: [
		{src:"img_p6/cao0.png", id:"cao0"},
		{src:"img_p6/cao1.png", id:"cao1"},
		{src:"img_p6/cao2.png", id:"cao2"},
		{src:"img_p6/cao3.png", id:"cao3"},
		{src:"img_p6/cao4.png", id:"cao4"},
		{src:"img_p6/cao5.png", id:"cao5"},
		{src:"img_p6/cao6.png", id:"cao6"},
		{src:"img_p6/cloud12.png", id:"cloud12"},
		{src:"img_p6/cloud2.png", id:"cloud2"},
		{src:"img_p6/copy1.png", id:"copy1"},
		{src:"img_p6/copy2.png", id:"copy2"},
		{src:"img_p6/light2.png", id:"light2"},
		{src:"img_p6/pro1.png", id:"pro1"},
		{src:"img_p6/pro2.png", id:"pro2"},
		{src:"img_p6/pro3.png", id:"pro3"}
	]
};



// symbols:



(lib.cao0 = function() {
	this.initialize(img.cao0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,270);


(lib.cao1 = function() {
	this.initialize(img.cao1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,850,334);


(lib.cao2 = function() {
	this.initialize(img.cao2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,850,818);


(lib.cao3 = function() {
	this.initialize(img.cao3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,850,220);


(lib.cao4 = function() {
	this.initialize(img.cao4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,811,250);


(lib.cao5 = function() {
	this.initialize(img.cao5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,850,476);


(lib.cao6 = function() {
	this.initialize(img.cao6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,850,1016);


(lib.cloud12 = function() {
	this.initialize(img.cloud12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,227);


(lib.cloud2 = function() {
	this.initialize(img.cloud2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,568,223);


(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,43);


(lib.copy2 = function() {
	this.initialize(img.copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,357,44);


(lib.light2 = function() {
	this.initialize(img.light2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.pro1 = function() {
	this.initialize(img.pro1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,524);


(lib.pro2 = function() {
	this.initialize(img.pro2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,519);


(lib.pro3 = function() {
	this.initialize(img.pro3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,364);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud2();
	this.instance.setTransform(-284,-111.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-284,-111.5,568,223);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.light2();
	this.instance.setTransform(-65.5,-65.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.5,-65.5,131,131);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pro3();
	this.instance.setTransform(-104.5,-182);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.5,-182,209,364);


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pro2();
	this.instance.setTransform(-115,-259.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115,-259.5,230,519);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cao6();
	this.instance.setTransform(-425,-508);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-425,-508,850,1016);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cao5();
	this.instance.setTransform(-425,-238);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-425,-238,850,476);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cao4();
	this.instance.setTransform(-405.5,-125);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-405.5,-125,811,250);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cao3();
	this.instance.setTransform(-425,-110);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-425,-110,850,220);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cao1();
	this.instance.setTransform(-425,-167);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-425,-167,850,334);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cao2();
	this.instance.setTransform(-455.8,-670.3,1.036,1.036);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-455.8,-670.3,880.3,847.2);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cao0();
	this.instance.setTransform(-111.5,-135);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.5,-135,223,270);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy1();
	this.instance.setTransform(-141,-21.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-141,-21.5,282,43);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy2();
	this.instance.setTransform(-178.5,-22);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-178.5,-22,357,44);


(lib.ppp = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(248,217,142,0.247)","rgba(243,210,152,0.188)","rgba(217,166,18,0)"],[0,0.243,0.486,1],0,0,0,0,0,189.3).s().p("A0qUqQojojAAsHQAAsFIjolQIlojMFAAQMHAAIjIjQIkIlAAMFQAAMHokIjQojIksHAAQsFAAolokg");
	this.shape.setTransform(187.1,187.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,374.1,374.1);


(lib.cloud2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud12();
	this.instance.setTransform(-391.3,-157.5,1.476,1.476);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-391.3,-157.5,690.7,335);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween14("synched",0);
	this.instance.setTransform(-151.3,-30.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:227.8,y:36.3,alpha:1},13).to({x:638.9,y:-30.2,alpha:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.8,-95.7,131,131);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tween 3
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(149.5,12.6,0.975,0.975);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},28).wait(43));

	// Layer 1
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(146.1,83.6,0.975,0.975);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({alpha:1},26).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.1,-8.4,275,41.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro1();
	this.instance.setTransform(172.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// pro2.png
	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.setTransform(129.5,293.5,0.864,0.864);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:115,y:264.5},59,cjs.Ease.get(1)).wait(1));

	// pro3.png
	this.instance_2 = new lib.Tween13("synched",0);
	this.instance_2.setTransform(462.1,388.9,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:476.6,y:359.9},59,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.1,0,528.1,556.3);


(lib.cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween15("synched",0);
	this.instance.setTransform(-648.2,-160.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({x:440.1},191).to({_off:true},1).wait(87));

	// Layer 1
	this.instance_1 = new lib.cloud2_1("synched",0);
	this.instance_1.setTransform(-85.8,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:632.1},213).to({x:-480.1},1).to({x:-89.1},116).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-477.1,-44,690.7,335);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// copy2.png
	this.instance = new lib.Symbol3("synched",0,false);
	this.instance.setTransform(318.1,250.8,1,1,0,0,0,148.1,48.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({_off:true},109).wait(1));

	// light2.png
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(162.3,447.5,2.223,2.223,2.3,0,0,131.9,-1.2);
	this.instance_1.alpha = 0.5;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({_off:true},46).wait(64));

	// light2.png
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(226.6,437.6,1.133,1.133,2.3,0,0,132.1,-1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({_off:true},46).wait(64));

	// Layer 16
	this.instance_3 = new lib.ppp("synched",0);
	this.instance_3.setTransform(300.4,406.8,2.528,2.528,0,0,0,187.1,187);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({scaleX:5.04,scaleY:5.04,x:288.4,y:401,alpha:1},24,cjs.Ease.get(1)).to({regX:187,scaleX:2.95,scaleY:2.95,x:284.1,y:391,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(64));

	// cao0.png
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(500.2,1017.3,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,x:584.7,y:963.2},75,cjs.Ease.get(1)).to({_off:true},45).wait(1));

	// cao2.png
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(332.2,1018.7,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.06,scaleY:1.06,x:329.6,y:1032.5},75,cjs.Ease.get(1)).to({_off:true},45).wait(1));

	// cao1.png
	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.setTransform(328.1,1005.8,0.733,0.733);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,x:322.1,y:969},75,cjs.Ease.get(1)).to({_off:true},45).wait(1));

	// cao3.png
	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.setTransform(326.4,962,0.738,0.738);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,x:322.1,y:900.2},75,cjs.Ease.get(1)).to({_off:true},45).wait(1));

	// pro1.png
	this.instance_8 = new lib.Symbol2("synched",0,false);
	this.instance_8.setTransform(329,838.6,0.738,0.738,0,0,0,290.5,270.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,x:325.6,y:757.1,startPosition:59},75,cjs.Ease.get(1)).to({_off:true},45).wait(1));

	// cao4.png
	this.instance_9 = new lib.Tween8("synched",0);
	this.instance_9.setTransform(275.1,927.1,0.738,0.738);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,x:252.6,y:877.1},75,cjs.Ease.get(1)).to({_off:true},45).wait(1));

	// cao5.png
	this.instance_10 = new lib.Tween9("synched",0);
	this.instance_10.setTransform(307.1,900,0.838,0.838);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,x:320,y:816.2},75,cjs.Ease.get(1)).to({_off:true},45).wait(1));

	// Layer 3
	this.instance_11 = new lib.cloud1();
	this.instance_11.setTransform(651.6,507.8,1,1,0,0,0,234,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},120).wait(1));

	// cao6.png
	this.instance_12 = new lib.Tween10("synched",0);
	this.instance_12.setTransform(321.9,712.7,0.866,0.866);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1,scaleY:1,x:316,y:627},75,cjs.Ease.get(1)).to({_off:true},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,0,749.7,1152.9);


// stage content:



(lib.p6_html = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(990.6,597,1,1,0,0,0,990.6,597);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260.4,840.6,749.7,880.4);

})(wsy_p6 = wsy_p6||{}, img_p6 = img_p6||{}, ctj = ctj||{}, ss = ss||{});
var wsy_p6, img_p6, ctj, ss;

var AnimationP6 = (function (wsy, img, ctj) {
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

		self.exportRoot = new wsy.p6_html("independent", 0, false);
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
})(wsy_p6 = wsy_p6 || {}, img_p6 = img_p6 || {}, ctj = ctj || {});