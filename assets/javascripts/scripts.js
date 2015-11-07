(function(){window.defaults={"const":{RIGHT_CLICK:2,BREAKPOINTS:[400,600,800,1e3,1200,1400]},map:{switchBreakpoint:2,zoom:16},menu:{switchBreakpoint:2,darkPage:{switchBreakpoint:1}},lightbox:function(){return{arrows:!1,click:!0,swipe:!0,touchpad:!0,keyboard:!0,hash:!0,shadows:!1,loop:!0,nav:"thumbs",fit:"contain",width:"100%",ratio:"1000/500",allowfullscreen:"native",transition:"dissolve",clicktransition:"dissolve"}},presentation:function(){return $.extend(this.lightbox(),{nav:!1,caption:!1,hash:!1,autoplay:5e3,fit:"cover"})},carousel:{"default":function(e){var t;return null==e&&(e=null),t={log:!1,speed:500,timeout:0,manualSpeed:500,paused:!0,prev:$(this).parent().find(".previous"),next:$(this).parent().find(".next"),slides:"> .frame",slideActiveClass:"_active",pager:$(this).parent().find(".pager"),pagerTemplate:'<span class="dot"></span>',pagerActiveClass:"_active"}}},tooltip:function(e){return null==e&&(e=null),{content:e,style:{def:!1,classes:"tooltip",tip:{corner:!0,mimic:!1,method:!0,width:15,height:7,border:0,offset:0}},position:{my:"bottom center",at:"top center",viewport:$(window),adjust:{x:1,y:7}},show:{effect:function(){return $(this).fadeIn(150)}},hide:{distance:30,effect:function(){return $(this).fadeOut(150)}}}},popup:function(){var e,t,n;return n={type:"inline",preloader:!1,midClick:!0,closeBtnInside:!0,fixedContentPos:!0,mainClass:"mfp-zoom-in",removalDelay:500,callbacks:{}},e=["beforeOpen","elementParse","change","resize","open","beforeClose","close","afterClose","markupParse","updateStatus","imageLoadComplete","parseAjax","ajaxContentAdded"],(t=function(t){var n,o,r;for(o=0,r=e.length;r>o;o++)n=e[o],t.callbacks[n]=$.proxy_fire("popup:"+n,{on_object:"content"});return t})(n)}}}).call(this),function(){var e,t=[].slice;$.delay=function(e){var t;return t=function(){},setTimeout(t,e)},$.sum=function(e){var t;return t=0,$.each(e,function(e,n){return t+=n}),t},$.all=function(e){return $.inArray(!1,e)<0},$.closest=function(e,t){return t.reduce(function(t,n){return Math.abs(n-e)<Math.abs(t-e)?n:t})},$.full_inner_height=function(e){return $.sum($(e).find(">*").map(function(){return $(this).height()}))},$.create_viewer=function(e){var t;return $(document.body).find(".viewer."+e).remove(),t=$("<div class='viewer "+e+"' />"),$(document.body).prepend(t),t},$.create_spinner=function(){var e,t;return t=function(){var e,t;for(t=[],e=1;9>=e;e++)t.push('<div class="cube"></div>');return t}().join(""),e=$('<div class="spinner">'+t+"</div>"),e.hide(),e},$.proxy_fire=function(e,n){var o;return o=(null!=n?n:{}).on_object,function(){var n,r;return n=1<=arguments.length?t.call(arguments,0):[],(r=this[o])?(n=n.filter(function(e){return null!=e}),n.unshift(this),r.trigger(e,n)):void 0}},$.Singleton=e=function(){function e(){}var t;return t=null,e.get=function(){return null==this.instance&&(t=new this,t.init()),t},e.prototype.init=function(){},e}()}.call(this),function(){$(function(){return $("table").oncontextmenu=function(){return!1},$("img").on("mousedown",function(e){return e.button!==window.defaults["const"].RIGHT_CLICK}),$("[data-js=block-expand]").on("click",function(){var e,t,n;return t=$(this),e=t.parents("article").find(t.attr("href")),e.data("origin-height")||e.data("origin-height",e.css("height")),n=$.full_inner_height(e),n===e.height()&&(n=e.data("origin-height")),e.animate({height:n},200,function(){return e.css(e.hasClass("_active")?{height:e.data("origin-height")}:{height:"inherit"}),$.each([e,t],function(){return $(this).toggleClass("_active")})}),!1})})}.call(this),function(){var e,t,n,o,r,i,a,s=function(e,t){function n(){this.constructor=e}for(var o in t)l.call(t,o)&&(e[o]=t[o]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},l={}.hasOwnProperty;$(function(){var t,n;return n=e.get(),t=$("[data-js=expandable-items]"),t.data("speed",500),t.each(function(){return t.find(t.data("item-selector")).on("click",function(){return n.perform($(this))})}),$(window).on("resize",function(){return n.is_now_active?n.collapse_all():void 0})}),e=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return s(n,e),n.prototype.is_now_active=!1,n.prototype.perform=function(e){var n,o;return n=e.parents("[data-js=expandable-items]"),n.hasClass("_expanded")&&(o=e.hasClass("_expanded"),t(e,!o),n.removeClass("_expanded"),n.find(n.data("item-selector")).removeClass("_expanded"),this.is_now_active=!1,o)?!1:(a(e),e.addClass("_expanded"),n.addClass("_expanded"),this.is_now_active=!0,!1)},n.prototype.collapse_all=function(){var e;return e=this,$("._expanded.item").each(function(){return e.perform($(this))})},n}($.Singleton),$.fn.block_space=function(e,t){var n,o;return o=(null!=t?t:{}).strict,null==o&&(o=!0),n=o?e.outerWidth(!0):e.width(),Math.ceil(n+(e.offset().left-$(this).offset().left))},$.fn.block_position=function(e,t){var n;return n=(null!=t?t:{}).strict,null==n&&(n=!0),{width:Math.ceil(n?e.outerWidth(!0):e.width()),offset:Math.ceil(e.offset().left-$(this).offset().left)}},$.fn.columns_capacity=function(e){var t,n;return n=$(this).outerWidth(!0),t=e.outerWidth(!0),Math.round(n/t)},$.fn.column_index=function(e){var t,n,o,r,i;for(r=Math.ceil($(this).outerWidth(!0)),n=Math.ceil(e.outerWidth(!0)),t=$(this).block_space(e),i=0;r>t;)t+=n,i++;return o=$(this).columns_capacity(e),[o-i,o]},o=function(e){var t;return t=$('<div class="frame"></div>'),t.css({backgroundImage:"url("+e+")"}),t},n=function(e,t){var n,o,r,i,a,s,l,u,c,p,d;for(c=null!=t?t:{},d=c.within,p=c.with_position,i=c.and_then,r=d,s=p[0],l=p[1],o=r.find(".expand-prototype").clone(),o.removeClass("expand-prototype"),o.hide(),a=r.block_position(e,{strict:!1}),o.find(".pointer").css({left:a.offset+a.width/2}),n=e,u=s-l;u--;)n=n.next();for(n.after(o),u=r.find("> "+r.data("item-selector")).length%s;u--;)o.after($('<div class="fake-tail" />'));return o},i=function(e,t){var n,r,i,a,s,l,u,c;return l=null!=t?t:{},c=l.within,u=l.using,i=c,n=u,a=n.attr("id"),s=JSON.parse(i.data("pages")),a in s?(r=e.find(".gallery .frames"),r.attr({id:a+"-gallery"}),r.cycle(window.defaults.carousel["default"].call(r)),s[a].forEach(function(e){return r.cycle("add",o(e))})):void 0},r=function(e){var t;return t=e.find(".gallery .frames"),t.cycle("destroy")},a=function(e){var t,o,r,a,s;return o=e.parents("[data-js=expandable-items]"),s=o.column_index(e),a=s[0],r=s[1],t=n(e,{within:o,with_position:[r,a]}),i(t,{within:o,using:e}),t.fadeIn(o.data("speed"))},t=function(e,t){var n,o,i;return null==t&&(t=!0),o=e.parents("[data-js=expandable-items]"),n=o.find(".expander:not(.expand-prototype)"),i=function(){return o.find("> :not(.expand-prototype, .item)").remove()},r(n),t?i():n.fadeOut(o.data("speed"),i)}}.call(this),function(){$.form={is_email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,reset:function(e){var t,n,o;return o=e.parents(".form"),o.removeClass("_done"),t=o.find(".error.notice"),t.removeClass("_active"),t.fadeOut(),n=e.find("input, textarea"),n.removeClass("_error"),e.find("input[type=submit]").fadeIn()},check_condition_for:function(e,t){var n,o;return o=(null!=t?t:{}).using,n=o,n()?(e.removeClass("_error"),!0):(e.addClass("_error"),!1)},test_required:function(e,t){var n,o,r,i,a;return a=(null!=t?t:{}).within,n=a,r=function(){return e.data("form-required")?""!==e.val():!0},i=function(){return e.data("form-required-or")?""!==e.val()||""!==n.find(e.data("form-required-or")).val():!0},o=$.all([r,i].map(function(e){return e()})),$.form.check_condition_for(e,{using:function(){return o}})},test_email:function(e,t){var n,o,r;return r=(null!=t?t:{}).within,n=r,o=function(){return""===n.find(e.data("form-required-or")).val()||e.val()?""!==e.val()&&$.form.is_email.test(e.val()):!0},$.form.check_condition_for(e,{using:o})},validate:function(e){return e.find("input[type=text], textarea").each(function(){return $.form.test_required($(this),{within:e})}),e.find("input[type=email]").each(function(){return $.form.test_email($(this),{within:e})}),0===e.find("._error").length},validate_online:function(e){return e.find("input[type=text], textarea").on("blur",function(){return $.form.test_required($(this),{within:e})}),e.find("input[type=email]").on("blur",function(){return $.form.test_email($(this),{within:e})})},display_error_for:function(e,t){var n;return null==t&&(t=null),n=e.parents(".form").find(".error.notice"),t&&n.html(t),n.fadeIn()},create_spinner_for:function(e){var t;return t=$.create_spinner(),e.find("input[type=submit]").before(t),t},collect_data_from:function(e){var t;return t={},e.find("input[type=hidden], input[type=text], input[type=email], textarea").each(function(){return t[$(this).attr("name")]=$(this).val()}),t},send:function(e,t){var n,o,r,i,a;return a=(null!=t?t:{}).using,r=a,o=e.find("input[type=submit]"),n=$.form.create_spinner_for(e),o.fadeOut(function(){return n.fadeIn()}),i=function(){return $.ajax({url:e.attr("action"),type:"POST",dataType:"html",data:r,error:function(){return o.fadeIn()},success:function(t){return t=JSON.parse(t),$.form.done(e)},always:function(){return n.remove()}})},setTimeout(i,0)},done:function(e){var t;return t=e.parents(".form"),t.addClass("_done"),e.find("input:not([type=submit]), textarea").val("")}},$.fn.submit_form_default=function(e){var t;return t=$(this).parents("form"),$.form.validate_online(t),$(this).on("click",function(){return $.form.reset(t),$.form.validate(t)?(e=$.form.collect_data_from(t),$.form.send(t,{using:e}),!1):($.form.display_error_for(t),!1)})},$(function(){})}.call(this),function(){$(function(){var e,t,n,o;return t=$("[data-js=display-map]").data("map-center"),n=$("[data-js=display-map]").data("map-placemark-center"),o=$("[data-js=display-map]").data("map-placemark-content"),t||n?(t=JSON.parse(t),n=JSON.parse(n),o=JSON.parse(o),e=window.defaults["const"].BREAKPOINTS[window.defaults.map.switchBreakpoint],ymaps.ready(function(){var r,i,a,s;return r=new ymaps.Map("contacts-map",{center:t,zoom:window.defaults.map.zoom,controls:["fullscreenControl"]}),r.behaviors.disable("scrollZoom"),i=new ymaps.Placemark(n,{balloonContentBody:o},{preset:"islands#dotIcon",iconColor:"#433a38"}),r.geoObjects.add(i),s=function(){return $(this).width()<=e?(r.setCenter(n),$(window).off("resize",s),$(window).on("resize",a)):void 0},a=function(){return $(this).width()>e?(r.setCenter(t),$(window).off("resize",a),$(window).on("resize",s)):void 0},$(window).on("resize",$(window).width()<=e?s:a)})):void 0})}.call(this),function(){$(function(){var e,t,n,o,r,i;return i=window.defaults.menu,t=$(document.body).hasClass("dark-page")?i.darkPage.switchBreakpoint:i.switchBreakpoint,n=window.defaults["const"].BREAKPOINTS[t],e=$("header"),$(window).on("resize",function(){return e.width()>n?o():void 0}),$("[data-js=expand-header-menu]").on("click",function(){return e.hasClass("_active")?void o():r()}),o=function(){return e.removeClass("_active"),e.css({height:""})},r=function(){return e.addClass("_active").css({height:$(window).height()})}})}.call(this),function(){$(function(){var e,t,n,o,r;return e=$("[data-js=one-choicer]"),e.length&&(n=JSON.parse(e.data("choice-list")),n.length)?(o=function(e){var t;return t=$('<button class="choice">'+e.text+"</button>"),t.addClass(e.value+"-value"),t.data("value",e.value),t},r=function(t,n){var o,r,i,a,s;return r=null!=n?n:{},s=r.within,a=r.using,i=[s,a],o=i[0],e=i[1],o.find(".choice").removeClass("_active"),t.addClass("_active"),e.val(t.data("value"))},e.wrap('<div class="choicer" />'),t=e.parents(".choicer"),n.forEach(function(t){return e.after(o(t))}),r(t.find(".choice."+e.val()+"-value"),{within:t,using:e}),t.find(".choice").on("click",function(){return r($(this),{within:t,using:e}),!1})):void 0})}.call(this),function(){$(function(){var e;return e=$("[data-js=show-photo]"),e.on("click",function(){var t,n,o;return o=$.makeArray(e.map(function(){return{full:$(this).attr("href")||$(this).attr("src"),thumb:$(this).data("thumb"),caption:$(this).data("caption"),id:$(this).attr("id")}})),o.length?(t=$.create_viewer("photo-viewer"),t.fotorama($.extend(window.defaults.lightbox(),{data:o})),n=t.data("fotorama"),n.requestFullScreen(),t.on("fotorama:fullscreenexit",function(){return n.destroy(),t.remove()}),!1):void 0})})}.call(this),function(){var e,t,n,o,r;$(function(){var e,t,n;return e=$("[data-js=show-points]"),e.length&&(n=JSON.parse(e.data("items")),n.length)?(t=$.create_viewer("points-viewer"),t.display_points(n)):void 0}),t=function(e){var t;return t=$('<div class="point"></div>'),t.css({top:e.point.y,left:e.point.x}),t},e=function(e){return{text:'<h2 class="headline">'+e.headline+'</h2><div class="body">'+e.body+'</div><div class="cost">'+e.cost+"</div>"}},r=function(t,n){var o,r,i;return i=(null!=n?n:{}).to,o=i,r=e(t),o.qtip(window.defaults.tooltip(r))},n=function(e,n){var o,i,a;return a=(null!=n?n:{}).within,i=a,o=t(e),i.append(o),r(e,{to:o})},o=function(e){return null!=e?e.forEach(function(e){return function(t){return n(t,{within:$(e)})}}(this)):void 0},$.fn.display_points=o}.call(this),function(){$(function(){return $(".popup").each(function(){return $(this).addClass("mfp-hide mfp-with-anim")}),$("[data-js=do-popup]").each(function(){return $(this).on("click",function(){return $.form.reset($($(this).data("popup")).find("form")),$.magnificPopup.open($.extend(window.defaults.popup.call(this),{items:{src:$(this).data("popup")},focus:$(this).data("focus")}))})})})}.call(this),function(){$(function(){var e,t;return e=$("[data-js=do-presentation]"),t=JSON.parse(e.data("photos")),t=$.makeArray(t.map(function(e){return{img:e}})),e.on("click",function(){var e,n;return e=$.create_viewer("presentation-viewer"),e.fotorama($.extend(window.defaults.presentation(),{data:t})),n=e.data("fotorama"),n.startAutoplay(),n.requestFullScreen(),e.on("fotorama:fullscreenexit",function(){return n.destroy(),e.remove()}),!1})})}.call(this),function(){var e,t;$(function(){var e;return e=$("[data-js=show-products-gallery]"),e.length?e.enable_gallery():void 0}),t=function(){var t,n;return n=JSON.parse($(this).data("items")),t=$(this).find(".frames"),n.length&&t.on("cycle-initialized cycle-prev cycle-next",function(t,o){return e(n[o.currSlide])}),t.cycle(window.defaults.carousel["default"].call(this))},e=function(e){var t;return t=$.create_viewer("products-viewer"),t.display_points(e)},$.fn.enable_gallery=t}.call(this),function(){$(function(){return $("[data-js=do-scrollable]").customScrollbar()})}.call(this),function(){var e;$(function(){return $.fn.enable_carousel=e,$("[data-js=carousel]").enable_carousel()}),e=function(){return $(this).cycle(window.defaults.carousel["default"].call(this))}}.call(this),function(){}.call(this);