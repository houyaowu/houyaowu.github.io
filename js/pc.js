// build time:Wed Aug 01 2018 21:59:19 GMT+0800 (中国标准时间)
define([],function(){var e=function(){var e=$(".tips-box");return{show:function(){e.removeClass("hide")},hide:function(){e.addClass("hide")},init:function(){}}}();var n=function(){var e=$(".tagcloud a");e.css({"font-size":"12px"});for(var n=0,i=e.length;n<i;n++){var s=e.eq(n).html().length%5+1;e[n].className="";e.eq(n).addClass("color"+s)}};var i=function(e){var n=$(".switch-wrap");n.css({transform:"translate(-"+e*100+"%, 0 )"});$(".icon-wrap").addClass("hide");$(".icon-wrap").eq(e).removeClass("hide")};var s=function(){var s=$("#myonoffswitch");var t=$(".second-part");var a=$(".first-part");s.click(function(){if(s.hasClass("clicked")){s.removeClass("clicked");t.removeClass("turn-left");a.removeClass("turn-left")}else{s.addClass("clicked");t.addClass("turn-left");a.addClass("turn-left");n()}});var o;var r=false;var c=false;$(".icon").bind("mouseenter",function(){r=true;e.show()}).bind("mouseleave",function(){r=false;setTimeout(function(){if(!c){e.hide()}},100)});$(".tips-box").bind("mouseenter",function(){c=true;e.show()}).bind("mouseleave",function(){c=false;setTimeout(function(){if(!r){e.hide()}},100)});$(".tips-inner li").bind("click",function(){var n=$(this).index();i(n);e.hide()})};return{init:function(){n();s();e.init()}}});
//rebuild by neat 