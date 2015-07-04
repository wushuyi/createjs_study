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
			{src:"img_p4/body2.png", id:"body2"},
			{src:"img_p4/chun.png", id:"chun"},
			{src:"img_p4/copy.png", id:"copy"},
			{src:"img_p4/hand.png", id:"hand"},
			{src:"img_p4/hand1.png", id:"hand1"},
			{src:"img_p4/head1.png", id:"head1"},
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


	(lib.body2 = function() {
		this.initialize(img.body2);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,385,433);


	(lib.chun = function() {
		this.initialize(img.chun);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,31,27);


	(lib.copy = function() {
		this.initialize(img.copy);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,390,90);


	(lib.hand = function() {
		this.initialize(img.hand);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,153,111);


	(lib.hand1 = function() {
		this.initialize(img.hand1);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,66,272);


	(lib.head1 = function() {
		this.initialize(img.head1);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,298,353);


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


	(lib.Symbol16 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.chun();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,31,27);


	(lib.Symbol15copy = function() {
		this.initialize();

		// Layer 4 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("AqdIEIhYlrQDkmxg0myIDngUQCXArC+AgIAfBNQAsC4gSDGQgHCTBEBrIA3ETIJSGWg");
		mask.setTransform(185.2,411.8);

		// Layer 3
		this.instance = new lib.head1();
		this.instance.setTransform(8,121.4);

		this.instance.mask = mask;

		// Layer 1
		this.instance_1 = new lib.body2();
		this.instance_1.setTransform(1,395.7);

		this.addChild(this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(1,338.3,385,490.5);


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
		mask.graphics.p("AqVGoQDmjgFNhSIBmAlIGunwImuHwIhmglIhHhyIH4pGICuCXIhLBWIDkCeIpjGKIjUDRQiTBnjEAxIgMAHgAAzDTQhYB8h8BVg");
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


	(lib.Symbol8 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,712,814);


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


	(lib.Symbol17 = function() {
		this.initialize();

		// Layer 1 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("AiPAAIgNhhQBJgSBJASIBPAIIBYACIAABRIgfBfIiiASg");
		mask.setTransform(15.8,20);

		// Layer 2
		this.instance = new lib.Symbol16("synched",0);
		this.instance.setTransform(16.7,13.5,1,1,0,0,0,15.5,13.5);

		this.instance.mask = mask;

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(1.2,9.2,30.4,17.8);


	(lib.Symbol18 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 7 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("ABUBDIhRgHQhGgThJATIgyhkIBOgYIC1gFIB4AqIACBMIgSAVg");
		mask.setTransform(17.9,1.4);

		// Layer 6
		this.instance = new lib.Symbol16("synched",0);
		this.instance.setTransform(20.4,10.8,1,1,0,0,0,15.5,13.5);

		this.instance.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

		// Layer 5
		this.instance_1 = new lib.Symbol17("synched",0);
		this.instance_1.setTransform(19.9,12.7,1,1,0,0,0,16.1,15.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:19.3,y:15.7},8).to({x:19.9,y:12.7},8).wait(1));

		// Layer 4
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#990000").s().p("AAJASQgXgBhUgiQBcAcBpABQg7AGgbAAIgEAAg");
		this.shape.setTransform(22.8,8.4);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#990000").s().p("AAMAWQgagEhQgoQApAQAzAGQAvAIAyACQgRAGgXAFQgPACgMAAIgQgBg");
		this.shape_1.setTransform(21.9,8.6);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#990000").s().p("AAIAaQgcgHhNguQApASA3AIQAwAGAzAEQgUAJgZAHQgOADgMAAQgKAAgJgCg");
		this.shape_2.setTransform(21.6,8.8);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#990000").s().p("AAFAeQghgKhHg0QAmAUA7AJQA0AGAyAEQgXAMgbAKQgMAEgMAAQgLAAgKgDg");
		this.shape_3.setTransform(21.4,9);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#990000").s().p("AAAAiQgjgNhCg6QAkAWA+AJQA3AGAzAFQgbAQgdANQgLAEgMAAQgMAAgMgEg");
		this.shape_4.setTransform(21.1,9.2);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#990000").s().p("AgCAmQgngQg/hAQAjAYBDAJIBrAMQgdATgfAQQgLAFgMAAQgMAAgMgFg");
		this.shape_5.setTransform(20.8,9.4);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#990000").s().p("AhrgvQAiAaBGAKIBvAMQgNANg1AcQgKAGgMAAQgwAAhPhfg");
		this.shape_6.setTransform(20.6,9.6);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#990000").s().p("AgBAlQgngPhAg/QAkAYBCAJIBrAMQgdASgfAPQgLAFgMAAQgMAAgLgFg");
		this.shape_7.setTransform(20.9,9.4);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#990000").s().p("AACAgQghgLhGg4QAlAWA+AIQA1AGAzAFQgZAOgcAMQgNAEgLAAQgMAAgLgEg");
		this.shape_8.setTransform(21.2,9.1);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#990000").s().p("AAHAbQgfgIhJgwQAnATA4AIQAyAGAzAEQgWAKgZAIQgOAEgMAAQgKAAgJgDg");
		this.shape_9.setTransform(21.5,8.9);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#990000").s().p("AALAWQgagEhPgpQApARAzAGQAwAHAxADQgRAGgXAFQgPADgMAAIgRgCg");
		this.shape_10.setTransform(21.8,8.7);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(3));

		// Layer 2
		this.instance_2 = new lib.Symbol16("synched",0);
		this.instance_2.setTransform(20.4,10.8,1,1,0,0,0,15.5,13.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(4.9,-2.7,31,27);


	(lib.Symbol15 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 3
		this.instance = new lib.Symbol18("single",0);
		this.instance.setTransform(179.4,317.8,1,1,0,0,0,25.4,16.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({mode:"synched",loop:false},0).to({regX:25.3,scaleX:1.1,skewY:0.6,x:179.3,y:317.9,startPosition:7},7).to({regX:25.4,scaleX:1,skewY:0,x:179.4,y:317.8,startPosition:13},6).wait(20));

		// Layer 4 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("AKobZQiWhriRjKQialyAAnQQilAeiyhbQgrFbADFUIjyE/IjyF1IvzhXIAWqfICPrVIgWx1IDmtlIK1l1IO6COIJSHkICPJoIAWL/IEIJnID8KfIl1JHg");
		mask.setTransform(161,288.1);

		// Layer 1
		this.instance_1 = new lib.head1();
		this.instance_1.setTransform(8,121.4);

		this.instance_1.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(8,121.4,298,353);


	(lib.Symbol4 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 酸奶
		this.instance = new lib.Symbol12();
		this.instance.setTransform(384,548.5,0.898,0.898,0,0,0,69.5,97);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({rotation:0.1,x:384.1},0).wait(1).to({rotation:0.3,x:384.6,y:548.7},0).wait(1).to({rotation:0.7,x:385.4,y:548.9},0).wait(1).to({rotation:1.4,x:386.7,y:549.4},0).wait(1).to({rotation:2.5,x:388.9,y:550.1},0).wait(1).to({rotation:3.9,x:391.7,y:551},0).wait(1).to({rotation:5.3,x:394.3,y:551.8},0).wait(1).to({rotation:6.2,x:396.3,y:552.5},0).wait(1).to({rotation:6.9,x:397.5,y:552.9},0).wait(1).to({rotation:7.3,x:398.3,y:553.2},0).wait(1).to({rotation:7.4,x:398.6,y:553.3},0).wait(1).to({rotation:7.5,x:398.8,y:553.4},0).wait(1).to({x:398.6,y:553.2},0).wait(1).to({rotation:7.3,x:398.1,y:552.7},0).wait(1).to({rotation:7.2,x:397.6,y:552.3},0).wait(1).to({x:397.5,y:552.2},0).wait(1).to({rotation:7.1,x:397.3,y:552.1},0).wait(1).to({rotation:6.9,x:396.9,y:552},0).wait(1).to({rotation:6.4,x:396,y:551.7},0).wait(1).to({rotation:5.5,x:394.4,y:551.3},0).wait(1).to({rotation:4.3,x:392,y:550.7},0).wait(1).to({rotation:2.8,x:389.2,y:550},0).wait(1).to({rotation:1.6,x:387,y:549.3},0).wait(1).to({rotation:0.8,x:385.4,y:548.9},0).wait(1).to({rotation:0.3,x:384.6,y:548.7},0).wait(1).to({rotation:0.1,x:384.1,y:548.6},0).wait(1).to({rotation:0,x:384,y:548.5},0).wait(48));

		// 右手
		this.instance_1 = new lib.Symbol13();
		this.instance_1.setTransform(349.3,631.4,0.898,0.898,0,0,0,24.3,88.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({regX:76.5,regY:55.5,rotation:0.1,x:396.3,y:601.8},0).wait(1).to({rotation:0.3,x:396.5,y:602},0).wait(1).to({rotation:0.7,x:396.9,y:602.4},0).wait(1).to({rotation:1.4,x:397.7,y:602.9},0).wait(1).to({rotation:2.5,x:398.8,y:603.8},0).wait(1).to({rotation:3.9,x:400.3,y:604.9},0).wait(1).to({rotation:5.3,x:401.7,y:605.9},0).wait(1).to({rotation:6.2,x:402.6,y:606.7},0).wait(1).to({rotation:6.9,x:403.3,y:607.3},0).wait(1).to({rotation:7.3,x:403.7,y:607.6},0).wait(1).to({rotation:7.4,x:403.8,y:607.7},0).wait(1).to({regX:24.3,regY:88.4,rotation:7.5,x:353.7,y:631},0).wait(1).to({regX:76.5,regY:55.5,x:403.8,y:607.7},0).wait(1).to({rotation:7.3,x:403.5,y:607.2},0).wait(1).to({rotation:7.2,x:403.1,y:606.7},0).wait(1).to({regX:24.3,regY:88.4,x:352.8,y:630.1},0).wait(1).to({regX:76.5,regY:55.5,rotation:7.1,x:402.9,y:606.5},0).wait(1).to({rotation:6.9,x:402.7,y:606.3},0).wait(1).to({rotation:6.4,x:402.2,y:606},0).wait(1).to({rotation:5.5,x:401.4,y:605.4},0).wait(1).to({rotation:4.3,x:400.3,y:604.6},0).wait(1).to({rotation:2.8,x:398.9,y:603.6},0).wait(1).to({rotation:1.6,x:397.7,y:602.8},0).wait(1).to({rotation:0.8,x:396.9,y:602.3},0).wait(1).to({rotation:0.3,x:396.5,y:602},0).wait(1).to({rotation:0.1,x:396.3,y:601.9},0).wait(1).to({regX:24.3,regY:88.4,rotation:0,x:349.3,y:631.4},0).wait(48));

		// Layer 9 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		var mask_graphics_19 = new cjs.Graphics().p("AkeCMQjtBrhviMQBFh7B2g0ICTh7QXxmmu5LLIhzD2g");
		var mask_graphics_23 = new cjs.Graphics().p("AkeCMQjtBrhviMQBFh7B2g0ICTh7QXxmmu5LLIhzD2g");
		var mask_graphics_30 = new cjs.Graphics().p("ARyXiQl7EtinmlQEMgmB0g0ICTh8QN2nAk7LnIhyD3g");

		this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:305.8,y:306}).wait(4).to({graphics:mask_graphics_23,x:305.8,y:306}).wait(7).to({graphics:mask_graphics_30,x:177.7,y:171.4}).wait(2).to({graphics:null,x:0,y:0}).wait(54));

		// 勺子
		this.instance_2 = new lib.Symbol10copy();
		this.instance_2.setTransform(313.3,302.2,0.95,0.95,32.8,0,0,84.5,14.9);
		this.instance_2._off = true;

		this.instance_2.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).wait(1).to({regX:50,regY:48,rotation:32.5,x:269.3,y:311.1},0).wait(1).to({rotation:31.4,x:271.5,y:312.1},0).wait(1).to({rotation:29.1,x:275.9,y:314},0).wait(1).to({rotation:25.2,x:283.4,y:317.2},0).wait(1).to({rotation:19.5,x:295,y:321.9},0).wait(1).to({rotation:12.8,x:308.9,y:327},0).wait(1).to({rotation:7.3,x:320.9,y:331},0).wait(1).to({rotation:3.6,x:329.1,y:333.5},0).wait(1).to({rotation:1.4,x:334,y:335},0).wait(1).to({rotation:0.3,x:336.5,y:335.7},0).wait(1).to({regX:84.5,regY:14.9,rotation:0,x:370,y:304.5},0).wait(1).to({regX:50,regY:48,rotation:2.4,x:335.9,y:334.5},0).wait(1).to({rotation:4.3,x:334.9,y:333.3},0).wait(1).to({rotation:5.6,x:334.2,y:332.5},0).wait(1).to({rotation:6.4,x:333.9,y:332},0).wait(1).to({regX:84.5,regY:14.9,rotation:6.7,x:370,y:304.5},0).wait(1).to({regX:50,regY:48,rotation:4.3,x:334.9,y:333.4},0).wait(1).to({rotation:2.4,x:335.9,y:334.5},0).wait(1).to({rotation:1.1,x:336.6,y:335.3},0).wait(1).to({rotation:0.3,x:337.1,y:335.8},0).wait(1).to({regX:84.5,regY:14.9,rotation:0,x:370,y:304.5},0).wait(38));

		// 勺子
		this.instance_3 = new lib.Symbol10();
		this.instance_3.setTransform(370,304.5,0.95,0.95,0,0,0,84.5,14.9);

		this.instance_3.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:55,regY:47.5,rotation:2.4,x:340.7,y:334.2},0).wait(1).to({rotation:4.3,x:339.7,y:333.2},0).wait(1).to({rotation:5.6,x:339,y:332.5},0).wait(1).to({rotation:6.4,x:338.6,y:332.1},0).wait(1).to({regX:84.5,regY:14.9,rotation:6.7,x:370,y:304.5},0).wait(1).to({regX:55,regY:47.5,rotation:4.3,x:339.7,y:333.3},0).wait(1).to({rotation:2.4,x:340.7,y:334.3},0).wait(1).to({rotation:1.1,x:341.4,y:334.9},0).wait(1).to({rotation:0.3,x:341.8,y:335.3},0).wait(1).to({regX:84.5,regY:14.9,rotation:0,x:370,y:304.5},0).wait(1).to({regX:55,regY:47.5,rotation:0.2,x:341.4,y:335.3},0).wait(1).to({rotation:1,x:339.5,y:334.8},0).wait(1).to({rotation:2.5,x:335.9,y:333.9},0).wait(1).to({rotation:5,x:329.9,y:332.2},0).wait(1).to({rotation:8.9,x:320.7,y:329.5},0).wait(1).to({rotation:14.2,x:308.5,y:325.7},0).wait(1).to({rotation:20,x:295.5,y:321.2},0).wait(1).to({rotation:24.8,x:284.8,y:317.4},0).wait(1).to({rotation:28.3,x:277.3,y:314.6},0).wait(1).to({rotation:30.6,x:272.6,y:312.7},0).wait(1).to({rotation:31.9,x:269.8,y:311.5},0).wait(1).to({rotation:32.6,x:268.3,y:310.9},0).wait(1).to({regX:84.4,regY:14.8,rotation:32.8,x:308.2,y:299.9},0).wait(1).to({regX:55,regY:47.5,x:267.8,y:310.9},0).wait(1).to({y:311.4},0).wait(1).to({x:267.7,y:311.8},0).wait(1).to({regX:84.4,regY:14.9,x:308,y:301},0).to({_off:true},1).wait(58));

		// 左手
		this.instance_4 = new lib.Symbol11();
		this.instance_4.setTransform(396.6,579.5,0.95,0.95,0,0,0,55.3,318.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({regX:36,regY:134,rotation:-0.1,x:378,y:404.3},0).wait(1).to({rotation:-0.4,x:377,y:404.1},0).wait(1).to({rotation:-1,x:375.2,y:403.9},0).wait(1).to({rotation:-1.9,x:372.1,y:403.4},0).wait(1).to({rotation:-3.4,x:367.4,y:402.8},0).wait(1).to({rotation:-5.4,x:361,y:402.3},0).wait(1).to({rotation:-7.6,x:354.1,y:401.8},0).wait(1).to({rotation:-9.5,x:348.2,y:401.7},0).wait(1).to({rotation:-10.8,x:344.1,y:401.8},0).wait(1).to({rotation:-11.7,x:341.5,y:401.7},0).wait(1).to({rotation:-12.2,x:339.9,y:401.8},0).wait(1).to({rotation:-12.5,x:339},0).wait(1).to({regX:55.4,regY:318.3,rotation:-12.6,x:394.8,y:568.8},0).wait(1).to({regX:36,regY:134,rotation:-12.5,x:338.7,y:401.9},0).wait(1).to({x:338.6,y:402.4},0).wait(1).to({rotation:-12.4,x:338.4,y:402.8},0).wait(1).to({regX:55.2,regY:318.3,x:394,y:569.9},0).wait(1).to({regX:36,regY:134,rotation:-12.3,x:338.8,y:402.8},0).wait(1).to({rotation:-11.9,x:340.2,y:402.7},0).wait(1).to({rotation:-11,x:342.9,y:402.6},0).wait(1).to({rotation:-9.5,x:347.6,y:402.5},0).wait(1).to({rotation:-7.4,x:354.5},0).wait(1).to({rotation:-4.9,x:362.6,y:402.8},0).wait(1).to({rotation:-2.8,x:369.3,y:403.3},0).wait(1).to({rotation:-1.4,x:373.9,y:403.8},0).wait(1).to({rotation:-0.5,x:376.6,y:404.1},0).wait(1).to({rotation:-0.1,x:377.9,y:404.3},0).wait(1).to({regX:55.3,regY:318.3,rotation:0,x:396.6,y:579.5},0).wait(48));

		// 头
		this.instance_5 = new lib.Symbol15("single",0);
		this.instance_5.setTransform(222.2,306,1,1,0,0,0,160.6,306);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({mode:"synched",loop:false},0).wait(1).to({regX:157,regY:297.9,rotation:0.1,x:218.7,y:298,startPosition:1},0).wait(1).to({rotation:0.2,x:219,y:297.9,startPosition:2},0).wait(1).to({rotation:0.6,x:219.5,y:298,startPosition:3},0).wait(1).to({rotation:1.3,x:220.4,startPosition:4},0).wait(1).to({rotation:2.2,x:221.8,startPosition:5},0).wait(1).to({rotation:3.5,x:223.5,startPosition:6},0).wait(1).to({rotation:4.7,x:225.3,startPosition:7},0).wait(1).to({rotation:5.6,x:226.5,y:298.1,startPosition:8},0).wait(1).to({rotation:6.2,x:227.3,startPosition:9},0).wait(1).to({rotation:6.5,x:227.8,startPosition:10},0).wait(1).to({rotation:6.7,x:228.1,startPosition:11},0).wait(1).to({regX:160.6,regY:306.1,x:230.8,y:306.6},0).wait(1).to({regX:157,regY:297.9,x:228.1,y:298.1,startPosition:12},0).wait(1).to({rotation:6.6,x:227.8,y:298,startPosition:13},0).wait(1).to({rotation:6.4,x:227.5,startPosition:14},0).wait(1).to({regX:160.6,regY:306.1,x:230.2,y:306.5,startPosition:15},0).wait(1).to({regX:157,regY:297.9,rotation:6.3,x:227.4,y:298,startPosition:16},0).wait(1).to({rotation:6.1,x:227.1,startPosition:17},0).wait(1).to({rotation:5.7,x:226.5,startPosition:18},0).wait(1).to({rotation:4.9,x:225.4,startPosition:19},0).wait(1).to({rotation:3.8,x:223.9,startPosition:20},0).wait(1).to({rotation:2.5,x:222.1,y:297.9,startPosition:21},0).wait(1).to({rotation:1.4,x:220.5,startPosition:22},0).wait(1).to({rotation:0.7,x:219.6,startPosition:23},0).wait(1).to({rotation:0.3,x:219,startPosition:24},0).wait(1).to({rotation:0.1,x:218.7,startPosition:25},0).wait(1).to({regX:160.6,regY:306,rotation:0,x:222.2,y:306,mode:"single",startPosition:0},0).wait(48));

		// 身体
		this.instance_6 = new lib.Symbol15copy();
		this.instance_6.setTransform(192.5,791.6,1,1,0,0,0,127.9,791.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({regX:193.5,regY:583.5,x:258.1,y:583.6},0).wait(1).to({rotation:0.1,x:258.3},0).wait(1).to({x:258.5,y:583.7},0).wait(1).to({rotation:0.3,x:258.8,y:583.8},0).wait(1).to({rotation:0.5,x:259.4,y:584.1},0).wait(1).to({rotation:0.7,x:260.1,y:584.3},0).wait(1).to({rotation:0.9,x:260.8,y:584.6},0).wait(1).to({rotation:1.1,x:261.3,y:584.7},0).wait(1).to({rotation:1.2,x:261.6,y:584.9},0).wait(1).to({rotation:1.3,x:261.8,y:585},0).wait(1).to({x:261.9},0).wait(1).to({regX:128,regY:791.6,x:191.5,y:791.5},0).wait(1).to({regX:193.5,regY:583.5,x:261.6,y:585},0).wait(1).to({rotation:1.2,x:260.7,y:584.9},0).wait(1).to({rotation:1.1,x:259.9,y:584.7},0).wait(1).to({regX:128,regY:791.6,rotation:1,x:190.6,y:791.6},0).wait(1).to({regX:193.5,regY:583.5,x:259.7,y:584.7},0).wait(1).to({x:259.5,y:584.6},0).wait(1).to({rotation:0.9,x:259.2},0).wait(1).to({rotation:0.8,x:258.7,y:584.4},0).wait(1).to({rotation:0.6,x:257.8,y:584.2},0).wait(1).to({rotation:0.4,x:256.9,y:584},0).wait(1).to({rotation:0.2,x:256.1,y:583.7},0).wait(1).to({rotation:0.1,x:255.6,y:583.6},0).wait(1).to({rotation:0,x:255.2},0).wait(1).to({x:255.1,y:583.5},0).wait(1).to({regX:127.9,regY:791.6,x:189.5,y:791.6},0).wait(48));

		// 椅子
		this.instance_7 = new lib.Symbol14();
		this.instance_7.setTransform(82.5,707.4,1,1,0,0,0,78.5,147);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(86));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(4,121.4,460.9,733.1);


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

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({startPosition:0},0).wait(1).to({regX:378.5,regY:312.4,x:580.3,y:964.9},0).wait(1).to({x:580.2,y:964.7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:580,y:964.5},0).wait(1).to({x:579.7,y:964.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:579.4,y:963.8},0).wait(1).to({x:579,y:963.3},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:578.4,y:962.7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:577.8,y:962},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:577.1,y:961.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:576.4,y:960.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:575.5,y:959.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:574.5,y:958},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:573.4,y:956.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:572.2,y:955.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:570.9,y:953.7},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:569.5,y:952},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:568,y:950.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:566.3,y:948.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:564.5,y:946.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:562.7,y:944},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:560.7,y:941.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:558.5,y:939.1},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:556.2,y:936.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:553.8,y:933.5},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:551.3,y:930.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:548.6,y:927.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:545.8,y:924},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:542.8,y:920.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:539.7,y:916.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:536.4,y:912.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:533,y:908.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:529.4,y:904.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:525.7,y:900.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:521.8,y:895.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:517.8,y:890.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:513.6,y:886},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:509.4,y:880.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:505,y:875.6},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:500.5,y:870.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:495.8,y:864.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:491,y:859.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:486.2,y:853.4},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:481.3,y:847.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:476.3,y:841.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:471.2,y:835.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:466.2,y:829.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:461.1,y:823.6},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:456,y:817.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:450.9,y:811.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:445.8,y:805.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:440.9,y:799.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:435.9,y:793.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:431.1,y:788.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:426.3,y:782.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:421.7,y:777},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:417.2,y:771.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:412.8,y:766.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:408.6,y:761.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:404.5,y:756.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:400.5,y:751.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:396.7,y:747.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:393.1,y:743.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:389.7,y:739},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:386.4,y:735.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:383.3,y:731.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:380.3,y:728},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:377.6,y:724.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:375,y:721.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:372.5,y:718.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:370.2,y:716},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:368,y:713.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:366.1,y:711},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:364.2,y:708.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:362.6,y:706.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:361,y:705},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:359.6,y:703.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:358.3,y:701.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:357.1,y:700.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:356.1,y:699.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:355.2,y:698.1},0).wait(1).to({scaleX:1,scaleY:1,x:354.4,y:697.2},0).wait(1).to({scaleX:1,scaleY:1,x:353.7,y:696.4},0).wait(1).to({scaleX:1,scaleY:1,x:353.2,y:695.8},0).wait(1).to({scaleX:1,scaleY:1,x:352.7,y:695.2},0).wait(1).to({x:352.4,y:694.8},0).wait(1).to({scaleX:1,scaleY:1,x:352.1,y:694.5},0).wait(1).to({x:352,y:694.3},0).wait(1).to({regX:385.4,regY:317.9,x:358.8,y:699.9},0).wait(26));

		// table
		this.instance_4 = new lib.Symbol7("synched",0);
		this.instance_4.setTransform(363,1042.1,1,1,0,0,0,279.5,108);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({startPosition:0},0).wait(1).to({y:1042},0).wait(1).to({scaleX:1,scaleY:1,x:362.7,y:1041.9},0).wait(1).to({scaleX:1,scaleY:1,x:362.5,y:1041.8},0).wait(1).to({scaleX:1,scaleY:1,x:362,y:1041.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:361.4,y:1041.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:360.7,y:1041},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:359.8,y:1040.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:358.8,y:1040.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:357.7,y:1039.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:356.3,y:1039.1},0).wait(1).to({scaleX:1.04,scaleY:1.03,skewY:0.1,x:354.8,y:1038.4},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:353.2,y:1037.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:351.4,y:1036.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:349.4,y:1036.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:347.2,y:1035.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:344.8,y:1034.1},0).wait(1).to({scaleX:1.1,scaleY:1.09,x:342.3,y:1033},0).wait(1).to({scaleX:1.11,scaleY:1.1,x:339.6,y:1031.8},0).wait(1).to({scaleX:1.12,scaleY:1.11,skewY:0.2,x:336.6,y:1030.5},0).wait(1).to({scaleX:1.14,scaleY:1.12,x:333.5,y:1029.1},0).wait(1).to({scaleX:1.15,scaleY:1.14,x:330.1,y:1027.6},0).wait(1).to({scaleX:1.17,scaleY:1.15,x:326.6,y:1026.1},0).wait(1).to({scaleX:1.19,scaleY:1.17,skewY:0.3,x:322.8,y:1024.4},0).wait(1).to({scaleX:1.21,scaleY:1.18,x:318.7,y:1022.6},0).wait(1).to({scaleX:1.23,scaleY:1.2,x:314.5,y:1020.8},0).wait(1).to({scaleX:1.25,scaleY:1.22,x:310,y:1018.8},0).wait(1).to({scaleX:1.27,scaleY:1.24,skewY:0.4,x:305.2,y:1016.7},0).wait(1).to({scaleX:1.29,scaleY:1.26,x:300.3,y:1014.5},0).wait(1).to({scaleX:1.32,scaleY:1.28,x:295,y:1012.3},0).wait(1).to({scaleX:1.34,scaleY:1.3,skewY:0.5,x:289.6,y:1009.9},0).wait(1).to({scaleX:1.37,scaleY:1.33,x:283.9,y:1007.4},0).wait(1).to({scaleX:1.4,scaleY:1.35,x:277.9,y:1004.8},0).wait(1).to({scaleX:1.42,scaleY:1.38,skewY:0.6,x:271.7,y:1002},0).wait(1).to({scaleX:1.45,scaleY:1.4,x:265.2,y:999.2},0).wait(1).to({scaleX:1.49,scaleY:1.43,skewY:0.7,x:258.5,y:996.3},0).wait(1).to({scaleX:1.52,scaleY:1.46,x:251.6,y:993.3},0).wait(1).to({scaleX:1.55,scaleY:1.49,x:244.4,y:990.1},0).wait(1).to({scaleX:1.58,scaleY:1.52,skewY:0.8,x:237.1,y:986.9},0).wait(1).to({scaleX:1.62,scaleY:1.55,x:229.5,y:983.6},0).wait(1).to({scaleX:1.66,scaleY:1.58,skewY:0.9,x:221.7,y:980.2},0).wait(1).to({scaleX:1.69,scaleY:1.61,x:213.7,y:976.7},0).wait(1).to({scaleX:1.73,scaleY:1.65,skewY:1,x:205.7,y:973.1},0).wait(1).to({scaleX:1.77,scaleY:1.68,x:197.4,y:969.5},0).wait(1).to({scaleX:1.81,scaleY:1.72,skewY:1.1,x:189.1,y:965.9},0).wait(1).to({scaleX:1.85,scaleY:1.75,x:180.6,y:962.2},0).wait(1).to({scaleX:1.89,scaleY:1.78,skewY:1.2,x:172.2,y:958.4},0).wait(1).to({scaleX:1.92,scaleY:1.82,x:163.6,y:954.8},0).wait(1).to({scaleX:1.96,scaleY:1.85,skewY:1.3,x:155.1,y:951},0).wait(1).to({scaleX:2,scaleY:1.89,x:146.6,y:947.3},0).wait(1).to({scaleX:2.04,scaleY:1.92,skewY:1.4,x:138.2,y:943.6},0).wait(1).to({scaleX:2.08,scaleY:1.96,skewY:1.5,x:129.8,y:940},0).wait(1).to({scaleX:2.12,scaleY:1.99,x:121.6,y:936.3},0).wait(1).to({scaleX:2.16,scaleY:2.03,skewY:1.6,x:113.5,y:932.8},0).wait(1).to({scaleX:2.19,scaleY:2.06,x:105.6,y:929.3},0).wait(1).to({scaleX:2.23,scaleY:2.09,skewY:1.7,x:97.8,y:925.9},0).wait(1).to({scaleX:2.26,scaleY:2.12,x:90.2,y:922.6},0).wait(1).to({scaleX:2.3,scaleY:2.15,x:82.9,y:919.4},0).wait(1).to({scaleX:2.33,scaleY:2.18,skewY:1.8,x:75.8,y:916.3},0).wait(1).to({scaleX:2.36,scaleY:2.21,x:69,y:913.3},0).wait(1).to({scaleX:2.39,scaleY:2.24,skewY:1.9,x:62.4,y:910.4},0).wait(1).to({scaleX:2.42,scaleY:2.26,x:56.1,y:907.6},0).wait(1).to({scaleX:2.45,scaleY:2.29,x:50.1,y:905},0).wait(1).to({scaleX:2.48,scaleY:2.31,skewY:2,x:44.3,y:902.5},0).wait(1).to({scaleX:2.5,scaleY:2.33,x:38.8,y:900.1},0).wait(1).to({scaleX:2.53,scaleY:2.35,x:33.6,y:897.8},0).wait(1).to({scaleX:2.55,scaleY:2.37,skewY:2.1,x:28.7,y:895.6},0).wait(1).to({scaleX:2.57,scaleY:2.39,x:24,y:893.6},0).wait(1).to({scaleX:2.59,scaleY:2.41,x:19.6,y:891.7},0).wait(1).to({scaleX:2.61,scaleY:2.43,skewY:2.2,x:15.5,y:889.9},0).wait(1).to({scaleX:2.63,scaleY:2.44,x:11.7,y:888.2},0).wait(1).to({scaleX:2.65,scaleY:2.46,x:8.1,y:886.7},0).wait(1).to({scaleX:2.66,scaleY:2.47,x:4.7,y:885.2},0).wait(1).to({scaleX:2.68,scaleY:2.49,x:1.6,y:883.9},0).wait(1).to({scaleX:2.69,scaleY:2.5,skewY:2.3,x:-1.2,y:882.6},0).wait(1).to({scaleX:2.7,scaleY:2.51,x:-3.8,y:881.4},0).wait(1).to({scaleX:2.71,scaleY:2.52,x:-6.2,y:880.4},0).wait(1).to({scaleX:2.72,scaleY:2.53,x:-8.3,y:879.4},0).wait(1).to({scaleX:2.73,scaleY:2.53,x:-10.2,y:878.6},0).wait(1).to({scaleX:2.74,scaleY:2.54,x:-12,y:877.9},0).wait(1).to({scaleX:2.75,scaleY:2.55,x:-13.5,y:877.2},0).wait(1).to({scaleX:2.75,scaleY:2.55,skewY:2.4,x:-14.8,y:876.7},0).wait(1).to({scaleX:2.76,scaleY:2.56,x:-15.9,y:876.2},0).wait(1).to({scaleX:2.76,scaleY:2.56,x:-16.9,y:875.7},0).wait(1).to({scaleX:2.76,scaleY:2.56,x:-17.6,y:875.4},0).wait(1).to({scaleX:2.77,scaleY:2.57,x:-18.2,y:875.2},0).wait(1).to({scaleX:2.77,scaleY:2.57,x:-18.6,y:874.9},0).wait(1).to({scaleX:2.77,scaleY:2.57,x:-18.8},0).wait(1).to({scaleY:2.57,x:-18.9,y:875},0).wait(26));

		// ren
		this.instance_5 = new lib.Symbol4("synched",0,false);
		this.instance_5.setTransform(253.7,744.2,1,1,0,0,0,260.8,416.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({startPosition:6},0).wait(1).to({regX:241.3,regY:479.8,x:234.1,y:807.8,startPosition:7},0).wait(1).to({x:233.8,startPosition:8},0).wait(1).to({scaleX:1,scaleY:1,x:233.4,y:807.9,startPosition:9},0).wait(1).to({x:232.7,startPosition:10},0).wait(1).to({scaleX:1,scaleY:1,x:231.8,y:808,startPosition:11},0).wait(1).to({x:230.7,startPosition:12},0).wait(1).to({scaleX:1,scaleY:1,x:229.3,y:808.1,startPosition:13},0).wait(1).to({scaleX:1,scaleY:1,x:227.8,y:808.2,startPosition:14},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:226,y:808.3,startPosition:15},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:224,y:808.4,startPosition:16},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:221.7,y:808.6,startPosition:17},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:219.2,y:808.8,startPosition:18},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:216.5,y:808.9,startPosition:19},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:213.4,y:809.1,startPosition:20},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:210.1,y:809.3,startPosition:21},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:206.5,y:809.5,startPosition:22},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:202.6,y:809.8,startPosition:23},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:198.4,y:810.1,startPosition:24},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:193.9,y:810.3,startPosition:25},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:189.1,y:810.7,startPosition:26},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:183.9,y:811,startPosition:27},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:178.5,y:811.3,startPosition:28},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:172.7,y:811.7,startPosition:29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:166.5,y:812.1,startPosition:30},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:160.1,y:812.5,startPosition:31},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:153.2,y:812.9,startPosition:32},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:145.9,y:813.4,startPosition:33},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:138.3,y:813.9,startPosition:34},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:130.4,y:814.4,startPosition:35},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:122,y:814.9,startPosition:36},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:113.3,y:815.5,startPosition:37},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:104.2,y:816,startPosition:38},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:94.7,y:816.6,startPosition:39},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:84.8,y:817.2,startPosition:40},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:74.6,y:817.9,startPosition:41},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:64,y:818.6,startPosition:42},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:53.1,y:819.3,startPosition:43},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:41.9,y:820,startPosition:44},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:30.3,y:820.7,startPosition:45},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:18.4,y:821.4,startPosition:46},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:6.3,y:822.2,startPosition:47},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-6.1,y:823,startPosition:48},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-18.6,y:823.8,startPosition:49},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-31.4,y:824.6,startPosition:50},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-44.2,y:825.4,startPosition:51},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-57.2,y:826.2,startPosition:52},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:-70.2,y:827.1,startPosition:53},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-83.2,y:827.9,startPosition:54},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-96.1,y:828.7,startPosition:55},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-109,y:829.5,startPosition:56},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-121.8,y:830.4,startPosition:57},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-134.4,y:831.1,startPosition:58},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-146.7,y:831.9,startPosition:59},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-158.8,y:832.7,startPosition:60},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:-170.6,y:833.4,startPosition:61},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:-182.2,y:834.1,startPosition:62},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:-193.4,y:834.9,startPosition:63},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:-204.2,y:835.5,startPosition:64},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:-214.6,y:836.2,startPosition:65},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-224.7,y:836.8,startPosition:66},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-234.3,y:837.5,startPosition:67},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:-243.5,y:838,startPosition:68},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:-252.4,y:838.6,startPosition:69},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:-260.7,y:839.2,startPosition:70},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:-268.7,y:839.7,startPosition:71},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:-276.2,y:840.1,startPosition:72},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-283.3,y:840.6,startPosition:73},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-290,y:841,startPosition:74},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-296.3,y:841.4,startPosition:75},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:-302.2,y:841.8,startPosition:76},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:-307.6,y:842.1,startPosition:77},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-312.7,y:842.4,startPosition:78},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-317.4,y:842.7,startPosition:79},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-321.8,y:843,startPosition:80},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-325.7,y:843.3,startPosition:81},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-329.4,y:843.5,startPosition:82},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-332.6,y:843.7,startPosition:83},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-335.6,y:843.9,startPosition:84},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-338.2,y:844.1,startPosition:85},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-340.5,y:844.2},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-342.5,y:844.3},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-344.3,y:844.4},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-345.7,y:844.5},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-346.8,y:844.6},0).wait(1).to({x:-347.7},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-348.3,y:844.7},0).wait(1).to({x:-348.7},0).wait(1).to({regX:260.9,regY:416.2,x:-321.5,y:755.7,mode:"single",startPosition:0},0).wait(26));

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
	p.nominalBounds = new cjs.Rectangle(-13.7,-135.4,821.2,1317.8);


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
