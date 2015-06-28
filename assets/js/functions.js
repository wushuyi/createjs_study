var $el = {};
var cache = {};
$el.win = $(window);
$el.doc = $(document);
$el.doc.on('touchstart touchmove touchend touchcancel', function (evt) {
    evt.preventDefault();
});
$el.wrapper = $('.wrapper');
$el.canvas = $('#canvas1');
$el.nav = $('.nav');
$el.navNext = $('.next', $el.nav);
$el.navPrve = $('.prve', $el.nav);

cache.url = $.url();
cache.page = cache.url.param('page');
if(!cache.page){
    cache.page = '1';
}

if (cache.page === '1') {
    $el.navPrve.hide();

}
if (cache.page === '6') {
    $el.navNext.hide();
}
$el.navNext.one('tap click', function () {
    $el.wrapper.animate({
        opacity: 0
    }, 1000, function () {
        location.href = location.origin + location.pathname + '?page=' + (parseInt(cache.page) + 1);
    });
});
$el.navPrve.one('tap click', function () {
    $el.wrapper.animate({
        opacity: 0
    }, 1000, function () {
        location.href = location.origin + location.pathname + '?page=' + (parseInt(cache.page) - 1);
    });
});

var anima;
switch (cache.page) {
    case '1':
        anima = new AnimationP1($el.canvas.get(0));
        anima.onSwipe = function (currentFrame) {
            if (currentFrame === 71) {
                $el.nav.show();
            }
            $el.canvas.off('swipeRight').one('swipeRight', function () {
                anima.nextStatus();
            });
        };
        anima.onProgress = function (number) {
            console.log(number);
        };
        anima.onComplete = function () {
            $el.wrapper.animate({
                opacity: 1
            }, 1000, function () {
                anima.play();
            });
        };
        anima.onEnd = function () {
            console.log('end');
        };
        break;
    case '2':
        anima = new AnimationP2($el.canvas.get(0));
        anima.onProgress = function (number) {
            console.log(number);
        };
        anima.onComplete = function () {
            $el.wrapper.animate({
                opacity: 1
            }, 1000, function () {
                anima.play();
            });
        };
        anima.onEnd = function () {
            $el.nav.show();
        };
        break;
    case '3':
        anima = new AnimationP3($el.canvas.get(0));
        anima.onShake = function () {
            $el.canvas.off('swipeLeft').one('swipeLeft', function(evt){
                anima.nextStatus();
            });
        };
        anima.onSwipe = function () {
            $el.canvas.off('swipeLeft').one('swipeLeft', function(evt){
                anima.nextStatus();
            });
        };
        anima.onProgress = function (number) {
            console.log(number);
        };
        anima.onComplete = function () {
            $el.wrapper.animate({
                opacity: 1
            }, 1000, function () {
                anima.play();
                //anima.exportRoot.gotoAndStop(35);
            });
            //anima.play();
            //
        };
        anima.onEnd = function () {
            $el.nav.show();
        };
        break;
    case '4':
        anima = new AnimationP4($el.canvas.get(0));
        anima.onProgress = function (number) {
            console.log(number);
        };
        anima.onComplete = function () {
            $el.wrapper.animate({
                opacity: 1
            }, 1000, function () {
                anima.play();
            });
        };
        anima.onEnd = function () {
            $el.nav.show();
        };
        break;
    case '5':
        anima = new AnimationP5($el.canvas.get(0));
        anima.onSwipe = function(){
          $el.canvas.off('swipeLeft').one('swipeLeft', function(evt){
              anima.nextStatus();
          });
        };
        anima.onProgress = function (number) {
            console.log(number);
        };
        anima.onComplete = function () {
            $el.wrapper.animate({
                opacity: 1
            }, 1000, function () {
                anima.play();
            });
        };
        anima.onEnd = function () {
            $el.nav.show();
        };
        break;
    case '6':
        anima = new AnimationP6($el.canvas.get(0));
        anima.onProgress = function (number) {
            console.log(number);
        };
        anima.onComplete = function () {
            $el.wrapper.animate({
                opacity: 1
            }, 1000, function () {
                anima.play();
            });
        };
        anima.onEnd = function () {
            $el.nav.show();
        };
        break;
    case '7':
        anima = new AnimationT($el.canvas.get(0));
        anima.onProgress = function (number) {
            console.log(number);
        };
        anima.onComplete = function () {
            $el.wrapper.animate({
                opacity: 1
            }, 1000, function () {
                anima.play();
            });
        };
        anima.onEnd = function () {
            $el.nav.show();
        };
        break;
    case '8':
        anima = new AnimationP0($el.canvas.get(0));
        anima.onProgress = function (number) {
            console.log(number);
        };
        anima.onComplete = function () {
            $el.wrapper.animate({
                opacity: 1
            }, 1000, function () {
                anima.play();
            });
        };
        anima.onEnd = function () {
            console.log('end!');
            $el.nav.show();
        };
        break;
}


$.fn.ready(function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i)) {
        $el.doc.on('WeixinJSBridgeReady', function () {
            anima.preload();
        });
    } else if (Modernizr.touch) {
        $el.doc.one('touchstart', function () {
            anima.preload();
        });
    } else {
        $.fn.ready(function () {
            anima.preload();
        });
    }
});


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

//var $el = {};
//$el.btn = $('#btn');
//$el.btn.on('click', function(evt){
//    var thisLock = $el.btn.data('clickLock');
//    if(thisLock){
//        return false;
//    }
//    function dosome(){};
//    $el.btn.data('clickLock', true);
//    setTimeout(function(){
//        $el.btn.data('clickLock', false);
//    }, 1000);
//});