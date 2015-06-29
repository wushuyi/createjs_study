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
			{src:"img_p4/body.png", id:"body"},
			{src:"img_p4/copy.png", id:"copy"},
			{src:"img_p4/hair.png", id:"hair"},
			{src:"img_p4/hand.png", id:"hand"},
			{src:"img_p4/hand1.png", id:"hand1"},
			{src:"img_p4/p41.png", id:"p41"},
			{src:"img_p4/p42.png", id:"p42"},
			{src:"img_p4/p45.png", id:"p45"},
			{src:"img_p4/p46.png", id:"p46"},
			{src:"img_p4/shaozi.png", id:"shaozi"}
		]
	};



// symbols:



	(lib.bag = function() {
		this.initialize(img.bag);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,469,387);


	(lib.bg1 = function() {
		this.initialize(img.bg1);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


	(lib.body = function() {
		this.initialize(img.body);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,424,735);


	(lib.copy = function() {
		this.initialize(img.copy);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,390,90);


	(lib.hair = function() {
		this.initialize(img.hair);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,340,380);


	(lib.hand = function() {
		this.initialize(img.hand);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,153,111);


	(lib.hand1 = function() {
		this.initialize(img.hand1);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,66,272);


	(lib.p41 = function() {
		this.initialize(img.p41);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,157,294);


	(lib.p42 = function() {
		this.initialize(img.p42);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,641,811);


	(lib.p45 = function() {
		this.initialize(img.p45);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,139,194);


	(lib.p46 = function() {
		this.initialize(img.p46);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,559,216);


	(lib.shaozi = function() {
		this.initialize(img.shaozi);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,100,96);


	(lib.Tween4 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.hair();
		this.instance.setTransform(-183.6,-217.5,1.145,1.147,0,2.9,0);

		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#E15612").s().p("Aj0DcIgThfQgBg3BChkQAyhPA0g3QB8iHAvAdQAGgPALgKQAWgUAkALQAgALAaAeQAaAeAAAcQAAAMgKBjQgJBggBAMQAAA8AZAzQAaA0AAARQgBAcgQAZQgXAggoAAQhLAAgghkQg+CCi0AAQgyAAgehZg");
		this.shape.setTransform(147.5,-14.3);

		this.addChild(this.shape,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-205.6,-217.5,411.4,435.2);


	(lib.Tween3 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.bg1();
		this.instance.setTransform(-320,-568);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-320,-568,640,1136);


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
		this.shape.graphics.bf(img.copy, null, new cjs.Matrix2D(1,0,0,1,-195.5,-63.3)).s().p("A+iEVIAAopMA9FAAAIAAIpg");
		this.shape.setTransform(181.5,27.7);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-14,0,391,55.4);


	(lib.Symbol18 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 4
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#990000").s().p("AiUAkQCUgLCWg8QhVAsgkAPQgeAMh1AAIgeAAg");
		this.shape.setTransform(30,6.6);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#990000").s().p("AiPAcQBFgCBKgSQBIgQBHgaQgRASgdASQgiAVgYAGQgVAGgpAAQguAAhKgHg");
		this.shape_1.setTransform(28.6,7.3);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#990000").s().p("AiTAXIgBgBQBEACBQgUQBNgRBIgaQgUAZgeAYQgfAWgeAFQgOADgUAAQgzAAhkgRg");
		this.shape_2.setTransform(28.1,7.8);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#990000").s().p("AiXARIgCgBQBEAFBVgVQBRgUBJgYQgWAfgfAdQgdAYgjAEIgTABQg2AAhzgcg");
		this.shape_3.setTransform(27.6,8.3);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#990000").s().p("AibAKIgDgBQBDAJBcgWQBUgWBJgYQgWAmgiAjQgaAagnACIgJAAQg7AAh8gpg");
		this.shape_4.setTransform(27.2,8.9);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#990000").s().p("AifADIgDgCQBBAOBhgZQBZgXBKgXQgZAsgiApQgYAbgsABIgBAAQhAAAiCg2g");
		this.shape_5.setTransform(26.7,9.5);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#990000").s().p("AingEQBBAPBngaQBcgZBLgWQgJAag1BHQgVAcguAAQhHAAiHhDg");
		this.shape_6.setTransform(26.3,10.1);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#990000").s().p("AihADQBCAMBggYQBXgXBLgXQgaArghAnQgYAbgsABIgEABQg/AAiCg1g");
		this.shape_7.setTransform(26.8,9.4);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#990000").s().p("AicAMQBDAIBZgWQBTgVBJgYQgWAjghAhQgbAZglACIgMAAQg5AAh8gkg");
		this.shape_8.setTransform(27.4,8.6);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#990000").s().p("AiWAUQBEADBSgVQBPgSBIgZQgVAcgeAZQgfAXgfAFQgLACgQAAQg1AAhsgWg");
		this.shape_9.setTransform(27.9,8);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#990000").s().p("AiQAbQBFgBBLgSQBKgQBHgbQgSAUgeATQghAVgZAGQgTAFghAAQgxAAhSgJg");
		this.shape_10.setTransform(28.4,7.3);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(3));

		// Layer 2
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#E15612").s().p("AjWAAQA1AGBRgGQCfgMCIhFIgEAMQgGAbgYAiQggArguAXQguAYg1AAQhgAAh6hSg");
		this.shape_11.setTransform(25.6,7.6);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#E15612").s().p("AjWgBQA2ADBVgGQCagOCIhCQgJAngYAkQgdArgyAdQgqAWgyAAQhgAAiBhWg");
		this.shape_12.setTransform(25.6,8);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#E15612").s().p("AjWgFQA1AFBbgKQCWgPCHg/QgJAngWAmQgbAsg2AiQgmAWguAAQhhAAiIheg");
		this.shape_13.setTransform(25.6,8.4);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#E15612").s().p("AjWgJQA1AFBhgMQCRgQCGg8QgJAngUAoQgYAtg7AoQgiAVgsAAQhgAAiPhmg");
		this.shape_14.setTransform(25.6,8.7);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#E15612").s().p("AjWgNQA2AFBlgOQCNgQCFg6QgJAngSArQgWAtg/AtQgfAVgpAAQhfAAiWhug");
		this.shape_15.setTransform(25.6,9.1);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#E15612").s().p("AjWgQQA2AEBrgPQCIgSCEg2QgJAngRAsQgTAuhDAzQgcATgnAAQhdAAidh0g");
		this.shape_16.setTransform(25.6,9.5);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#E15612").s().p("AjWgUQA2AEBwgRQCEgSCDg0QgJAngPAvQgRAuhHA4QgZATgkAAQhcAAikh8g");
		this.shape_17.setTransform(25.6,9.8);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#E15612").s().p("AjWgYQA2AEB2gTQB+gTCDgxIgXBYQgOAvhLA+QgWASgiAAQhaAAiriEg");
		this.shape_18.setTransform(25.6,10.2);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#E15612").s().p("AjWgbQA2ADB8gVQB5gUCCgtIgEAMIgRBNQgMAwhPBDQgUARggAAQhXAAiyiKg");
		this.shape_19.setTransform(25.6,10.6);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(4,-0.6,43.1,16.5);


	(lib.Symbol15copy = function() {
		this.initialize();

		// Layer 2 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("EgnQAguMgDbgixIEG1bIRx0tIHqBNQEagrCHBdIDOCOIB4AqIH1MGISCQVISYiCIhtQoMgo0AXfI1wRAg");
		mask.setTransform(225.3,564.8);

		// Layer 1
		this.instance = new lib.body();
		this.instance.setTransform(-15.8,10.6,1.136,1.136);

		this.instance.mask = mask;

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-15.8,282,481.7,563.6);


	(lib.Symbol14 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.p41();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,157,294);


	(lib.Symbol13 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.hand();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,153,111);


	(lib.Symbol12 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.p45();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,139,194);


	(lib.Symbol11 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.hand1();
		this.instance.setTransform(3,-2);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(3,-2,66,272);


	(lib.Symbol10copy = function() {
		this.initialize();

		// Layer 2 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("AqVGoQDmjgFNhSIhHhyIH4pGICuCXIhLBWImuHwIhmglIBmAlIGunwIDkCeIpjGKIjUDRQiTBnjEAxIgMAHgAihGkgAAzDTQhYB8h8BVgAAzDTIAAAAg");
		mask.setTransform(63.4,38.2);

		// Layer 1
		this.instance = new lib.shaozi();

		this.instance.mask = mask;

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,100,96);


	(lib.Symbol10 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.shaozi();
		this.instance.setTransform(5,-0.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(5,-0.5,100,96);


	(lib.Symbol7 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.p46();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,559,216);


	(lib.Symbol6 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.bf(img.copy, null, new cjs.Matrix2D(1,0,0,1,-195.5,-17.8)).s().p("A+iCyIAAljMA9FAAAIAAFjg");
		this.shape.setTransform(180.5,17.8);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-15,0,391,35.6);


	(lib.Symbol5 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.bag();
		this.instance.setTransform(0,0,1.614,1.614);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,757.1,624.7);


	(lib.Symbol2 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.p42();

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

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(1).to({regX:181.5,regY:27.7,x:181.5,y:80.5,alpha:0.139},0).wait(1).to({y:78.1,alpha:0.26},0).wait(1).to({y:76,alpha:0.365},0).wait(1).to({y:74.2,alpha:0.456},0).wait(1).to({y:72.6,alpha:0.535},0).wait(1).to({y:71.2,alpha:0.604},0).wait(1).to({y:70,alpha:0.665},0).wait(1).to({y:69,alpha:0.717},0).wait(1).to({y:68,alpha:0.763},0).wait(1).to({y:67.3,alpha:0.802},0).wait(1).to({y:66.6,alpha:0.837},0).wait(1).to({y:66,alpha:0.866},0).wait(1).to({y:65.5,alpha:0.891},0).wait(1).to({y:65,alpha:0.913},0).wait(1).to({y:64.7,alpha:0.931},0).wait(1).to({y:64.4,alpha:0.947},0).wait(1).to({y:64.1,alpha:0.959},0).wait(1).to({y:63.9,alpha:0.97},0).wait(1).to({y:63.7,alpha:0.978},0).wait(1).to({y:63.6,alpha:0.985},0).wait(1).to({y:63.5,alpha:0.99},0).wait(1).to({y:63.4,alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({y:63.3,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:182.5,regY:16.7,x:182.5,y:52.3},0).wait(3));

		// Symbol 6
		this.instance_1 = new lib.Symbol6("synched",0);
		this.instance_1.setTransform(182.5,37.8,1,1,0,0,0,182.5,17.8);
		this.instance_1.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:180.5,x:180.5,y:35,alpha:0.139},0).wait(1).to({y:32.6,alpha:0.26},0).wait(1).to({y:30.5,alpha:0.365},0).wait(1).to({y:28.7,alpha:0.456},0).wait(1).to({y:27.1,alpha:0.535},0).wait(1).to({y:25.7,alpha:0.604},0).wait(1).to({y:24.5,alpha:0.665},0).wait(1).to({y:23.5,alpha:0.717},0).wait(1).to({y:22.5,alpha:0.763},0).wait(1).to({y:21.8,alpha:0.802},0).wait(1).to({y:21.1,alpha:0.837},0).wait(1).to({y:20.5,alpha:0.866},0).wait(1).to({y:20,alpha:0.891},0).wait(1).to({y:19.5,alpha:0.913},0).wait(1).to({y:19.2,alpha:0.931},0).wait(1).to({y:18.9,alpha:0.947},0).wait(1).to({y:18.6,alpha:0.959},0).wait(1).to({y:18.4,alpha:0.97},0).wait(1).to({y:18.2,alpha:0.978},0).wait(1).to({y:18.1,alpha:0.985},0).wait(1).to({y:18,alpha:0.99},0).wait(1).to({y:17.9,alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({y:17.8,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:182.5,x:182.5},0).wait(29));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-15,20,391,35.6);


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
		this.instance_1 = new lib.body();
		this.instance_1.setTransform(-14,6,1.136,1.136);

		this.instance_1.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-14,6,335.1,324.1);


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
		var mask_graphics_18 = new cjs.Graphics().p("AgIAwQnZB1himOQFRAPCFgYICzhZIH/G4IizDfg");
		var mask_graphics_23 = new cjs.Graphics().p("AgmAdQmQCKhplmQDyALCDgjICshmIIeGOIigDug");
		var mask_graphics_29 = new cjs.Graphics().p("AV/SyQm8D5honRQEdAFCDgiICthnIIgGRIihDtg");

		this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:336.4,y:269.5}).wait(5).to({graphics:mask_graphics_23,x:342.4,y:269}).wait(6).to({graphics:mask_graphics_29,x:199.2,y:149.2}).wait(3).to({graphics:null,x:0,y:0}).wait(54));

		// 勺子
		this.instance_2 = new lib.Symbol10copy();
		this.instance_2.setTransform(374,257.2,1,1,49.1,0,0,84.4,14.9);
		this.instance_2._off = true;

		this.instance_2.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).wait(1).to({regX:50,regY:48,rotation:48.6,x:326.5,y:253.5},0).wait(1).to({rotation:46.9,x:326.9,y:255.8},0).wait(1).to({rotation:43.5,x:327.9,y:260.4},0).wait(1).to({rotation:37.7,x:329.8,y:268.2},0).wait(1).to({rotation:29.1,x:333.7,y:279.7},0).wait(1).to({rotation:19.2,x:339.3,y:292.6},0).wait(1).to({rotation:10.9,x:345.1,y:302.9},0).wait(1).to({rotation:5.4,x:349.4,y:309.5},0).wait(1).to({rotation:2.1,x:352.1,y:313.2},0).wait(1).to({rotation:0.5,x:353.5,y:315.1},0).wait(1).to({regX:84.5,regY:14.9,rotation:0,x:388.4,y:282.5},0).wait(1).to({regX:50,regY:48,rotation:2.4,x:352.5,y:314.1},0).wait(1).to({rotation:4.3,x:351.4,y:312.9},0).wait(1).to({rotation:5.6,x:350.8,y:312},0).wait(1).to({rotation:6.4,x:350.3,y:311.5},0).wait(1).to({regX:84.5,regY:14.9,rotation:6.7,x:388.3,y:282.5},0).wait(1).to({regX:50,regY:48,rotation:4.3,x:351.4,y:312.9},0).wait(1).to({rotation:2.4,x:352.5,y:314.1},0).wait(1).to({rotation:1.1,x:353.2,y:315},0).wait(1).to({rotation:0.3,x:353.7,y:315.5},0).wait(1).to({regX:84.5,regY:14.9,rotation:0,x:388.4,y:282.5},0).wait(38));

		// 勺子
		this.instance_3 = new lib.Symbol10();
		this.instance_3.setTransform(388.4,282.5,1,1,0,0,0,84.5,14.9);

		this.instance_3.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:55,regY:47.5,rotation:2.4,x:357.5,y:313.8},0).wait(1).to({rotation:4.3,x:356.5,y:312.8},0).wait(1).to({rotation:5.6,x:355.8,y:312},0).wait(1).to({rotation:6.4,x:355.3,y:311.6},0).wait(1).to({regX:84.5,regY:14.9,rotation:6.7,x:388.3,y:282.5},0).wait(1).to({regX:55,regY:47.5,rotation:4.3,x:356.5,y:312.8},0).wait(1).to({rotation:2.4,x:357.5,y:313.8},0).wait(1).to({rotation:1.1,x:358.2,y:314.6},0).wait(1).to({rotation:0.3,x:358.7,y:315},0).wait(1).to({regX:84.5,regY:14.9,rotation:0,x:388.4,y:282.5},0).wait(1).to({regX:55,regY:47.5,rotation:0.4,x:358.5,y:314.7},0).wait(1).to({rotation:1.7,x:357.4,y:313.4},0).wait(1).to({rotation:4.4,x:355.4,y:310.8},0).wait(1).to({rotation:8.7,x:352.1,y:306.2},0).wait(1).to({rotation:15.4,x:347.4,y:299},0).wait(1).to({rotation:24.6,x:341.9,y:288.5},0).wait(1).to({rotation:34.7,x:337,y:276.5},0).wait(1).to({rotation:43.1,x:333.9,y:266.2},0).wait(1).to({rotation:49.1,x:332.3,y:258.9},0).wait(1).to({rotation:53,x:331.4,y:254.1},0).wait(1).to({rotation:55.4,x:331.1,y:251.1},0).wait(1).to({rotation:56.6,x:330.9,y:249.7},0).wait(1).to({regX:84.4,regY:14.8,rotation:57,x:374.3,y:256.2},0).wait(1).to({regX:55,regY:47.5,rotation:56.2,x:330.7,y:250},0).wait(1).to({rotation:53,x:330.3,y:252.9},0).wait(1).to({rotation:49.8,x:330,y:255.7},0).wait(1).to({regX:84.4,regY:14.9,rotation:49.1,x:374,y:257.2},0).to({_off:true},1).wait(58));

		// 左手
		this.instance_4 = new lib.Symbol11();
		this.instance_4.setTransform(424,574.6,1,1,0,0,0,55.4,318.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({regX:36,regY:134,x:404.5,y:390.1},0).wait(1).to({rotation:-0.1,x:404.4,y:389.6},0).wait(1).to({rotation:-0.3,x:404,y:388.6},0).wait(1).to({rotation:-0.5,x:403.4,y:387},0).wait(1).to({rotation:-0.9,x:402.4,y:384.6},0).wait(1).to({rotation:-1.5,x:401.2,y:381.3},0).wait(1).to({rotation:-2.1,x:399.8,y:377.7},0).wait(1).to({rotation:-2.6,x:398.5,y:374.7},0).wait(1).to({rotation:-2.9,x:397.7,y:372.6},0).wait(1).to({rotation:-3.2,x:397.2,y:371.2},0).wait(1).to({rotation:-3.3,x:396.9,y:370.4},0).wait(1).to({rotation:-3.4,x:396.7,y:370},0).wait(1).to({regX:55.4,regY:318.4,x:427,y:552.8},0).wait(1).to({regX:36,regY:134,x:396.6,y:369.9},0).wait(1).to({rotation:-3.3,x:396.4,y:370.3},0).wait(1).to({x:396.2,y:370.8},0).wait(1).to({regX:55.4,regY:318.4,x:426,y:553.9},0).wait(1).to({regX:36,regY:134,rotation:-3.2,x:396.2,y:371},0).wait(1).to({rotation:-3.1,x:396.5,y:371.7},0).wait(1).to({rotation:-2.9,x:397.1,y:373},0).wait(1).to({rotation:-2.5,x:398,y:375.2},0).wait(1).to({rotation:-1.9,x:399.6,y:378.6},0).wait(1).to({rotation:-1.3,x:401.3,y:382.5},0).wait(1).to({rotation:-0.7,x:402.7,y:385.9},0).wait(1).to({rotation:-0.4,x:403.7,y:388.1},0).wait(1).to({rotation:-0.1,x:404.3,y:389.3},0).wait(1).to({rotation:0,x:404.5,y:390},0).wait(1).to({regX:55.4,regY:318.4,x:424,y:574.6},0).wait(48));

		// Layer 2
		this.instance_5 = new lib.Tween4("synched",0);
		this.instance_5.setTransform(176.5,337.2,1,1,0,-1.3,-1.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({startPosition:0},0).wait(1).to({x:176.6},0).wait(1).to({skewX:-1.2,x:177,y:337.3},0).wait(1).to({rotation:-1,skewX:0,skewY:0,x:177.9,y:337.6},0).wait(1).to({rotation:0,skewX:-0.7,skewY:-0.9,x:179.5,y:337.9},0).wait(1).to({skewX:-0.3,skewY:-0.7,x:181.8,y:338.5},0).wait(1).to({skewX:0.3,skewY:-0.5,x:184.8,y:339.2},0).wait(1).to({skewX:0.9,skewY:-0.3,x:187.7,y:339.9},0).wait(1).to({skewX:1.3,skewY:-0.2,x:189.8,y:340.4},0).wait(1).to({skewX:1.6,skewY:-0.1,x:191.1,y:340.8},0).wait(1).to({skewX:1.7,skewY:0,x:191.9,y:341},0).wait(1).to({scaleY:1,skewX:1.8,x:192.3,y:341.1},0).wait(1).to({x:192.5},0).wait(1).to({scaleY:1,x:192.4},0).wait(1).to({skewX:1.7,x:191.9},0).wait(1).to({skewX:1.6,x:191.5},0).wait(1).to({startPosition:0},0).wait(1).to({skewX:1.5,x:191.3},0).wait(1).to({skewX:1.4,x:190.8,y:341},0).wait(1).to({skewX:1.3,skewY:-0.1,x:189.8,y:340.8},0).wait(1).to({skewX:0.9,skewY:-0.2,x:188.1,y:340.4},0).wait(1).to({skewX:0.5,skewY:-0.3,x:185.5,y:339.9},0).wait(1).to({skewX:-0.1,skewY:-0.5,x:182.6,y:339.3},0).wait(1).to({skewX:-0.6,skewY:-0.7,x:180.2,y:338.8},0).wait(1).to({skewX:-0.9,x:178.5,y:338.5},0).wait(1).to({skewX:-1.1,skewY:-0.8,x:177.6,y:338.3},0).wait(1).to({skewX:-1.2,x:177.1,y:338.2},0).wait(1).to({x:177},0).wait(48));

		// 头
		this.instance_6 = new lib.Symbol15("single",0);
		this.instance_6.setTransform(222.2,306,1,1,0,0,0,160.6,306);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({mode:"synched",loop:false},0).wait(1).to({regX:153.5,regY:168,rotation:0.1,x:215.3,y:168.1,startPosition:1},0).wait(1).to({rotation:0.2,x:216,y:168,startPosition:2},0).wait(1).to({rotation:0.6,x:217.4,startPosition:3},0).wait(1).to({rotation:1.3,x:219.7,startPosition:4},0).wait(1).to({rotation:2.2,x:223.4,startPosition:5},0).wait(1).to({rotation:3.5,x:228,y:168.1,startPosition:6},0).wait(1).to({rotation:4.7,x:232.5,y:168.3,startPosition:7},0).wait(1).to({rotation:5.6,x:235.7,y:168.5,startPosition:8},0).wait(1).to({rotation:6.2,x:237.8,y:168.6,startPosition:9},0).wait(1).to({rotation:6.5,x:239,y:168.7,startPosition:10},0).wait(1).to({rotation:6.7,x:239.6,y:168.6,startPosition:11},0).wait(1).to({regX:160.6,regY:306.1,x:230.8,y:306.6},0).wait(1).to({regX:153.5,regY:168,x:239.7,y:168.6,startPosition:12},0).wait(1).to({rotation:6.6,x:239.2,startPosition:13},0).wait(1).to({rotation:6.4,x:238.6,y:168.5,startPosition:14},0).wait(1).to({regX:160.6,regY:306.1,x:230.2,y:306.5,startPosition:15},0).wait(1).to({regX:153.5,regY:168,rotation:6.3,x:238.2,y:168.5,startPosition:16},0).wait(1).to({rotation:6.1,x:237.4,startPosition:17},0).wait(1).to({rotation:5.7,x:235.8,y:168.4,startPosition:18},0).wait(1).to({rotation:4.9,x:233,y:168.3,startPosition:19},0).wait(1).to({rotation:3.8,x:229,y:168.1,startPosition:20},0).wait(1).to({rotation:2.5,x:224.2,y:168,startPosition:21},0).wait(1).to({rotation:1.4,x:220.3,startPosition:22},0).wait(1).to({rotation:0.7,x:217.7,startPosition:23},0).wait(1).to({rotation:0.3,x:216.1,startPosition:24},0).wait(1).to({rotation:0.1,x:215.3,startPosition:25},0).wait(1).to({regX:160.6,regY:306,rotation:0,x:222.2,y:306,mode:"single",startPosition:0},0).wait(48));

		// 身体
		this.instance_7 = new lib.Symbol15copy();
		this.instance_7.setTransform(192.5,791.6,1,1,0,0,0,127.9,791.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({regX:225,regY:563.8,x:289.6,y:563.9},0).wait(1).to({rotation:0.1,x:289.8},0).wait(1).to({x:290,y:564.1},0).wait(1).to({rotation:0.3,x:290.4,y:564.3},0).wait(1).to({rotation:0.5,x:291.1,y:564.6},0).wait(1).to({rotation:0.7,x:291.9,y:565},0).wait(1).to({rotation:0.9,x:292.6,y:565.4},0).wait(1).to({rotation:1.1,x:293.1,y:565.7},0).wait(1).to({rotation:1.2,x:293.5,y:565.9},0).wait(1).to({rotation:1.3,x:293.7,y:566},0).wait(1).to({x:293.8},0).wait(1).to({regX:128,regY:791.6,x:191.5,y:791.5},0).wait(1).to({regX:225,regY:563.8,x:293.6,y:566},0).wait(1).to({rotation:1.2,x:292.6,y:565.8},0).wait(1).to({rotation:1.1,x:291.7,y:565.6},0).wait(1).to({regX:128,regY:791.6,rotation:1,x:190.6,y:791.6},0).wait(1).to({regX:225,regY:563.8,x:291.5,y:565.6},0).wait(1).to({x:291.4,y:565.5},0).wait(1).to({rotation:0.9,x:291,y:565.4},0).wait(1).to({rotation:0.8,x:290.4,y:565.2},0).wait(1).to({rotation:0.6,x:289.6,y:564.8},0).wait(1).to({rotation:0.4,x:288.5,y:564.5},0).wait(1).to({rotation:0.2,x:287.7,y:564.2},0).wait(1).to({rotation:0.1,x:287.1,y:564},0).wait(1).to({rotation:0,x:286.7,y:563.9},0).wait(1).to({x:286.6,y:563.8},0).wait(1).to({regX:127.9,regY:791.6,x:189.5,y:791.6},0).wait(48));

		// 椅子
		this.instance_8 = new lib.Symbol14();
		this.instance_8.setTransform(78.5,685.4,1,1,0,0,0,78.5,147);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-24.2,6,587.4,841.7);


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


	(lib.mc1 = function(mode,startPosition,loop) {
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
		this.instance = new lib.mc1("synched",0,false);
		this.instance.setTransform(305.4,171,1.15,1.15,57.7);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({startPosition:50},0).to({alpha:0,startPosition:61},11).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,-135.4,712,949.4);


	(lib.Symbol1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2
		this.instance = new lib.Symbol20("synched",0,false);
		this.instance.setTransform(316.9,184.9,1,1,0,0,0,182.5,34.5);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(111));

		// Layer 5
		this.instance_1 = new lib.Symbol8("synched",0);
		this.instance_1.setTransform(265.5,407,1,1,0,0,0,325.5,407);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

		// Layer 4
		this.instance_2 = new lib.Symbol2("synched",0);
		this.instance_2.setTransform(321.1,310.1,1,1,0,0,0,320.5,405.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

		// bag
		this.instance_3 = new lib.Symbol5("synched",0);
		this.instance_3.setTransform(584.5,968.3,0.6,0.6,0,0,0,385.4,317.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({startPosition:0},0).wait(1).to({regX:378.5,regY:312.4,x:580.3,y:964.9},0).wait(1).to({x:580.2,y:964.7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:580,y:964.5},0).wait(1).to({x:579.7,y:964.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:579.4,y:963.8},0).wait(1).to({x:579,y:963.3},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:578.4,y:962.7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:577.8,y:962},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:577.1,y:961.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:576.4,y:960.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:575.5,y:959.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:574.5,y:958},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:573.4,y:956.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:572.2,y:955.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:570.9,y:953.7},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:569.5,y:952.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:568,y:950.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:566.3,y:948.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:564.6,y:946.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:562.7,y:944},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:560.7,y:941.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:558.5,y:939.1},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:556.2,y:936.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:553.8,y:933.5},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:551.3,y:930.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:548.6,y:927.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:545.8,y:924},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:542.8,y:920.5},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:539.7,y:916.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:536.4,y:912.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:533,y:908.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:529.4,y:904.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:525.7,y:900.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:521.8,y:895.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:517.9,y:890.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:513.7,y:886},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:509.4,y:880.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:505,y:875.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:500.5,y:870.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:495.8,y:864.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:491,y:859.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:486.2,y:853.4},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:481.3,y:847.6},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:476.3,y:841.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:471.3,y:835.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:466.2,y:829.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:461.1,y:823.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:456,y:817.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:450.9,y:811.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:445.9,y:805.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:440.9,y:799.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:436,y:793.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:431.1,y:788.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:426.4,y:782.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:421.8,y:777},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:417.2,y:771.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:412.9,y:766.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:408.6,y:761.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:404.5,y:756.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:400.6,y:752},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:396.8,y:747.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:393.2,y:743.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:389.7,y:739.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:386.4,y:735.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:383.3,y:731.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:380.4,y:728.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:377.6,y:724.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:375,y:721.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:372.5,y:718.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:370.2,y:716},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:368.1,y:713.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:366.2,y:711.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:364.3,y:708.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:362.6,y:706.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:361,y:705.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:359.6,y:703.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:358.3,y:701.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:357.2,y:700.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:356.1,y:699.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:355.2,y:698.2},0).wait(1).to({scaleX:1,scaleY:1,x:354.4,y:697.3},0).wait(1).to({scaleX:1,scaleY:1,x:353.8,y:696.4},0).wait(1).to({scaleX:1,scaleY:1,x:353.2,y:695.8},0).wait(1).to({scaleX:1,scaleY:1,x:352.8,y:695.2},0).wait(1).to({x:352.4,y:694.8},0).wait(1).to({scaleX:1,scaleY:1,x:352.2,y:694.6},0).wait(1).to({x:352,y:694.4},0).wait(1).to({regX:385.4,regY:317.9,x:358.8,y:699.9},0).wait(26));

		// table
		this.instance_4 = new lib.Symbol7("synched",0);
		this.instance_4.setTransform(363,1042.1,1,1,0,0,0,279.5,108);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({startPosition:0},0).wait(1).to({y:1042},0).wait(1).to({scaleX:1,scaleY:1,x:362.7,y:1041.9},0).wait(1).to({scaleX:1,scaleY:1,x:362.5,y:1041.8},0).wait(1).to({scaleX:1,scaleY:1,x:362,y:1041.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:361.4,y:1041.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:360.7,y:1041},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:359.8,y:1040.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:358.8,y:1040.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:357.7,y:1039.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:356.3,y:1039.1},0).wait(1).to({scaleX:1.04,scaleY:1.03,skewY:0.1,x:354.8,y:1038.4},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:353.2,y:1037.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:351.4,y:1036.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:349.4,y:1036.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:347.2,y:1035.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:344.8,y:1034.1},0).wait(1).to({scaleX:1.1,scaleY:1.09,x:342.3,y:1033},0).wait(1).to({scaleX:1.11,scaleY:1.1,x:339.6,y:1031.8},0).wait(1).to({scaleX:1.12,scaleY:1.11,skewY:0.2,x:336.6,y:1030.5},0).wait(1).to({scaleX:1.14,scaleY:1.12,x:333.5,y:1029.1},0).wait(1).to({scaleX:1.15,scaleY:1.14,x:330.1,y:1027.6},0).wait(1).to({scaleX:1.17,scaleY:1.15,x:326.6,y:1026.1},0).wait(1).to({scaleX:1.19,scaleY:1.17,skewY:0.3,x:322.8,y:1024.4},0).wait(1).to({scaleX:1.21,scaleY:1.18,x:318.7,y:1022.6},0).wait(1).to({scaleX:1.23,scaleY:1.2,x:314.5,y:1020.8},0).wait(1).to({scaleX:1.25,scaleY:1.22,x:310,y:1018.8},0).wait(1).to({scaleX:1.27,scaleY:1.24,skewY:0.4,x:305.2,y:1016.7},0).wait(1).to({scaleX:1.29,scaleY:1.26,x:300.3,y:1014.5},0).wait(1).to({scaleX:1.32,scaleY:1.28,x:295,y:1012.3},0).wait(1).to({scaleX:1.34,scaleY:1.3,skewY:0.5,x:289.6,y:1009.9},0).wait(1).to({scaleX:1.37,scaleY:1.33,x:283.9,y:1007.4},0).wait(1).to({scaleX:1.4,scaleY:1.35,x:277.9,y:1004.8},0).wait(1).to({scaleX:1.42,scaleY:1.38,skewY:0.6,x:271.7,y:1002},0).wait(1).to({scaleX:1.45,scaleY:1.4,x:265.2,y:999.2},0).wait(1).to({scaleX:1.49,scaleY:1.43,skewY:0.7,x:258.5,y:996.3},0).wait(1).to({scaleX:1.52,scaleY:1.46,x:251.6,y:993.3},0).wait(1).to({scaleX:1.55,scaleY:1.49,x:244.4,y:990.1},0).wait(1).to({scaleX:1.58,scaleY:1.52,skewY:0.8,x:237.1,y:986.9},0).wait(1).to({scaleX:1.62,scaleY:1.55,x:229.5,y:983.6},0).wait(1).to({scaleX:1.66,scaleY:1.58,skewY:0.9,x:221.7,y:980.2},0).wait(1).to({scaleX:1.69,scaleY:1.61,x:213.7,y:976.7},0).wait(1).to({scaleX:1.73,scaleY:1.65,skewY:1,x:205.7,y:973.1},0).wait(1).to({scaleX:1.77,scaleY:1.68,x:197.4,y:969.5},0).wait(1).to({scaleX:1.81,scaleY:1.72,skewY:1.1,x:189.1,y:965.9},0).wait(1).to({scaleX:1.85,scaleY:1.75,x:180.6,y:962.2},0).wait(1).to({scaleX:1.89,scaleY:1.78,skewY:1.2,x:172.2,y:958.4},0).wait(1).to({scaleX:1.92,scaleY:1.82,x:163.6,y:954.8},0).wait(1).to({scaleX:1.96,scaleY:1.85,skewY:1.3,x:155.1,y:951},0).wait(1).to({scaleX:2,scaleY:1.89,x:146.6,y:947.3},0).wait(1).to({scaleX:2.04,scaleY:1.92,skewY:1.4,x:138.2,y:943.6},0).wait(1).to({scaleX:2.08,scaleY:1.96,skewY:1.5,x:129.8,y:940},0).wait(1).to({scaleX:2.12,scaleY:1.99,x:121.6,y:936.3},0).wait(1).to({scaleX:2.16,scaleY:2.03,skewY:1.6,x:113.5,y:932.8},0).wait(1).to({scaleX:2.19,scaleY:2.06,x:105.6,y:929.3},0).wait(1).to({scaleX:2.23,scaleY:2.09,skewY:1.7,x:97.8,y:925.9},0).wait(1).to({scaleX:2.26,scaleY:2.12,x:90.2,y:922.6},0).wait(1).to({scaleX:2.3,scaleY:2.15,x:82.9,y:919.4},0).wait(1).to({scaleX:2.33,scaleY:2.18,skewY:1.8,x:75.8,y:916.3},0).wait(1).to({scaleX:2.36,scaleY:2.21,x:69,y:913.3},0).wait(1).to({scaleX:2.39,scaleY:2.24,skewY:1.9,x:62.4,y:910.4},0).wait(1).to({scaleX:2.42,scaleY:2.26,x:56.1,y:907.6},0).wait(1).to({scaleX:2.45,scaleY:2.29,x:50.1,y:905},0).wait(1).to({scaleX:2.48,scaleY:2.31,skewY:2,x:44.3,y:902.5},0).wait(1).to({scaleX:2.5,scaleY:2.33,x:38.8,y:900.1},0).wait(1).to({scaleX:2.53,scaleY:2.35,x:33.6,y:897.8},0).wait(1).to({scaleX:2.55,scaleY:2.37,skewY:2.1,x:28.7,y:895.6},0).wait(1).to({scaleX:2.57,scaleY:2.39,x:24,y:893.6},0).wait(1).to({scaleX:2.59,scaleY:2.41,x:19.6,y:891.7},0).wait(1).to({scaleX:2.61,scaleY:2.43,skewY:2.2,x:15.5,y:889.9},0).wait(1).to({scaleX:2.63,scaleY:2.44,x:11.7,y:888.2},0).wait(1).to({scaleX:2.65,scaleY:2.46,x:8.1,y:886.7},0).wait(1).to({scaleX:2.66,scaleY:2.47,x:4.7,y:885.2},0).wait(1).to({scaleX:2.68,scaleY:2.49,x:1.6,y:883.9},0).wait(1).to({scaleX:2.69,scaleY:2.5,skewY:2.3,x:-1.2,y:882.6},0).wait(1).to({scaleX:2.7,scaleY:2.51,x:-3.8,y:881.4},0).wait(1).to({scaleX:2.71,scaleY:2.52,x:-6.2,y:880.4},0).wait(1).to({scaleX:2.72,scaleY:2.53,x:-8.3,y:879.4},0).wait(1).to({scaleX:2.73,scaleY:2.53,x:-10.2,y:878.6},0).wait(1).to({scaleX:2.74,scaleY:2.54,x:-12,y:877.9},0).wait(1).to({scaleX:2.75,scaleY:2.55,x:-13.5,y:877.2},0).wait(1).to({scaleX:2.75,scaleY:2.55,skewY:2.4,x:-14.8,y:876.7},0).wait(1).to({scaleX:2.76,scaleY:2.56,x:-15.9,y:876.2},0).wait(1).to({scaleX:2.76,scaleY:2.56,x:-16.9,y:875.7},0).wait(1).to({scaleX:2.76,scaleY:2.56,x:-17.6,y:875.4},0).wait(1).to({scaleX:2.77,scaleY:2.57,x:-18.2,y:875.2},0).wait(1).to({scaleX:2.77,scaleY:2.57,x:-18.6,y:874.9},0).wait(1).to({scaleX:2.77,scaleY:2.57,x:-18.8},0).wait(1).to({scaleY:2.57,x:-18.9,y:875},0).wait(26));

		// ren
		this.instance_5 = new lib.Symbol4("synched",0,false);
		this.instance_5.setTransform(253.7,744.2,1,1,0,0,0,260.8,416.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({startPosition:6},0).wait(1).to({regX:253.5,regY:420.7,x:246.3,y:748.7,startPosition:7},0).wait(1).to({x:246,startPosition:8},0).wait(1).to({scaleX:1,scaleY:1,x:245.6,startPosition:9},0).wait(1).to({x:244.9,startPosition:10},0).wait(1).to({scaleX:1,scaleY:1,x:244,y:748.8,startPosition:11},0).wait(1).to({x:242.9,startPosition:12},0).wait(1).to({scaleX:1,scaleY:1,x:241.6,startPosition:13},0).wait(1).to({scaleX:1,scaleY:1,x:240,startPosition:14},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:238.3,y:748.9,startPosition:15},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:236.3,startPosition:16},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:234,y:749,startPosition:17},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:231.5,startPosition:18},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:228.8,y:749.1,startPosition:19},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:225.8,y:749.2,startPosition:20},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:222.5,startPosition:21},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:218.9,y:749.3,startPosition:22},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:215.1,y:749.4,startPosition:23},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:210.9,y:749.5,startPosition:24},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:206.4,y:749.6,startPosition:25},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:201.7,y:749.7,startPosition:26},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:196.6,y:749.8,startPosition:27},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:191.2,y:749.9,startPosition:28},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:185.4,y:750.1,startPosition:29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:179.3,y:750.3,startPosition:30},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:172.9,y:750.4,startPosition:31},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:166.1,y:750.6,startPosition:32},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:158.9,y:750.7,startPosition:33},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:151.3,y:750.9,startPosition:34},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:143.5,y:751.1,startPosition:35},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:135.2,y:751.2,startPosition:36},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:126.5,y:751.5,startPosition:37},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:117.5,y:751.6,startPosition:38},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:108.1,y:751.9,startPosition:39},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:98.3,y:752.1,startPosition:40},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:88.2,y:752.3,startPosition:41},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:77.7,y:752.6,startPosition:42},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:66.9,y:752.8,startPosition:43},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:55.7,y:753.1,startPosition:44},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:44.2,y:753.3,startPosition:45},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:32.4,y:753.6,startPosition:46},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:20.4,y:753.9,startPosition:47},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:8.2,y:754.2,startPosition:48},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-4.3,y:754.5,startPosition:49},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-16.9,y:754.7,startPosition:50},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-29.7,y:755,startPosition:51},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-42.5,y:755.3,startPosition:52},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:-55.4,y:755.6,startPosition:53},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-68.3,y:755.9,startPosition:54},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-81.2,y:756.2,startPosition:55},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-93.9,y:756.5,startPosition:56},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-106.6,y:756.8,startPosition:57},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-119.1,y:757.1,startPosition:58},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-131.3,y:757.4,startPosition:59},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-143.3,y:757.7,startPosition:60},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:-155.1,y:757.9,startPosition:61},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:-166.5,y:758.2,startPosition:62},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:-177.6,y:758.4,startPosition:63},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:-188.3,y:758.7,startPosition:64},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:-198.7,y:758.9,startPosition:65},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-208.7,y:759.1,startPosition:66},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-218.2,y:759.4,startPosition:67},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:-227.3,y:759.6,startPosition:68},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:-236.1,y:759.8,startPosition:69},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:-244.4,y:760,startPosition:70},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:-252.3,y:760.2,startPosition:71},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:-259.8,y:760.3,startPosition:72},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-266.8,y:760.5,startPosition:73},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-273.4,y:760.6,startPosition:74},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-279.7,y:760.8,startPosition:75},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:-285.5,y:760.9,startPosition:76},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:-290.9,y:761,startPosition:77},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-296,y:761.1,startPosition:78},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-300.6,y:761.3,startPosition:79},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-304.9,y:761.4,startPosition:80},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-308.8,startPosition:81},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-312.5,y:761.5,startPosition:82},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-315.7,y:761.6,startPosition:83},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-318.6,y:761.7,startPosition:84},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-321.2,startPosition:85},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-323.5,y:761.8},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-325.5},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-327.2,y:761.9},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-328.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-329.8},0).wait(1).to({x:-330.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-331.3,y:762},0).wait(1).to({x:-331.6},0).wait(1).to({regX:260.9,regY:416.2,x:-321.5,y:755.7,mode:"single",startPosition:0},0).wait(26));

		// BG
		this.instance_6 = new lib.bg1();

		this.instance_7 = new lib.Tween3("synched",0);
		this.instance_7.setTransform(320,568);
		this.instance_7._off = true;

		this.instance_8 = new lib.Tween1("synched",0);
		this.instance_8.setTransform(262,528,1.18,1.18);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(26));
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:319.9,y:567.9},0).wait(1).to({x:319.8},0).wait(1).to({scaleX:1,scaleY:1,y:567.8},0).wait(1).to({x:319.6},0).wait(1).to({x:319.5,y:567.7},0).wait(1).to({scaleX:1,scaleY:1,x:319.4,y:567.6},0).wait(1).to({scaleX:1,scaleY:1,x:319.2,y:567.4},0).wait(1).to({x:319,y:567.3},0).wait(1).to({scaleX:1,scaleY:1,x:318.8,y:567.1},0).wait(1).to({scaleX:1,scaleY:1,x:318.5,y:567},0).wait(1).to({x:318.2,y:566.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:317.9,y:566.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:317.6,y:566.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:317.2,y:566.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:316.9,y:565.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:316.4,y:565.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:316,y:565.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:315.5,y:564.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:315,y:564.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:314.5,y:564.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:313.9,y:563.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:313.3,y:563.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:312.6,y:562.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:311.9,y:562.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:311.2,y:561.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:310.5,y:561.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:309.7,y:560.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:308.8,y:560.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:308,y:559.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:307.1,y:559.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:306.1,y:558.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:305.1,y:557.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:304.1,y:557.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:303.1,y:556.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:302,y:555.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:300.9,y:554.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:299.7,y:554},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:298.5,y:553.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:297.3,y:552.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:296.1,y:551.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:294.8,y:550.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:293.6,y:549.8},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:292.3,y:548.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:291,y:548},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:289.7,y:547.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:288.4,y:546.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:287.1,y:545.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:285.9,y:544.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:284.6,y:543.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:283.3,y:542.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:282.1,y:541.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:280.9,y:541},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:279.7,y:540.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:278.6,y:539.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:277.5,y:538.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:276.4,y:537.9},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:275.3,y:537.2},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:274.3,y:536.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:273.4,y:535.9},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:272.5,y:535.2},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:271.6,y:534.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:270.8,y:534},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:270,y:533.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:269.2,y:533},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:268.5,y:532.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:267.8,y:532},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:267.2,y:531.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:266.6,y:531.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:266.1,y:530.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:265.6,y:530.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:265.1,y:530.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:264.7,y:529.9},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:264.3,y:529.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:263.9,y:529.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:263.6,y:529.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:263.3,y:528.9},0).wait(1).to({x:263.1,y:528.7},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:262.8,y:528.6},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:262.6,y:528.4},0).wait(1).to({x:262.5,y:528.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:262.3,y:528.2},0).wait(1).to({x:262.2,y:528.1},0).wait(1).to({x:262.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:262,y:528},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(26));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-31.3,-135.4,838.9,1309);


// stage content:



	(lib.p4_html = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("Egx/BYvMAAAixeMBj+AAAMAAACxeg");
		mask.setTransform(320,568);

		// Layer 1
		this.instance = new lib.Symbol1("synched",0,false);
		this.instance.setTransform(320,568,1,1,0,0,0,320,568);

		this.instance.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(320,568,640,1136);

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
})(wsy_p4 = wsy_p4 || {}, img_p4 = img_p4 || {}, ctj = ctj || {});
