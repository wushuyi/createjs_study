$el = {};
$el.win = $(window);
$el.doc = $(document);
$el.doc.on('touchstart touchmove touchend touchcancel', function (evt) {
    evt.preventDefault();
});

//(function(){
var anima_p1 = new AnimationP1($('#canvas1').get(0));
anima_p1.onSwipe = function () {
    $('#canvas1').one('swipeRight mouseup', function () {
        anima_p1.nextStatus();
    });
};
//anima_p1.onShake = function () {
//    $('#canvas1').one('swipeRight mouseup', function () {
//        anima_p1.nextStatus();
//    });
//};
anima_p1.onProgress = function (number) {
    console.log(number);
};
anima_p1.onComplete = function () {
    anima_p1.play();
};
anima_p1.onEnd = function () {
    console.log('end');
};
anima_p1.preload();
//})();

//(function(){
//    var anima_p1 = new AnimationP2($('#canvas2').get(0));
//    anima_p1.onProgress = function (number) {
//        console.log(number);
//    };
//    anima_p1.onComplete = function () {
//        anima_p1.play();
//    };
//    anima_p1.onEnd = function(){
//        console.log('end');
//    };
//    anima_p1.preload();
//})();