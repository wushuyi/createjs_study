(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"img_p4/bag.png", id:"bag"},
		{src:"img_p4/bg1.jpg", id:"bg1"},
		{src:"img_p4/img1.png", id:"img1"},
		{src:"img_p4/img3.png", id:"img3"},
		{src:"img_p4/img497.png", id:"img497"},
		{src:"img_p4/img553.png", id:"img553"},
		{src:"img_p4/img640.png", id:"img640"},
		{src:"img_p4/img642.png", id:"img642"},
		{src:"img_p4/img644.png", id:"img644"},
		{src:"img_p4/img647.png", id:"img647"},
		{src:"img_p4/img652.png", id:"img652"},
		{src:"img_p4/img87.png", id:"img87"}
	]
};



// symbols:



(lib.bag = function() {
	this.initialize(img.bag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,771,636);


(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,365,69);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,559,216);


(lib.img497 = function() {
	this.initialize(img.img497);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,294);


(lib.img553 = function() {
	this.initialize(img.img553);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,641,811);


(lib.img640 = function() {
	this.initialize(img.img640);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,36);


(lib.img642 = function() {
	this.initialize(img.img642);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,84);


(lib.img644 = function() {
	this.initialize(img.img644);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,269);


(lib.img647 = function() {
	this.initialize(img.img647);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,194);


(lib.img652 = function() {
	this.initialize(img.img652);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,808);


(lib.img87 = function() {
	this.initialize(img.img87);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,111);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg1();
	this.instance.setTransform(-320,-568);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-568,640,1136);


(lib.Symbol19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.img1, null, new cjs.Matrix2D(1,0,0,1,-182.5,-52.3)).s().p("A8gCmIAAlMMA5BAAAIAAFMg");
	this.shape.setTransform(182.5,16.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,365,33.4);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img640();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,36);


(lib.Symbol15copy = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnQAguMgDbgixIEG1bIRx0tIHqBNQEagrCHBdIDOCOIB4AqIH1MGISCQVISYiCIhtQoMgo0AXfI1wRAg");
	mask.setTransform(225.3,564.8);

	// Layer 1
	this.instance = new lib.img652();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,282,417,526);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img497();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157,294);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img87();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153,111);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img647();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,139,194);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img644();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72,269);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img642();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,84);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,559,216);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.img1, null, new cjs.Matrix2D(1,0,0,1,-182.5,-17.8)).s().p("A8gCyIAAljMA5BAAAIAAFjg");
	this.shape.setTransform(182.5,17.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,365,35.6);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bag();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,771,636);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img553();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,641,811);


