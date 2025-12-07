var canvas, stage, exportRoot;

function init() {
	canvas = document.getElementById("canvas");
	exportRoot = new lib.test1();

	stage = new Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	Ticker.setFPS(30);
	Ticker.addListener(stage);
}

if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:
(lib.test1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{l:0},true);

	// timeline functions:
	this.frame_9 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.setTransform(300,200);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.bg}]}).wait(10));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,600,400);


// symbols:
(lib.element = function() {
	this.initialize();

	// レイヤー 3
	this.instance = new lib.シンボル3();
	this.instance.setTransform(-230.9,95.7,1,1,67.5);

	this.instance_1 = new lib.シンボル3();
	this.instance_1.setTransform(231,-95.6,1,1,67.5);

	this.instance_2 = new lib.シンボル3();
	this.instance_2.setTransform(-230.9,95.7,1,1,67.5);

	this.instance_3 = new lib.シンボル3();
	this.instance_3.setTransform(231,-95.6,1,1,67.5);

	this.instance_4 = new lib.シンボル3();
	this.instance_4.setTransform(-95.6,231,1,1,22.5);

	this.instance_5 = new lib.シンボル3();
	this.instance_5.setTransform(95.7,-230.9,1,1,22.5);

	this.instance_6 = new lib.シンボル3();
	this.instance_6.setTransform(-95.6,231,1,1,22.5);

	this.instance_7 = new lib.シンボル3();
	this.instance_7.setTransform(95.7,-230.9,1,1,22.5);

	this.instance_8 = new lib.シンボル3();
	this.instance_8.setTransform(-176.7,176.8,1,1,45);

	this.instance_9 = new lib.シンボル3();
	this.instance_9.setTransform(176.8,-176.7,1,1,45);

	this.instance_10 = new lib.シンボル3();
	this.instance_10.setTransform(0,250);

	this.instance_11 = new lib.シンボル3();
	this.instance_11.setTransform(0,-249.9);

	this.instance_12 = new lib.シンボル3();
	this.instance_12.setTransform(0,250);

	this.instance_13 = new lib.シンボル3();
	this.instance_13.setTransform(0,-249.9);

	// レイヤー 2
	this.color = new lib.color();

	// レイヤー 1
	this.shape = new Shape();
	this.shape.graphics.f("#edebe0").p("EAABgnDIu8C+IssIeIoeMsIi+O8IC+O7IIeMrIMsIfIO8C+IO7i+IMsofIIesrIC+u7Ii+u8IoessIssoeIu7i+").f().s("#928751").ss(1,1,1,3).p("EAABgnDIO7C+IMsIeIIeMsIC+O8Ii+O7IoeMrIssIfIu7C+Iu8i+IssofIoesrIi+u7IC+u8IIessIMsoeIO8i+").cp();

	this.addChild(this.shape,this.color,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-261.6,-273.4,523.3,547);


(lib.element2 = function() {
	this.initialize();

	// レイヤー 2
	this.color = new lib.color();

	// レイヤー 4
	this.shape = new Shape();
	this.shape.graphics.f("#edebe0").p("EAX6g5uI35kxI36ExI0SNjItjUSIkxX7IExX3INjUSIUSNkIX6ExIX5kxIUStkINj0SIEx33Ikx37Itj0SI0Stj").p("EAO8gkFIMsIeIIeMsIC+O8Ii+O7IoeMrIssIfIu7C+Iu8i+IssofIoesrIi+u7IC+u8IIessIMsoeIO8i+IO7C+").f().s("#928751").ss(1,1,1,3).p("EAABgnDIO7C+IMsIeIIeMsIC+O8Ii+O7IoeMrIssIfIu7C+Iu8i+IssofIoesrIi+u7IC+u8IIessIMsoeIO8i+").cp();

	this.addChild(this.shape,this.color);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-399.9,-399.9,800,800);


(lib.bg = function() {
	this.initialize();

	// timeline function:
	this.frame_0 = function() {
		
		var i,ele;
		var num=1;
		var max=12;
		var step=0.6;//縮小率
		var speed=1.08
		var tv=1/step;
		var r=0;
		
		var pts=[new Point(0,-250),
			new Point(95.65,-230.95),
			new Point(176.8,-176.8),
			new Point(230.95,-95.65),
			new Point(250,0),
			new Point(230.95,95.65),
			new Point(176.8,176.8),
			new Point(95.65,230.95),
			new Point(0,250),
			new Point(-95.65,230.95),
			new Point(-176.8,176.8),
			new Point(-230.95,95.65),
			new Point(-250,0),
			new Point(-230.95,-95.65),
			new Point(-176.8,-176.8),
			new Point(-95.65,-230.95)]
		
		for(i=0;i<max;i++){
			ele=new lib.element2();
			ele.g=new Graphics();
			ele.addChild(new Shape(ele.g))
			this.addChild(ele)
			
			ele.scaleY=Math.pow(step,max-i-1);
			ele.scaleX=ele.scaleY*1.3;
		}
		
		this.onTick=function(){
			var bef
			var gnc=this.getNumChildren();
			for(i=1;i<gnc;i++){
				ele=this.getChildAt(i)
				ele.scaleY*=speed;
				ele.scaleX=ele.scaleY*1.3;
				if(ele.scaleY<=0){
					ele.color.alpha=1;
				}else if(ele.scaleY>=0.3){
					ele.color.alpha=0;
				}else{
					ele.color.alpha=(1-(ele.scaleY-0)/0.3)/2
				}
				ele.x+=ele.x/-70;
				ele.y+=ele.y/-70;
				
				if(i>1){
					ele.g.clear()
					ele.g.beginStroke("#BCBB97");
					ele.g.setStrokeStyle(ele.scaleY)
					var p=bef.scaleY/ele.scaleY;
					var sx=(bef.x-ele.x)/ele.scaleY;
					var sy=(bef.y-ele.y)/ele.scaleY;
					for(var n=0;n<16;n++){
						ele.g.moveTo(pts[n].x,pts[n].y)
						ele.g.lineTo(pts[n].x*p+sx,pts[n].y*p+sy)
					}
					ele.g.endStroke();
				}else{
				}
				bef=ele;
			}
			r-=0.01;
			if(r<=Math.PI*-1){
				r+=Math.PI*2
			}
			if(ele.scaleY>1.8){
				var top=this.getChildAt(1);
				this.addChildAt(ele,1);
				ele.scaleY=top.scaleY*step;
				ele.scaleX=ele.scaleY*1.3;
				ele.x=100*Math.cos(r)
				ele.y=80*Math.sin(r)
			}
		}
	}

	// element
	this.shape = new Shape();
	this.shape.graphics.f("#edebe0").p("EAu4gfPMhdvAAAMAAAA+fMBdvAAAMAAAg+f").f();

	this.addChild(this.shape);
	this.frame_0();
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-299.9,-199.9,600,400);


(lib.シンボル3 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new Shape();
	this.shape.graphics.f().s("#bcbb97").ss(1,1,1,3).p("ADrDrIjrjrIjqDr").p("AAAAAIjqjq").p("AAAAAIDrjq");

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-23.4,-23.4,47,47);


(lib.color = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new Shape();
	this.shape.graphics.f("#928751").p("EAABgnDIu8C+IssIeIoeMsIi+O8IC+O7IIeMrIMsIfIO8C+IO7i+IMsofIIesrIC+u7Ii+u8IoessIssoeIu7i+").f();

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-249.9,-249.9,500,500);

init();
