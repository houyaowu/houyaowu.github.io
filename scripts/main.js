// build time:Wed Aug 01 2018 21:53:03 GMT+0800 (中国标准时间)
(function(){"use strict";Ps.initialize($(".sidebar")[0]);$(".category-list-container > a, .tag-list-container > a, .archive-list-container > a").click(function(e){$(this).next().slideToggle("fast")});$(".sidebar-toggle").click(function(e){$(".sidebar").toggleClass("in")});$(".main-content").click(function(e){$(".sidebar").removeClass("in")});$(".article-entry").each(function(e){$(this).find("img").each(function(){if($(this).closest("figure").hasClass("article-gallery-img")){return}var e=this.alt;$(this).wrap('<figure class="article-gallery-img" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject"></figure>').wrap('<a href="'+this.src+'" title="'+e+'"></a>');$(this).after('<figcaption class="caption">'+(e||"")+"</figcaption>")})});var e=document.querySelectorAll(".pswp")[0];if(e){var t=".article-gallery, .article-entry";var i=function(e){var t=function(e){var t=$(e).find("figure.article-gallery-img").toArray(),i=t.length,r=[],n,a,l,c,s;for(var o=0;o<i;o++){n=t[o];if(n.nodeType!==1){continue}a=n.children[0];c=a.children[0];l=a.getAttribute("data-size");l=l&&l.split("x");s={src:a.getAttribute("href"),w:l&&parseInt(l[0],10)||c.width,h:l&&parseInt(l[1],10)||c.height};if(n.children.length>1){s.title=n.children[1].innerHTML}if(a.children.length>0){s.msrc=a.children[0].getAttribute("src")}s.el=n;r.push(s)}return r};var i=function u(e,t){return e&&(t(e)?e:u(e.parentNode,t))};var r=function(t){t=t||window.event;var r=t.target||t.srcElement;var n=i(r,function(e){return e.tagName&&e.tagName.toUpperCase()==="FIGURE"});if(!n){return}if(t.preventDefault){t.preventDefault()}else{t.returnValue=false}var l=$(n).closest(e)[0],c=$(l).find("figure.article-gallery-img").toArray(),s=c.length,o=0,u;for(var f=0;f<s;f++){if(c[f].nodeType!==1){continue}if(c[f]===n){u=o;break}o++}if(u>=0){a(u,l)}return false};var n=function(){var e=window.location.hash.substring(1),t={};if(e.length<5){return t}var i=e.split("&");for(var r=0;r<i.length;r++){if(!i[r]){continue}var n=i[r].split("=");if(n.length<2){continue}t[n[0]]=n[1]}if(t.gid){t.gid=parseInt(t.gid,10)}return t};var a=function(e,i,r,n){var a=document.querySelectorAll(".pswp")[0],l,c,s;s=t(i);c={galleryUID:i.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=s[e].el.getElementsByTagName("img")[0],i=window.pageYOffset||document.documentElement.scrollTop,r=t.getBoundingClientRect();return{x:r.left,y:r.top+i,w:r.width}}};if(n){if(c.galleryPIDs){for(var o=0;o<s.length;o++){if(s[o].pid==e){c.index=o;break}}}else{c.index=parseInt(e,10)-1}}else{c.index=parseInt(e,10)}if(isNaN(c.index)){return}if(r){c.showAnimationDuration=0}l=new PhotoSwipe(a,PhotoSwipeUI_Default,s,c);l.listen("imageLoadComplete",function(e,t){var i=t.el.children[0];var r=t.container.children[0];if(!i.getAttribute("data-size")){i.setAttribute("data-size",r.naturalWidth+"x"+r.naturalHeight);t.w=r.naturalWidth;t.h=r.naturalHeight;l.invalidateCurrItems();l.updateSize(true)}});l.init()};var l=document.querySelectorAll(e);for(var c=0,s=l.length;c<s;c++){l[c].setAttribute("data-pswp-uid",c+1);l[c].onclick=r}var o=n();if(o.pid&&o.gid){a(o.pid,l[o.gid-1],true,true)}};i(t)}})();
//rebuild by neat 