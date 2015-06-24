(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
	var manifest = (function () {
		var imgarr = [];
		var createObj = function (num) {
			if (num < 10) {
				num = ['0', num].join('');
			}
			var tmp = {
				src: [
					"img_pt/zhu_guo",
					num,
					".png"
				].join(''),
				id: [
					"zhu_guo",
					num
				].join('')
			};
			return tmp;
		};
		for(var i = 0; i <= 43; i++){
			imgarr.push(createObj(i));
		}
		return imgarr;
	})();


// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 25,
	color: "#FFFFFF",
	manifest: manifest
};



// symbols:
	(function(lib, img, cjs){
		var createObj = function (num) {
			if (num < 10) {
				num = ['0', num].join('');
			}
			(lib['zhu_guo' + num] = function() {
				this.initialize(img['zhu_guo' + num]);
			}).prototype = p = new cjs.Bitmap();
			p.nominalBounds = new cjs.Rectangle(0,0,480,852);
		};
		for(var i = 0; i <= 43; i++){
			createObj(i);
		}
	})(lib, img, cjs);

// stage content:
(lib.main = function(mode,startPosition,loop) {
	var self = this;
	var time = 1;
	this.initialize(mode,startPosition,loop,{});

	(function(lib, self){
		var createObj = function (num) {
			if (num < 10) {
				num = ['0', num].join('');
			}

			self["instance" + num] = new lib["zhu_guo" + num]();
			self["instance" + num].setTransform(0,0,1.333,1.333);
		};
		for(var i = 0; i <= 43; i++){
			createObj(i);
		}
	})(lib, self);

	var tween = cjs.Tween.get({}).to({state: [{t: self.instance00}]});
	tween = (function(self, tween){
		var createObj = function (num) {
			if (num < 10) {
				num = ['0', num].join('');
			}
			return tween['to']({state: [{t: self["instance" + num]}]}, time);
		};
		for(var i = 1; i <= 43; i++){
		//for(var i = 4; i <= 29; i++){
			tween = createObj(i);
		}
		return tween;
	})(self, tween);
	tween = tween.wait(1);

	//window.test = tween;


	this.timeline.addTween(tween);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);

})(wsy_t = wsy_t||{}, img_t = img_t||{}, ctj = ctj||{}, ss = ss||{});
var wsy_t, img_t, ctj, ss;

var AnimationT = (function (wsy, img, ctj) {
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

		self.exportRoot = new wsy.main("independent", 0, true);
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
			if(exportRoot.currentFrame === 27){
				exportRoot.gotoAndPlay(7);
			}
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
})(wsy_t = wsy_t || {}, img_t = img_t || {}, ctj = ctj || {});