(lib.sprite230 = function() {
	this.initialize();

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,59.3).s().p("AAAI6QjrAAininQininAAjsQAAjrCninQCninDrAAQDsAACnCnQCnCnAADrQAADsinCnQinCnjsAAIAAAAg");

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,59.3).s().p("AAAI6QjrAAininQininAAjsQAAjrCninQCninDrAAQDsAACnCnQCnCnAADrQAADsinCnQinCnjsAAIAAAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57,-57,114.1,114.1);


(lib.sprite228 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,86.4).s().p("ApbJcQj6j7gBlhQABlgD6j7QD7j6FggBQFhABD7D6QD6D7ABFgQgBFhj6D7Qj7D6lhABQlggBj7j6g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.5,-85.5,171,171);


(lib.sprite227 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(253,189,189,0.086)"],[0.91,1],0,0,0,0,0,44.5).s().p("Ak2E3QiBiBAAi2QAAi1CBiBQCBiBC1AAQC2AACBCBQCBCBAAC1QAAC2iBCBQiBCBi2AAQi1AAiBiBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44,-44,88.1,88.1);


(lib.sprite226 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,59.3).s().p("AAAI6QjrAAininQininAAjsQAAjrCninQCninDrAAQDsAACnCnQCnCnAADrQAADsinCnQinCnjsAAIAAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57,-57,114.1,114.1);


(lib.sprite223 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.255)","rgba(255,255,255,0.165)","rgba(255,255,255,0.043)","rgba(255,255,255,0)"],[0,0.596,0.667,0.855,1],0,0,0,0,0,39.2).s().p("AkSEUQgIgHBMhWQBMhWBzhwQBwhyBWhNQBWhLAHAHQAGAGhMBWQhNBVhxBxQhyByhVBMQhOBGgMAAIgBAAg");
	this.shape.setTransform(-0.3,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0.255)","rgba(255,255,255,0.165)","rgba(255,255,255,0.043)","rgba(255,255,255,0)"],[0,0.596,0.667,0.855,1],0,0,0,0,0,39.2).s().p("AC4DOQhWhNhxhxQhyhyhMhVQhNhVAHgGQAHgIBWBMQBWBMBwBzQByBwBMBWQBMBWgGAHIgCAAQgMAAhOhGg");
	this.shape_1.setTransform(-0.3,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0.255)","rgba(255,255,255,0.165)","rgba(255,255,255,0.043)","rgba(255,255,255,0)"],[0,0.596,0.667,0.855,1],0,0,0,0,0,30.7).s().p("AAAEwQh9ABhZhaQhahZABh+QgBh9BahZQBZhZB9gBQB+ABBZBZQBaBZgBB9QABB+haBZQhZBZh+AAIAAAAg");
	this.shape_2.setTransform(-0.4,0.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.2,61,61);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 19
	this.instance = new lib.Symbol19("synched",0);
	this.instance.setTransform(182.5,72.3,1,1,0,0,0,182.5,16.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(1).to({y:69.5,alpha:0.139},0).wait(1).to({y:67.1,alpha:0.26},0).wait(1).to({y:65,alpha:0.365},0).wait(1).to({y:63.2,alpha:0.456},0).wait(1).to({y:61.6,alpha:0.535},0).wait(1).to({y:60.2,alpha:0.604},0).wait(1).to({y:59,alpha:0.665},0).wait(1).to({y:58,alpha:0.717},0).wait(1).to({y:57,alpha:0.763},0).wait(1).to({y:56.3,alpha:0.802},0).wait(1).to({y:55.6,alpha:0.837},0).wait(1).to({y:55,alpha:0.866},0).wait(1).to({y:54.5,alpha:0.891},0).wait(1).to({y:54,alpha:0.913},0).wait(1).to({y:53.7,alpha:0.931},0).wait(1).to({y:53.4,alpha:0.947},0).wait(1).to({y:53.1,alpha:0.959},0).wait(1).to({y:52.9,alpha:0.97},0).wait(1).to({y:52.7,alpha:0.978},0).wait(1).to({y:52.6,alpha:0.985},0).wait(1).to({y:52.5,alpha:0.99},0).wait(1).to({y:52.4,alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({y:52.3,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(3));

	// Symbol 6
	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.setTransform(182.5,37.8,1,1,0,0,0,182.5,17.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:35,alpha:0.139},0).wait(1).to({y:32.6,alpha:0.26},0).wait(1).to({y:30.5,alpha:0.365},0).wait(1).to({y:28.7,alpha:0.456},0).wait(1).to({y:27.1,alpha:0.535},0).wait(1).to({y:25.7,alpha:0.604},0).wait(1).to({y:24.5,alpha:0.665},0).wait(1).to({y:23.5,alpha:0.717},0).wait(1).to({y:22.5,alpha:0.763},0).wait(1).to({y:21.8,alpha:0.802},0).wait(1).to({y:21.1,alpha:0.837},0).wait(1).to({y:20.5,alpha:0.866},0).wait(1).to({y:20,alpha:0.891},0).wait(1).to({y:19.5,alpha:0.913},0).wait(1).to({y:19.2,alpha:0.931},0).wait(1).to({y:18.9,alpha:0.947},0).wait(1).to({y:18.6,alpha:0.959},0).wait(1).to({y:18.4,alpha:0.97},0).wait(1).to({y:18.2,alpha:0.978},0).wait(1).to({y:18.1,alpha:0.985},0).wait(1).to({y:18,alpha:0.99},0).wait(1).to({y:17.9,alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({y:17.8,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,365,35.6);


(lib.Symbol17copy = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizCwIgXAHQg+gwgNhVIC8i0IDWg3ICYBmIgXAVIgOBcQgbgrg6AYQheBAhoAwQgqAfgIAgg");
	mask.setTransform(24.2,12.5);

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(25,18,1,1,0,0,0,25,18);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,31.2);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AisBDQgVgXAagdQCehABmhQQAjgSAgAnQAfAxgMA+IisCFQh8gLg3g6g");
	mask.setTransform(32.1,24.9);

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(25,18,1,1,0,0,0,25,18);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13.9,11.3,36.2,24.7);


(lib.sprite229 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sprite226("synched",0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},3).to({alpha:0.301},5).to({alpha:1},2).to({alpha:0.301},2).to({alpha:0},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-57,114.1,114.1);


(lib.sprite224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite223();
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:180,alpha:1},27,cjs.Ease.get(0.98)).to({scaleX:0.5,scaleY:0.5,rotation:270,alpha:0},27,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-15.1,30.5,30.5);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol17copy("synched",0,false);
	this.instance.setTransform(24.3,14.8,1,1,0,0,0,25,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:15.6,y:12.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:18,y:14.8},0).wait(1).to({regY:15.6,y:12.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:18,y:14.8},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol17("synched",0,false);
	this.instance_1.setTransform(24.3,14.8,1,1,0,0,0,25,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:31.9,regY:23.6,x:31.6,y:22},0).wait(1).to({x:31.9,y:23.3},0).wait(1).to({x:32.2,y:24.4},0).wait(1).to({x:32.4,y:25.4},0).wait(1).to({x:32.6,y:26.1},0).wait(1).to({x:32.7,y:26.6},0).wait(1).to({x:32.8,y:26.9},0).wait(1).to({regX:25,regY:18,x:25.9,y:21.4},0).wait(1).to({regX:31.9,regY:23.6,x:32.4,y:25.5},0).wait(1).to({x:32.1,y:24.1},0).wait(1).to({x:31.8,y:23},0).wait(1).to({x:31.6,y:22.1},0).wait(1).to({x:31.4,y:21.4},0).wait(1).to({x:31.3,y:20.9},0).wait(1).to({x:31.2,y:20.6},0).wait(1).to({regX:25,regY:18,x:24.3,y:14.8},0).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B2015").s().p("AiXAuIEwipQgUBOAQAqIi6B/IgFAAQh3AAAKhOg");
	this.shape.setTransform(28.1,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7B2015").s().p("AikAoIE+ixQgdBVApAvIjuCPQhngSALhQg");
	this.shape_1.setTransform(29.4,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7B2015").s().p("AieAoIE+ixQgdBVATApIjYCVQhngSALhQg");
	this.shape_2.setTransform(28.8,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B2015").s().p("AieAyIE+ixQgdBVAWAmIjbCEIgCAAQhlAAALhOg");
	this.shape_3.setTransform(28.8,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},6).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},1).to({state:[]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-3.2,50,36);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol18("single",0);
	this.instance.setTransform(230.7,246.3,1,1,0,0,0,25.4,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({mode:"synched",loop:false},0).to({regX:25.3,scaleX:1.1,skewY:-3,x:230.6,startPosition:7},7).to({regX:25.4,scaleX:1,skewY:0,x:230.7,startPosition:13},6).wait(20));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJHYXQjaAujChNQiYg8g6hlI3RjrIjo29IGXvvIN6mpIRKDxIPLLDICbMZIhOQnIn3Lfg");
	mask.setTransform(144.9,153);

	// Layer 1
	this.instance_1 = new lib.img652();

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,321.1,330.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 酸奶
	this.instance = new lib.Symbol12();
	this.instance.setTransform(431.5,528.3,1,1,0,0,0,69.5,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({rotation:0.1,x:431.6},0).wait(1).to({rotation:0.3,x:432.1,y:528.5},0).wait(1).to({rotation:0.7,x:433,y:528.8},0).wait(1).to({rotation:1.4,x:434.5,y:529.2},0).wait(1).to({rotation:2.5,x:437,y:530},0).wait(1).to({rotation:3.9,x:440.1,y:531},0).wait(1).to({rotation:5.3,x:443,y:532},0).wait(1).to({rotation:6.2,x:445.2,y:532.7},0).wait(1).to({rotation:6.9,x:446.6,y:533.1},0).wait(1).to({rotation:7.3,x:447.4,y:533.4},0).wait(1).to({rotation:7.4,x:447.8,y:533.6},0).wait(1).to({rotation:7.5,x:448},0).wait(1).to({x:447.8,y:533.5},0).wait(1).to({rotation:7.3,x:447.3,y:532.9},0).wait(1).to({rotation:7.2,x:446.7,y:532.4},0).wait(1).to({x:446.6,y:532.3},0).wait(1).to({rotation:7.1,x:446.4,y:532.2},0).wait(1).to({rotation:6.9,x:445.9,y:532.1},0).wait(1).to({rotation:6.4,x:444.8,y:531.8},0).wait(1).to({rotation:5.5,x:443,y:531.4},0).wait(1).to({rotation:4.3,x:440.4,y:530.6},0).wait(1).to({rotation:2.8,x:437.3,y:529.8},0).wait(1).to({rotation:1.6,x:434.7,y:529.1},0).wait(1).to({rotation:0.8,x:433,y:528.7},0).wait(1).to({rotation:0.3,x:432.1,y:528.4},0).wait(1).to({rotation:0.1,x:431.6,y:528.3},0).wait(1).to({rotation:0,x:431.5},0).wait(48));

	// 右手
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(392.9,620.6,1,1,0,0,0,24.3,88.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({regX:76.5,regY:55.5,rotation:0.1,x:445.2,y:587.7},0).wait(1).to({rotation:0.3,x:445.4,y:587.9},0).wait(1).to({rotation:0.7,x:446,y:588.3},0).wait(1).to({rotation:1.4,x:446.8,y:588.9},0).wait(1).to({rotation:2.5,x:448.1,y:589.8},0).wait(1).to({rotation:3.9,x:449.7,y:591},0).wait(1).to({rotation:5.3,x:451.2,y:592.2},0).wait(1).to({rotation:6.2,x:452.3,y:593.1},0).wait(1).to({rotation:6.9,x:453,y:593.7},0).wait(1).to({rotation:7.3,x:453.5,y:594},0).wait(1).to({rotation:7.4,x:453.6,y:594.2},0).wait(1).to({regX:24.3,regY:88.4,rotation:7.5,x:397.7,y:620.1},0).wait(1).to({regX:76.5,regY:55.5,x:453.6,y:594.2},0).wait(1).to({rotation:7.3,x:453.1,y:593.6},0).wait(1).to({rotation:7.2,x:452.8,y:593},0).wait(1).to({regX:24.3,regY:88.4,x:396.8,y:619.1},0).wait(1).to({regX:76.5,regY:55.5,rotation:7.1,x:452.6,y:592.9},0).wait(1).to({rotation:6.9,x:452.3,y:592.7},0).wait(1).to({rotation:6.4,x:451.9,y:592.3},0).wait(1).to({rotation:5.5,x:451,y:591.7},0).wait(1).to({rotation:4.3,x:449.7,y:590.8},0).wait(1).to({rotation:2.8,x:448.2,y:589.7},0).wait(1).to({rotation:1.6,x:446.8,y:588.9},0).wait(1).to({rotation:0.8,x:446,y:588.3},0).wait(1).to({rotation:0.3,x:445.4,y:587.9},0).wait(1).to({rotation:0.1,x:445.2,y:587.8},0).wait(1).to({regX:24.3,regY:88.4,rotation:0,x:392.9,y:620.6},0).wait(48));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("ApWBgQE4h9BwhMIB/icIKGC/IhFETInthYQi3CSibgBQimAAiDimg");
	var mask_graphics_23 = new cjs.Graphics().p("AgHBpQlKEJjdkuQDohGBwhNICAicIKFDDIhHEUg");
	var mask_graphics_29 = new cjs.Graphics().p("ApAA8QENhbBvhNIB/icIKHC/IhGEUInyh/QigC9iRAAQiXAAiCjNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:341.9,y:256.2}).wait(5).to({graphics:mask_graphics_23,x:348.8,y:254.2}).wait(6).to({graphics:mask_graphics_29,x:344.1,y:256.4}).wait(3).to({graphics:null,x:0,y:0}).wait(54));

	// 勺子
	this.instance_2 = new lib.Symbol10();
	this.instance_2.setTransform(388.4,282.5,1,1,0,0,0,84.5,14.9);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:53.5,regY:42,rotation:2.4,x:356.2,y:308.3},0).wait(1).to({rotation:4.3,x:355.4,y:307.2},0).wait(1).to({rotation:5.6,x:354.8,y:306.4},0).wait(1).to({rotation:6.4,x:354.5,y:306},0).wait(1).to({regX:84.5,regY:14.9,rotation:6.7,x:388.3,y:282.5},0).wait(1).to({regX:53.5,regY:42,rotation:4.3,x:355.4,y:307.2},0).wait(1).to({rotation:2.4,x:356.2,y:308.3},0).wait(1).to({rotation:1.1,x:356.8,y:309},0).wait(1).to({rotation:0.3,x:357.2,y:309.5},0).wait(1).to({regX:84.5,regY:14.9,rotation:0,x:388.4,y:282.5},0).wait(1).to({regX:53.5,regY:42,rotation:0.4,x:357.1,y:309.2},0).wait(1).to({rotation:1.7,x:356.1,y:307.8},0).wait(1).to({rotation:4.4,x:354.3,y:305.2},0).wait(1).to({rotation:8.7,x:351.4,y:300.6},0).wait(1).to({rotation:15.4,x:347.4,y:293.3},0).wait(1).to({rotation:24.6,x:342.8,y:282.9},0).wait(1).to({rotation:34.7,x:338.9,y:271.2},0).wait(1).to({rotation:43.1,x:336.6,y:261.2},0).wait(1).to({rotation:49.1,x:335.4,y:254.1},0).wait(1).to({rotation:53,x:334.9,y:249.6},0).wait(1).to({rotation:55.4,x:334.8,y:246.8},0).wait(1).to({rotation:56.6,x:334.7,y:245.4},0).wait(1).to({regX:84.4,regY:14.8,rotation:57,x:374.3,y:256.2},0).wait(1).to({regX:53.5,regY:42,rotation:56.2,x:334.5,y:245.7},0).wait(1).to({rotation:53,x:333.7,y:248.4},0).wait(1).to({rotation:49.8,x:333.3,y:251},0).wait(1).to({regX:84.4,regY:14.9,rotation:49.1,x:374,y:257.2},0).wait(1).to({regX:53.5,regY:42,rotation:48.6,x:333.4,y:252.2},0).wait(1).to({rotation:46.9,x:333.7,y:254.3},0).wait(1).to({rotation:43.5,x:334.5,y:258.4},0).wait(1).to({rotation:37.7,x:336.3,y:265.6},0).wait(1).to({rotation:29.1,x:339.6,y:276.2},0).wait(1).to({rotation:19.2,x:344.6,y:288.1},0).wait(1).to({rotation:10.9,x:349.7,y:297.7},0).wait(1).to({rotation:5.4,x:353.4,y:303.8},0).wait(1).to({rotation:2.1,x:355.8,y:307.3},0).wait(1).to({rotation:0.5,x:357,y:309.1},0).wait(1).to({regX:84.5,regY:14.9,rotation:0,x:388.4,y:282.5},0).wait(1).to({regX:53.5,regY:42,rotation:2.4,x:356.2,y:308.3},0).wait(1).to({rotation:4.3,x:355.4,y:307.2},0).wait(1).to({rotation:5.6,x:354.8,y:306.4},0).wait(1).to({rotation:6.4,x:354.5,y:306},0).wait(1).to({regX:84.5,regY:14.9,rotation:6.7,x:388.3,y:282.5},0).wait(1).to({regX:53.5,regY:42,rotation:4.3,x:355.4,y:307.2},0).wait(1).to({rotation:2.4,x:356.2,y:308.3},0).wait(1).to({rotation:1.1,x:356.8,y:309},0).wait(1).to({rotation:0.3,x:357.2,y:309.5},0).wait(1).to({regX:84.5,regY:14.9,rotation:0,x:388.4,y:282.5},0).wait(38));

	// 左手
	this.instance_3 = new lib.Symbol11();
	this.instance_3.setTransform(424,574.6,1,1,0,0,0,55.4,318.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({regX:36,regY:134.5,x:404.5,y:390.6},0).wait(1).to({rotation:-0.1,x:404.4,y:390.1},0).wait(1).to({rotation:-0.3,x:404,y:389.1},0).wait(1).to({rotation:-0.5,x:403.4,y:387.5},0).wait(1).to({rotation:-0.9,x:402.4,y:385.1},0).wait(1).to({rotation:-1.5,x:401.2,y:381.8},0).wait(1).to({rotation:-2.1,x:399.8,y:378.2},0).wait(1).to({rotation:-2.6,x:398.6,y:375.2},0).wait(1).to({rotation:-2.9,x:397.8,y:373.1},0).wait(1).to({rotation:-3.2,x:397.2,y:371.7},0).wait(1).to({rotation:-3.3,x:396.9,y:370.8},0).wait(1).to({rotation:-3.4,x:396.7,y:370.5},0).wait(1).to({regX:55.4,regY:318.4,x:427,y:552.8},0).wait(1).to({regX:36,regY:134.5,x:396.6,y:370.4},0).wait(1).to({rotation:-3.3,x:396.4,y:370.8},0).wait(1).to({x:396.2,y:371.3},0).wait(1).to({regX:55.4,regY:318.4,x:426,y:553.9},0).wait(1).to({regX:36,regY:134.5,rotation:-3.2,x:396.2,y:371.5},0).wait(1).to({rotation:-3.1,x:396.5,y:372.2},0).wait(1).to({rotation:-2.9,x:397.1,y:373.5},0).wait(1).to({rotation:-2.5,x:398.1,y:375.7},0).wait(1).to({rotation:-1.9,x:399.6,y:379.1},0).wait(1).to({rotation:-1.3,x:401.3,y:383},0).wait(1).to({rotation:-0.7,x:402.7,y:386.4},0).wait(1).to({rotation:-0.4,x:403.7,y:388.6},0).wait(1).to({rotation:-0.1,x:404.3,y:389.8},0).wait(1).to({rotation:0,x:404.5,y:390.5},0).wait(1).to({regX:55.4,regY:318.4,x:424,y:574.6},0).wait(48));

	// 头
	this.instance_4 = new lib.Symbol15("single",0);
	this.instance_4.setTransform(222.2,306,1,1,0,0,0,160.6,306);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({mode:"synched",loop:false},0).wait(1).to({regX:160.5,regY:165,rotation:0.1,x:222.3,y:165.1,startPosition:1},0).wait(1).to({rotation:0.2,x:223,startPosition:2},0).wait(1).to({rotation:0.6,x:224.4,startPosition:3},0).wait(1).to({rotation:1.3,x:226.8,y:165.2,startPosition:4},0).wait(1).to({rotation:2.2,x:230.5,y:165.3,startPosition:5},0).wait(1).to({rotation:3.5,x:235.2,y:165.6,startPosition:6},0).wait(1).to({rotation:4.7,x:239.6,y:165.9,startPosition:7},0).wait(1).to({rotation:5.6,x:243,y:166.1,startPosition:8},0).wait(1).to({rotation:6.2,x:245.1,y:166.3,startPosition:9},0).wait(1).to({rotation:6.5,x:246.3,y:166.5,startPosition:10},0).wait(1).to({rotation:6.7,x:246.9,startPosition:11},0).wait(1).to({regX:160.6,regY:306.1,x:230.8,y:306.6},0).wait(1).to({regX:160.5,regY:165,x:246.8,y:166.5,startPosition:12},0).wait(1).to({rotation:6.6,x:245.4,y:166.4,startPosition:13},0).wait(1).to({rotation:6.4,x:244.1,y:166.3,startPosition:14},0).wait(1).to({regX:160.6,regY:306.1,x:228.2,y:306.5,startPosition:15},0).wait(1).to({regX:160.5,regY:165,rotation:6.3,x:243.5,y:166.3,startPosition:16},0).wait(1).to({rotation:6.1,x:242.8,y:166.2,startPosition:17},0).wait(1).to({rotation:5.7,x:241.3,y:166.1,startPosition:18},0).wait(1).to({rotation:4.9,x:238.7,y:165.9,startPosition:19},0).wait(1).to({rotation:3.8,x:235,y:165.6,startPosition:20},0).wait(1).to({rotation:2.5,x:230.6,y:165.3,startPosition:21},0).wait(1).to({rotation:1.4,x:226.9,y:165.1,startPosition:22},0).wait(1).to({rotation:0.7,x:224.5,startPosition:23},0).wait(1).to({rotation:0.3,x:223,y:165,startPosition:24},0).wait(1).to({rotation:0.1,x:222.3,startPosition:25},0).wait(1).to({regX:160.6,regY:306,rotation:0,x:222.2,y:306,mode:"single",startPosition:0},0).wait(48));

	// 身体
	this.instance_5 = new lib.Symbol15copy();
	this.instance_5.setTransform(189.5,791.6,1,1,0,0,0,127.9,791.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({regX:208.5,regY:545,x:270.2,y:545.1},0).wait(1).to({rotation:0.1,x:270.3},0).wait(1).to({x:270.7,y:545.2},0).wait(1).to({rotation:0.3,x:271.2,y:545.4},0).wait(1).to({rotation:0.5,x:272.1,y:545.7},0).wait(1).to({rotation:0.7,x:273.1,y:546},0).wait(1).to({rotation:0.9,x:274.1,y:546.4},0).wait(1).to({rotation:1.1,x:274.9,y:546.5},0).wait(1).to({rotation:1.2,x:275.3,y:546.7},0).wait(1).to({rotation:1.3,x:275.6,y:546.8},0).wait(1).to({x:275.8,y:546.9},0).wait(1).to({regX:128,regY:791.6,x:189.5,y:791.5},0).wait(1).to({regX:208.5,regY:545,x:275.6,y:546.8},0).wait(1).to({rotation:1.2,x:275,y:546.7},0).wait(1).to({rotation:1.1,x:274.5,y:546.5},0).wait(1).to({regX:128,regY:791.6,rotation:1,x:189.6,y:791.6},0).wait(1).to({regX:208.5,regY:545,x:274.4,y:546.5},0).wait(1).to({x:274.2,y:546.4},0).wait(1).to({rotation:0.9,x:273.9,y:546.3},0).wait(1).to({rotation:0.8,x:273.4,y:546.1},0).wait(1).to({rotation:0.6,x:272.7,y:545.8},0).wait(1).to({rotation:0.4,x:271.8,y:545.6},0).wait(1).to({rotation:0.2,x:271,y:545.3},0).wait(1).to({rotation:0.1,x:270.5,y:545.2},0).wait(1).to({rotation:0,x:270.3,y:545.1},0).wait(1).to({x:270.1,y:545},0).wait(1).to({regX:127.9,regY:791.6,x:189.5,y:791.6},0).wait(48));

	// 椅子
	this.instance_6 = new lib.Symbol14();
	this.instance_6.setTransform(78.5,685.4,1,1,0,0,0,78.5,147);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560.2,847.7);


(lib.sprite225 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 15
	this.instance = new lib.sprite224("synched",0);
	this.instance.setTransform(-17.5,-1.9,1,1,0,45,-135);
	this.instance.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61));

	// Layer 13
	this.instance_1 = new lib.sprite224("synched",0);
	this.instance_1.setTransform(-0.4,-5.6,2,2,-45);
	this.instance_1.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,-44.2,78,78.1);


(lib.yj231 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 11
	this.instance = new lib.sprite227("synched",0);
	this.instance.setTransform(386.1,34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-133.9},59).wait(6));

	// 图层 12
	this.instance_1 = new lib.sprite229("synched",0);
	this.instance_1.setTransform(-155,32.9,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:385},59).wait(6));

	// 图层 13
	this.instance_2 = new lib.sprite230();
	this.instance_2.setTransform(41.7,78.6,1,1,0,0,0,45.6,45.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:321.7},53).wait(6));

	// 图层 14
	this.instance_3 = new lib.sprite225("synched",0,false);
	this.instance_3.setTransform(84.1,37.3,1.714,1.714,0,-5.2,174.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65));

	// 图层 15
	this.instance_4 = new lib.sprite228("synched",0);
	this.instance_4.setTransform(-77.4,35.5,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:262.6},64).wait(1));

	// 图层 16
	this.instance_5 = new lib.sprite228("synched",0);
	this.instance_5.setTransform(-227.4,21.5);
	this.instance_5.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:573.6,y:35.5},64).wait(1));

	// 图层 17
	this.instance_6 = new lib.sprite228("synched",0);
	this.instance_6.setTransform(175,37.8,0.45,0.45);
	this.instance_6.alpha = 0.301;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 0, 0)];
	this.instance_6.cache(-87,-87,175,175);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-25},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-312.9,-64,743,171);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.yj231("synched",0,false);
	this.instance.setTransform(305.4,171,1.15,1.15,57.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({startPosition:50},0).to({alpha:0,startPosition:61},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-135.4,712,949.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol20("synched",0,false);
	this.instance.setTransform(324.9,184.9,1,1,0,0,0,182.5,34.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(111));

	// Layer 5
	this.instance_1 = new lib.Symbol8("synched",0);
	this.instance_1.setTransform(325.5,407,1,1,0,0,0,325.5,407);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// Layer 4
	this.instance_2 = new lib.Symbol2("synched",0);
	this.instance_2.setTransform(381.1,310.1,1,1,0,0,0,320.5,405.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// bag
	this.instance_3 = new lib.Symbol5("synched",0);
	this.instance_3.setTransform(584.5,968.3,0.6,0.6,0,0,0,385.4,317.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({startPosition:0},0).wait(1).to({regX:385.5,regY:318,x:584.4,y:968.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:584.2,y:968.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:583.7,y:967.8},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:583,y:967.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:582.1,y:966.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:581,y:966.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:579.6,y:965.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:578,y:964.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:576.1,y:963.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:573.8,y:961.8},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:571.3,y:960.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:568.5,y:958.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:565.2,y:956.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:561.6,y:954.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:557.7,y:952},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:553.3,y:949.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:548.5,y:946.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:543.3,y:943.3},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:537.6,y:939.9},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:531.6,y:936.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:525.2,y:932.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:518.4,y:928.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:511.3,y:923.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:503.9,y:919.4},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:496.4,y:914.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:488.7,y:910.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:481,y:905.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:473.4,y:900.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:465.9,y:896.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:458.6,y:891.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:451.5,y:887.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:444.8,y:883.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:438.4,y:879.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:432.3,y:876},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:426.5,y:872.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:421.2,y:869.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:416.2,y:866.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:411.6,y:863.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:407.3,y:860.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:403.3,y:858.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:399.6,y:856.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:396.3,y:854.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:393.2,y:852.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:390.4,y:850.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:387.9,y:849},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:385.6,y:847.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:383.5,y:846.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:381.7,y:845.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:380.1,y:844.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:378.6,y:843.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:377.4,y:842.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:376.3,y:841.9},0).wait(1).to({scaleX:1,scaleY:1,x:375.4,y:841.4},0).wait(1).to({scaleX:1,scaleY:1,x:374.6,y:840.9},0).wait(1).to({scaleX:1,scaleY:1,x:374,y:840.6},0).wait(1).to({scaleX:1,scaleY:1,x:373.6,y:840.3},0).wait(1).to({scaleX:1,scaleY:1,x:373.2,y:840.1},0).wait(1).to({x:373.1,y:840},0).wait(1).to({regX:385.4,regY:317.9,x:372.8,y:839.9},0).wait(26));

	// table
	this.instance_4 = new lib.Symbol7("synched",0);
	this.instance_4.setTransform(363,1042.1,1,1,0,0,0,279.5,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({startPosition:0},0).wait(1).to({x:362.9,y:1042},0).wait(1).to({scaleX:1,scaleY:1,x:362.7,y:1041.9},0).wait(1).to({scaleX:1,scaleY:1,x:362.2,y:1041.8},0).wait(1).to({scaleX:1.01,scaleY:1,x:361.6,y:1041.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:360.8,y:1041.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:359.7,y:1040.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,skewY:0.1,x:358.5,y:1040.4},0).wait(1).to({scaleX:1.03,scaleY:1.02,x:356.9,y:1039.8},0).wait(1).to({scaleX:1.04,scaleY:1.03,x:355.2,y:1039.2},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:353.1,y:1038.4},0).wait(1).to({scaleX:1.06,scaleY:1.05,x:350.8,y:1037.5},0).wait(1).to({scaleX:1.07,scaleY:1.06,skewY:0.2,x:348.2,y:1036.5},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:345.2,y:1035.4},0).wait(1).to({scaleX:1.1,scaleY:1.08,skewY:0.3,x:341.9,y:1034.2},0).wait(1).to({scaleX:1.12,scaleY:1.1,x:338.2,y:1032.8},0).wait(1).to({scaleX:1.13,scaleY:1.11,skewY:0.4,x:334.2,y:1031.3},0).wait(1).to({scaleX:1.16,scaleY:1.13,x:329.8,y:1029.7},0).wait(1).to({scaleX:1.18,scaleY:1.15,skewY:0.5,x:325,y:1027.9},0).wait(1).to({scaleX:1.2,scaleY:1.17,x:319.8,y:1025.9},0).wait(1).to({scaleX:1.23,scaleY:1.19,skewY:0.6,x:314.2,y:1023.8},0).wait(1).to({scaleX:1.25,scaleY:1.22,skewY:0.7,x:308.3,y:1021.7},0).wait(1).to({scaleX:1.28,scaleY:1.24,x:302.1,y:1019.3},0).wait(1).to({scaleX:1.31,scaleY:1.27,skewY:0.8,x:295.5,y:1016.8},0).wait(1).to({scaleX:1.35,scaleY:1.29,skewY:0.9,x:288.8,y:1014.3},0).wait(1).to({scaleX:1.38,scaleY:1.32,skewY:1,x:281.8,y:1011.7},0).wait(1).to({scaleX:1.41,scaleY:1.35,skewY:1.1,x:274.7,y:1009.1},0).wait(1).to({scaleX:1.44,scaleY:1.38,skewY:1.2,x:267.6,y:1006.5},0).wait(1).to({scaleX:1.48,scaleY:1.4,x:260.6,y:1003.9},0).wait(1).to({scaleX:1.51,scaleY:1.43,skewY:1.3,x:253.7,y:1001.3},0).wait(1).to({scaleX:1.54,scaleY:1.46,skewY:1.4,x:247,y:998.8},0).wait(1).to({scaleX:1.57,scaleY:1.48,skewY:1.5,x:240.4,y:996.3},0).wait(1).to({scaleX:1.6,scaleY:1.51,skewY:1.6,x:234.2,y:994},0).wait(1).to({scaleX:1.63,scaleY:1.53,x:228.3,y:991.8},0).wait(1).to({scaleX:1.65,scaleY:1.55,skewY:1.7,x:222.7,y:989.7},0).wait(1).to({scaleX:1.68,scaleY:1.57,skewY:1.8,x:217.4,y:987.7},0).wait(1).to({scaleX:1.7,scaleY:1.59,x:212.5,y:985.9},0).wait(1).to({scaleX:1.72,scaleY:1.61,skewY:1.9,x:207.9,y:984.1},0).wait(1).to({scaleX:1.74,scaleY:1.63,x:203.6,y:982.6},0).wait(1).to({scaleX:1.76,scaleY:1.64,skewY:2,x:199.6,y:981.1},0).wait(1).to({scaleX:1.78,scaleY:1.66,x:196,y:979.8},0).wait(1).to({scaleX:1.79,scaleY:1.67,skewY:2.1,x:192.6,y:978.5},0).wait(1).to({scaleX:1.81,scaleY:1.68,x:189.6,y:977.4},0).wait(1).to({scaleX:1.82,scaleY:1.7,x:186.7,y:976.3},0).wait(1).to({scaleX:1.83,scaleY:1.71,skewY:2.2,x:184.1,y:975.3},0).wait(1).to({scaleX:1.84,scaleY:1.72,x:181.8,y:974.4},0).wait(1).to({scaleX:1.85,scaleY:1.72,x:179.6,y:973.7},0).wait(1).to({scaleX:1.86,scaleY:1.73,skewY:2.3,x:177.8,y:972.9},0).wait(1).to({scaleX:1.87,scaleY:1.74,x:176.1,y:972.3},0).wait(1).to({scaleX:1.88,scaleY:1.74,x:174.5,y:971.8},0).wait(1).to({scaleX:1.88,scaleY:1.75,x:173.2,y:971.3},0).wait(1).to({scaleX:1.89,scaleY:1.75,x:172,y:970.8},0).wait(1).to({scaleX:1.89,scaleY:1.76,x:171,y:970.4},0).wait(1).to({scaleX:1.9,scaleY:1.76,x:170.2,y:970.1},0).wait(1).to({scaleX:1.9,scaleY:1.76,skewY:2.4,x:169.5,y:969.9},0).wait(1).to({scaleX:1.9,scaleY:1.77,x:168.9,y:969.7},0).wait(1).to({scaleX:1.91,scaleY:1.77,x:168.5,y:969.5},0).wait(1).to({scaleX:1.91,scaleY:1.77,x:168.3,y:969.4},0).wait(1).to({scaleX:1.91,scaleY:1.77,x:168.1},0).wait(1).to({x:168},0).wait(26));

	// ren
	this.instance_5 = new lib.Symbol4("synched",0,false);
	this.instance_5.setTransform(253.7,744.2,1,1,0,0,0,260.8,416.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({startPosition:35},0).wait(1).to({regX:268.4,regY:408.1,x:261.1,y:736.1,startPosition:36},0).wait(1).to({scaleX:1,scaleY:1,x:260.4,startPosition:37},0).wait(1).to({scaleX:1,scaleY:1,x:259.1,startPosition:38},0).wait(1).to({scaleX:1,scaleY:1,x:257.3,startPosition:39},0).wait(1).to({scaleX:1,scaleY:1,x:255,y:736.2,startPosition:40},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:252.1,y:736.3,startPosition:41},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:248.5,startPosition:42},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:244.2,startPosition:43},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:239.2,y:736.4,startPosition:44},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:233.4,y:736.5,startPosition:45},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:226.7,y:736.6,startPosition:46},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:219.3,y:736.7,startPosition:47},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:210.9,y:736.8,startPosition:48},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:201.5,y:737,startPosition:49},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:191.1,y:737.2,startPosition:50},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:179.7,y:737.3,startPosition:51},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:167.2,y:737.5,startPosition:52},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:153.6,y:737.7,startPosition:53},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:138.9,y:737.9,startPosition:54},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:123.2,y:738.2,startPosition:55},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:106.4,y:738.4,startPosition:56},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:88.7,y:738.7,startPosition:57},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:70.1,y:738.9,startPosition:58},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:50.9,y:739.2,startPosition:59},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:31.2,y:739.5,startPosition:60},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:11.2,y:739.8,startPosition:61},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-8.8,y:740.1,startPosition:62},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:-28.8,y:740.4,startPosition:63},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-48.4,y:740.7,startPosition:64},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-67.4,y:741,startPosition:65},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-85.8,y:741.3,startPosition:66},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-103.5,y:741.6,startPosition:67},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:-120.2,y:741.8,startPosition:68},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:-136.1,y:742,startPosition:69},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:-151,y:742.3,startPosition:70},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:-164.9,y:742.5,startPosition:71},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-178,y:742.6,startPosition:72},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:-190.1,y:742.8,startPosition:73},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:-201.3,y:743,startPosition:74},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:-211.7,y:743.1,startPosition:75},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:-221.2,y:743.3,startPosition:76},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-230,y:743.4,startPosition:77},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-238,y:743.5,startPosition:78},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:-245.3,y:743.6,startPosition:79},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:-251.9,y:743.8,startPosition:80},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-257.9,startPosition:81},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-263.3,y:743.9,startPosition:82},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-268.1,y:744,startPosition:83},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-272.4,y:744.1,startPosition:84},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-276.2,startPosition:85},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-279.5},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-282.3,y:744.2},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-284.7},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-286.6,y:744.3},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-288.2},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-289.4},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-290.2},0).wait(1).to({x:-290.7},0).wait(1).to({regX:260.9,regY:416.2,x:-301.5,y:755.7,mode:"single",startPosition:0},0).wait(26));

	// BG
	this.instance_6 = new lib.bg1();

	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.setTransform(320,568);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},35).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({x:319.9,y:567.8},0).wait(1).to({scaleX:1,scaleY:1,x:319.8,y:567.6},0).wait(1).to({x:319.6,y:567.3},0).wait(1).to({scaleX:1,scaleY:1,x:319.3,y:566.9},0).wait(1).to({scaleX:1,scaleY:1,x:319,y:566.3},0).wait(1).to({scaleX:1,scaleY:1,x:318.7,y:565.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:318.2,y:564.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:317.7,y:564},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:317.1,y:562.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:316.4,y:561.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:315.6,y:560.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:314.7,y:558.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:313.7,y:557.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:312.6,y:555.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:311.4,y:553.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:310.1,y:551},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:308.7,y:548.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:307.1,y:545.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:305.5,y:543},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:303.7,y:539.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:301.9,y:536.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:299.9,y:533.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:297.9,y:529.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:295.8,y:526.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:293.7,y:522.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:291.6,y:519.1},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:289.5,y:515.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:287.5,y:511.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:285.5,y:508.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:283.5,y:505.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:281.7,y:501.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:279.9,y:498.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:278.3,y:496},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:276.7,y:493.3},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:275.2,y:490.8},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:273.9,y:488.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:272.6,y:486.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:271.4,y:484.2},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:270.3,y:482.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:269.3,y:480.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:268.4,y:479},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:267.6,y:477.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:266.8,y:476.3},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:266.1,y:475.1},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:265.5,y:474},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:264.9,y:473},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:264.4,y:472.1},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:263.9,y:471.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:263.5,y:470.7},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:263.2,y:470.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:262.9,y:469.6},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:262.7,y:469.1},0).wait(1).to({x:262.4,y:468.8},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:262.3,y:468.5},0).wait(1).to({x:262.2,y:468.3},0).wait(1).to({x:262.1,y:468.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:262,y:468},0).wait(1).to({startPosition:0},0).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-135.4,823,1295.8);


// stage content:



(lib.p4_html = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egx/BYvMAAAixeMBj+AAAMAAACxeg");
	mask.setTransform(320,568);

	// Layer 1
	this.instance = new lib.Symbol1("synched",0, false);
	this.instance.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(312.9,432.6,823,1295.8);

})(wsy_p4 = wsy_p4||{}, img_p4 = img_p4||{}, ctj = ctj||{}, ss = ss||{});
var wsy_p4, img_p4, ctj, ss;

var AnimationP4 = (function (wsy, img, ctj) {
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

		self.exportRoot = new wsy.p4_html("independent", 0, false);
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
})(wsy_p4 = wsy_p4 || {}, img_p4 = img_p4 || {}, ctj = ctj || {});
