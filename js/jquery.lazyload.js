// build time:Sat Aug 04 2018 16:52:52 GMT+0800 (中国标准时间)
(function(e,r){if(typeof define==="function"&&define.amd){define(["jquery"],r)}else{r(e["jQuery"])}})(this,function(e){e.fn.lazyload=function(r){return this.each(function(){r=r||{};var a={};var n=e.extend({},a,r);var i=e(this);var t=this;var o=r.srcSign||"lazy-src";var c=r.errCallBack||function(){};var f=r.container||e(window);var g=function(e,r){};var s=function(e,r,a,n){if(r[0].src&&(r[0].src.indexOf("img-err.png")>0||r[0].src.indexOf("img-err2.png")>0)){return}var i=r.width();var t=r.height();r[0].src="/img/img-err.png";a()};var l=function(e){var r=e.width();var a=e.height();var n=e.offset().top;var i=e.offset().left;var t=e.clone().addClass("lazy-loding").insertBefore(e);t[0].src="/img/img-loading.png";e.hide()};var v=function(e,a,n){if(e.attr("src"))return;if(r.cache==true){console.log(e);var i=document.getElementById("canvas1");var t=i.getContext("2d");var o;image=new Image;image.src=e.attr(a);image.onload=function(){t.drawImage(image,0,0);o=t.getImageData(0,0,500,250);console.log(o)}}else{l(e);var c=e.attr(a);e[0].onerror=function(r){s(r,e,n,c)};e[0].onload=function(r){e.parent().find(".lazy-loding").remove();e.show();g(r,e)};e[0].src=c}};n.cache=[];if(t.tagName=="IMG"){var d={obj:i,tag:"img",url:i.attr(o)};n.cache.push(d)}else{var u=i.find("img");u.each(function(r){var a=this.nodeName.toLowerCase(),i=e(this).attr(o);var t={obj:u.eq(r),tag:a,url:i};n.cache.push(t)})}var h=function(){var r=f.height();var a;if(e(window).get(0)===window){a=e(window).scrollTop()}else{a=f.offset().top}e.each(n.cache,function(e,n){var i=n.obj,t=n.tag,f=n.url,g,s;if(i){g=i.offset().top-a,g+i.height();if(g>=0&&g<r||s>0&&s<=r){if(f){if(t==="img"){v(i,o,c)}}n.obj=null}}})};h();f.bind("scroll",h);f.bind("resize",h)})}});
//rebuild by neat 