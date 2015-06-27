(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"img_p5/copy1.png", id:"copy1"},
		{src:"img_p5/copy2.png", id:"copy2"},
		{src:"img_p5/suannai12.png", id:"suannai12"},
		{src:"img_p5/suannai1.png", id:"suannai1"},
		{src:"img_p5/suannai2.png", id:"suannai2"},
		{src:"img_p5/suannai3.png", id:"suannai3"},
		{src:"img_p5/tishi1.png", id:"tishi1"},
		{src:"img_p5/tishi2.png", id:"tishi2"}
	]
};



// symbols:



(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,55);


(lib.copy2 = function() {
	this.initialize(img.copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,36);


(lib.suannai12 = function() {
	this.initialize(img.suannai12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,498,498);


(lib.suannai1 = function() {
	this.initialize(img.suannai1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,629,655);


(lib.suannai2 = function() {
	this.initialize(img.suannai2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,499,499);


(lib.suannai3 = function() {
	this.initialize(img.suannai3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,260);


(lib.tishi1 = function() {
	this.initialize(img.tishi1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,24);


(lib.tishi2 = function() {
	this.initialize(img.tishi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,55);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD5047").s().p("AgkARIA0g5IAVBRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.7,-4.1,7.5,8.4);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tishi2();
	this.instance.setTransform(-20.5,-27.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,-27.5,41,55);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.suannai12();
	this.instance.setTransform(-249,-249);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-249,-249,498,498);


(lib.Tween5copy = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ANrRfIAAmPIIwAAIAAGPgA2aKAIAAtkILQAAIAANkgAo9oQIAApOIH9AAIAAJOg");
	mask.setTransform(-31.5,7.8);

	// Layer 1
	this.instance = new lib.suannai3();
	this.instance.setTransform(-170.5,-130);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-170.5,-104.2,282.5,224);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwjPnIAAmPIIxAAIAAGPgAT/FKIAApMIH+AAIAAJMgA79iAIAAtmILQAAIAANmg");
	mask.setTransform(-2,-29.2);

	// Layer 1
	this.instance = new lib.suannai3();
	this.instance.setTransform(-170.5,-130);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-170.5,-129.2,341,200);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.suannai2();
	this.instance.setTransform(-249.5,-249.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-249.5,-249.5,499,499);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy1();
	this.instance.setTransform(-222,-27.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-222,-27.5,444,55);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy2();
	this.instance.setTransform(-215,-18);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-215,-18,430,36);


(lib.Tween4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5copy("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},106).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-104.2,282.5,224);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},106).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-129.2,341,200);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Tween9("synched",0);
	this.instance.setTransform(65.4,3.8,1,1,34.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:17.3,x:46.7,y:1.9},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:26,y:4.2},9,cjs.Ease.get(1)).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("AguBbIAAi1IBdAAIAAC1g");
	var mask_graphics_12 = new cjs.Graphics().p("AEbBbIAAi1IBgAAIAAC1g");
	var mask_graphics_13 = new cjs.Graphics().p("AEWBbIAAi1IBlAAIAAC1g");
	var mask_graphics_14 = new cjs.Graphics().p("AEOBbIAAi1IBtAAIAAC1g");
	var mask_graphics_15 = new cjs.Graphics().p("AEBBbIAAi1IB6AAIAAC1g");
	var mask_graphics_16 = new cjs.Graphics().p("ADvBbIAAi1ICMAAIAAC1g");
	var mask_graphics_17 = new cjs.Graphics().p("ADYBbIAAi1ICjAAIAAC1g");
	var mask_graphics_18 = new cjs.Graphics().p("AC7BbIAAi1IDAAAIAAC1g");
	var mask_graphics_19 = new cjs.Graphics().p("ACXBbIAAi1IDjAAIAAC1g");
	var mask_graphics_20 = new cjs.Graphics().p("ABuBbIAAi1IEMAAIAAC1g");
	var mask_graphics_21 = new cjs.Graphics().p("ABCBbIAAi1IE4AAIAAC1g");
	var mask_graphics_22 = new cjs.Graphics().p("AAYBbIAAi1IFiAAIAAC1g");
	var mask_graphics_23 = new cjs.Graphics().p("AgMBbIAAi1IGFAAIAAC1g");
	var mask_graphics_24 = new cjs.Graphics().p("AgsBbIAAi1IGlAAIAAC1g");
	var mask_graphics_25 = new cjs.Graphics().p("AhEBbIAAi1IG9AAIAAC1g");
	var mask_graphics_26 = new cjs.Graphics().p("AhVBbIAAi1IHOAAIAAC1g");
	var mask_graphics_27 = new cjs.Graphics().p("AhhBbIAAi1IHaAAIAAC1g");
	var mask_graphics_28 = new cjs.Graphics().p("AhnBbIAAi1IHgAAIAAC1g");
	var mask_graphics_29 = new cjs.Graphics().p("AhnBbIAAi1IHiAAIAAC1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:71.2,y:4.9}).wait(1).to({graphics:mask_graphics_12,x:38,y:4.9}).wait(1).to({graphics:mask_graphics_13,x:38,y:4.9}).wait(1).to({graphics:mask_graphics_14,x:38,y:4.9}).wait(1).to({graphics:mask_graphics_15,x:38,y:4.9}).wait(1).to({graphics:mask_graphics_16,x:37.9,y:4.9}).wait(1).to({graphics:mask_graphics_17,x:37.9,y:4.9}).wait(1).to({graphics:mask_graphics_18,x:37.9,y:4.9}).wait(1).to({graphics:mask_graphics_19,x:37.9,y:4.9}).wait(1).to({graphics:mask_graphics_20,x:37.9,y:4.9}).wait(1).to({graphics:mask_graphics_21,x:37.8,y:4.9}).wait(1).to({graphics:mask_graphics_22,x:37.8,y:4.9}).wait(1).to({graphics:mask_graphics_23,x:37.8,y:4.9}).wait(1).to({graphics:mask_graphics_24,x:37.8,y:4.9}).wait(1).to({graphics:mask_graphics_25,x:37.7,y:4.9}).wait(1).to({graphics:mask_graphics_26,x:37.7,y:4.9}).wait(1).to({graphics:mask_graphics_27,x:37.7,y:4.9}).wait(1).to({graphics:mask_graphics_28,x:37.7,y:4.9}).wait(1).to({graphics:mask_graphics_29,x:38,y:4.9}).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DD5047").ss(3,1,1).p("ACwAOQiwgwivAi");
	this.shape.setTransform(46.6,4.2);
	this.shape._off = true;

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:false},0).wait(19));

	// tishi2.png
	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(55.5,39,1,1,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:30.9},0).wait(1).to({rotation:30.8,x:55.4},0).wait(1).to({rotation:30.6},0).wait(1).to({rotation:30.3,x:55.3},0).wait(1).to({rotation:29.8,x:55.1},0).wait(1).to({rotation:29.3,x:55},0).wait(1).to({rotation:28.6,x:54.7},0).wait(1).to({rotation:27.7,x:54.5,y:38.9},0).wait(1).to({rotation:26.7,x:54.2},0).wait(1).to({rotation:25.5,x:53.8},0).wait(1).to({rotation:24,x:53.3},0).wait(1).to({rotation:22.4,x:52.8},0).wait(1).to({rotation:20.5,x:52.2,y:38.8},0).wait(1).to({rotation:18.4,x:51.5},0).wait(1).to({rotation:16.2,x:50.9},0).wait(1).to({rotation:13.9,x:50.1,y:38.7},0).wait(1).to({rotation:11.7,x:49.4},0).wait(1).to({rotation:9.6,x:48.8},0).wait(1).to({rotation:7.6,x:48.2,y:38.6},0).wait(1).to({rotation:5.9,x:47.6},0).wait(1).to({rotation:4.5,x:47.2},0).wait(1).to({rotation:3.3,x:46.8},0).wait(1).to({rotation:2.3,x:46.5,y:38.5},0).wait(1).to({rotation:1.5,x:46.2},0).wait(1).to({rotation:0.9,x:46},0).wait(1).to({rotation:0.5,x:45.9},0).wait(1).to({rotation:0.2,x:45.8},0).wait(1).to({rotation:0.1},0).wait(1).to({rotation:0},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.tishi1();
	this.instance_2.setTransform(0,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.9,105,97.2);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(249,249);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},134).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,498,498);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(249.5,249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-357.4},132).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499,499);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol5();
	this.instance.setTransform(320.5,623.2,1,1,0,0,0,52.5,51);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(72));

	// Layer 5
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(318.5,258.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75).to({_off:false},0).to({alpha:1},17).to({_off:true},24).wait(13));

	// copy1.png
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(321.5,200.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).to({alpha:1},17).to({_off:true},35).wait(13));

	// Layer 3
	this.instance_3 = new lib.Tween4copy();
	this.instance_3.setTransform(320,632.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({alpha:1},11).to({_off:true},46).wait(13));

	// Layer 9
	this.instance_4 = new lib.Tween4();
	this.instance_4.setTransform(320,632.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({alpha:1},11).to({_off:true},63).wait(13));

	// suannai2.png
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(319.5,626.2,1,1,0,0,0,249.5,249.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).to({alpha:1},12).to({_off:true},77).wait(13));

	// Layer 10
	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(316.1,624.2,1,1,0,0,0,249,249);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},116).wait(13));

	// Layer 7
	this.instance_7 = new lib.suannai1();
	this.instance_7.setTransform(11,336.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},116).wait(13));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD9DA").s().p("Egx+BYvMAAAixeMBj9AAAMAAACxeg");
	this.shape.setTransform(320,568);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},116).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


// stage content:



(lib.p5_html = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,568,640,1136);

})(wsy_p5 = wsy_p5||{}, img_p5 = img_p5||{}, ctj = ctj||{}, ss = ss||{});
var wsy_p5, img_p5, ctj, ss;

var AnimationP5 = (function (wsy, img, ctj) {
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

		self.exportRoot = new wsy.p5_html("independent", 0, false);
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
		if(position === 0){
			self.status = 0;
		}
	};

	p.stop = function (position) {
		var self = this;
		self.exportRoot.gotoAndStop(position);
		ctj.Ticker.removeEventListener("tick", self._tickListen);
	};

	p.callbackQueue = [
		function (exportRoot) {
			if (exportRoot.currentFrame === 19) {
				exportRoot.stop();
				if (this.onSwipe && typeof this.onSwipe === 'function') {
					this.onSwipe(exportRoot.currentFrame);
				}
				this.nextStatus();
			}
		},
		noop,
		function (exportRoot) {
			exportRoot.play();
			this.nextStatus();
		},
		function (exportRoot) {
			if (exportRoot.currentFrame === 40) {
				exportRoot.stop();
				if (this.onSwipe && typeof this.onSwipe === 'function') {
					this.onSwipe(exportRoot.currentFrame);
				}
				this.nextStatus();
			}
		},
		noop,
		function (exportRoot) {
			exportRoot.play();
			this.nextStatus();
		},
		function (exportRoot) {
			if (exportRoot.currentFrame === 56) {
				exportRoot.stop();
				if (this.onSwipe && typeof this.onSwipe === 'function') {
					this.onSwipe(exportRoot.currentFrame);
				}
				this.nextStatus();
			}
		},
		noop,
		function (exportRoot) {
			exportRoot.play();
			this.nextStatus();
		},
		noop
	];

	p.nextStatus = function () {
		if (this.status < this.callbackQueue.length - 1) {
			this.status += 1;
		}else{
			this.status = 0;
		}
	};
	p.prevStatus = function () {
		if (this.status > 0) {
			this.status -= 1;
		}else{
			this.status = this.callbackQueue.length - 1;
		}
	};

	p.preload = function () {
		var self = this;
		self.loader = new ctj.LoadQueue(false);
		ctj.Sound.alternateExtensions = ["mp3"];
		self.loader.installPlugin(ctj.Sound);
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
})(wsy_p5 = wsy_p5 || {}, img_p5 = img_p5 || {}, ctj = ctj || {});