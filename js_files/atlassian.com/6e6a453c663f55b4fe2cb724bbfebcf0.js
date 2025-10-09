WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:fancy-box', location = '/includes/fancybox/jquery.fancybox-1.3.4.js' */
!function($){var tmp,loading,overlay,wrap,outer,content,close,title,nav_left,nav_right,loadingTimer,start_pos,final_pos,selectedIndex=0,selectedOpts={},selectedArray=[],currentIndex=0,currentOpts={},currentArray=[],ajaxLoader=null,imgPreloader=new Image,imgRegExp=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,swfRegExp=/[^\.]\.(swf)\s*$/i,loadingFrame=1,titleHeight=0,titleStr="",busy=!1,fx=$.extend($("<div></div>")[0],{prop:0}),isIE6=$.browser.msie&&$.browser.version<7&&!window.XMLHttpRequest,_abort=function(){loading.hide(),imgPreloader.onerror=imgPreloader.onload=null,ajaxLoader&&ajaxLoader.abort(),tmp.empty()},_error=function(){if(!1===selectedOpts.onError(selectedArray,selectedIndex,selectedOpts))return loading.hide(),void(busy=!1);selectedOpts.titleShow=!1,selectedOpts.width="auto",selectedOpts.height="auto",tmp.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),_process_inline()},_start=function(){var href,type,title,str,emb,ret,obj=selectedArray[selectedIndex];if(_abort(),selectedOpts=$.extend({},$.fn.fancybox.defaults,void 0===$(obj).data("fancybox")?selectedOpts:$(obj).data("fancybox")),!1!==(ret=selectedOpts.onStart(selectedArray,selectedIndex,selectedOpts)))if("object"==typeof ret&&(selectedOpts=$.extend(selectedOpts,ret)),title=selectedOpts.title||(obj.nodeName?$(obj).attr("title"):obj.title)||"",selectedOpts.orig=$(obj).is("img")&&$(obj),obj.nodeName&&!selectedOpts.orig&&(selectedOpts.orig=$(obj).children("img:first").length?$(obj).children("img:first"):$(obj)),""===title&&selectedOpts.orig&&selectedOpts.titleFromAlt&&(title=selectedOpts.orig.attr("alt")),href=selectedOpts.href||(obj.nodeName?$(obj).attr("href"):obj.href)||null,(/^(?:javascript)/i.test(href)||"#"==href)&&(href=null),selectedOpts.type?(type=selectedOpts.type,href||(href=selectedOpts.content)):selectedOpts.content?type="html":selectedOpts.dataAttr?(type="dataAttribute",href=selectedOpts.orig.attr("data-"+selectedOpts.dataAttr)):href&&(type=href.match(imgRegExp)?"image":href.match(swfRegExp)?"swf":$(obj).hasClass("iframe")?"iframe":0===href.indexOf("#")?"inline":"ajax"),type)switch("inline"==type&&(obj=href.substr(href.indexOf("#")),type=$(obj).length>0?"inline":"ajax"),selectedOpts.type=type,selectedOpts.href=href,selectedOpts.title=title,selectedOpts.autoDimensions&&("html"==selectedOpts.type||"inline"==selectedOpts.type||"ajax"==selectedOpts.type?(selectedOpts.width="auto",selectedOpts.height="auto"):selectedOpts.autoDimensions=!1),selectedOpts.modal&&(selectedOpts.overlayShow=!0,selectedOpts.hideOnOverlayClick=!1,selectedOpts.hideOnContentClick=!1,selectedOpts.enableEscapeButton=!1,selectedOpts.showCloseButton=!1),selectedOpts.padding=parseInt(selectedOpts.padding,10),selectedOpts.margin=parseInt(selectedOpts.margin,10),tmp.css("padding",selectedOpts.padding+selectedOpts.margin),$(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",(function(){$(this).replaceWith(content.children())})),type){case"html":tmp.html(selectedOpts.content),_process_inline();break;case"inline":if(!0===$(obj).parent().is("#fancybox-content"))return void(busy=!1);$('<div class="fancybox-inline-tmp"></div>').hide().insertBefore($(obj)).bind("fancybox-cleanup",(function(){$(this).replaceWith(content.children())})).bind("fancybox-cancel",(function(){$(this).replaceWith(tmp.children())})),$(obj).appendTo(tmp),_process_inline();break;case"image":case"dataAttribute":busy=!1,$.fancybox.showActivity(),(imgPreloader=new Image).onerror=function(){_error()},imgPreloader.onload=function(){busy=!0,imgPreloader.onerror=imgPreloader.onload=null,_process_image()},imgPreloader.src=href;break;case"swf":selectedOpts.scrolling="no",str='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+selectedOpts.width+'" height="'+selectedOpts.height+'"><param name="movie" value="'+href+'"></param>',emb="",$.each(selectedOpts.swf,(function(name,val){str+='<param name="'+name+'" value="'+val+'"></param>',emb+=" "+name+'="'+val+'"'})),str+='<embed src="'+href+'" type="application/x-shockwave-flash" width="'+selectedOpts.width+'" height="'+selectedOpts.height+'"'+emb+"></embed></object>",tmp.html(str),_process_inline();break;case"ajax":busy=!1,$.fancybox.showActivity(),selectedOpts.ajax.win=selectedOpts.ajax.success,ajaxLoader=$.ajax($.extend({},selectedOpts.ajax,{url:href,data:selectedOpts.ajax.data||{},error:function(XMLHttpRequest,textStatus,errorThrown){XMLHttpRequest.status>0&&_error()},success:function(data,textStatus,XMLHttpRequest){if(200==("object"==typeof XMLHttpRequest?XMLHttpRequest:ajaxLoader).status){if("function"==typeof selectedOpts.ajax.win){if(!1===(ret=selectedOpts.ajax.win(href,data,textStatus,XMLHttpRequest)))return void loading.hide();"string"!=typeof ret&&"object"!=typeof ret||(data=ret)}tmp.html(data),_process_inline()}}}));break;case"iframe":_show()}else _error();else busy=!1},_process_inline=function(){var w=selectedOpts.width,h=selectedOpts.height;w=w.toString().indexOf("%")>-1?parseInt(($(window).width()-2*selectedOpts.margin)*parseFloat(w)/100,10)+"px":"auto"==w?"auto":w+"px",h=h.toString().indexOf("%")>-1?parseInt(($(window).height()-2*selectedOpts.margin)*parseFloat(h)/100,10)+"px":"auto"==h?"auto":h+"px",tmp.wrapInner('<div style="width:'+w+";height:"+h+";overflow: "+("auto"==selectedOpts.scrolling?"auto":"yes"==selectedOpts.scrolling?"scroll":"hidden")+';position:relative;"></div>'),selectedOpts.width=tmp.width(),selectedOpts.height=tmp.height(),_show()},_process_image=function(){selectedOpts.width=imgPreloader.width,selectedOpts.height=imgPreloader.height,$("<img />").attr({id:"fancybox-img",src:imgPreloader.src,alt:selectedOpts.title}).appendTo(tmp),_show()},_show=function(){var pos,equal;return loading.hide(),wrap.is(":visible")&&!1===currentOpts.onCleanup(currentArray,currentIndex,currentOpts)?($.event.trigger("fancybox-cancel"),void(busy=!1)):(busy=!0,$(content.add(overlay)).unbind(),$(window).unbind("resize.fb scroll.fb"),$(document).unbind("keydown.fb"),wrap.is(":visible")&&"outside"!==currentOpts.titlePosition&&wrap.css("height",wrap.height()),currentArray=selectedArray,currentIndex=selectedIndex,(currentOpts=selectedOpts).overlayShow?(overlay.css({"background-color":currentOpts.overlayColor,opacity:currentOpts.overlayOpacity,cursor:currentOpts.hideOnOverlayClick?"pointer":"auto",height:$(document).height()}),overlay.is(":visible")||(isIE6&&$("select:not(#fancybox-tmp select)").filter((function(){return"hidden"!==this.style.visibility})).css({visibility:"hidden"}).one("fancybox-cleanup",(function(){this.style.visibility="inherit"})),overlay.show())):overlay.hide(),final_pos=_get_zoom_to(),_process_title(),wrap.is(":visible")?($(close.add(nav_left).add(nav_right)).hide(),pos=wrap.position(),start_pos={top:pos.top,left:pos.left,width:wrap.width(),height:wrap.height()},equal=start_pos.width==final_pos.width&&start_pos.height==final_pos.height,void content.fadeTo(currentOpts.changeFade,.3,(function(){var finish_resizing=function(){content.html(tmp.contents()).fadeTo(currentOpts.changeFade,1,_finish)};$.event.trigger("fancybox-change"),content.empty().removeAttr("filter").css({"border-width":currentOpts.padding,width:final_pos.width-2*currentOpts.padding,height:selectedOpts.autoDimensions?"auto":final_pos.height-titleHeight-2*currentOpts.padding}),equal?finish_resizing():(fx.prop=0,$(fx).animate({prop:1},{duration:currentOpts.changeSpeed,easing:currentOpts.easingChange,step:_draw,complete:finish_resizing}))}))):(wrap.removeAttr("style"),content.css("border-width",currentOpts.padding),"elastic"==currentOpts.transitionIn?(start_pos=_get_zoom_from(),content.html(tmp.contents()),wrap.show(),currentOpts.opacity&&(final_pos.opacity=0),fx.prop=0,void $(fx).animate({prop:1},{duration:currentOpts.speedIn,easing:currentOpts.easingIn,step:_draw,complete:_finish})):("inside"==currentOpts.titlePosition&&titleHeight>0&&title.show(),content.css({width:final_pos.width-2*currentOpts.padding,height:selectedOpts.autoDimensions?"auto":final_pos.height-titleHeight-2*currentOpts.padding}).html(tmp.contents()),void wrap.css(final_pos).fadeIn("none"==currentOpts.transitionIn?0:currentOpts.speedIn,_finish))))},_process_title=function(){if(titleStr=currentOpts.title||"",titleHeight=0,title.empty().removeAttr("style").removeClass(),!1!==currentOpts.titleShow)if(titleStr=$.isFunction(currentOpts.titleFormat)?currentOpts.titleFormat(titleStr,currentArray,currentIndex,currentOpts):function(title){return!(!title||!title.length)&&("float"==currentOpts.titlePosition?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+title+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+currentOpts.titlePosition+'">'+title+"</div>")}(titleStr),titleStr&&""!==titleStr){switch(title.addClass("fancybox-title-"+currentOpts.titlePosition).html(titleStr).appendTo("body").show(),currentOpts.titlePosition){case"inside":title.css({width:final_pos.width-2*currentOpts.padding,marginLeft:currentOpts.padding,marginRight:currentOpts.padding}),titleHeight=title.outerHeight(!0),title.appendTo(outer),final_pos.height+=titleHeight;break;case"over":title.css({marginLeft:currentOpts.padding,width:final_pos.width-2*currentOpts.padding,bottom:currentOpts.padding}).appendTo(outer);break;case"float":title.css("left",-1*parseInt((title.width()-final_pos.width-40)/2,10)).appendTo(wrap);break;default:title.css({width:final_pos.width-2*currentOpts.padding,paddingLeft:currentOpts.padding,paddingRight:currentOpts.padding}).appendTo(wrap)}title.hide()}else title.hide();else title.hide()},_finish=function(){$.support.opacity||(content.get(0).style.removeAttribute("filter"),wrap.get(0).style.removeAttribute("filter")),selectedOpts.autoDimensions&&content.css("height","auto"),wrap.css("height","auto"),titleStr&&titleStr.length&&title.show(),currentOpts.showCloseButton&&close.show(),function(){if((currentOpts.enableEscapeButton||currentOpts.enableKeyboardNav)&&$(document).bind("keydown.fb",(function(e){27==e.keyCode&&currentOpts.enableEscapeButton?(e.preventDefault(),$.fancybox.close()):37!=e.keyCode&&39!=e.keyCode||!currentOpts.enableKeyboardNav||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName||"SELECT"===e.target.tagName||(e.preventDefault(),$.fancybox[37==e.keyCode?"prev":"next"]())})),!currentOpts.showNavArrows)return nav_left.hide(),void nav_right.hide();(currentOpts.cyclic&&currentArray.length>1||0!==currentIndex)&&nav_left.show(),(currentOpts.cyclic&&currentArray.length>1||currentIndex!=currentArray.length-1)&&nav_right.show()}(),currentOpts.hideOnContentClick&&content.bind("click",$.fancybox.close),currentOpts.hideOnOverlayClick&&overlay.bind("click",$.fancybox.close),$(window).bind("resize.fb",$.fancybox.resize),currentOpts.centerOnScroll&&$(window).bind("scroll.fb",$.fancybox.center),"iframe"==currentOpts.type&&$('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+($.browser.msie?'allowtransparency="true""':"")+' scrolling="'+selectedOpts.scrolling+'" src="'+currentOpts.href+'"></iframe>').appendTo(content),wrap.show(),busy=!1,$.fancybox.center(),currentOpts.onComplete(currentArray,currentIndex,currentOpts),_preload_images()},_preload_images=function(){var href;currentArray.length-1>currentIndex&&void 0!==(href=currentArray[currentIndex+1].href)&&href.match(imgRegExp)&&((new Image).src=href),currentIndex>0&&void 0!==(href=currentArray[currentIndex-1].href)&&href.match(imgRegExp)&&((new Image).src=href)},_draw=function(pos){var dim={width:parseInt(start_pos.width+(final_pos.width-start_pos.width)*pos,10),height:parseInt(start_pos.height+(final_pos.height-start_pos.height)*pos,10),top:parseInt(start_pos.top+(final_pos.top-start_pos.top)*pos,10),left:parseInt(start_pos.left+(final_pos.left-start_pos.left)*pos,10)};void 0!==final_pos.opacity&&(dim.opacity=pos<.5?.5:pos),wrap.css(dim),content.css({width:dim.width-2*currentOpts.padding,height:dim.height-titleHeight*pos-2*currentOpts.padding})},_get_viewport=function(){return[$(window).width()-2*currentOpts.margin,$(window).height()-2*currentOpts.margin,$(document).scrollLeft()+currentOpts.margin,$(document).scrollTop()+currentOpts.margin]},_get_zoom_to=function(){var ratio,view=_get_viewport(),to={},resize=currentOpts.autoScale,double_padding=2*currentOpts.padding;return currentOpts.width.toString().indexOf("%")>-1?to.width=parseInt(view[0]*parseFloat(currentOpts.width)/100,10):to.width=currentOpts.width+double_padding,currentOpts.height.toString().indexOf("%")>-1?to.height=parseInt(view[1]*parseFloat(currentOpts.height)/100,10):to.height=currentOpts.height+double_padding,resize&&(to.width>view[0]||to.height>view[1])&&("image"==selectedOpts.type||"dataAttribute"==selectedOpts.type||"swf"==selectedOpts.type?(ratio=currentOpts.width/currentOpts.height,to.width>view[0]&&(to.width=view[0],to.height=parseInt((to.width-double_padding)/ratio+double_padding,10)),to.height>view[1]&&(to.height=view[1],to.width=parseInt((to.height-double_padding)*ratio+double_padding,10))):(to.width=Math.min(to.width,view[0]),to.height=Math.min(to.height,view[1]))),to.top=parseInt(Math.max(view[3]-20,view[3]+.5*(view[1]-to.height-40)),10),to.left=parseInt(Math.max(view[2]-20,view[2]+.5*(view[0]-to.width-40)),10),to},_get_zoom_from=function(){var pos,view,orig=!!selectedOpts.orig&&$(selectedOpts.orig),from={};return orig&&orig.length?from={width:(pos=function(obj){var pos=obj.offset();return pos.top+=parseInt(obj.css("paddingTop"),10)||0,pos.left+=parseInt(obj.css("paddingLeft"),10)||0,pos.top+=parseInt(obj.css("border-top-width"),10)||0,pos.left+=parseInt(obj.css("border-left-width"),10)||0,pos.width=obj.width(),pos.height=obj.height(),pos}(orig)).width+2*currentOpts.padding,height:pos.height+2*currentOpts.padding,top:pos.top-currentOpts.padding-20,left:pos.left-currentOpts.padding-20}:(view=_get_viewport(),from={width:2*currentOpts.padding,height:2*currentOpts.padding,top:parseInt(view[3]+.5*view[1],10),left:parseInt(view[2]+.5*view[0],10)}),from},_animate_loading=function(){loading.is(":visible")?($("div",loading).css("top",-40*loadingFrame+"px"),loadingFrame=(loadingFrame+1)%12):clearInterval(loadingTimer)};$.fn.fancybox=function(options){return AJS&&AJS.log("fancybox is deprecated, please use the previewer instead. E.g. $imageLink.previewer({ src: srcOfImage }); "),$(this).length?($(this).data("fancybox",$.extend({},options,$.metadata?$(this).metadata():{})).unbind("click.fb").bind("click.fb",(function(e){if(e.preventDefault(),!busy){busy=!0,$(this).blur(),selectedArray=[],selectedIndex=0;var rel=$(this).attr("rel")||"";rel&&""!=rel&&"nofollow"!==rel?(selectedArray=$("a[rel="+rel+"], area[rel="+rel+"]"),selectedIndex=selectedArray.index(this)):selectedArray.push(this),_start()}})),this):this},$.fancybox=function(obj){var opts;if(!busy){if(busy=!0,opts=void 0!==arguments[1]?arguments[1]:{},selectedArray=[],selectedIndex=parseInt(opts.index,10)||0,$.isArray(obj)){for(var i=0,j=obj.length;i<j;i++)"object"==typeof obj[i]?$(obj[i]).data("fancybox",$.extend({},opts,obj[i])):obj[i]=$({}).data("fancybox",$.extend({content:obj[i]},opts));selectedArray=jQuery.merge(selectedArray,obj)}else"object"==typeof obj?$(obj).data("fancybox",$.extend({},opts,obj)):obj=$({}).data("fancybox",$.extend({content:obj},opts)),selectedArray.push(obj);(selectedIndex>selectedArray.length||selectedIndex<0)&&(selectedIndex=0),_start()}},$.fancybox.showActivity=function(){clearInterval(loadingTimer),loading.show(),loadingTimer=setInterval(_animate_loading,66)},$.fancybox.hideActivity=function(){loading.hide()},$.fancybox.next=function(){return $.fancybox.pos(currentIndex+1)},$.fancybox.prev=function(){return $.fancybox.pos(currentIndex-1)},$.fancybox.pos=function(pos){busy||(pos=parseInt(pos,10),selectedArray=currentArray,pos>-1&&pos<currentArray.length?(selectedIndex=pos,_start()):currentOpts.cyclic&&currentArray.length>1&&(selectedIndex=pos>=currentArray.length?0:currentArray.length-1,_start()))},$.fancybox.cancel=function(){busy||(busy=!0,$.event.trigger("fancybox-cancel"),_abort(),selectedOpts.onCancel(selectedArray,selectedIndex,selectedOpts),busy=!1)},$.fancybox.close=function(){if(!busy&&!wrap.is(":hidden"))if(busy=!0,currentOpts&&!1===currentOpts.onCleanup(currentArray,currentIndex,currentOpts))busy=!1;else if(_abort(),$(close.add(nav_left).add(nav_right)).hide(),$(content.add(overlay)).unbind(),$(window).unbind("resize.fb scroll.fb"),$(document).unbind("keydown.fb"),content.find("iframe").attr("src",isIE6&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),"inside"!==currentOpts.titlePosition&&title.empty(),wrap.stop(),"elastic"==currentOpts.transitionOut){start_pos=_get_zoom_from();var pos=wrap.position();final_pos={top:pos.top,left:pos.left,width:wrap.width(),height:wrap.height()},currentOpts.opacity&&(final_pos.opacity=1),title.empty().hide(),fx.prop=1,$(fx).animate({prop:0},{duration:currentOpts.speedOut,easing:currentOpts.easingOut,step:_draw,complete:_cleanup})}else wrap.fadeOut("none"==currentOpts.transitionOut?0:currentOpts.speedOut,_cleanup);function _cleanup(){overlay.fadeOut("fast"),title.empty().hide(),wrap.hide(),$.event.trigger("fancybox-cleanup"),content.empty(),currentOpts.onClosed(currentArray,currentIndex,currentOpts),currentArray=selectedOpts=[],currentIndex=selectedIndex=0,currentOpts=selectedOpts={},busy=!1}},$.fancybox.resize=function(){overlay.is(":visible")&&overlay.css("height",$(document).height()),$.fancybox.center(!0)},$.fancybox.center=function(){var view,align;busy||(align=!0===arguments[0]?1:0,view=_get_viewport(),!align&&(wrap.width()>view[0]||wrap.height()>view[1])||wrap.stop().animate({top:""+parseInt(Math.max(view[3]-20,view[3]+.5*(view[1]-content.height()-40)-currentOpts.padding),10),left:""+parseInt(Math.max(view[2]-20,view[2]+.5*(view[0]-content.width()-40)-currentOpts.padding),10)},"number"==typeof arguments[0]?arguments[0]:200))},$.fancybox.init=function(){$("#fancybox-wrap").length||($("body").append(tmp=$('<div id="fancybox-tmp"></div>'),loading=$('<div id="fancybox-loading"><div></div></div>'),overlay=$('<div id="fancybox-overlay"></div>'),wrap=$('<div id="fancybox-wrap"></div>')),(outer=$('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(wrap)).append(content=$('<div id="fancybox-content"></div>'),close=$('<a id="fancybox-close"></a>'),title=$('<div id="fancybox-title"></div>'),nav_left=$('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),nav_right=$('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),close.click($.fancybox.close),loading.click($.fancybox.cancel),nav_left.click((function(e){e.preventDefault(),$.fancybox.prev()})),nav_right.click((function(e){e.preventDefault(),$.fancybox.next()})),$.fn.mousewheel&&wrap.bind("mousewheel.fb",(function(e,delta){busy?e.preventDefault():0!=$(e.target).get(0).clientHeight&&$(e.target).get(0).scrollHeight!==$(e.target).get(0).clientHeight||(e.preventDefault(),$.fancybox[delta>0?"prev":"next"]())})),$.support.opacity||wrap.addClass("fancybox-ie"),isIE6&&(loading.addClass("fancybox-ie6"),wrap.addClass("fancybox-ie6"),$('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(outer)))},$.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}},$(document).ready((function(){$.fancybox.init()}))}(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/AlmondNoConflictPrefix.js' */
// This was copied from Atlassian's almond-noconflict-pre.js
window.__require = window.require;
window.__requirejs = window.requirejs;
window.__define = window.define;
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'thirdparty/almond.js' */
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                    hasProp(waiting, depName) ||
                    hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                    cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/AlmondNoConflictPostfix.js' */
// This was copied from Atlassian's almond-noconflict-post.js

if (window.__require) {
    window.require = window.__require;
    window.requirejs = window.__requirejs;
    window.define = window.__define;
} else {
    // Patch our own version of Almond.
    //
    // If "define.amd" is truthy, some 3rd-party libs (e.g. jQuery, spin.js)
    // automatically register themselves via define(). We don't want that,
    // we'll take care of calling define() for each lib.
    delete window.define.amd;
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/ApexModuleManager.js' */
/**
 * Simple mechanism for automatic AMD apex module (such as DOM controllers) instantiation.
 * May not be necessary after integrating RequireJS optimizer.
 *
 * define() passes through all arguments to AMD loader, storing away the ID for instantiation later. So far, all apex
 * classes have only had to add the line "require("gliffy/amd/apexModuleManager")." before the standard AMD define()
 * call.
 *
 * Example use:
 *      <this file toward beginning of batch.js>
 *
 *      require("gliffy/amd/apexModuleManager").
 *      define("my/new/class/id", ...)
 *      define("my/new/class2/id", ...)
 *      ....
 *
 *      ;(function($, apexModuleManager) {
 *          // Wait for DOM to be loaded before instantiating apex modules.
 *          $(function () {
 *              apexModuleManager.instantiateAll();
 *              apexModuleManager.reset();
 *          });
 *      })(require('jquery'), require('gliffy/amd/apexModuleManager'));

 *     <end of batch.js>
 */
define("gliffy/amd/apexModuleManager", function() {
    var apexModuleIds = [];

    return {
        reset: function() {
            apexModuleIds = [];
        },
        define: function() {
            // pass the arguments directly to define(), but register the first argument as module ID.
            apexModuleIds.push(arguments[0]);
            window.define.apply(window, arguments);
        },
        instantiateAll: function() {
            apexModuleIds.forEach(function(apexModuleId) {
                require(apexModuleId);
            });
        }
    };

});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/confluence/AlmondRegistrations.js' */
// You can't just bind it directly to jQuery because it is a function, which causes define to try to use it as a
// factory method.

// Remove definition to force libraries to not register themselves with AMD. This is because we need to handle registration ourselves due to Almond's name requirement.
delete define.amd;

define('jquery', [], function() {
    return jQuery;
});

define('underscore', [], function() {
    return _;
});

define('selectize', [], function () {
    return Selectize;
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/Util.js' */
define("gliffy/util", [
], function() {
    "use strict";

    // similar to Java String.format().
    //   Examples:
    //      $.format('{1} is first, {0} is second! {0} {2}', 'B', 'A') === 'A is first, B is second! B undefined';

    return {
        format: function (format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function (match, number) {
                return (typeof args[number] != 'undefined') ? args[number] : "undefined";
            });
        },
        htmlDecode: function(input) {
            var e = document.createElement('div');
            e.innerHTML = input;
            return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/Url.js' */
/**
 * URL utility functions.
 */
define("gliffy/url", {
    buildPath: function (pathElementArray) {
        return pathElementArray.reduce(function (result, value) {
            if (value == null) {
                return result;
            } else if (result) {
                return result + "/" + encodeURIComponent(value);
            }
            return encodeURIComponent(value);
        }, "");
    },
    buildQuery: function (queryMap) {
        return _.reduce(queryMap, function (result, value, key) {
            if (value == null) {
                return result;
            } else if (result) {
                return result + "&" + encodeURIComponent(key) + "=" + encodeURIComponent(value);
            }
            return encodeURIComponent(key) + "=" + encodeURIComponent(value);
        }, "");
    },
    buildPathAndQuery: function (pathElements, queryMap) {
        var elements = [this.buildPath(pathElements)];

        if((typeof queryMap !== "undefined") && Object.keys(queryMap).length > 0) {
            elements.push(this.buildQuery(queryMap))
        }
        return elements.join("?");
    },
    buildRootedPathAndQuery: function (rootPath, pathElements, queryMap) {
        return rootPath + "/" + this.buildPathAndQuery(pathElements, queryMap);
    },
    "parse": function(url) {
        var regex = /^(?:([a-z]*):)?(?:\/\/)?(?:([^:@]*)(?::([^@]*))?@)?([0-9a-z-._]+)?(?::([0-9]*))?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/i;
        var md = url.match(regex) || [];

        var r = {
            "url":    url,
            "scheme": md[1],
            "user":   md[2],
            "pass":   md[3],
            "host":   md[4],
            "port":   md[5] && +md[5],
            "path":   md[6],
            "query":  md[7],
            "hash":   md[8]
        };

        // parse query params
        r.queryParams = {};

        var queryTokens = r.query.split("&");
        for(var tokenIndex = 0; tokenIndex < queryTokens.length; tokenIndex++) {
            var subTokens = queryTokens[tokenIndex].split("=");
            r.queryParams[decodeURIComponent(subTokens[0])] = decodeURIComponent(subTokens[1]);
        }
        return r;
    }
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/controls/alert/Alert.soy' */
// This file was automatically generated from Alert.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.controls.alert.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.controls == 'undefined') { gliffySoy.controls = {}; }
if (typeof gliffySoy.controls.alert == 'undefined') { gliffySoy.controls.alert = {}; }


gliffySoy.controls.alert.CompleteAlert = function(opt_data, opt_ignored) {
  return '<div id="gliffy-alert-save-as-complete" class="alert alert-success gliffy-alert"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>' + soy.$$escapeHtml(opt_data.diagramName) + '</strong>&nbsp;' + soy.$$escapeHtml('successfully saved to page') + '&nbsp;<a class="gliffy-alert-link" href="' + soy.$$escapeHtml(opt_data.linkUrl) + '" target="_blank"><img class="page-icon"/><strong>&nbsp;' + soy.$$escapeHtml(opt_data.pageName) + '</strong></a><br/>' + soy.$$escapeHtml('in space') + '&nbsp;<strong>' + soy.$$escapeHtml(opt_data.spaceName) + '</strong></div>';
};
if (goog.DEBUG) {
  gliffySoy.controls.alert.CompleteAlert.soyTemplateName = 'gliffySoy.controls.alert.CompleteAlert';
}


gliffySoy.controls.alert.ErrorAlert = function(opt_data, opt_ignored) {
  return '<div id="gliffy-alert-save-as-error" class="alert alert-error gliffy-alert"><a href="#" class="close" data-dismiss="alert">&times;</a>' + soy.$$filterNoAutoescape(opt_data.errorDetail) + '</div>';
};
if (goog.DEBUG) {
  gliffySoy.controls.alert.ErrorAlert.soyTemplateName = 'gliffySoy.controls.alert.ErrorAlert';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/ObjectValidatorFactory.js' */
/**
 * Utility class for validating an object's values. Useful for constructors.
 */
define("gliffy/objectValidatorFactory", [
    'jquery',
    'underscore',
    'gliffy/util'
    ], function ($, _, util) {
        "use strict";
        var ObjectValidator = function (parameters) {
            // parameters:
            //   keyToPredicateMap
            //       key - the key of the value to pass through predicate (i.e. predicate.func(object[key]))
            //       predicate
            //           func - a function that takes a value and returns a boolean.
            //           failureMessage - the message to display when func(object[key]) == false.
            //
            //   description - string description of the object displayed upon failures.
            //

            var fail = function (key, value, failureMessage) {
                throw new Error(util.format("{0} {1} value ({2}) failed predicate: {3}", parameters.description, key, $.isFunction(value) ? "[function]" : value, failureMessage));
            };

            if (!_.isString(parameters.description)) {
                parameters.description = "ObjectValidator construction parameters";
                fail("description", parameters.description, "Expected value to be a string.");
            }

            if (typeof parameters.keyToPredicateMap === 'undefined') {
                parameters.description = "ObjectValidator construction parameters";
                fail("keyToPredicateMap", parameters.keyToPredicateMap, "Expected value to be defined.");
            }

            $.each(parameters.keyToPredicateMap, function (key, predicate) {
                if (!_.isFunction(predicate.func)) {
                    fail("keyToPredicateMap " + key + ".func", predicate.func, "Expected value to be a function.");
                }
                if (!_.isString(predicate.failureMessage)) {
                    fail("keyToPredicateMap " + key + ".failureMessage", predicate.failureMessage, "Expected value to be a string.");
                }
            });

            this._ = {
                keyToPredicateMap: parameters.keyToPredicateMap,
                fail: fail
            };
        };

        ObjectValidator.prototype.validate = function (value) {
            var self = this;
            if (value == null) {
                throw new Error("ObjectValidator.validate() requires non-null input.");
            }
            $.each(self._.keyToPredicateMap, function (key, predicate) {
                if (!predicate.func(value[key])) {
                    self._.fail(key, value[key], predicate.description);
                }
            });
        }

        return {
            create: function(parameters) {
                return new ObjectValidator(parameters);
            },
            predicates: {
                isString: {
                    func: _.isString,
                    failureMessage: "Expected value to be a string."
                },
                isNumber: {
                    func: _.isNumber,
                    failureMessage: "Expected value to be a number."
                },
                isFunction: {
                    func: _.isFunction,
                    failureMessage: "Expected value to be a function."
                },
                isArray: {
                    func: _.isArray,
                    failureMessage: "Expected value to be an array."
                },
                isTruthy: {
                    func: function (value) {
                        return value == true; // coercion intentional
                    },
                    failureMessage: "Expected value to be truthy."
                },
                isFalsey: {
                    func: function (value) {
                        return value == false; // coercion intentional
                    },
                    failureMessage: "Expected value to be falsey."
                },
                isDefinedAndNotNull: {
                    func: function (value) {
                        return value != null; // coercion intentional, to include undefined.
                    },
                    failureMessage: "Expected value to be defined and not null."
                },
                containsAnyKey: {
                    func: function (value) {
                        return Object.keys(value).length > 0;
                    },
                    failureMessage: "Expected value to contain at least one key."
                }
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/PageFacade.js' */
define("gliffy/confluence/pageFacade", [
    "jquery",
    "gliffy/confluence/rest/webRequestPromiseFactory"
], function($, webRequestPromiseFactory) {
    "use strict";

    var unpinPageViewMacroDiagramVersion = function (diagramReference) {
        // get current page content, remove version from appropriate element, update to server, then refresh browser
        var getPageContent = webRequestPromiseFactory.buildGetPageContentPromise(AJS.params.pageId);

        var removeVersionAndPutPageContent = function(page) {
            var bodyStorageHtml = page.body.storage.value;
            // Wrap data in a new div so it can be used with jquery (http://stackoverflow.com/questions/12808770/parsing-of-html-string-using-jquery).
            var wrappedBodyNodes = $('<div/>').append(bodyStorageHtml);

            // remove parameters with empty names
            var emptyParameterNodesToRemove = wrappedBodyNodes.find("ac\\:parameter[ac\\:name='']");
            emptyParameterNodesToRemove.remove();

            // find all the paragraphs that have the same diagram name and version number...
            var matchingParagraphNodes = wrappedBodyNodes.find("p:has(ac\\:parameter[ac\\:name='version'])p:has(ac\\:parameter[ac\\:name='name'])").filter(function () {
                var versionMatches = $(this).find("ac\\:parameter[ac\\:name='version']").text() === diagramReference.version.toString();
                var nameMatches = $(this).find("ac\\:parameter[ac\\:name='name']").text() === diagramReference.name;
                var parameterElement = $(this).find("ac\\:parameter[ac\\:name='pageid']");
                var pageIdMatches = ((parameterElement.length === 0) && (AJS.params.pageId === diagramReference.ownerPageId))
                    || (parameterElement.text() === diagramReference.ownerPageId.toString());
                return versionMatches && nameMatches && pageIdMatches;
            });

            // ... and remove their version elements.
            var versionNodesToRemove = matchingParagraphNodes.find("ac\\:parameter[ac\\:name='version']");
            versionNodesToRemove.remove();

            // prepare page update
            page.body.storage.value = wrappedBodyNodes.html();
            page.version.number = page.version.number + 1;

            // GCONF-1956: Resolve ancestors
            if (page.ancestors) {
                // If page.ancestors is empty, remove it. If there is more than one ancestor, use the last one
                if (page.ancestors.length === 0) {
                    delete page.ancestors;
                } else if (page.ancestors.length > 1) {
                    page.ancestors = [page.ancestors.pop()];
                }
            }
            return webRequestPromiseFactory.buildPutPageContentPromise(AJS.params.pageId, page);
        };

        var reloadBrowserPage = function() {
            window.location.reload();
        };

        $.when(getPageContent).then(removeVersionAndPutPageContent).then(reloadBrowserPage);
    };

    // Since this will be deprecated soon, I am not going to bother abstracting these into the WebRequestPromiseFactory
    var unpinPageViewMacroDiagramVersionWithJsonRpcApi = function (diagramReference) {
        var baseApiUrl = AJS.format("{0}/rpc/json-rpc/confluenceservice-v2", AJS.Confluence.getContextPath());
        var getPageUrl = baseApiUrl + "/getPage";
        var getPageParameters = [AJS.params.pageId];

        $.ajax({
            type : "POST", // must use POST with json-rpc API
            url : getPageUrl,
            contentType: "application/json",
            data: JSON.stringify(getPageParameters),
            success : function(result) {
                var bodyHtml = result.content;

                // Wrap data in a new div so it can be used with jquery (http://stackoverflow.com/questions/12808770/parsing-of-html-string-using-jquery).
                var wrappedBodyNodes = $('<div/>').append(bodyHtml);

                // remove parameters with empty names
                var emptyParameterNodesToRemove = wrappedBodyNodes.find("ac\\:parameter[ac\\:name='']");
                emptyParameterNodesToRemove.remove();

                // find all the paragraphs that have the same diagram name and version number...
                var matchingParagraphNodes = wrappedBodyNodes.find("p:has(ac\\:parameter[ac\\:name='version'])p:has(ac\\:parameter[ac\\:name='name'])").filter(function () {
                    var versionMatches = $(this).find("ac\\:parameter[ac\\:name='version']").text() === String(diagramReference.version);
                    var nameMatches = $(this).find("ac\\:parameter[ac\\:name='name']").text() === diagramReference.name;
                    var parameterElement = $(this).find("ac\\:parameter[ac\\:name='pageid']");
                    var pageIdMatches = ((parameterElement.length === 0) && (AJS.params.pageId === diagramReference.ownerPageId))
                        || (parameterElement.text() === diagramReference.ownerPageId.toString());
                    return versionMatches && nameMatches && pageIdMatches;
                });

                // ... and remove their version elements.
                var versionNodesToRemove = matchingParagraphNodes.find("ac\\:parameter[ac\\:name='version']");
                versionNodesToRemove.remove();

                var updatePageData = {
                    "jsonrpc": "2.0",
                    "method": "updatePage",
                    "params": [
                        {
                            "id": result.id,
                            "space": result.space,
                            "title": result.title,
                            "parentId" : result.parentId,
                            "version": result.version,
                            "content": wrappedBodyNodes.html()
                        },
                        {
                            "versionComment": "Unpinned macro version",
                            "minorEdit": false
                        }
                    ],
                    "id": AJS.params.pageId
                };

                // update via server
                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: baseApiUrl,
                    data: JSON.stringify(updatePageData),
                    success: function () {
                        window.location.reload();
                    }
                });
            }
        });
    };

    var unpinPageEditMacroDiagramVersion = function (diagramReference) {

        if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {

            // modify the macro to no longer be pinned
            var macroNodeQuery = AJS.format('.editor-inline-macro[data-macro-parameters*="name={0}"]', diagramReference.name);
            var macroNodes = AJS.Rte.getEditor().dom.select(macroNodeQuery);
            AJS.$.each(macroNodes, function (index, macroNode) {
                var diagramReference = getDiagramReference($(macroNode));
                // removing version sets to unpinned and displays nicely in macro chrome
                diagramReference.version = undefined;
                addDiagramReference(diagramReference, macroNode);
            });
        }
    };

    var getMacroParams = function(diagramReference) {
        // clone diagramReference and modify to
        var macroParams = $.extend(true, {}, diagramReference);
        // strip default values
        if(macroParams.ownerPageId !== AJS.params.pageId) {
            macroParams.pageid = macroParams.ownerPageId;
        }
        delete macroParams.ownerPageId;
        if(macroParams.version === 0) {
            delete macroParams.version;
        }
        if(macroParams.size === 'O' || macroParams.size === 'L') {
            delete macroParams.size;
        }
        if(!macroParams.border) {
            delete macroParams.border;
        }
        if(macroParams.chrome === 'full') {
            delete macroParams.chrome;
        }
        if(!!macroParams.html5) {
            delete macroParams.html5;
        }
        return macroParams;
    };

    var getDiagramReferenceFromMacroParams = function(macroParams) {
        return {
            ownerPageId: macroParams['pageid'] || AJS.params.pageId,
            name: macroParams['name'],
            displayName: macroParams['displayName'] || macroParams['name'],
            version: macroParams['version'],
            size: macroParams['size'],
            border: macroParams['border'],
            chrome: macroParams['chrome'],
            html5: macroParams['html5'],
            pagePin: macroParams['pagePin']
        }
    };

    var getDiagramReferenceFromMacroContainer = function($macroContainer) {
        return {
            ownerPageId: $macroContainer.data('ceoid') || AJS.params.pageId,
            displayName: $macroContainer.data('displayname') || $macroContainer.data('filename'),
            name: $macroContainer.data('filename'),
            version: $macroContainer.data('version'),
            size: $macroContainer.data('size'),
            border: $macroContainer.data('border'),
            chrome: $macroContainer.data('chrome'),
            html5: $macroContainer.data('html5'),
            diagramAttachmentId: $macroContainer.data('attachmentid')
        };
    };

    var addDiagramReference = function(diagramReference, nodeToReplace) {
        if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
            var deferred, params = {
                contentId: Confluence.Editor.getContentId(),
                macro: {
                    name: "gliffy",
                    params: getMacroParams(diagramReference),
                    defaultParameterValue: "",
                    body: ""
                }
            };

            //GCONF-2360
            //if ($.browser.msie && AJS.$.Deferred) {
            //    //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
            //    tinymce.confluence.NodeUtils.replaceNode = replaceNode;
            //}

            AJS.Rte.BookmarkManager.restoreBookmark();
            deferred = tinymce.confluence.MacroUtils.insertMacro(params, nodeToReplace);

            if (deferred && deferred.then) {
                deferred.then(function () {
                    if ($.browser.msie) {
                        //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
                        tinymce.confluence.NodeUtils.replaceNode = originalReplaceNodeFunction;
                    }
                }, function () {
                    if ($.browser.msie) {
                        //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
                        tinymce.confluence.NodeUtils.replaceNode = originalReplaceNodeFunction;
                    }
                });
            }

            //AJS.log("insert gliffy macro");
            fixEditorFocus();
            return deferred;
        } else {
            // TODO: GCONF-2181
            throw "addDiagramReference not yet implemented for non-RTE";
        }
    };

    var getDiagramReference = function($macroContainer) {
        if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
            var macroParams = {};
            // Look for data from jQuery node.
            var macroParamsString = $macroContainer.data && $macroContainer.data("macro-parameters");
            // If none, look for data from RTE DOM node.
            macroParamsString = macroParamsString || ($macroContainer.dataset && $macroContainer.dataset.macroParameters);
            // If string found, parse into params object (KEY1=Value1|KEY2=Value2|KEY3=Value|...)
            if (macroParamsString) {
                $.each(macroParamsString.split("|"), function (idx, item) {
                    var param = item.split("=");
                    macroParams[param[0]] = param[1];
                });
            }

            return getDiagramReferenceFromMacroParams(macroParams);
        } else {
            return getDiagramReferenceFromMacroContainer($macroContainer);
        }
    };

    var fixEditorFocus = function () {
        //remove this if chrome+mac gets rid of focus issue.
        if (AJS.Rte && typeof AJS.Rte.getEditorFrame === 'function' && AJS.Rte.getEditorFrame()) {
            $(AJS.Rte.getEditorFrame()).focus();
        }

        // GCONF-1941: fix editor focus. Perhaps AJS.Rte.getEditorFrame may not be set?
        var gliffyEditorIFrame = $("#gliffy-editor")[0];
        if(gliffyEditorIFrame) {
            gliffyEditorIFrame.contentWindow.focus();
        }
    };

    //var updateDiagramReferences = function() {
    //    if(AJS.Rte && AJS.Rte.getEditor()) {
    //
    //        //find all matching macros in the editor iframe
    //        var macros = $(AJS.Rte.getEditor().dom.select('.editor-inline-macro')).filter(function(index, element) {
    //            return $(element).data("macro-name") === 'gliffy';
    //        });
    //
    //        macros.each(function (index, element) {
    //            var $macroContainer = $(element);
    //            var diagramReference = getDiagramReference($macroContainer);
    //            var dataJson = $.toJSON({
    //                contentId : Confluence.Editor.getContentId(),
    //                macro : {
    //                    name : 'gliffy',
    //                    params : {
    //                        pageid: diagramReference.ownerPageId,
    //                        name: diagramReference.name,
    //                        version: diagramReference.version
    //                    },
    //                    body : "", defaultParameterValue : ""
    //                }
    //            });
    //
    //            $.ajax({
    //                type : "POST",
    //                contentType : "application/json; charset=utf-8",
    //                url : Confluence.getContextPath() + "/rest/tinymce/1/macro/placeholder",
    //                data : dataJson,
    //                dataType : "text",
    //                success : function (macroplaceholder) {
    //                    $macroContainer.after(macroplaceholder);
    //                    $macroContainer.remove();
    //                }
    //            });
    //        });
    //
    //    }
    //};

    //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
    var originalReplaceNodeFunction = (AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) ? tinymce.confluence.NodeUtils.replaceNode : null;

    return {
        unpinDiagramReferenceVersion: function(diagramReference) {
            if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
                unpinPageEditMacroDiagramVersion(diagramReference);
            } else {
                var versionComponents = AJS.version.split('.');
                var useJsonRpcApi = !(parseInt(versionComponents[0]) >= 5 && parseInt(versionComponents[1]) >= 4);

                if (useJsonRpcApi) {
                    unpinPageViewMacroDiagramVersionWithJsonRpcApi(diagramReference);
                } else {
                    unpinPageViewMacroDiagramVersion(diagramReference);
                }
            }
        },

        //updateDiagramReferences: updateDiagramReferences,

        addDiagramReference: addDiagramReference,

        getDiagramReference: getDiagramReference,

        getDiagramReferences: function() {
            var diagramReferences = [];
            var $macroContainers;
            if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
                $macroContainers = $("iframe").contents().find(".editor-inline-macro[data-macro-name='gliffy']");
            } else {
                $macroContainers = $(".gliffy-container");
            }
            $macroContainers.each(function (index, macroContainer) {
                diagramReferences.push(getDiagramReference($(macroContainer)));
            });
            return diagramReferences;
        }
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/rest/UrlFactory.js' */
define("gliffy/confluence/rest/urlFactory", [
    "gliffy/url"
], function(url) {
    "use strict";

    //GCONF-2677: following line sets the Confluence base url based on browser location instead of Confluence base URL.
    var confluenceBaseUrl = window.location.protocol + "//" + window.location.host + AJS.contextPath();

    var rootGliffyApiUrl = confluenceBaseUrl + "/rest/gliffy/1.0";

    return {
        buildPrependDiagramToPageUrl: function(parameters) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "saveas",
                    parameters.sourcePageId,
                    parameters.sourceDiagramName
                ],
                {
                    sourceDiagramVersion: parameters.sourceDiagramVersion,
                    targetPageId: parameters.targetPageId,
                    space: parameters.targetSpaceKey,
                    targetDiagramName: parameters.targetDiagramName,
                    targetPageTitle: parameters.targetPageTitle,
                    includeAlertLinkUrlParams: parameters.includeAlertLinkUrlParams
                }
            );
        },

        buildGetSpacesUrl: function (startIndex, countLimit) {
            // Works only on 5.5+, but is Confluence native and probably faster
            //return $.ajax(GLIFFY.baseConfluenceUrl + "/rest/api/space?start=" + startIndex + "&limit=" + countLimit);

            // Works on 5.1+
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "spaces"
                ],
                {
                    start: startIndex,
                    limit: countLimit
                }
            );
        },

        buildSpaceSearchUrl: function (searchString, startIndex, countLimit, page) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "spaces"
                ],
                {
                    searchTerm: searchString,
                    start: startIndex,
                    limit: countLimit,
                    page: page
                }
            );
            return rootGliffyApiUrl + "/" + pathAndQuery;
        },

        // Works only on 5.5+
        //var buildPageSearchUrl = function(searchString, spaceKeys, startIndex, countLimit) {
        //    var cql = "type=page ";
        //
        //    if(spaceKeys) {
        //        cql += "and (";
        //        spaceKeys.forEach(function(key, index) {
        //            if(index > 0) {
        //                cql += " or ";
        //            }
        //            cql += 'space=' + key;
        //        });
        //        cql += ") ";
        //    }
        //
        //    if(searchString) {
        //        cql += 'and title ~'"' + searchString + '"';
        //    }
        //
        //    var url = rootConfluenceApiUrl + "/rest/api/content/search?cql=" + encodeURIComponent(cql);
        //    url += "&start=" + startIndex + "&limit=" + countLimit + "&expand=space";
        //
        //    return url;
        //}

        buildPageSearchUrl: function (searchString, spaceKeys, startIndex, countLimit) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "page",
                    "search"
                ],
                {
                    searchTerm: searchString || "",
                    start: startIndex,
                    limit: countLimit,
                    expand: 'space',
                    spaceKeys: spaceKeys && spaceKeys.join(",")
                }
            );
        },

        // We must pass in the rootGliffyAPI separately from what's configured above, since
        // AJS.params.baseUrl and GLIFFY.baseConfluenceUrl are not always set when this is called
        buildPageEditPermissionUrl: function(gliffyAPIRootServiceURL, pageId) {
            return AJS.format("{0}/ceo/{1}/permission", gliffyAPIRootServiceURL, pageId);
        },

        buildGetDiagramsInPageUrl: function (pageId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "page",
                    pageId,
                    "diagrams"
                ]
            );
        },

        buildPageWithTitleExistsInSpaceUrl: function (pageTitle, spaceKey) {
            return confluenceBaseUrl + '/rest/api/content?' + 'spaceKey=' + spaceKey +
                    '&title=' + encodeURIComponent(pageTitle);
        },

        buildUnlinkDiagramUrl: function(parameters) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "unlink",
                    parameters.sourcePageId,
                    parameters.sourceDiagramName
                ],
                {
                    sourceDiagramVersion: parameters.sourceDiagramVersion,
                    targetPageId: parameters.targetPageId,
                    targetDiagramName: parameters.targetDiagramName
                }
            );
        },

        buildPageContentUrl: function(pageId) {
            return AJS.format("{0}/rest/api/content/{1}?expand=body.storage,version,space,ancestors", confluenceBaseUrl, pageId);
        },

        buildEditDiagramPermissionUrl: function(ownerPageId, diagramName) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "ceo",
                    ownerPageId,
                    "diagrams",
                    diagramName,
                    "permission"
                ]
            );
        },

        buildCreateAttachmentPermissionUrl: function(ownerPageId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "ceo",
                    ownerPageId,
                    "permission"
                ]
            );
        },

        buildPropertyUrl: function(propertyId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "properties",
                    propertyId
                ]
            );
        },

        buildDiagramPreviewImageUrl: function(ownerPageId, diagramName, diagramVersion) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "preview"
                ],
                {
                    name: diagramName,
                    pageId: ownerPageId,
                    version: diagramVersion
                }
            );
        },

        buildDiagramThumbnailImageUrl: function(ownerPageId, diagramName, diagramVersion) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "thumbnail"
                ],
                {
                    name: diagramName,
                    pageId: ownerPageId,
                    version: diagramVersion
                }
            );
        },

        buildGetDiagramVersionsUrl: function(ownerPageId, diagramName) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "allVersionInformation"
                ],
                {
                    pageId: ownerPageId,
                    name: diagramName
                }
            );
        },

        buildCreateEmbedLinkUrl: function () {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "embeddedDiagrams"
                ]
            );
        },

        buildDeactivateEmbedLinkUrl: function () {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "embeddedDiagrams",
                    "deactivate"
                ]
            );
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/rest/WebRequestPromiseFactory.js' */
/**
 * Central place for creating promises in order to abstract URLs from controller code, as well as providing a means for
 * asynchronous mocks/testing.
 *
 * NOTE: /confluence/rest/api/* are only present in Confluence 5.5+
 */
define("gliffy/confluence/rest/webRequestPromiseFactory", [
        "jquery",
        "gliffy/confluence/rest/urlFactory"
    ], function($, urlFactory) {
        "use strict";


        return {
            /**
             * AJAX response spec
             *   pageTitle: the title of the page that was modified
             *   spaceName: the name of the space containing the page that was modified
             *   targetPageUrl: a URL that links to the page that was modified. This URL is relative to the base Confluence URL.
             */
            buildPrependDiagramToPagePromise: function (parameters) {

                var postUrl = urlFactory.buildPrependDiagramToPageUrl(parameters);

                /**
                 * GCONF-2306: Save-as operation (from the Gliffy editor). If we have access to the Gliffy editor stage, then send the diagram
                 * content directly from the stage. This ensures that any unsaved changes made to the stage will be properly transferred during
                 * the save-as operation. If we do not have access to the editor, then the POST url has sufficient parameters to copy the attachment.
                 */
                if (window.GLIFFY && window.GLIFFY.Mouse && window.GLIFFY.Mouse.editor) {

                    var gliffyEditor = window.GLIFFY.Mouse.editor;
                    var diagramObject = gliffyEditor.getDocumentManager().getActiveDocument().toObject(); // diagram content from the editor stage
                    var gliffyEditorStage = gliffyEditor.getDocumentManager().getActiveStage();

                    // Show a spinner while we export the image
                    if (window.GLIFFY.Spinner) {
                        window.GLIFFY.Spinner.show($('body'));
                    }

                    // Get image data from the Editor stage
                    return gliffyEditor.getDocumentManager().getImageData(gliffyEditorStage, "image/png", function(imageDataUrl, deferred) {
                        diagramObject.image = imageDataUrl;
                        deferred.resolve(diagramObject);
                    }, false, 1).then(function() {
                        return gliffyEditor.getDocumentManager().getHTMLData(gliffyEditorStage)
                    }).then(function(html) {
                        diagramObject.html = html;
                        // Then return a promise that makes a POST request to the server, containing the diagram and image data url
                        return $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            data: JSON.stringify(diagramObject),
                            url: postUrl
                        });
                    });
                } else {
                    /**
                     * Copy-to operation (from the Confluence macro viewer): the Gliffy editor is not available.
                     * Do not send raw diagram and image data to the REST endpoint, and instead use the attachment pointers to copy the attachments.
                     */
                    return $.post(postUrl);
                }
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildGetSpacesPromise: function (startIndex, countLimit) {
                return $.get(urlFactory.buildGetSpacesUrl(startIndex, countLimit));
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildSpaceSearchPromise: function (searchString, startIndex, countLimit, page) {
                return $.get(urlFactory.buildSpaceSearchUrl(searchString, startIndex, countLimit, page));
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildPageSearchPromise: function (searchString, spaceKeys, startIndex, countLimit) {
                return $.get(urlFactory.buildPageSearchUrl(searchString, spaceKeys, startIndex, countLimit));
            },

            /**
             * AJAX response spec
             *   array of
             *     id: the diagram id
             *     title: the title of the diagram
             *     fileName: the filename of the diagram
             */
            buildGetDiagramsInPagePromise: function (pageId) {
                return $.get(urlFactory.buildGetDiagramsInPageUrl(pageId));
            },

            /**
             * AJAX response spec
             *   exists: boolean
             */
            buildPageWithTitleExistsInSpacePromise: function (pageTitle, spaceKey) {
                return $.get(urlFactory.buildPageWithTitleExistsInSpaceUrl(pageTitle, spaceKey));
            },

            buildUnlinkDiagramPromise: function(parameters) {
                return $.post(urlFactory.buildUnlinkDiagramUrl(parameters));
            },

            buildGetPageContentPromise: function(pageId) {
                return $.ajax(urlFactory.buildPageContentUrl(pageId));
            },

            buildPutPageContentPromise: function(pageId, pageContent) {
                return $.ajax({
                    type: "PUT",
                    contentType: "application/json; charset=utf-8",
                    url: urlFactory.buildPageContentUrl(pageId),
                    data: JSON.stringify(pageContent),
                    dataType: "text",
                    processData: false
                });
            },

            buildGetEditPagePermissionPromise: function(gliffyAPIRootServiceURL, pageId) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildPageEditPermissionUrl(gliffyAPIRootServiceURL, pageId),
                    dataType: "json",
                    cache: false
                });
            },

            buildGetEditDiagramPermissionPromise: function(pageId, diagramName) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildEditDiagramPermissionUrl(pageId, diagramName),
                    dataType:"json",
                    cache:false
                });
            },

            buildGetCreateAttachmentPermissionPromise: function(pageId) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildCreateAttachmentPermissionUrl(pageId),
                    dataType:"json",
                    cache:false
                });
            },

            buildGetPropertyValuePromise: function(propertyId) {
                var deferred = new $.Deferred();
                $.get(urlFactory.buildPropertyUrl(propertyId)).then(function(response) {
                    deferred.resolve(response);
                });
                return deferred;
            },

            buildGetDiagramVersionsPromise: function(ownerPageId, diagramName) {
                return $.get(urlFactory.buildGetDiagramVersionsUrl(ownerPageId, diagramName));
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-list-table', location = 'gliffy/controls/listtable/ListTable.soy' */
// This file was automatically generated from ListTable.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.controls.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.controls == 'undefined') { gliffySoy.controls = {}; }


gliffySoy.controls.ListTable = function(opt_data, opt_ignored) {
  var output = '<div class="list-table"><div class="header"><table><thead><tr>';
  var columnNameList4 = opt_data.columnNames;
  var columnNameListLen4 = columnNameList4.length;
  for (var columnNameIndex4 = 0; columnNameIndex4 < columnNameListLen4; columnNameIndex4++) {
    var columnNameData4 = columnNameList4[columnNameIndex4];
    output += '<td class="column-' + soy.$$escapeHtml(columnNameIndex4) + '">' + soy.$$escapeHtml(columnNameData4) + '</td>';
  }
  output += '</tr></thead></table></div><div class="body"><table><tbody>';
  if (opt_data.rows) {
    var rowList14 = opt_data.rows;
    var rowListLen14 = rowList14.length;
    for (var rowIndex14 = 0; rowIndex14 < rowListLen14; rowIndex14++) {
      var rowData14 = rowList14[rowIndex14];
      output += gliffySoy.controls.ListTableRow({rowValue: rowData14.value, cellLabels: rowData14.cellLabels});
    }
  }
  output += '</tbody></table></div></div>';
  return output;
};
if (goog.DEBUG) {
  gliffySoy.controls.ListTable.soyTemplateName = 'gliffySoy.controls.ListTable';
}


gliffySoy.controls.ListTableRow = function(opt_data, opt_ignored) {
  var output = '<tr class="selectable" data-value="' + soy.$$escapeHtml(opt_data.rowValue) + '">';
  var cellLabelList24 = opt_data.cellLabels;
  var cellLabelListLen24 = cellLabelList24.length;
  for (var cellLabelIndex24 = 0; cellLabelIndex24 < cellLabelListLen24; cellLabelIndex24++) {
    var cellLabelData24 = cellLabelList24[cellLabelIndex24];
    output += '<td class="column-' + soy.$$escapeHtml(cellLabelIndex24) + '">' + soy.$$escapeHtml(cellLabelData24) + '</td>';
  }
  output += '</tr>';
  return output;
};
if (goog.DEBUG) {
  gliffySoy.controls.ListTableRow.soyTemplateName = 'gliffySoy.controls.ListTableRow';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-list-table', location = 'gliffy/controls/listtable/ListTableFactory.js' */
define("gliffy/controls/listtable/listTableFactory", [
        "jquery",
        "gliffy/objectValidatorFactory"
    ], function ($, objectValidatorFactory) {
        "use strict";
        var ListTable = function (parameters) {
            var self = this;

            objectValidatorFactory.create({
                description: "ListTable constructor parameters",
                keyToPredicateMap: {
                    "parent": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "columnNames": objectValidatorFactory.predicates.isArray
                }
            }).validate(parameters);

            var parameters = $.extend({
                rows: []
            }, parameters);

            this._ = {
                parent: parameters.parent,

                columnNames: parameters.columnNames,
                rows: parameters.rows.slice(0), // copy array
                initialRows: parameters.rows.slice(0), // copy array

                selectionChangedListeners: [],
                selectedValue: null,

                scrollMaximumListeners: [],

                renderTableHtml: function () {
                    return gliffySoy.controls.ListTable({
                        columnNames: this.columnNames,
                        rows: this.rows
                    });
                },
                renderRowHtml: function (row) {
                    return gliffySoy.controls.ListTableRow({
                        rowValue: row.value,
                        cellLabels: row.cellLabels
                    });
                },
                attachEventsToRows: function (jqRows) {
                    jqRows.on('click', function (event) {
                        self._.parent.find('.list-table .body tr').removeClass("is-selected");

                        var tr = $(event.delegateTarget);
                        tr.addClass("is-selected");

                        self._.selectedValue = tr.data("value");
                        self._.fireSelectionChangedListeners();
                    });
                },
                fireSelectionChangedListeners: function () {
                    if (this.selectionChangedListeners) {
                        var self = this;
                        this.selectionChangedListeners.forEach(function (listener) {
                            listener(self.selectedValue);
                        });
                    }
                },
                fireScrollMaximumListeners: function () {
                    if (this.scrollMaximumListeners) {
                        this.scrollMaximumListeners.forEach(function (listener) {
                            listener();
                        });
                    }
                }
            };

            this.refresh();
        }

        ListTable.prototype.reset = function () {
            this._.selectedValue = null;
            this._.rows = this._.initialRows.slice(0); // copy array
            this.refresh();
        };

        ListTable.prototype.refresh = function () {
            var self = this;

            var html = this._.renderTableHtml();
            this._.parent.find('.list-table').remove();
            this._.parent.prepend($(html));

            var jqRows = this._.parent.find('.list-table .body tr');
            jqRows.removeClass("is-selected");
            this._.attachEventsToRows(jqRows);

            this._.parent.find('.list-table .body').on('scroll', function (event) {
                var scrollTop = event.delegateTarget.scrollTop;
                var bodyHeight = $(event.delegateTarget).height();
                var rowHeight = $(event.delegateTarget).find('tr').height();
                var rowCount = self._.rows.length;

                if (scrollTop >= (rowCount * rowHeight) - bodyHeight) {
                    self._.fireScrollMaximumListeners();
                }
            });
        };

        ListTable.prototype.addRow = function (row) {
            if (!row.cellLabels || row.cellLabels.length != this._.columnNames.length) {
                throw Error("Invalid cell count for ListTable addRow");
            }
            this._.rows.push(row);
            var html = this._.renderRowHtml(row);
            var tr = $(html).appendTo(this._.parent.find('.list-table .body table tbody'));
            this._.attachEventsToRows(tr);
        };

        ListTable.prototype.getSelectedValue = function () {
            return this._.selectedValue;
        };

        ListTable.prototype.getRowCount = function () {
            return this._.rows.length;
        }

        ListTable.prototype.addSelectionChangedListener = function (listener) {
            this._.selectionChangedListeners.push(listener);
        };

        ListTable.prototype.addScrollToMaximumListener = function (listener) {
            this._.scrollMaximumListeners.push(listener);
        };

        return {
            create: function(parameters) {
                return new ListTable(parameters);
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-selectize', location = 'thirdparty/selectize.js' */
/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('sifter', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Sifter = factory();
	}
}(this, function() {

	/**
	 * Textually searches arrays and hashes of objects
	 * by property (or multiple properties). Designed
	 * specifically for autocomplete.
	 *
	 * @constructor
	 * @param {array|object} items
	 * @param {object} items
	 */
	var Sifter = function(items, settings) {
		this.items = items;
		this.settings = settings || {diacritics: true};
	};

	/**
	 * Splits a search string into an array of individual
	 * regexps to be used to match results.
	 *
	 * @param {string} query
	 * @returns {array}
	 */
	Sifter.prototype.tokenize = function(query) {
		query = trim(String(query || '').toLowerCase());
		if (!query || !query.length) return [];

		var i, n, regex, letter;
		var tokens = [];
		var words = query.split(/ +/);

		for (i = 0, n = words.length; i < n; i++) {
			regex = escape_regex(words[i]);
			if (this.settings.diacritics) {
				for (letter in DIACRITICS) {
					if (DIACRITICS.hasOwnProperty(letter)) {
						regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
					}
				}
			}
			tokens.push({
				string : words[i],
				regex  : new RegExp(regex, 'i')
			});
		}

		return tokens;
	};

	/**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * this.iterator(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 * @param {array|object} object
	 */
	Sifter.prototype.iterator = function(object, callback) {
		var iterator;
		if (is_array(object)) {
			iterator = Array.prototype.forEach || function(callback) {
				for (var i = 0, n = this.length; i < n; i++) {
					callback(this[i], i, this);
				}
			};
		} else {
			iterator = function(callback) {
				for (var key in this) {
					if (this.hasOwnProperty(key)) {
						callback(this[key], key, this);
					}
				}
			};
		}

		iterator.apply(object, [callback]);
	};

	/**
	 * Returns a function to be used to score individual results.
	 *
	 * Good matches will have a higher score than poor matches.
	 * If an item is not a match, 0 will be returned by the function.
	 *
	 * @param {object|string} search
	 * @param {object} options (optional)
	 * @returns {function}
	 */
	Sifter.prototype.getScoreFunction = function(search, options) {
		var self, fields, tokens, token_count;

		self        = this;
		search      = self.prepareSearch(search, options);
		tokens      = search.tokens;
		fields      = search.options.fields;
		token_count = tokens.length;

		/**
		 * Calculates how close of a match the
		 * given value is against a search token.
		 *
		 * @param {mixed} value
		 * @param {object} token
		 * @return {number}
		 */
		var scoreValue = function(value, token) {
			var score, pos;

			if (!value) return 0;
			value = String(value || '');
			pos = value.search(token.regex);
			if (pos === -1) return 0;
			score = token.string.length / value.length;
			if (pos === 0) score += 0.5;
			return score;
		};

		/**
		 * Calculates the score of an object
		 * against the search query.
		 *
		 * @param {object} token
		 * @param {object} data
		 * @return {number}
		 */
		var scoreObject = (function() {
			var field_count = fields.length;
			if (!field_count) {
				return function() { return 0; };
			}
			if (field_count === 1) {
				return function(token, data) {
					return scoreValue(data[fields[0]], token);
				};
			}
			return function(token, data) {
				for (var i = 0, sum = 0; i < field_count; i++) {
					sum += scoreValue(data[fields[i]], token);
				}
				return sum / field_count;
			};
		})();

		if (!token_count) {
			return function() { return 0; };
		}
		if (token_count === 1) {
			return function(data) {
				return scoreObject(tokens[0], data);
			};
		}

		if (search.options.conjunction === 'and') {
			return function(data) {
				var score;
				for (var i = 0, sum = 0; i < token_count; i++) {
					score = scoreObject(tokens[i], data);
					if (score <= 0) return 0;
					sum += score;
				}
				return sum / token_count;
			};
		} else {
			return function(data) {
				for (var i = 0, sum = 0; i < token_count; i++) {
					sum += scoreObject(tokens[i], data);
				}
				return sum / token_count;
			};
		}
	};

	/**
	 * Returns a function that can be used to compare two
	 * results, for sorting purposes. If no sorting should
	 * be performed, `null` will be returned.
	 *
	 * @param {string|object} search
	 * @param {object} options
	 * @return function(a,b)
	 */
	Sifter.prototype.getSortFunction = function(search, options) {
		var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

		self   = this;
		search = self.prepareSearch(search, options);
		sort   = (!search.query && options.sort_empty) || options.sort;

		/**
		 * Fetches the specified sort field value
		 * from a search result item.
		 *
		 * @param  {string} name
		 * @param  {object} result
		 * @return {mixed}
		 */
		get_field = function(name, result) {
			if (name === '$score') return result.score;
			return self.items[result.id][name];
		};

		// parse options
		fields = [];
		if (sort) {
			for (i = 0, n = sort.length; i < n; i++) {
				if (search.query || sort[i].field !== '$score') {
					fields.push(sort[i]);
				}
			}
		}

		// the "$score" field is implied to be the primary
		// sort field, unless it's manually specified
		if (search.query) {
			implicit_score = true;
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					implicit_score = false;
					break;
				}
			}
			if (implicit_score) {
				fields.unshift({field: '$score', direction: 'desc'});
			}
		} else {
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					fields.splice(i, 1);
					break;
				}
			}
		}

		multipliers = [];
		for (i = 0, n = fields.length; i < n; i++) {
			multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
		}

		// build function
		fields_count = fields.length;
		if (!fields_count) {
			return null;
		} else if (fields_count === 1) {
			field = fields[0].field;
			multiplier = multipliers[0];
			return function(a, b) {
				return multiplier * cmp(
						get_field(field, a),
						get_field(field, b)
					);
			};
		} else {
			return function(a, b) {
				var i, result, a_value, b_value, field;
				for (i = 0; i < fields_count; i++) {
					field = fields[i].field;
					result = multipliers[i] * cmp(
						get_field(field, a),
						get_field(field, b)
					);
					if (result) return result;
				}
				return 0;
			};
		}
	};

	/**
	 * Parses a search query and returns an object
	 * with tokens and fields ready to be populated
	 * with results.
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.prepareSearch = function(query, options) {
		if (typeof query === 'object') return query;

		options = extend({}, options);

		var option_fields     = options.fields;
		var option_sort       = options.sort;
		var option_sort_empty = options.sort_empty;

		if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
		if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
		if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

		return {
			options : options,
			query   : String(query || '').toLowerCase(),
			tokens  : this.tokenize(query),
			total   : 0,
			items   : []
		};
	};

	/**
	 * Searches through all items and returns a sorted array of matches.
	 *
	 * The `options` parameter can contain:
	 *
	 *   - fields {string|array}
	 *   - sort {array}
	 *   - score {function}
	 *   - filter {bool}
	 *   - limit {integer}
	 *
	 * Returns an object containing:
	 *
	 *   - options {object}
	 *   - query {string}
	 *   - tokens {array}
	 *   - total {int}
	 *   - items {array}
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.search = function(query, options) {
		var self = this, value, score, search, calculateScore;
		var fn_sort;
		var fn_score;

		search  = this.prepareSearch(query, options);
		options = search.options;
		query   = search.query;

		// generate result scoring function
		fn_score = options.score || self.getScoreFunction(search);

		// perform search and sort
		if (query.length) {
			self.iterator(self.items, function(item, id) {
				score = fn_score(item);
				if (options.filter === false || score > 0) {
					search.items.push({'score': score, 'id': id});
				}
			});
		} else {
			self.iterator(self.items, function(item, id) {
				search.items.push({'score': 1, 'id': id});
			});
		}

		fn_sort = self.getSortFunction(search, options);
		if (fn_sort) search.items.sort(fn_sort);

		// apply limits
		search.total = search.items.length;
		if (typeof options.limit === 'number') {
			search.items = search.items.slice(0, options.limit);
		}

		return search;
	};

	// utilities
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	var cmp = function(a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a > b ? 1 : (a < b ? -1 : 0);
		}
		a = asciifold(String(a || ''));
		b = asciifold(String(b || ''));
		if (a > b) return 1;
		if (b > a) return -1;
		return 0;
	};

	var extend = function(a, b) {
		var i, n, k, object;
		for (i = 1, n = arguments.length; i < n; i++) {
			object = arguments[i];
			if (!object) continue;
			for (k in object) {
				if (object.hasOwnProperty(k)) {
					a[k] = object[k];
				}
			}
		}
		return a;
	};

	var trim = function(str) {
		return (str + '').replace(/^\s+|\s+$|/g, '');
	};

	var escape_regex = function(str) {
		return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	};

	var is_array = Array.isArray || ($ && $.isArray) || function(object) {
			return Object.prototype.toString.call(object) === '[object Array]';
		};

	var DIACRITICS = {
		'a': '[aÀÁÂÃÄÅàáâãäåĀāąĄ]',
		'c': '[cÇçćĆčČ]',
		'd': '[dđĐďĎ]',
		'e': '[eÈÉÊËèéêëěĚĒēęĘ]',
		'i': '[iÌÍÎÏìíîïĪī]',
		'l': '[lłŁ]',
		'n': '[nÑñňŇńŃ]',
		'o': '[oÒÓÔÕÕÖØòóôõöøŌō]',
		'r': '[rřŘ]',
		's': '[sŠšśŚ]',
		't': '[tťŤ]',
		'u': '[uÙÚÛÜùúûüůŮŪū]',
		'y': '[yŸÿýÝ]',
		'z': '[zŽžżŻźŹ]'
	};

	var asciifold = (function() {
		var i, n, k, chunk;
		var foreignletters = '';
		var lookup = {};
		for (k in DIACRITICS) {
			if (DIACRITICS.hasOwnProperty(k)) {
				chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
				foreignletters += chunk;
				for (i = 0, n = chunk.length; i < n; i++) {
					lookup[chunk.charAt(i)] = k;
				}
			}
		}
		var regexp = new RegExp('[' +  foreignletters + ']', 'g');
		return function(str) {
			return str.replace(regexp, function(foreignletter) {
				return lookup[foreignletter];
			}).toLowerCase();
		};
	})();


	// export
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	return Sifter;
}));



/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('microplugin', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.MicroPlugin = factory();
	}
}(this, function() {
	var MicroPlugin = {};

	MicroPlugin.mixin = function(Interface) {
		Interface.plugins = {};

		/**
		 * Initializes the listed plugins (with options).
		 * Acceptable formats:
		 *
		 * List (without options):
		 *   ['a', 'b', 'c']
		 *
		 * List (with options):
		 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
		 *
		 * Hash (with options):
		 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
		 *
		 * @param {mixed} plugins
		 */
		Interface.prototype.initializePlugins = function(plugins) {
			var i, n, key;
			var self  = this;
			var queue = [];

			self.plugins = {
				names     : [],
				settings  : {},
				requested : {},
				loaded    : {}
			};

			if (utils.isArray(plugins)) {
				for (i = 0, n = plugins.length; i < n; i++) {
					if (typeof plugins[i] === 'string') {
						queue.push(plugins[i]);
					} else {
						self.plugins.settings[plugins[i].name] = plugins[i].options;
						queue.push(plugins[i].name);
					}
				}
			} else if (plugins) {
				for (key in plugins) {
					if (plugins.hasOwnProperty(key)) {
						self.plugins.settings[key] = plugins[key];
						queue.push(key);
					}
				}
			}

			while (queue.length) {
				self.require(queue.shift());
			}
		};

		Interface.prototype.loadPlugin = function(name) {
			var self    = this;
			var plugins = self.plugins;
			var plugin  = Interface.plugins[name];

			if (!Interface.plugins.hasOwnProperty(name)) {
				throw new Error('Unable to find "' +  name + '" plugin');
			}

			plugins.requested[name] = true;
			plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
			plugins.names.push(name);
		};

		/**
		 * Initializes a plugin.
		 *
		 * @param {string} name
		 */
		Interface.prototype.require = function(name) {
			var self = this;
			var plugins = self.plugins;

			if (!self.plugins.loaded.hasOwnProperty(name)) {
				if (plugins.requested[name]) {
					throw new Error('Plugin has circular dependency ("' + name + '")');
				}
				self.loadPlugin(name);
			}

			return plugins.loaded[name];
		};

		/**
		 * Registers a plugin.
		 *
		 * @param {string} name
		 * @param {function} fn
		 */
		Interface.define = function(name, fn) {
			Interface.plugins[name] = {
				'name' : name,
				'fn'   : fn
			};
		};
	};

	var utils = {
		isArray: Array.isArray || function(vArg) {
			return Object.prototype.toString.call(vArg) === '[object Array]';
		}
	};

	return MicroPlugin;
}));

/**
 * selectize.js (v0.12.0)
 * Copyright (c) 2013–2015 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

/*jshint curly:false */
/*jshint browser:true */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('selectize', ['jquery','sifter','microplugin'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));
	} else {
		root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
	}
}(this, function($, Sifter, MicroPlugin) {
	'use strict';

	var highlight = function($element, pattern) {
		if (typeof pattern === 'string' && !pattern.length) return;
		var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;

		var highlight = function(node) {
			var skip = 0;
			if (node.nodeType === 3) {
				var pos = node.data.search(regex);
				if (pos >= 0 && node.data.length > 0) {
					var match = node.data.match(regex);
					var spannode = document.createElement('span');
					spannode.className = 'highlight';
					var middlebit = node.splitText(pos);
					var endbit = middlebit.splitText(match[0].length);
					var middleclone = middlebit.cloneNode(true);
					spannode.appendChild(middleclone);
					middlebit.parentNode.replaceChild(spannode, middlebit);
					skip = 1;
				}
			} else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
				for (var i = 0; i < node.childNodes.length; ++i) {
					i += highlight(node.childNodes[i]);
				}
			}
			return skip;
		};

		return $element.each(function() {
			highlight(this);
		});
	};

	var MicroEvent = function() {};
	MicroEvent.prototype = {
		on: function(event, fct){
			this._events = this._events || {};
			this._events[event] = this._events[event] || [];
			this._events[event].push(fct);
		},
		off: function(event, fct){
			var n = arguments.length;
			if (n === 0) return delete this._events;
			if (n === 1) return delete this._events[event];

			this._events = this._events || {};
			if (event in this._events === false) return;
			this._events[event].splice(this._events[event].indexOf(fct), 1);
		},
		trigger: function(event /* , args... */){
			this._events = this._events || {};
			if (event in this._events === false) return;
			for (var i = 0; i < this._events[event].length; i++){
				this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
			}
		}
	};

	/**
	 * Mixin will delegate all MicroEvent.js function in the destination object.
	 *
	 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
	 *
	 * @param {object} the object which will support MicroEvent
	 */
	MicroEvent.mixin = function(destObject){
		var props = ['on', 'off', 'trigger'];
		for (var i = 0; i < props.length; i++){
			destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
		}
	};

	var IS_MAC        = /Mac/.test(navigator.userAgent);

	var KEY_A         = 65;
	var KEY_COMMA     = 188;
	var KEY_RETURN    = 13;
	var KEY_ESC       = 27;
	var KEY_LEFT      = 37;
	var KEY_UP        = 38;
	var KEY_P         = 80;
	var KEY_RIGHT     = 39;
	var KEY_DOWN      = 40;
	var KEY_N         = 78;
	var KEY_BACKSPACE = 8;
	var KEY_DELETE    = 46;
	var KEY_SHIFT     = 16;
	var KEY_CMD       = IS_MAC ? 91 : 17;
	var KEY_CTRL      = IS_MAC ? 18 : 17;
	var KEY_TAB       = 9;

	var TAG_SELECT    = 1;
	var TAG_INPUT     = 2;

	// for now, android support in general is too spotty to support validity
	var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('form').validity;

	var isset = function(object) {
		return typeof object !== 'undefined';
	};

	/**
	 * Converts a scalar to its best string representation
	 * for hash keys and HTML attribute values.
	 *
	 * Transformations:
	 *   'str'     -> 'str'
	 *   null      -> ''
	 *   undefined -> ''
	 *   true      -> '1'
	 *   false     -> '0'
	 *   0         -> '0'
	 *   1         -> '1'
	 *
	 * @param {string} value
	 * @returns {string|null}
	 */
	var hash_key = function(value) {
		if (typeof value === 'undefined' || value === null) return null;
		if (typeof value === 'boolean') return value ? '1' : '0';
		return value + '';
	};

	/**
	 * Escapes a string for use within HTML.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_html = function(str) {
		return (str + '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	};

	/**
	 * Escapes "$" characters in replacement strings.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_replace = function(str) {
		return (str + '').replace(/\$/g, '$$$$');
	};

	var hook = {};

	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked before the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.before = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			fn.apply(self, arguments);
			return original.apply(self, arguments);
		};
	};

	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked after the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.after = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			var result = original.apply(self, arguments);
			fn.apply(self, arguments);
			return result;
		};
	};

	/**
	 * Wraps `fn` so that it can only be invoked once.
	 *
	 * @param {function} fn
	 * @returns {function}
	 */
	var once = function(fn) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			fn.apply(this, arguments);
		};
	};

	/**
	 * Wraps `fn` so that it can only be called once
	 * every `delay` milliseconds (invoked on the falling edge).
	 *
	 * @param {function} fn
	 * @param {int} delay
	 * @returns {function}
	 */
	var debounce = function(fn, delay) {
		var timeout;
		return function() {
			var self = this;
			var args = arguments;
			window.clearTimeout(timeout);
			timeout = window.setTimeout(function() {
				fn.apply(self, args);
			}, delay);
		};
	};

	/**
	 * Debounce all fired events types listed in `types`
	 * while executing the provided `fn`.
	 *
	 * @param {object} self
	 * @param {array} types
	 * @param {function} fn
	 */
	var debounce_events = function(self, types, fn) {
		var type;
		var trigger = self.trigger;
		var event_args = {};

		// override trigger method
		self.trigger = function() {
			var type = arguments[0];
			if (types.indexOf(type) !== -1) {
				event_args[type] = arguments;
			} else {
				return trigger.apply(self, arguments);
			}
		};

		// invoke provided function
		fn.apply(self, []);
		self.trigger = trigger;

		// trigger queued events
		for (type in event_args) {
			if (event_args.hasOwnProperty(type)) {
				trigger.apply(self, event_args[type]);
			}
		}
	};

	/**
	 * A workaround for http://bugs.jquery.com/ticket/6696
	 *
	 * @param {object} $parent - Parent element to listen on.
	 * @param {string} event - Event name.
	 * @param {string} selector - Descendant selector to filter by.
	 * @param {function} fn - Event handler.
	 */
	var watchChildEvent = function($parent, event, selector, fn) {
		$parent.on(event, selector, function(e) {
			var child = e.target;
			while (child && child.parentNode !== $parent[0]) {
				child = child.parentNode;
			}
			e.currentTarget = child;
			return fn.apply(this, [e]);
		});
	};

	/**
	 * Determines the current selection within a text input control.
	 * Returns an object containing:
	 *   - start
	 *   - length
	 *
	 * @param {object} input
	 * @returns {object}
	 */
	var getSelection = function(input) {
		var result = {};
		if ('selectionStart' in input) {
			result.start = input.selectionStart;
			result.length = input.selectionEnd - result.start;
		} else if (document.selection) {
			input.focus();
			var sel = document.selection.createRange();
			var selLen = document.selection.createRange().text.length;
			sel.moveStart('character', -input.value.length);
			result.start = sel.text.length - selLen;
			result.length = selLen;
		}
		return result;
	};

	/**
	 * Copies CSS properties from one element to another.
	 *
	 * @param {object} $from
	 * @param {object} $to
	 * @param {array} properties
	 */
	var transferStyles = function($from, $to, properties) {
		var i, n, styles = {};
		if (properties) {
			for (i = 0, n = properties.length; i < n; i++) {
				styles[properties[i]] = $from.css(properties[i]);
			}
		} else {
			styles = $from.css();
		}
		$to.css(styles);
	};

	/**
	 * Measures the width of a string within a
	 * parent element (in pixels).
	 *
	 * @param {string} str
	 * @param {object} $parent
	 * @returns {int}
	 */
	var measureString = function(str, $parent) {
		if (!str) {
			return 0;
		}

		var $test = $('<test>').css({
			position: 'absolute',
			top: -99999,
			left: -99999,
			width: 'auto',
			padding: 0,
			whiteSpace: 'pre'
		}).text(str).appendTo('body');

		transferStyles($parent, $test, [
			'letterSpacing',
			'fontSize',
			'fontFamily',
			'fontWeight',
			'textTransform'
		]);

		var width = $test.width();
		$test.remove();

		return width;
	};

	/**
	 * Sets up an input to grow horizontally as the user
	 * types. If the value is changed manually, you can
	 * trigger the "update" handler to resize:
	 *
	 * $input.trigger('update');
	 *
	 * @param {object} $input
	 */
	var autoGrow = function($input) {
		var currentWidth = null;

		var update = function(e, options) {
			var value, keyCode, printable, placeholder, width;
			var shift, character, selection;
			e = e || window.event || {};
			options = options || {};

			if (e.metaKey || e.altKey) return;
			if (!options.force && $input.data('grow') === false) return;

			value = $input.val();
			if (e.type && e.type.toLowerCase() === 'keydown') {
				keyCode = e.keyCode;
				printable = (
				(keyCode >= 97 && keyCode <= 122) || // a-z
				(keyCode >= 65 && keyCode <= 90)  || // A-Z
				(keyCode >= 48 && keyCode <= 57)  || // 0-9
				keyCode === 32 // space
				);

				if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
					selection = getSelection($input[0]);
					if (selection.length) {
						value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
					} else if (keyCode === KEY_BACKSPACE && selection.start) {
						value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
					} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
						value = value.substring(0, selection.start) + value.substring(selection.start + 1);
					}
				} else if (printable) {
					shift = e.shiftKey;
					character = String.fromCharCode(e.keyCode);
					if (shift) character = character.toUpperCase();
					else character = character.toLowerCase();
					value += character;
				}
			}

			placeholder = $input.attr('placeholder');
			if (!value && placeholder) {
				value = placeholder;
			}

			width = measureString(value, $input) + 4;
			if (width !== currentWidth) {
				currentWidth = width;
				$input.width(width);
				$input.triggerHandler('resize');
			}
		};

		$input.on('keydown keyup update blur', update);
		update();
	};

	var Selectize = function($input, settings) {
		var key, i, n, dir, input, self = this;
		input = $input[0];
		input.selectize = self;

		// detect rtl environment
		var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
		dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
		dir = dir || $input.parents('[dir]:first').attr('dir') || '';

		// setup default state
		$.extend(self, {
			order            : 0,
			settings         : settings,
			$input           : $input,
			tabIndex         : $input.attr('tabindex') || '',
			tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
			rtl              : /rtl/i.test(dir),

			eventNS          : '.selectize' + (++Selectize.count),
			highlightedValue : null,
			isOpen           : false,
			isDisabled       : false,
			isRequired       : $input.is('[required]'),
			isInvalid        : false,
			isLocked         : false,
			isFocused        : false,
			isInputHidden    : false,
			isSetup          : false,
			isShiftDown      : false,
			isCmdDown        : false,
			isCtrlDown       : false,
			ignoreFocus      : false,
			ignoreBlur       : false,
			ignoreHover      : false,
			hasOptions       : false,
			currentResults   : null,
			lastValue        : '',
			caretPos         : 0,
			loading          : 0,
			loadedSearches   : {},

			$activeOption    : null,
			$activeItems     : [],

			optgroups        : {},
			options          : {},
			userOptions      : {},
			items            : [],
			renderCache      : {},
			onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
		});

		// search system
		self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});

		// build options table
		if (self.settings.options) {
			for (i = 0, n = self.settings.options.length; i < n; i++) {
				self.registerOption(self.settings.options[i]);
			}
			delete self.settings.options;
		}

		// build optgroup table
		if (self.settings.optgroups) {
			for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
				self.registerOptionGroup(self.settings.optgroups[i]);
			}
			delete self.settings.optgroups;
		}

		// option-dependent defaults
		self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
		if (typeof self.settings.hideSelected !== 'boolean') {
			self.settings.hideSelected = self.settings.mode === 'multi';
		}

		self.initializePlugins(self.settings.plugins);
		self.setupCallbacks();
		self.setupTemplates();
		self.setup();
	};

	// mixins
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	MicroEvent.mixin(Selectize);
	MicroPlugin.mixin(Selectize);

	// methods
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	$.extend(Selectize.prototype, {

		/**
		 * Creates all elements and sets up event bindings.
		 */
		setup: function() {
			var self      = this;
			var settings  = self.settings;
			var eventNS   = self.eventNS;
			var $window   = $(window);
			var $document = $(document);
			var $input    = self.$input;

			var $wrapper;
			var $control;
			var $control_input;
			var $dropdown;
			var $dropdown_content;
			var $dropdown_parent;
			var inputMode;
			var timeout_blur;
			var timeout_focus;
			var classes;
			var classes_plugins;

			inputMode         = self.settings.mode;
			classes           = $input.attr('class') || '';

			$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
			$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
			$control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
			$dropdown_parent  = $(settings.dropdownParent || $wrapper);
			$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
			$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);

			if(self.settings.copyClassesToDropdown) {
				$dropdown.addClass(classes);
			}

			$wrapper.css({
				width: $input[0].style.width
			});

			if (self.plugins.names.length) {
				classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
				$wrapper.addClass(classes_plugins);
				$dropdown.addClass(classes_plugins);
			}

			if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
				$input.attr('multiple', 'multiple');
			}

			if (self.settings.placeholder) {
				$control_input.attr('placeholder', settings.placeholder);
			}

			// if splitOn was not passed in, construct it from the delimiter to allow pasting universally
			if (!self.settings.splitOn && self.settings.delimiter) {
				var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
				self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
			}

			if ($input.attr('autocorrect')) {
				$control_input.attr('autocorrect', $input.attr('autocorrect'));
			}

			if ($input.attr('autocapitalize')) {
				$control_input.attr('autocapitalize', $input.attr('autocapitalize'));
			}

			self.$wrapper          = $wrapper;
			self.$control          = $control;
			self.$control_input    = $control_input;
			self.$dropdown         = $dropdown;
			self.$dropdown_content = $dropdown_content;

			$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
			$dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
			watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
			autoGrow($control_input);

			$control.on({
				mousedown : function() { return self.onMouseDown.apply(self, arguments); },
				click     : function() { return self.onClick.apply(self, arguments); }
			});

			$control_input.on({
				mousedown : function(e) { e.stopPropagation(); },
				keydown   : function() { return self.onKeyDown.apply(self, arguments); },
				keyup     : function() { return self.onKeyUp.apply(self, arguments); },
				keypress  : function() { return self.onKeyPress.apply(self, arguments); },
				resize    : function() { self.positionDropdown.apply(self, []); },
				blur      : function() { return self.onBlur.apply(self, arguments); },
				focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
				paste     : function() { return self.onPaste.apply(self, arguments); }
			});

			$document.on('keydown' + eventNS, function(e) {
				self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
				self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
				self.isShiftDown = e.shiftKey;
			});

			$document.on('keyup' + eventNS, function(e) {
				if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
				if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
				if (e.keyCode === KEY_CMD) self.isCmdDown = false;
			});

			$document.on('mousedown' + eventNS, function(e) {
				if (self.isFocused) {
					// prevent events on the dropdown scrollbar from causing the control to blur
					if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
						return false;
					}
					// blur on click outside
					if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
						self.blur(e.target);
					}
				}
			});

			$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
				if (self.isOpen) {
					self.positionDropdown.apply(self, arguments);
				}
			});
			$window.on('mousemove' + eventNS, function() {
				self.ignoreHover = false;
			});

			// store original children and tab index so that they can be
			// restored when the destroy() method is called.
			this.revertSettings = {
				$children : $input.children().detach(),
				tabindex  : $input.attr('tabindex')
			};

			$input.attr('tabindex', -1).hide().after(self.$wrapper);

			if ($.isArray(settings.items)) {
				self.setValue(settings.items);
				delete settings.items;
			}

			// feature detect for the validation API
			if (SUPPORTS_VALIDITY_API) {
				$input.on('invalid' + eventNS, function(e) {
					e.preventDefault();
					self.isInvalid = true;
					self.refreshState();
				});
			}

			self.updateOriginalInput();
			self.refreshItems();
			self.refreshState();
			self.updatePlaceholder();
			self.isSetup = true;

			if ($input.is(':disabled')) {
				self.disable();
			}

			self.on('change', this.onChange);

			$input.data('selectize', self);
			$input.addClass('selectized');
			self.trigger('initialize');

			// preload options
			if (settings.preload === true) {
				self.onSearchChange('');
			}

		},

		/**
		 * Sets up default rendering functions.
		 */
		setupTemplates: function() {
			var self = this;
			var field_label = self.settings.labelField;
			var field_optgroup = self.settings.optgroupLabelField;

			var templates = {
				'optgroup': function(data) {
					return '<div class="optgroup">' + data.html + '</div>';
				},
				'optgroup_header': function(data, escape) {
					return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
				},
				'option': function(data, escape) {
					return '<div class="option">' + escape(data[field_label]) + '</div>';
				},
				'item': function(data, escape) {
					return '<div class="item">' + escape(data[field_label]) + '</div>';
				},
				'option_create': function(data, escape) {
					return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
				}
			};

			self.settings.render = $.extend({}, templates, self.settings.render);
		},

		/**
		 * Maps fired events to callbacks provided
		 * in the settings used when creating the control.
		 */
		setupCallbacks: function() {
			var key, fn, callbacks = {
				'initialize'      : 'onInitialize',
				'change'          : 'onChange',
				'item_add'        : 'onItemAdd',
				'item_remove'     : 'onItemRemove',
				'clear'           : 'onClear',
				'option_add'      : 'onOptionAdd',
				'option_remove'   : 'onOptionRemove',
				'option_clear'    : 'onOptionClear',
				'optgroup_add'    : 'onOptionGroupAdd',
				'optgroup_remove' : 'onOptionGroupRemove',
				'optgroup_clear'  : 'onOptionGroupClear',
				'dropdown_open'   : 'onDropdownOpen',
				'dropdown_close'  : 'onDropdownClose',
				'type'            : 'onType',
				'load'            : 'onLoad',
				'focus'           : 'onFocus',
				'blur'            : 'onBlur'
			};

			for (key in callbacks) {
				if (callbacks.hasOwnProperty(key)) {
					fn = this.settings[callbacks[key]];
					if (fn) this.on(key, fn);
				}
			}
		},

		/**
		 * Triggered when the main control element
		 * has a click event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onClick: function(e) {
			var self = this;

			// necessary for mobile webkit devices (manual focus triggering
			// is ignored unless invoked within a click event)
			if (!self.isFocused) {
				self.focus();
				e.preventDefault();
			}
		},

		/**
		 * Triggered when the main control element
		 * has a mouse down event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onMouseDown: function(e) {
			var self = this;
			var defaultPrevented = e.isDefaultPrevented();
			var $target = $(e.target);

			if (self.isFocused) {
				// retain focus by preventing native handling. if the
				// event target is the input it should not be modified.
				// otherwise, text selection within the input won't work.
				if (e.target !== self.$control_input[0]) {
					if (self.settings.mode === 'single') {
						// toggle dropdown
						self.isOpen ? self.close() : self.open();
					} else if (!defaultPrevented) {
						self.setActiveItem(null);
					}
					return false;
				}
			} else {
				// give control focus
				if (!defaultPrevented) {
					window.setTimeout(function() {
						self.focus();
					}, 0);
				}
			}
		},

		/**
		 * Triggered when the value of the control has been changed.
		 * This should propagate the event to the original DOM
		 * input / select element.
		 */
		onChange: function() {
			this.$input.trigger('change');
		},

		/**
		 * Triggered on <input> paste.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onPaste: function(e) {
			var self = this;
			if (self.isFull() || self.isInputHidden || self.isLocked) {
				e.preventDefault();
			} else {
				// If a regex or string is included, this will split the pasted
				// input and create Items for each separate value
				if (self.settings.splitOn) {
					setTimeout(function() {
						var splitInput = $.trim(self.$control_input.val() || '').split(self.settings.splitOn);
						for (var i = 0, n = splitInput.length; i < n; i++) {
							self.createItem(splitInput[i]);
						}
					}, 0);
				}
			}
		},

		/**
		 * Triggered on <input> keypress.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyPress: function(e) {
			if (this.isLocked) return e && e.preventDefault();
			var character = String.fromCharCode(e.keyCode || e.which);
			if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
				this.createItem();
				e.preventDefault();
				return false;
			}
		},

		/**
		 * Triggered on <input> keydown.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyDown: function(e) {
			var isInput = e.target === this.$control_input[0];
			var self = this;

			if (self.isLocked) {
				if (e.keyCode !== KEY_TAB) {
					e.preventDefault();
				}
				return;
			}

			switch (e.keyCode) {
				case KEY_A:
					if (self.isCmdDown) {
						self.selectAll();
						return;
					}
					break;
				case KEY_ESC:
					if (self.isOpen) {
						e.preventDefault();
						e.stopPropagation();
						self.close();
					}
					return;
				case KEY_N:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_DOWN:
					if (!self.isOpen && self.hasOptions) {
						self.open();
					} else if (self.$activeOption) {
						self.ignoreHover = true;
						var $next = self.getAdjacentOption(self.$activeOption, 1);
						if ($next.length) self.setActiveOption($next, true, true);
					}
					e.preventDefault();
					return;
				case KEY_P:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_UP:
					if (self.$activeOption) {
						self.ignoreHover = true;
						var $prev = self.getAdjacentOption(self.$activeOption, -1);
						if ($prev.length) self.setActiveOption($prev, true, true);
					}
					e.preventDefault();
					return;
				case KEY_RETURN:
					if (self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
						e.preventDefault();
					}
					return;
				case KEY_LEFT:
					self.advanceSelection(-1, e);
					return;
				case KEY_RIGHT:
					self.advanceSelection(1, e);
					return;
				case KEY_TAB:
					if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});

						// Default behaviour is to jump to the next field, we only want this
						// if the current field doesn't accept any more entries
						if (!self.isFull()) {
							e.preventDefault();
						}
					}
					if (self.settings.create && self.createItem()) {
						e.preventDefault();
					}
					return;
				case KEY_BACKSPACE:
				case KEY_DELETE:
					self.deleteSelection(e);
					return;
			}

			if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
				e.preventDefault();
				return;
			}
		},

		/**
		 * Triggered on <input> keyup.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyUp: function(e) {
			var self = this;

			if (self.isLocked) return e && e.preventDefault();
			var value = self.$control_input.val() || '';
			if (self.lastValue !== value) {
				self.lastValue = value;
				self.onSearchChange(value);
				self.refreshOptions();
				self.trigger('type', value);
			}
		},

		/**
		 * Invokes the user-provide option provider / loader.
		 *
		 * Note: this function is debounced in the Selectize
		 * constructor (by `settings.loadDelay` milliseconds)
		 *
		 * @param {string} value
		 */
		onSearchChange: function(value) {
			var self = this;
			var fn = self.settings.load;
			if (!fn) return;
			if (self.loadedSearches.hasOwnProperty(value)) return;
			self.loadedSearches[value] = true;
			self.load(function(callback) {
				fn.apply(self, [value, callback]);
			});
		},

		/**
		 * Triggered on <input> focus.
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		onFocus: function(e) {
			var self = this;
			var wasFocused = self.isFocused;

			if (self.isDisabled) {
				self.blur();
				e && e.preventDefault();
				return false;
			}

			if (self.ignoreFocus) return;
			self.isFocused = true;
			if (self.settings.preload === 'focus') self.onSearchChange('');

			if (!wasFocused) self.trigger('focus');

			if (!self.$activeItems.length) {
				self.showInput();
				self.setActiveItem(null);
				self.refreshOptions(!!self.settings.openOnFocus);
			}

			self.refreshState();
		},

		/**
		 * Triggered on <input> blur.
		 *
		 * @param {object} e
		 * @param {Element} dest
		 */
		onBlur: function(e, dest) {
			var self = this;
			if (!self.isFocused) return;
			self.isFocused = false;

			if (self.ignoreFocus) {
				return;
			} else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
				// necessary to prevent IE closing the dropdown when the scrollbar is clicked
				self.ignoreBlur = true;
				self.onFocus(e);
				return;
			}

			var deactivate = function() {
				self.close();
				self.setTextboxValue('');
				self.setActiveItem(null);
				self.setActiveOption(null);
				self.setCaret(self.items.length);
				self.refreshState();

				// IE11 bug: element still marked as active
				(dest || document.body).focus();

				self.ignoreFocus = false;
				self.trigger('blur');
			};

			self.ignoreFocus = true;
			if (self.settings.create && self.settings.createOnBlur) {
				self.createItem(null, false, deactivate);
			} else {
				deactivate();
			}
		},

		/**
		 * Triggered when the user rolls over
		 * an option in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionHover: function(e) {
			if (this.ignoreHover) return;
			this.setActiveOption(e.currentTarget, false);
		},

		/**
		 * Triggered when the user clicks on an option
		 * in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionSelect: function(e) {
			var value, $target, $option, self = this;

			if (e.preventDefault) {
				e.preventDefault();
				e.stopPropagation();
			}

			$target = $(e.currentTarget);
			if ($target.hasClass('create')) {
				self.createItem(null, function() {
					if (self.settings.closeAfterSelect) {
						self.close();
					}
				});
			} else {
				value = $target.attr('data-value');
				if (typeof value !== 'undefined') {
					self.lastQuery = null;
					self.setTextboxValue('');
					self.addItem(value);
					if (self.settings.closeAfterSelect) {
						self.close();
					} else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
						self.setActiveOption(self.getOption(value));
					}
				}
			}
		},

		/**
		 * Triggered when the user clicks on an item
		 * that has been selected.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onItemSelect: function(e) {
			var self = this;

			if (self.isLocked) return;
			if (self.settings.mode === 'multi') {
				e.preventDefault();
				self.setActiveItem(e.currentTarget, e);
			}
		},

		/**
		 * Invokes the provided method that provides
		 * results to a callback---which are then added
		 * as options to the control.
		 *
		 * @param {function} fn
		 */
		load: function(fn) {
			var self = this;
			var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);

			self.loading++;
			fn.apply(self, [function(results) {
				self.loading = Math.max(self.loading - 1, 0);
				if (results && results.length) {
					self.addOption(results);
					self.refreshOptions(self.isFocused && !self.isInputHidden);
				}
				if (!self.loading) {
					$wrapper.removeClass(self.settings.loadingClass);
				}
				self.trigger('load', results);
			}]);
		},

		/**
		 * Sets the input field of the control to the specified value.
		 *
		 * @param {string} value
		 */
		setTextboxValue: function(value) {
			var $input = this.$control_input;
			var changed = $input.val() !== value;
			if (changed) {
				$input.val(value).triggerHandler('update');
				this.lastValue = value;
			}
		},

		/**
		 * Returns the value of the control. If multiple items
		 * can be selected (e.g. <select multiple>), this returns
		 * an array. If only one item can be selected, this
		 * returns a string.
		 *
		 * @returns {mixed}
		 */
		getValue: function() {
			if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
				return this.items;
			} else {
				return this.items.join(this.settings.delimiter);
			}
		},

		/**
		 * Resets the selected items to the given value.
		 *
		 * @param {mixed} value
		 */
		setValue: function(value, silent) {
			var events = silent ? [] : ['change'];

			debounce_events(this, events, function() {
				this.clear();
				this.addItems(value, silent);
			});
		},

		/**
		 * Sets the selected item.
		 *
		 * @param {object} $item
		 * @param {object} e (optional)
		 */
		setActiveItem: function($item, e) {
			var self = this;
			var eventName;
			var i, idx, begin, end, item, swap;
			var $last;

			if (self.settings.mode === 'single') return;
			$item = $($item);

			// clear the active selection
			if (!$item.length) {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [];
				if (self.isFocused) {
					self.showInput();
				}
				return;
			}

			// modify selection
			eventName = e && e.type.toLowerCase();

			if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
				$last = self.$control.children('.active:last');
				begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
				end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
				if (begin > end) {
					swap  = begin;
					begin = end;
					end   = swap;
				}
				for (i = begin; i <= end; i++) {
					item = self.$control[0].childNodes[i];
					if (self.$activeItems.indexOf(item) === -1) {
						$(item).addClass('active');
						self.$activeItems.push(item);
					}
				}
				e.preventDefault();
			} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
					$item.removeClass('active');
				} else {
					self.$activeItems.push($item.addClass('active')[0]);
				}
			} else {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [$item.addClass('active')[0]];
			}

			// ensure control has focus
			self.hideInput();
			if (!this.isFocused) {
				self.focus();
			}
		},

		/**
		 * Sets the selected item in the dropdown menu
		 * of available options.
		 *
		 * @param {object} $object
		 * @param {boolean} scroll
		 * @param {boolean} animate
		 */
		setActiveOption: function($option, scroll, animate) {
			var height_menu, height_item, y;
			var scroll_top, scroll_bottom;
			var self = this;

			if (self.$activeOption) self.$activeOption.removeClass('active');
			self.$activeOption = null;

			$option = $($option);
			if (!$option.length) return;

			self.$activeOption = $option.addClass('active');

			if (scroll || !isset(scroll)) {

				height_menu   = self.$dropdown_content.height();
				height_item   = self.$activeOption.outerHeight(true);
				scroll        = self.$dropdown_content.scrollTop() || 0;
				y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
				scroll_top    = y;
				scroll_bottom = y - height_menu + height_item;

				if (y + height_item > height_menu + scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
				} else if (y < scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
				}

			}
		},

		/**
		 * Selects all items (CTRL + A).
		 */
		selectAll: function() {
			var self = this;
			if (self.settings.mode === 'single') return;

			self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
			if (self.$activeItems.length) {
				self.hideInput();
				self.close();
			}
			self.focus();
		},

		/**
		 * Hides the input element out of view, while
		 * retaining its focus.
		 */
		hideInput: function() {
			var self = this;

			self.setTextboxValue('');
			self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
			self.isInputHidden = true;
		},

		/**
		 * Restores input visibility.
		 */
		showInput: function() {
			this.$control_input.css({opacity: 1, position: 'relative', left: 0});
			this.isInputHidden = false;
		},

		/**
		 * Gives the control focus.
		 */
		focus: function() {
			var self = this;
			if (self.isDisabled) return;

			self.ignoreFocus = true;
			self.$control_input[0].focus();
			window.setTimeout(function() {
				self.ignoreFocus = false;
				self.onFocus();
			}, 0);
		},

		/**
		 * Forces the control out of focus.
		 *
		 * @param {Element} dest
		 */
		blur: function(dest) {
			this.$control_input[0].blur();
			this.onBlur(null, dest);
		},

		/**
		 * Returns a function that scores an object
		 * to show how good of a match it is to the
		 * provided query.
		 *
		 * @param {string} query
		 * @param {object} options
		 * @return {function}
		 */
		getScoreFunction: function(query) {
			return this.sifter.getScoreFunction(query, this.getSearchOptions());
		},

		/**
		 * Returns search options for sifter (the system
		 * for scoring and sorting results).
		 *
		 * @see https://github.com/brianreavis/sifter.js
		 * @return {object}
		 */
		getSearchOptions: function() {
			var settings = this.settings;
			var sort = settings.sortField;
			if (typeof sort === 'string') {
				sort = [{field: sort}];
			}

			return {
				fields      : settings.searchField,
				conjunction : settings.searchConjunction,
				sort        : sort
			};
		},

		/**
		 * Searches through available options and returns
		 * a sorted array of matches.
		 *
		 * Returns an object containing:
		 *
		 *   - query {string}
		 *   - tokens {array}
		 *   - total {int}
		 *   - items {array}
		 *
		 * @param {string} query
		 * @returns {object}
		 */
		search: function(query) {
			var i, value, score, result, calculateScore;
			var self     = this;
			var settings = self.settings;
			var options  = this.getSearchOptions();

			// validate user-provided result scoring function
			if (settings.score) {
				calculateScore = self.settings.score.apply(this, [query]);
				if (typeof calculateScore !== 'function') {
					throw new Error('Selectize "score" setting must be a function that returns a function');
				}
			}

			// perform search
			if (query !== self.lastQuery) {
				self.lastQuery = query;
				result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
				self.currentResults = result;
			} else {
				result = $.extend(true, {}, self.currentResults);
			}

			// filter out selected items
			if (settings.hideSelected) {
				for (i = result.items.length - 1; i >= 0; i--) {
					if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
						result.items.splice(i, 1);
					}
				}
			}

			return result;
		},

		/**
		 * Refreshes the list of available options shown
		 * in the autocomplete dropdown menu.
		 *
		 * @param {boolean} triggerDropdown
		 */
		refreshOptions: function(triggerDropdown) {
			var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
			var $active, $active_before, $create;

			if (typeof triggerDropdown === 'undefined') {
				triggerDropdown = true;
			}

			var self              = this;
			var query             = $.trim(self.$control_input.val());
			var results           = self.search(query);
			var $dropdown_content = self.$dropdown_content;
			var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));

			// build markup
			n = results.items.length;
			if (typeof self.settings.maxOptions === 'number') {
				n = Math.min(n, self.settings.maxOptions);
			}

			// render and group available options individually
			groups = {};
			groups_order = [];

			for (i = 0; i < n; i++) {
				option      = self.options[results.items[i].id];
				option_html = self.render('option', option);
				optgroup    = option[self.settings.optgroupField] || '';
				optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];

				for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
					optgroup = optgroups[j];
					if (!self.optgroups.hasOwnProperty(optgroup)) {
						optgroup = '';
					}
					if (!groups.hasOwnProperty(optgroup)) {
						groups[optgroup] = [];
						groups_order.push(optgroup);
					}
					groups[optgroup].push(option_html);
				}
			}

			// sort optgroups
			if (this.settings.lockOptgroupOrder) {
				groups_order.sort(function(a, b) {
					var a_order = self.optgroups[a].$order || 0;
					var b_order = self.optgroups[b].$order || 0;
					return a_order - b_order;
				});
			}

			// render optgroup headers & join groups
			html = [];
			for (i = 0, n = groups_order.length; i < n; i++) {
				optgroup = groups_order[i];
				if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].length) {
					// render the optgroup header and options within it,
					// then pass it to the wrapper template
					html_children = self.render('optgroup_header', self.optgroups[optgroup]) || '';
					html_children += groups[optgroup].join('');
					html.push(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
						html: html_children
					})));
				} else {
					html.push(groups[optgroup].join(''));
				}
			}

			$dropdown_content.html(html.join(''));

			// highlight matching terms inline
			if (self.settings.highlight && results.query.length && results.tokens.length) {
				for (i = 0, n = results.tokens.length; i < n; i++) {
					highlight($dropdown_content, results.tokens[i].regex);
				}
			}

			// add "selected" class to selected options
			if (!self.settings.hideSelected) {
				for (i = 0, n = self.items.length; i < n; i++) {
					self.getOption(self.items[i]).addClass('selected');
				}
			}

			// add create option
			has_create_option = self.canCreate(query);
			if (has_create_option) {
				$dropdown_content.prepend(self.render('option_create', {input: query}));
				$create = $($dropdown_content[0].childNodes[0]);
			}

			// activate
			self.hasOptions = results.items.length > 0 || has_create_option;
			if (self.hasOptions) {
				if (results.items.length > 0) {
					$active_before = active_before && self.getOption(active_before);
					if ($active_before && $active_before.length) {
						$active = $active_before;
					} else if (self.settings.mode === 'single' && self.items.length) {
						$active = self.getOption(self.items[0]);
					}
					if (!$active || !$active.length) {
						if ($create && !self.settings.addPrecedence) {
							$active = self.getAdjacentOption($create, 1);
						} else {
							$active = $dropdown_content.find('[data-selectable]:first');
						}
					}
				} else {
					$active = $create;
				}
				self.setActiveOption($active);
				if (triggerDropdown && !self.isOpen) { self.open(); }
			} else {
				self.setActiveOption(null);
				if (triggerDropdown && self.isOpen) { self.close(); }
			}
		},

		/**
		 * Adds an available option. If it already exists,
		 * nothing will happen. Note: this does not refresh
		 * the options list dropdown (use `refreshOptions`
		 * for that).
		 *
		 * Usage:
		 *
		 *   this.addOption(data)
		 *
		 * @param {object|array} data
		 */
		addOption: function(data) {
			var i, n, value, self = this;

			if ($.isArray(data)) {
				for (i = 0, n = data.length; i < n; i++) {
					self.addOption(data[i]);
				}
				return;
			}

			if (value = self.registerOption(data)) {
				self.userOptions[value] = true;
				self.lastQuery = null;
				self.trigger('option_add', value, data);
			}
		},

		/**
		 * Registers an option to the pool of options.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOption: function(data) {
			var key = hash_key(data[this.settings.valueField]);
			if (!key || this.options.hasOwnProperty(key)) return false;
			data.$order = data.$order || ++this.order;
			this.options[key] = data;
			return key;
		},

		/**
		 * Registers an option group to the pool of option groups.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOptionGroup: function(data) {
			var key = hash_key(data[this.settings.optgroupValueField]);
			if (!key) return false;

			data.$order = data.$order || ++this.order;
			this.optgroups[key] = data;
			return key;
		},

		/**
		 * Registers a new optgroup for options
		 * to be bucketed into.
		 *
		 * @param {string} id
		 * @param {object} data
		 */
		addOptionGroup: function(id, data) {
			data[this.settings.optgroupValueField] = id;
			if (id = this.registerOptionGroup(data)) {
				this.trigger('optgroup_add', id, data);
			}
		},

		/**
		 * Removes an existing option group.
		 *
		 * @param {string} id
		 */
		removeOptionGroup: function(id) {
			if (this.optgroups.hasOwnProperty(id)) {
				delete this.optgroups[id];
				this.renderCache = {};
				this.trigger('optgroup_remove', id);
			}
		},

		/**
		 * Clears all existing option groups.
		 */
		clearOptionGroups: function() {
			this.optgroups = {};
			this.renderCache = {};
			this.trigger('optgroup_clear');
		},

		/**
		 * Updates an option available for selection. If
		 * it is visible in the selected items or options
		 * dropdown, it will be re-rendered automatically.
		 *
		 * @param {string} value
		 * @param {object} data
		 */
		updateOption: function(value, data) {
			var self = this;
			var $item, $item_new;
			var value_new, index_item, cache_items, cache_options, order_old;

			value     = hash_key(value);
			value_new = hash_key(data[self.settings.valueField]);

			// sanity checks
			if (value === null) return;
			if (!self.options.hasOwnProperty(value)) return;
			if (typeof value_new !== 'string') throw new Error('Value must be set in option data');

			order_old = self.options[value].$order;

			// update references
			if (value_new !== value) {
				delete self.options[value];
				index_item = self.items.indexOf(value);
				if (index_item !== -1) {
					self.items.splice(index_item, 1, value_new);
				}
			}
			data.$order = data.$order || order_old;
			self.options[value_new] = data;

			// invalidate render cache
			cache_items = self.renderCache['item'];
			cache_options = self.renderCache['option'];

			if (cache_items) {
				delete cache_items[value];
				delete cache_items[value_new];
			}
			if (cache_options) {
				delete cache_options[value];
				delete cache_options[value_new];
			}

			// update the item if it's selected
			if (self.items.indexOf(value_new) !== -1) {
				$item = self.getItem(value);
				$item_new = $(self.render('item', data));
				if ($item.hasClass('active')) $item_new.addClass('active');
				$item.replaceWith($item_new);
			}

			// invalidate last query because we might have updated the sortField
			self.lastQuery = null;

			// update dropdown contents
			if (self.isOpen) {
				self.refreshOptions(false);
			}
		},

		/**
		 * Removes a single option.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		removeOption: function(value, silent) {
			var self = this;
			value = hash_key(value);

			var cache_items = self.renderCache['item'];
			var cache_options = self.renderCache['option'];
			if (cache_items) delete cache_items[value];
			if (cache_options) delete cache_options[value];

			delete self.userOptions[value];
			delete self.options[value];
			self.lastQuery = null;
			self.trigger('option_remove', value);
			self.removeItem(value, silent);
		},

		/**
		 * Clears all options.
		 */
		clearOptions: function() {
			var self = this;

			self.loadedSearches = {};
			self.userOptions = {};
			self.renderCache = {};
			self.options = self.sifter.items = {};
			self.lastQuery = null;
			self.trigger('option_clear');
			self.clear();
		},

		/**
		 * Returns the jQuery element of the option
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getOption: function(value) {
			return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
		},

		/**
		 * Returns the jQuery element of the next or
		 * previous selectable option.
		 *
		 * @param {object} $option
		 * @param {int} direction  can be 1 for next or -1 for previous
		 * @return {object}
		 */
		getAdjacentOption: function($option, direction) {
			var $options = this.$dropdown.find('[data-selectable]');
			var index    = $options.index($option) + direction;

			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		},

		/**
		 * Finds the first element with a "data-value" attribute
		 * that matches the given value.
		 *
		 * @param {mixed} value
		 * @param {object} $els
		 * @return {object}
		 */
		getElementWithValue: function(value, $els) {
			value = hash_key(value);

			if (typeof value !== 'undefined' && value !== null) {
				for (var i = 0, n = $els.length; i < n; i++) {
					if ($els[i].getAttribute('data-value') === value) {
						return $($els[i]);
					}
				}
			}

			return $();
		},

		/**
		 * Returns the jQuery element of the item
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getItem: function(value) {
			return this.getElementWithValue(value, this.$control.children());
		},

		/**
		 * "Selects" multiple items at once. Adds them to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItems: function(values, silent) {
			var items = $.isArray(values) ? values : [values];
			for (var i = 0, n = items.length; i < n; i++) {
				this.isPending = (i < n - 1);
				this.addItem(items[i], silent);
			}
		},

		/**
		 * "Selects" an item. Adds it to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItem: function(value, silent) {
			var events = silent ? [] : ['change'];

			debounce_events(this, events, function() {
				var $item, $option, $options;
				var self = this;
				var inputMode = self.settings.mode;
				var i, active, value_next, wasFull;
				value = hash_key(value);

				if (self.items.indexOf(value) !== -1) {
					if (inputMode === 'single') self.close();
					return;
				}

				if (!self.options.hasOwnProperty(value)) return;
				if (inputMode === 'single') self.clear();
				if (inputMode === 'multi' && self.isFull()) return;

				$item = $(self.render('item', self.options[value]));
				wasFull = self.isFull();
				self.items.splice(self.caretPos, 0, value);
				self.insertAtCaret($item);
				if (!self.isPending || (!wasFull && self.isFull())) {
					self.refreshState();
				}

				if (self.isSetup) {
					$options = self.$dropdown_content.find('[data-selectable]');

					// update menu / remove the option (if this is not one item being added as part of series)
					if (!self.isPending) {
						$option = self.getOption(value);
						value_next = self.getAdjacentOption($option, 1).attr('data-value');
						self.refreshOptions(self.isFocused && inputMode !== 'single');
						if (value_next) {
							self.setActiveOption(self.getOption(value_next));
						}
					}

					// hide the menu if the maximum number of items have been selected or no options are left
					if (!$options.length || self.isFull()) {
						self.close();
					} else {
						self.positionDropdown();
					}

					self.updatePlaceholder();
					self.trigger('item_add', value, $item);
					self.updateOriginalInput({silent: silent});
				}
			});
		},

		/**
		 * Removes the selected item matching
		 * the provided value.
		 *
		 * @param {string} value
		 */
		removeItem: function(value, silent) {
			var self = this;
			var $item, i, idx;

			$item = (typeof value === 'object') ? value : self.getItem(value);
			value = hash_key($item.attr('data-value'));
			i = self.items.indexOf(value);

			if (i !== -1) {
				$item.remove();
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
				}

				self.items.splice(i, 1);
				self.lastQuery = null;
				if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
					self.removeOption(value, silent);
				}

				if (i < self.caretPos) {
					self.setCaret(self.caretPos - 1);
				}

				self.refreshState();
				self.updatePlaceholder();
				self.updateOriginalInput({silent: silent});
				self.positionDropdown();
				self.trigger('item_remove', value, $item);
			}
		},

		/**
		 * Invokes the `create` method provided in the
		 * selectize options that should provide the data
		 * for the new item, given the user input.
		 *
		 * Once this completes, it will be added
		 * to the item list.
		 *
		 * @param {string} value
		 * @param {boolean} [triggerDropdown]
		 * @param {function} [callback]
		 * @return {boolean}
		 */
		createItem: function(input, triggerDropdown) {
			var self  = this;
			var caret = self.caretPos;
			input = input || $.trim(self.$control_input.val() || '');

			var callback = arguments[arguments.length - 1];
			if (typeof callback !== 'function') callback = function() {};

			if (typeof triggerDropdown !== 'boolean') {
				triggerDropdown = true;
			}

			if (!self.canCreate(input)) {
				callback();
				return false;
			}

			self.lock();

			var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
				var data = {};
				data[self.settings.labelField] = input;
				data[self.settings.valueField] = input;
				return data;
			};

			var create = once(function(data) {
				self.unlock();

				if (!data || typeof data !== 'object') return callback();
				var value = hash_key(data[self.settings.valueField]);
				if (typeof value !== 'string') return callback();

				self.setTextboxValue('');
				self.addOption(data);
				self.setCaret(caret);
				self.addItem(value);
				self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
				callback(data);
			});

			var output = setup.apply(this, [input, create]);
			if (typeof output !== 'undefined') {
				create(output);
			}

			return true;
		},

		/**
		 * Re-renders the selected item lists.
		 */
		refreshItems: function() {
			this.lastQuery = null;

			if (this.isSetup) {
				this.addItem(this.items);
			}

			this.refreshState();
			this.updateOriginalInput();
		},

		/**
		 * Updates all state-dependent attributes
		 * and CSS classes.
		 */
		refreshState: function() {
			var invalid, self = this;
			if (self.isRequired) {
				if (self.items.length) self.isInvalid = false;
				self.$control_input.prop('required', invalid);
			}
			self.refreshClasses();
		},

		/**
		 * Updates all state-dependent CSS classes.
		 */
		refreshClasses: function() {
			var self     = this;
			var isFull   = self.isFull();
			var isLocked = self.isLocked;

			self.$wrapper
				.toggleClass('rtl', self.rtl);

			self.$control
				.toggleClass('focus', self.isFocused)
				.toggleClass('disabled', self.isDisabled)
				.toggleClass('required', self.isRequired)
				.toggleClass('invalid', self.isInvalid)
				.toggleClass('locked', isLocked)
				.toggleClass('full', isFull).toggleClass('not-full', !isFull)
				.toggleClass('input-active', self.isFocused && !self.isInputHidden)
				.toggleClass('dropdown-active', self.isOpen)
				.toggleClass('has-options', !$.isEmptyObject(self.options))
				.toggleClass('has-items', self.items.length > 0);

			self.$control_input.data('grow', !isFull && !isLocked);
		},

		/**
		 * Determines whether or not more items can be added
		 * to the control without exceeding the user-defined maximum.
		 *
		 * @returns {boolean}
		 */
		isFull: function() {
			return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
		},

		/**
		 * Refreshes the original <select> or <input>
		 * element to reflect the current state.
		 */
		updateOriginalInput: function(opts) {
			var i, n, options, label, self = this;
			opts = opts || {};

			if (self.tagType === TAG_SELECT) {
				options = [];
				for (i = 0, n = self.items.length; i < n; i++) {
					label = self.options[self.items[i]][self.settings.labelField] || '';
					options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
				}
				if (!options.length && !this.$input.attr('multiple')) {
					options.push('<option value="" selected="selected"></option>');
				}
				self.$input.html(options.join(''));
			} else {
				self.$input.val(self.getValue());
				self.$input.attr('value',self.$input.val());
			}

			if (self.isSetup) {
				if (!opts.silent) {
					self.trigger('change', self.$input.val());
				}
			}
		},

		/**
		 * Shows/hide the input placeholder depending
		 * on if there items in the list already.
		 */
		updatePlaceholder: function() {
			if (!this.settings.placeholder) return;
			var $input = this.$control_input;

			if (this.items.length) {
				$input.removeAttr('placeholder');
			} else {
				$input.attr('placeholder', this.settings.placeholder);
			}
			$input.triggerHandler('update', {force: true});
		},

		/**
		 * Shows the autocomplete dropdown containing
		 * the available options.
		 */
		open: function() {
			var self = this;

			if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
			self.focus();
			self.isOpen = true;
			self.refreshState();
			self.$dropdown.css({visibility: 'hidden', display: 'block'});
			self.positionDropdown();
			self.$dropdown.css({visibility: 'visible'});
			self.trigger('dropdown_open', self.$dropdown);
		},

		/**
		 * Closes the autocomplete dropdown menu.
		 */
		close: function() {
			var self = this;
			var trigger = self.isOpen;

			if (self.settings.mode === 'single' && self.items.length) {
				self.hideInput();
			}

			self.isOpen = false;
			self.$dropdown.hide();
			self.setActiveOption(null);
			self.refreshState();

			if (trigger) self.trigger('dropdown_close', self.$dropdown);
		},

		/**
		 * Calculates and applies the appropriate
		 * position of the dropdown.
		 */
		positionDropdown: function() {
			var $control = this.$control;
			var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
			offset.top += $control.outerHeight(true);

			this.$dropdown.css({
				width : $control.outerWidth(),
				top   : offset.top,
				left  : offset.left
			});
		},

		/**
		 * Resets / clears all selected items
		 * from the control.
		 *
		 * @param {boolean} silent
		 */
		clear: function(silent) {
			var self = this;

			if (!self.items.length) return;
			self.$control.children(':not(input)').remove();
			self.items = [];
			self.lastQuery = null;
			self.setCaret(0);
			self.setActiveItem(null);
			self.updatePlaceholder();
			self.updateOriginalInput({silent: silent});
			self.refreshState();
			self.showInput();
			self.trigger('clear');
		},

		/**
		 * A helper method for inserting an element
		 * at the current caret position.
		 *
		 * @param {object} $el
		 */
		insertAtCaret: function($el) {
			var caret = Math.min(this.caretPos, this.items.length);
			if (caret === 0) {
				this.$control.prepend($el);
			} else {
				$(this.$control[0].childNodes[caret]).before($el);
			}
			this.setCaret(caret + 1);
		},

		/**
		 * Removes the current selected item(s).
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		deleteSelection: function(e) {
			var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
			var self = this;

			direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
			selection = getSelection(self.$control_input[0]);

			if (self.$activeOption && !self.settings.hideSelected) {
				option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
			}

			// determine items that will be removed
			values = [];

			if (self.$activeItems.length) {
				$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
				caret = self.$control.children(':not(input)').index($tail);
				if (direction > 0) { caret++; }

				for (i = 0, n = self.$activeItems.length; i < n; i++) {
					values.push($(self.$activeItems[i]).attr('data-value'));
				}
				if (e) {
					e.preventDefault();
					e.stopPropagation();
				}
			} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
				if (direction < 0 && selection.start === 0 && selection.length === 0) {
					values.push(self.items[self.caretPos - 1]);
				} else if (direction > 0 && selection.start === self.$control_input.val().length) {
					values.push(self.items[self.caretPos]);
				}
			}

			// allow the callback to abort
			if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
				return false;
			}

			// perform removal
			if (typeof caret !== 'undefined') {
				self.setCaret(caret);
			}
			while (values.length) {
				self.removeItem(values.pop());
			}

			self.showInput();
			self.positionDropdown();
			self.refreshOptions(true);

			// select previous option
			if (option_select) {
				$option_select = self.getOption(option_select);
				if ($option_select.length) {
					self.setActiveOption($option_select);
				}
			}

			return true;
		},

		/**
		 * Selects the previous / next item (depending
		 * on the `direction` argument).
		 *
		 * > 0 - right
		 * < 0 - left
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceSelection: function(direction, e) {
			var tail, selection, idx, valueLength, cursorAtEdge, $tail;
			var self = this;

			if (direction === 0) return;
			if (self.rtl) direction *= -1;

			tail = direction > 0 ? 'last' : 'first';
			selection = getSelection(self.$control_input[0]);

			if (self.isFocused && !self.isInputHidden) {
				valueLength = self.$control_input.val().length;
				cursorAtEdge = direction < 0
					? selection.start === 0 && selection.length === 0
					: selection.start === valueLength;

				if (cursorAtEdge && !valueLength) {
					self.advanceCaret(direction, e);
				}
			} else {
				$tail = self.$control.children('.active:' + tail);
				if ($tail.length) {
					idx = self.$control.children(':not(input)').index($tail);
					self.setActiveItem(null);
					self.setCaret(direction > 0 ? idx + 1 : idx);
				}
			}
		},

		/**
		 * Moves the caret left / right.
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceCaret: function(direction, e) {
			var self = this, fn, $adj;

			if (direction === 0) return;

			fn = direction > 0 ? 'next' : 'prev';
			if (self.isShiftDown) {
				$adj = self.$control_input[fn]();
				if ($adj.length) {
					self.hideInput();
					self.setActiveItem($adj);
					e && e.preventDefault();
				}
			} else {
				self.setCaret(self.caretPos + direction);
			}
		},

		/**
		 * Moves the caret to the specified index.
		 *
		 * @param {int} i
		 */
		setCaret: function(i) {
			var self = this;

			if (self.settings.mode === 'single') {
				i = self.items.length;
			} else {
				i = Math.max(0, Math.min(self.items.length, i));
			}

			if(!self.isPending) {
				// the input must be moved by leaving it in place and moving the
				// siblings, due to the fact that focus cannot be restored once lost
				// on mobile webkit devices
				var j, n, fn, $children, $child;
				$children = self.$control.children(':not(input)');
				for (j = 0, n = $children.length; j < n; j++) {
					$child = $($children[j]).detach();
					if (j <  i) {
						self.$control_input.before($child);
					} else {
						self.$control.append($child);
					}
				}
			}

			self.caretPos = i;
		},

		/**
		 * Disables user input on the control. Used while
		 * items are being asynchronously created.
		 */
		lock: function() {
			this.close();
			this.isLocked = true;
			this.refreshState();
		},

		/**
		 * Re-enables user input on the control.
		 */
		unlock: function() {
			this.isLocked = false;
			this.refreshState();
		},

		/**
		 * Disables user input on the control completely.
		 * While disabled, it cannot receive focus.
		 */
		disable: function() {
			var self = this;
			self.$input.prop('disabled', true);
			self.$control_input.prop('disabled', true).prop('tabindex', -1);
			self.isDisabled = true;
			self.lock();
		},

		/**
		 * Enables the control so that it can respond
		 * to focus and user input.
		 */
		enable: function() {
			var self = this;
			self.$input.prop('disabled', false);
			self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);
			self.isDisabled = false;
			self.unlock();
		},

		/**
		 * Completely destroys the control and
		 * unbinds all event listeners so that it can
		 * be garbage collected.
		 */
		destroy: function() {
			var self = this;
			var eventNS = self.eventNS;
			var revertSettings = self.revertSettings;

			self.trigger('destroy');
			self.off();
			self.$wrapper.remove();
			self.$dropdown.remove();

			self.$input
				.html('')
				.append(revertSettings.$children)
				.removeAttr('tabindex')
				.removeClass('selectized')
				.attr({tabindex: revertSettings.tabindex})
				.show();

			self.$control_input.removeData('grow');
			self.$input.removeData('selectize');

			$(window).off(eventNS);
			$(document).off(eventNS);
			$(document.body).off(eventNS);

			delete self.$input[0].selectize;
		},

		/**
		 * A helper method for rendering "item" and
		 * "option" templates, given the data.
		 *
		 * @param {string} templateName
		 * @param {object} data
		 * @returns {string}
		 */
		render: function(templateName, data) {
			var value, id, label;
			var html = '';
			var cache = false;
			var self = this;
			var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;

			if (templateName === 'option' || templateName === 'item') {
				value = hash_key(data[self.settings.valueField]);
				cache = !!value;
			}

			// pull markup from cache if it exists
			if (cache) {
				if (!isset(self.renderCache[templateName])) {
					self.renderCache[templateName] = {};
				}
				if (self.renderCache[templateName].hasOwnProperty(value)) {
					return self.renderCache[templateName][value];
				}
			}

			// render markup
			html = self.settings.render[templateName].apply(this, [data, escape_html]);

			// add mandatory attributes
			if (templateName === 'option' || templateName === 'option_create') {
				html = html.replace(regex_tag, '<$1 data-selectable');
			}
			if (templateName === 'optgroup') {
				id = data[self.settings.optgroupValueField] || '';
				html = html.replace(regex_tag, '<$1 data-group="' + escape_replace(escape_html(id)) + '"');
			}
			if (templateName === 'option' || templateName === 'item') {
				html = html.replace(regex_tag, '<$1 data-value="' + escape_replace(escape_html(value || '')) + '"');
			}

			// update cache
			if (cache) {
				self.renderCache[templateName][value] = html;
			}

			return html;
		},

		/**
		 * Clears the render cache for a template. If
		 * no template is given, clears all render
		 * caches.
		 *
		 * @param {string} templateName
		 */
		clearCache: function(templateName) {
			var self = this;
			if (typeof templateName === 'undefined') {
				self.renderCache = {};
			} else {
				delete self.renderCache[templateName];
			}
		},

		/**
		 * Determines whether or not to display the
		 * create item prompt, given a user input.
		 *
		 * @param {string} input
		 * @return {boolean}
		 */
		canCreate: function(input) {
			var self = this;
			if (!self.settings.create) return false;
			var filter = self.settings.createFilter;
			return input.length
				&& (typeof filter !== 'function' || filter.apply(self, [input]))
				&& (typeof filter !== 'string' || new RegExp(filter).test(input))
				&& (!(filter instanceof RegExp) || filter.test(input));
		}

	});


	Selectize.count = 0;
	Selectize.defaults = {
		options: [],
		optgroups: [],

		plugins: [],
		delimiter: ',',
		splitOn: null, // regexp or string for splitting up values from a paste command
		persist: true,
		diacritics: true,
		create: false,
		createOnBlur: false,
		createFilter: null,
		highlight: true,
		openOnFocus: true,
		maxOptions: 1000,
		maxItems: null,
		hideSelected: null,
		addPrecedence: false,
		selectOnTab: false,
		preload: false,
		allowEmptyOption: false,
		closeAfterSelect: false,

		scrollDuration: 60,
		loadThrottle: 300,
		loadingClass: 'loading',

		dataAttr: 'data-data',
		optgroupField: 'optgroup',
		valueField: 'value',
		labelField: 'text',
		optgroupLabelField: 'label',
		optgroupValueField: 'value',
		lockOptgroupOrder: false,

		sortField: '$order',
		searchField: ['text'],
		searchConjunction: 'and',

		mode: null,
		wrapperClass: 'selectize-control',
		inputClass: 'selectize-input',
		dropdownClass: 'selectize-dropdown',
		dropdownContentClass: 'selectize-dropdown-content',

		dropdownParent: null,

		copyClassesToDropdown: true,

		/*
		 load                 : null, // function(query, callback) { ... }
		 score                : null, // function(search) { ... }
		 onInitialize         : null, // function() { ... }
		 onChange             : null, // function(value) { ... }
		 onItemAdd            : null, // function(value, $item) { ... }
		 onItemRemove         : null, // function(value) { ... }
		 onClear              : null, // function() { ... }
		 onOptionAdd          : null, // function(value, data) { ... }
		 onOptionRemove       : null, // function(value) { ... }
		 onOptionClear        : null, // function() { ... }
		 onOptionGroupAdd     : null, // function(id, data) { ... }
		 onOptionGroupRemove  : null, // function(id) { ... }
		 onOptionGroupClear   : null, // function() { ... }
		 onDropdownOpen       : null, // function($dropdown) { ... }
		 onDropdownClose      : null, // function($dropdown) { ... }
		 onType               : null, // function(str) { ... }
		 onDelete             : null, // function(values) { ... }
		 */

		render: {
			/*
			 item: null,
			 optgroup: null,
			 optgroup_header: null,
			 option: null,
			 option_create: null
			 */
		}
	};


	$.fn.selectize = function(settings_user) {
		var defaults             = $.fn.selectize.defaults;
		var settings             = $.extend({}, defaults, settings_user);
		var attr_data            = settings.dataAttr;
		var field_label          = settings.labelField;
		var field_value          = settings.valueField;
		var field_optgroup       = settings.optgroupField;
		var field_optgroup_label = settings.optgroupLabelField;
		var field_optgroup_value = settings.optgroupValueField;

		var optionsMap = {};

		/**
		 * Initializes selectize from a <input type="text"> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_textbox = function($input, settings_element) {
			var i, n, values, option;

			var data_raw = $input.attr(attr_data);

			if (!data_raw) {
				var value = $.trim($input.val() || '');
				if (!settings.allowEmptyOption && !value.length) return;
				values = value.split(settings.delimiter);
				for (i = 0, n = values.length; i < n; i++) {
					option = {};
					option[field_label] = values[i];
					option[field_value] = values[i];
					settings_element.options.push(option);
				}
				settings_element.items = values;
			} else {
				settings_element.options = JSON.parse(data_raw);
				for (i = 0, n = settings_element.options.length; i < n; i++) {
					settings_element.items.push(settings_element.options[i][field_value]);
				}
			}
		};

		/**
		 * Initializes selectize from a <select> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_select = function($input, settings_element) {
			var i, n, tagName, $children, order = 0;
			var options = settings_element.options;

			var readData = function($el) {
				var data = attr_data && $el.attr(attr_data);
				if (typeof data === 'string' && data.length) {
					return JSON.parse(data);
				}
				return null;
			};

			var addOption = function($option, group) {
				$option = $($option);

				var value = hash_key($option.attr('value'));
				if (!value && !settings.allowEmptyOption) return;

				// if the option already exists, it's probably been
				// duplicated in another optgroup. in this case, push
				// the current group to the "optgroup" property on the
				// existing option so that it's rendered in both places.
				if (optionsMap.hasOwnProperty(value)) {
					if (group) {
						var arr = optionsMap[value][field_optgroup];
						if (!arr) {
							optionsMap[value][field_optgroup] = group;
						} else if (!$.isArray(arr)) {
							optionsMap[value][field_optgroup] = [arr, group];
						} else {
							arr.push(group);
						}
					}
					return;
				}

				var option             = readData($option) || {};
				option[field_label]    = option[field_label] || $option.text();
				option[field_value]    = option[field_value] || value;
				option[field_optgroup] = option[field_optgroup] || group;

				optionsMap[value] = option;
				options.push(option);

				if ($option.is(':selected')) {
					settings_element.items.push(value);
				}
			};

			var addGroup = function($optgroup) {
				var i, n, id, optgroup, $options;

				$optgroup = $($optgroup);
				id = $optgroup.attr('label');

				if (id) {
					optgroup = readData($optgroup) || {};
					optgroup[field_optgroup_label] = id;
					optgroup[field_optgroup_value] = id;
					settings_element.optgroups.push(optgroup);
				}

				$options = $('option', $optgroup);
				for (i = 0, n = $options.length; i < n; i++) {
					addOption($options[i], id);
				}
			};

			settings_element.maxItems = $input.attr('multiple') ? null : 1;

			$children = $input.children();
			for (i = 0, n = $children.length; i < n; i++) {
				tagName = $children[i].tagName.toLowerCase();
				if (tagName === 'optgroup') {
					addGroup($children[i]);
				} else if (tagName === 'option') {
					addOption($children[i]);
				}
			}
		};

		return this.each(function() {
			if (this.selectize) return;

			var instance;
			var $input = $(this);
			var tag_name = this.tagName.toLowerCase();
			var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
			if (!placeholder && !settings.allowEmptyOption) {
				placeholder = $input.children('option[value=""]').text();
			}

			var settings_element = {
				'placeholder' : placeholder,
				'options'     : [],
				'optgroups'   : [],
				'items'       : []
			};

			if (tag_name === 'select') {
				init_select($input, settings_element);
			} else {
				init_textbox($input, settings_element);
			}

			instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
		});
	};

	$.fn.selectize.defaults = Selectize.defaults;
	$.fn.selectize.support = {
		validity: SUPPORTS_VALIDITY_API
	};


	Selectize.define('drag_drop', function(options) {
		if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
		if (this.settings.mode !== 'multi') return;
		var self = this;

		self.lock = (function() {
			var original = self.lock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.disable();
				return original.apply(self, arguments);
			};
		})();

		self.unlock = (function() {
			var original = self.unlock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.enable();
				return original.apply(self, arguments);
			};
		})();

		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(this, arguments);

				var $control = self.$control.sortable({
					items: '[data-value]',
					forcePlaceholderSize: true,
					disabled: self.isLocked,
					start: function(e, ui) {
						ui.placeholder.css('width', ui.helper.css('width'));
						$control.css({overflow: 'visible'});
					},
					stop: function() {
						$control.css({overflow: 'hidden'});
						var active = self.$activeItems ? self.$activeItems.slice() : null;
						var values = [];
						$control.children('[data-value]').each(function() {
							values.push($(this).attr('data-value'));
						});
						self.setValue(values);
						self.setActiveItem(active);
					}
				});
			};
		})();

	});

	Selectize.define('dropdown_header', function(options) {
		var self = this;

		options = $.extend({
			title         : 'Untitled',
			headerClass   : 'selectize-dropdown-header',
			titleRowClass : 'selectize-dropdown-header-title',
			labelClass    : 'selectize-dropdown-header-label',
			closeClass    : 'selectize-dropdown-header-close',

			html: function(data) {
				return (
				'<div class="' + data.headerClass + '">' +
				'<div class="' + data.titleRowClass + '">' +
				'<span class="' + data.labelClass + '">' + data.title + '</span>' +
				'<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
				'</div>' +
				'</div>'
				);
			}
		}, options);

		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(self, arguments);
				self.$dropdown_header = $(options.html(options));
				self.$dropdown.prepend(self.$dropdown_header);
			};
		})();

	});

	Selectize.define('optgroup_columns', function(options) {
		var self = this;

		options = $.extend({
			equalizeWidth  : true,
			equalizeHeight : true
		}, options);

		this.getAdjacentOption = function($option, direction) {
			var $options = $option.closest('[data-group]').find('[data-selectable]');
			var index    = $options.index($option) + direction;

			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		};

		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, $option, $options, $optgroup;

				if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
					self.ignoreHover = true;
					$optgroup = this.$activeOption.closest('[data-group]');
					index = $optgroup.find('[data-selectable]').index(this.$activeOption);

					if(e.keyCode === KEY_LEFT) {
						$optgroup = $optgroup.prev('[data-group]');
					} else {
						$optgroup = $optgroup.next('[data-group]');
					}

					$options = $optgroup.find('[data-selectable]');
					$option  = $options.eq(Math.min($options.length - 1, index));
					if ($option.length) {
						this.setActiveOption($option);
					}
					return;
				}

				return original.apply(this, arguments);
			};
		})();

		var getScrollbarWidth = function() {
			var div;
			var width = getScrollbarWidth.width;
			var doc = document;

			if (typeof width === 'undefined') {
				div = doc.createElement('div');
				div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
				div = div.firstChild;
				doc.body.appendChild(div);
				width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
				doc.body.removeChild(div);
			}
			return width;
		};

		var equalizeSizes = function() {
			var i, n, height_max, width, width_last, width_parent, $optgroups;

			$optgroups = $('[data-group]', self.$dropdown_content);
			n = $optgroups.length;
			if (!n || !self.$dropdown_content.width()) return;

			if (options.equalizeHeight) {
				height_max = 0;
				for (i = 0; i < n; i++) {
					height_max = Math.max(height_max, $optgroups.eq(i).height());
				}
				$optgroups.css({height: height_max});
			}

			if (options.equalizeWidth) {
				width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
				width = Math.round(width_parent / n);
				$optgroups.css({width: width});
				if (n > 1) {
					width_last = width_parent - width * (n - 1);
					$optgroups.eq(n - 1).css({width: width_last});
				}
			}
		};

		if (options.equalizeHeight || options.equalizeWidth) {
			hook.after(this, 'positionDropdown', equalizeSizes);
			hook.after(this, 'refreshOptions', equalizeSizes);
		}


	});

	Selectize.define('remove_button', function(options) {
		if (this.settings.mode === 'single') return;

		options = $.extend({
			label     : '&times;',
			title     : 'Remove',
			className : 'remove',
			append    : true
		}, options);

		var self = this;
		var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';

		/**
		 * Appends an element as a child (with raw HTML).
		 *
		 * @param {string} html_container
		 * @param {string} html_element
		 * @return {string}
		 */
		var append = function(html_container, html_element) {
			var pos = html_container.search(/(<\/[^>]+>\s*)$/);
			return html_container.substring(0, pos) + html_element + html_container.substring(pos);
		};

		this.setup = (function() {
			var original = self.setup;
			return function() {
				// override the item rendering method to add the button to each
				if (options.append) {
					var render_item = self.settings.render.item;
					self.settings.render.item = function(data) {
						return append(render_item.apply(this, arguments), html);
					};
				}

				original.apply(this, arguments);

				// add event listener
				this.$control.on('click', '.' + options.className, function(e) {
					e.preventDefault();
					if (self.isLocked) return;

					var $item = $(e.currentTarget).parent();
					self.setActiveItem($item);
					if (self.deleteSelection()) {
						self.setCaret(self.items.length);
					}
				});

			};
		})();

	});

	Selectize.define('restore_on_backspace', function(options) {
		var self = this;

		options.text = options.text || function(option) {
			return option[this.settings.labelField];
		};

		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, option;
				if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
					index = this.caretPos - 1;
					if (index >= 0 && index < this.items.length) {
						option = this.options[this.items[index]];
						if (this.deleteSelection(e)) {
							this.setTextboxValue(options.text.apply(this, [option]));
							this.refreshOptions(true);
						}
						e.preventDefault();
						return;
					}
				}
				return original.apply(this, arguments);
			};
		})();
	});


	return Selectize;
}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-selectize', location = 'thirdparty/selectize_infinite_scroll.js' */
Selectize.define('infinite_scroll', function(options) {
	var self = this
    , page = 1;

  self.infinitescroll = {
    onScroll: function() {
      var scrollBottom = self.$dropdown_content[0].scrollHeight - (self.$dropdown_content.scrollTop() + self.$dropdown_content.height())
      if(scrollBottom < 300){
        var query = JSON.stringify({
          search: self.lastValue,
          page: page
        })

        self.$dropdown_content.off('scroll')
        self.onSearchChange(query)
      }
    }
  };

	self.onFocus = (function() {
		var original = self.onFocus;

		return function() {
      var query = JSON.stringify({
        search: self.lastValue,
        page: page
      })

			original.apply(self, arguments);
      self.onSearchChange(query)
		};
	})();

  self.onKeyUp = function(e) {
		var self = this;

		if (self.isLocked) return e && e.preventDefault();
		var value = self.$control_input.val() || '';

		if (self.lastValue !== value) {
      var query = JSON.stringify({
        search: value,
        page: page = 1
      });

			self.lastValue = value;
			self.onSearchChange(query);
      self.refreshOptions();
      self.clearOptions();
			self.trigger('type', value);
		}
	};

  self.on('load',function(){
    page++
    self.$dropdown_content.on('scroll', self.infinitescroll.onScroll);
  });

});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-saveascopyto', location = 'gliffy/ajax/SequentialBatchRequestQueueFactory.js' */
/**
 * Provides a means of dynamically requesting objects via AJAX in batched sequential order.
 */
define("gliffy/ajax/sequentialBatchRequestQueueFactory", [
        "jquery",
        "gliffy/objectValidatorFactory"
    ], function($, objectValidatorFactory) {
        "use strict";
        return {
            create: function (parameters) {
                var parameters = $.extend({
                    minIndex: 0,
                    maxIndex: Number.MAX_SAFE_INTEGER,
                    onReset: function () {
                    },
                    onFail: function () {
                    }
                }, parameters);

                objectValidatorFactory.create({
                    description: "SequentialBatchRequestQueue constructor parameters",
                    keyToPredicateMap: {
                        "batchLimit": objectValidatorFactory.predicates.isNumber,  // max number of items to fetch per request.
                        "buildPromise": objectValidatorFactory.predicates.isFunction,      // (start, limit): returns jQuery deferred.
                        "processResponseAndReturnItemCount": objectValidatorFactory.predicates.isFunction    // (response): returns number of items processed.
                    }
                }).validate(parameters);

                var nextBatchStartIndex = parameters.minIndex;

                var waitingForNextResponse = false;
                var next = function () {
                    if (waitingForNextResponse || nextBatchStartIndex === null) {
                        return;
                    }

                    waitingForNextResponse = true;

                    var promise = parameters.buildPromise(nextBatchStartIndex, parameters.batchLimit, parameters.dropdownListPagingNumber);

                    $.when(promise).done(function (response) {
                        var returnObject = parameters.processResponseAndReturnItemCount(response);
                        var itemCount = returnObject.itemCount;
                        parameters.totalDropdownListCount = returnObject.totalCount;

                        nextBatchStartIndex += itemCount;
                        if (nextBatchStartIndex >= parameters.maxIndex || itemCount < parameters.batchLimit) {
                            nextBatchStartIndex = null;
                        }

                        waitingForNextResponse = false;
                        
                    }).fail(function (response) {
                        parameters.onFail(response);
                        waitingForNextResponse = false;
                    });
                    
                }

                var reset = function () {
                    nextBatchStartIndex = parameters.minIndex;
                    parameters.onReset();
                }

                var getNextIndex = function () {
                    return nextBatchStartIndex;
                }
                // GCONF-2656 - Adding two functions to support infinite scoll in selectize.js
                var getTotalCount =  function() {
                	return parameters.totalDropdownListCount;
                }
                
                var setPageNumber = function (pageNumber) {
                	parameters.dropdownListPagingNumber = pageNumber;
                }

                return {
                    reset: reset,
                    next: next,
                    getNextIndex: getNextIndex,
                    getTotalCount: getTotalCount,
                    setPageNumber:setPageNumber
                }
            }
        }
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-saveascopyto', location = 'gliffy/confluence/saveas/CommonDialog.soy' */
// This file was automatically generated from CommonDialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.dialog.saveAs.commonDialog.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.dialog == 'undefined') { gliffySoy.dialog = {}; }
if (typeof gliffySoy.dialog.saveAs == 'undefined') { gliffySoy.dialog.saveAs = {}; }
if (typeof gliffySoy.dialog.saveAs.commonDialog == 'undefined') { gliffySoy.dialog.saveAs.commonDialog = {}; }


gliffySoy.dialog.saveAs.commonDialog.SpaceDropdown = function(opt_data, opt_ignored) {
  var output = '<select class="dropdown gliffy-select-space" placeholder="' + soy.$$escapeHtml(opt_data.placeholderText) + '">';
  if (opt_data.initialSpaces) {
    output += (! opt_data.allowDefaultValue) ? '<option/>' : '';
    var spaceList11 = opt_data.initialSpaces;
    var spaceListLen11 = spaceList11.length;
    for (var spaceIndex11 = 0; spaceIndex11 < spaceListLen11; spaceIndex11++) {
      var spaceData11 = spaceList11[spaceIndex11];
      output += '<option value="' + soy.$$escapeHtml(spaceData11.key) + '">' + soy.$$escapeHtml(spaceData11.name) + '</option>';
    }
  }
  output += '</select>';
  return output;
};
if (goog.DEBUG) {
  gliffySoy.dialog.saveAs.commonDialog.SpaceDropdown.soyTemplateName = 'gliffySoy.dialog.saveAs.commonDialog.SpaceDropdown';
}


gliffySoy.dialog.saveAs.commonDialog.Body = function(opt_data, opt_ignored) {
  return '<div style=\'background-color:inherit\' class="gliffy-saveas-common-panel row-fluid"><div class="gliffy-save-as-modal-header"><div class="modal-header">Copy To</div><div class="modal-close-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9393 4.93934C17.5251 4.35355 18.4749 4.35355 19.0607 4.93934C19.6464 5.52513 19.6464 6.47487 19.0607 7.06066L14.1213 12L19.0607 16.9393C19.6464 17.5251 19.6464 18.4749 19.0607 19.0607C18.4749 19.6464 17.5251 19.6464 16.9393 19.0607L12 14.1213L7.06066 19.0607C6.47487 19.6464 5.52513 19.6464 4.93934 19.0607C4.35355 18.4749 4.35355 17.5251 4.93934 16.9393L9.87868 12L4.93934 7.06066C4.35355 6.47487 4.35355 5.52513 4.93934 4.93934C5.52513 4.35355 6.47487 4.35355 7.06066 4.93934L12 9.87868L16.9393 4.93934Z" fill="#44546F"/></svg></div></div><div class="modal-controls control-group diagram-name-group section help-inline-error"><label class="control-label">' + soy.$$escapeHtml('Save As') + ':</label><input type="text" class="text-control js-diagram-name diagram-name" placeholder="' + soy.$$escapeHtml('Name the new diagram...') + '" value="' + soy.$$escapeHtml(opt_data.diagramName) + ' Copy"/><span class="help-inline"></span></div><div class="target-page-group section"><label>Save To:</label><div class="selection-group"><div class="control-group"><input type="radio" class="radio-control gliffy-confluence-save-as-radio gliffy-confluence-select-this-page" id="gliffy-confluence-select-this-page" name="gliffy-confluence-save-as-type" value="this" checked/><label class="control-label" for="gliffy-confluence-select-this-page">&nbsp;' + soy.$$escapeHtml('This Page') + '</label></div></div><div class="gliffy-confluence-select-new-page selection-group"><div class="control-group"><input type="radio" class="radio-control gliffy-confluence-save-as-radio gliffy-confluence-select-new-page" id="gliffy-confluence-select-new-page" name="gliffy-confluence-save-as-type" value="new"/><label class="control-label" for="gliffy-confluence-select-new-page">&nbsp;' + soy.$$escapeHtml('New Page') + '</label></div><div class="collapsing gliffy-confluence-select-new-page gliffy-confluence-save-on-new-page-container help-inline-error"><div class="help-inline"></div><div class="new-page-options"><div class="gliffy-save-as-left-column"><input type="text" class="gliffy-confluence-new-page-name" placeholder="' + soy.$$escapeHtml('Name the new page...') + '"/></div><div class="gliffy-save-as-right-column">' + gliffySoy.dialog.saveAs.commonDialog.SpaceDropdown({placeholderText: 'Select space...', allowDefaultValue: true, initialSpaces: opt_data.initialSpaces}) + '</div></div></div></div><div class="gliffy-confluence-select-existing-page selection-group"><div class="control-group"><input type="radio" class="radio-control gliffy-confluence-save-as-radio gliffy-confluence-select-existing-page" id="gliffy-confluence-select-existing-page" name="gliffy-confluence-save-as-type" value="existing"/><label class="gliffy-export-size-label" for="gliffy-confluence-select-existing-page">&nbsp;' + soy.$$escapeHtml('Existing Page') + '</label></div><div class="collapsing gliffy-confluence-select-existing-page gliffy-confluence-save-on-existing-page-container help-inline-error"><div class="help-inline"></div><div class="existing-page-options"><div class="gliffy-save-as-left-column"><input type="text" class="gliffy-confluence-search-pages" placeholder="' + soy.$$escapeHtml('Search for pages...') + '"/></div><div class="gliffy-save-as-right-column">' + gliffySoy.dialog.saveAs.commonDialog.SpaceDropdown({placeholderText: 'All spaces...', allowDefaultValue: false, initialSpaces: opt_data.initialSpaces}) + '</div></div><div class="gliffy-save-as-page-list-table"></div></div></div></div><div class="gliffy-save-as-modal-footer"><button type="button" style="margin-right: 10px;" id="gliffy-save-as-cancel-button">' + soy.$$escapeHtml('Cancel') + '</button><button type="button" class="gliffy-dialog-save" id="gliffy-save-as-save-button">' + soy.$$escapeHtml('Save') + '</button></div></div>';
};
if (goog.DEBUG) {
  gliffySoy.dialog.saveAs.commonDialog.Body.soyTemplateName = 'gliffySoy.dialog.saveAs.commonDialog.Body';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-saveascopyto', location = 'gliffy/confluence/saveas/CommonDialogController.js' */
/**
 * Controls Save As/Copy To dialogs and executes associated operations.
 */
define("gliffy/confluence/saveas/commonDialogController", [
        "jquery",
        "underscore",
        "gliffy/ajax/sequentialBatchRequestQueueFactory",
        "gliffy/confluence/rest/webRequestPromiseFactory",
        "gliffy/objectValidatorFactory"
    ], function($, _, sequentialBatchRequestQueueFactory, webRequestPromiseFactory, objectValidatorFactory) {
        "use strict";

        var MAX_PAGE_SEARCH_RESULT_COUNT = 300;
        var MAX_PAGE_SEARCH_BATCH_SIZE = 5;
        var MAX_SPACE_SEARCH_RESULT_COUNT = Number.MAX_SAFE_INTEGER;
        var MAX_SPACE_SEARCH_BATCH_SIZE = 20;

        var displayErrorAlert = function (errorDetail) {
            var alert = gliffySoy.controls.alert.ErrorAlert({
                errorDetail: errorDetail
            });

            $('.gliffy-alert').remove();
            $(alert).appendTo($('.ember-application')).fadeIn(700).delay(5000).fadeOut(700);
        };

        var isNameValid = function (name, illegalStrings, illegalStartStrings) {
            var isValid = illegalStrings.reduce(function (nameIsValid, s) {
                return nameIsValid && (name.indexOf(s) < 0);
            }, true);

            if (isValid) {
                isValid = illegalStartStrings.reduce(function (nameIsValid, s) {
                    return nameIsValid && (name.indexOf(s) != 0);
                }, true);
            }
            return isValid;
        };

        var showDialog = function (parameters) {

            objectValidatorFactory.create({
                description: "CommonDialogController.showDialog() parameters",
                keyToPredicateMap: {
                    "dialogFactory": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "ceoId": objectValidatorFactory.predicates.isString,
                    "pageId": objectValidatorFactory.predicates.isString,
                    "displayName": objectValidatorFactory.predicates.isString,
                    "diagramName": objectValidatorFactory.predicates.isString,
                    "spaceKey": objectValidatorFactory.predicates.isString,
                    "spaceName": objectValidatorFactory.predicates.isString,
                    "baseConfluenceUrl": objectValidatorFactory.predicates.isString,
                    "includeAlertLinkUrlParams": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "onSaveSuccess": objectValidatorFactory.predicates.isFunction,
                    "gliffy.confluence.saveas.error.generic" : objectValidatorFactory.predicates.isString,
                    "gliffy.confluence.saveas.diagram_name_exists" : objectValidatorFactory.predicates.isString,
                    "gliffy.confluence.saveas.diagram_name_required" : objectValidatorFactory.predicates.isString,
                    "gliffy.confluence.saveas.invalid_diagram_name" : objectValidatorFactory.predicates.isString,
                    "gliffy.confluence.saveas.page_title_required" : objectValidatorFactory.predicates.isString,
                    "gliffy.confluence.saveas.space_selection_required" : objectValidatorFactory.predicates.isString,
                    "gliffy.confluence.saveas.invalid_page_title" : objectValidatorFactory.predicates.isString,
                    "gliffy.confluence.saveas.page_title_exists" : objectValidatorFactory.predicates.isString,
                    "gliffy.confluence.saveas.page_selection_required" : objectValidatorFactory.predicates.isString,
                }
            }).validate(parameters);


            var initialSpacesPromise = webRequestPromiseFactory.buildGetSpacesPromise(0, 20);
            var currentPageDiagramsPromise = webRequestPromiseFactory.buildGetDiagramsInPagePromise(parameters.pageId);

            // Obtain the first batch of spaces and the names of the diagrams in the current page before displaying dialog.
            $.when(initialSpacesPromise, currentPageDiagramsPromise).done(function (initialSpacesResponse, currentPageDiagramsResponse) {
                var initialSpaces = initialSpacesResponse[0].spaces;
                var currentPageDiagrams = currentPageDiagramsResponse[0];

                // remove current space from initialSpaces if present, then prepend current space to initialSpaces
                initialSpaces = $.grep(initialSpaces, function (space, index) {
                    return space.key != parameters.spaceKey;
                });
                initialSpaces.unshift({
                    key: parameters.spaceKey,
                    name: parameters.spaceName
                });

                // Initialize the page search queue
                var pageSearchRequestQueue = sequentialBatchRequestQueueFactory.create({
                    minIndex: 0,
                    maxIndex: MAX_PAGE_SEARCH_RESULT_COUNT - 1,
                    batchLimit: MAX_PAGE_SEARCH_BATCH_SIZE,
                    buildPromise: function (startIndex, countLimit) {
                        return webRequestPromiseFactory.buildPageSearchPromise(pageSearchRequestQueue.searchString, pageSearchRequestQueue.spaceKeys ? pageSearchRequestQueue.spaceKeys : null, startIndex, countLimit);
                    },
                    processResponseAndReturnItemCount: function (response) {
                        if (!response || !response.results) {
                            throw new Error("CommonDialogController pageSearchRequestQueue processResponseAndReturnItemCount -- RESPONSE IS NULL");
                        }

                        dialog.addExistingPages(response.results);
                        return response;
                    },
                    onReset: function () {
                        pageSearchRequestQueue.searchString = dialog.getPageSearchTerm();
                        var newSpaceKeys = dialog.getNewPageSpaceKeys();
                        if (!newSpaceKeys) {
                            pageSearchRequestQueue.spaceKeys = []
                        } else if (_.isString(newSpaceKeys)) {
                            pageSearchRequestQueue.spaceKeys = [newSpaceKeys];
                        }
                    },
                    onFail: function () {
                        displayErrorAlert(parameters['gliffy.confluence.saveas.error.generic']);
                    }
                });
                pageSearchRequestQueue.searchString = "";
                pageSearchRequestQueue.spaceKeys = [];

                // Initialize the space search queues
                var buildSpaceSearchRequestQueue = function (addSpacesCallback) {

                    var queue = sequentialBatchRequestQueueFactory.create({
                        minIndex: 0,
                        maxIndex: MAX_SPACE_SEARCH_RESULT_COUNT - 1,
                        batchLimit: MAX_SPACE_SEARCH_BATCH_SIZE,
                        // GCONF-2656 : For infinite scroll plugin in selectize.js
                        //adding two parameters to set the total number of results and the number of pagination in dropdown
                        totalDropdownListCount: 0,
                        dropdownListPagingNumber:1,
                        buildPromise: function (startIndex, countLimit, pageNumber) {
                            return webRequestPromiseFactory.buildSpaceSearchPromise(queue.searchString, startIndex, countLimit, pageNumber);
                        },
                        processResponseAndReturnItemCount: function (response) {
                            if (!response) {
                                throw new Error("CommonDialogController buildSpaceSearchRequestQueue processResponseAndReturnItemCount -- RESPONSE IS NULL");
                            }

                            addSpacesCallback(response.spaces);
                            //return response.length;
                            return{
                                totalCount : response.totalCount,
                                itemCount : response.spaces.length
                            }
                        },
                        onFail: function () {
                            displayErrorAlert(parameters['gliffy.confluence.saveas.error.generic']);
                        }
                    });
                    queue.searchString = "";
                    return queue;
                };

                var newPageSpaceSearchRequestQueue = buildSpaceSearchRequestQueue(function (response) {
                    dialog.addNewPageSpaces(response);
                });

                var existingPageSpaceSearchRequestQueue = buildSpaceSearchRequestQueue(function (response) {
                    dialog.addExistingPageSpaces(response);
                });

                // Create and display the dialog
                var dialog = parameters.dialogFactory.create({
                    diagramName: parameters.diagramName,
                    displayName: parameters.displayName,
                    initialSpaces: initialSpaces,
                    currentPageDiagrams: currentPageDiagrams,
                    resetExistingPageSearch: function (searchString) {
                        pageSearchRequestQueue.searchString = searchString;
                        pageSearchRequestQueue.reset();
                    },
                    nextExistingPageSearch: function () {
                        pageSearchRequestQueue.next();
                    },
                    resetNewPageSpaceSearch: function (searchString) {
                        newPageSpaceSearchRequestQueue.searchString = searchString;
                        newPageSpaceSearchRequestQueue.reset();
                    },
                    nextNewPageSpaceSearch: function (pageNumber) {
                        //GCONF-2656 Setting the page number for infinite scroll in new page dropdown in copyTo dialog
                        newPageSpaceSearchRequestQueue.setPageNumber(pageNumber);
                        newPageSpaceSearchRequestQueue.next();
                        //GCONF-2656 Getting the total number of results in new page dropdown in copyTo dialog
                        var count = newPageSpaceSearchRequestQueue.getTotalCount();
                        return count;
                    },
                    resetExistingPageSpaceSearch: function (searchString) {
                        existingPageSpaceSearchRequestQueue.searchString = searchString;
                        existingPageSpaceSearchRequestQueue.reset();
                    },
                    nextExistingPageSpaceSearch: function (pageNumber) {
                        //GCONF-2656 Setting the page number for infinite scroll in existing page dropdown in copyTo dialog
                        existingPageSpaceSearchRequestQueue.setPageNumber(pageNumber);
                        existingPageSpaceSearchRequestQueue.next();
                        //GCONF-2656 Getting the total number of results in existing page dropdown in copyTo dialog
                        var count = existingPageSpaceSearchRequestQueue.getTotalCount();
                        return count;
                    },
                    validateDiagramName: function (diagramName, targetPageId, controlGroup, callback) {
                        // Make sure diagram name is present.
                        if (!diagramName) {
                            callback({
                                valid: false,
                                controlGroup: controlGroup,
                                message: parameters['gliffy.confluence.saveas.diagram_name_required']
                            });
                            return;
                        }

                        // Make sure diagram name is legal.
                        if (!isNameValid(diagramName, [':', '@', '/', '\\', '|', '^', '#', ';', '[', ']', '{', '}', '<', '>'], ['$', '..', '~'])) {
                            callback({
                                valid: false,
                                controlGroup: controlGroup,
                                message: parameters['gliffy.confluence.saveas.invalid_diagram_name']
                            });
                            return;
                        }

                        // Strip whitespace
                        diagramName = diagramName.trim();

                        // If "new page" is not selected, make sure the selected page does not contain a diagram of the same name.
                        if (targetPageId) {
                            if (targetPageId == parameters.pageId) {
                                var diagramWithTitleFoundOnPage = currentPageDiagrams.reduce(function (previousResult, diagram) {
                                    return previousResult || (diagram.title === diagramName);
                                }, false);

                                if (diagramWithTitleFoundOnPage) {
                                    callback({
                                        valid: false,
                                        controlGroup: controlGroup,
                                        message: parameters['gliffy.confluence.saveas.diagram_name_exists']
                                    });
                                    return;
                                }
                            } else {
                                var selectedPagePromise = webRequestPromiseFactory.buildGetDiagramsInPagePromise(targetPageId);
                                $.when(selectedPagePromise).done(function (response) {
                                    var diagramWithTitleFoundOnPage = response.reduce(function (previousResult, diagram) {
                                        return previousResult || (diagram.title === diagramName);
                                    }, false);

                                    if (diagramWithTitleFoundOnPage) {
                                        callback({
                                            valid: false,
                                            controlGroup: controlGroup,
                                            message: parameters['gliffy.confluence.saveas.diagram_name_exists']
                                        });
                                        return;
                                    }

                                    callback({
                                        valid: true,
                                        controlGroup: controlGroup
                                    });
                                    return;
                                }).fail(function () {
                                    displayErrorAlert(parameters['gliffy.confluence.saveas.error.generic']);
                                });
                            }
                        }

                        callback({
                            valid: true,
                            controlGroup: controlGroup
                        });
                    },
                    validatePageTitle: function (pageTitle, spaceKey, targetPageId, controlGroup, callback) {

                        // Make sure page title is present.
                        if (!pageTitle) {
                            callback({
                                valid: false,
                                controlGroup: controlGroup,
                                message: parameters['gliffy.confluence.saveas.page_title_required']
                            });
                            return;
                        }

                        // Make sure space is selected.
                        if (!spaceKey) {
                            callback({
                                valid: false,
                                controlGroup: controlGroup,
                                message: parameters['gliffy.confluence.saveas.space_selection_required']
                            });
                            return;
                        }

                        // Make sure page title is legal.
                        if (!isNameValid(pageTitle, [':', '@', '/', '\\', '|', '^', '#', ';', '[', ']', '{', '}', '<', '>'], ['$', '..', '~'])) {
                            callback({
                                valid: false,
                                controlGroup: controlGroup,
                                message: parameters['gliffy.confluence.saveas.invalid_page_title']
                            });
                            return;
                        }

                        // Make sure a page with the same title is not present in given space.
                        var searchPromise = webRequestPromiseFactory.buildPageWithTitleExistsInSpacePromise(pageTitle, [spaceKey]);
                        searchPromise.then(function (response) {
                            if (response.results.length > 0) {
                                callback({
                                    valid: false,
                                    controlGroup: controlGroup,
                                    message: parameters['gliffy.confluence.saveas.page_title_exists']
                                });
                            } else {
                                callback({
                                    valid: true,
                                    controlGroup: controlGroup
                                });
                            }
                        }).fail(function () {
                            displayErrorAlert(parameters['gliffy.confluence.saveas.error.generic']);
                        });
                    },
                    validatePageSelection: function (pageId, controlGroup, callback) {

                        // Make sure page is selected.
                        if (!pageId) {
                            callback({
                                valid: false,
                                controlGroup: controlGroup,
                                message: parameters['gliffy.confluence.saveas.page_selection_required']
                            });
                            return;
                        }

                        return callback({
                            valid: true,
                            controlGroup: controlGroup
                        });
                    },
                    onSave: function () {
                        // Create AJAX call to prepend the diagram to the target page (or new page).
                        var prependDiagramToPage = function (sourcePageId, sourceDiagramName, sourceDiagramVersion, targetPageId, targetDiagramName, targetPageTitle, targetSpaceKey) {
                            var diagramHasBeenPrepended = webRequestPromiseFactory.buildPrependDiagramToPagePromise({
                                sourcePageId: sourcePageId,
                                sourceDiagramName: sourceDiagramName,
                                sourceDiagramVersion: sourceDiagramVersion,
                                targetPageId: targetPageId,
                                targetDiagramName: targetDiagramName,
                                targetPageTitle: targetPageTitle,
                                targetSpaceKey: targetSpaceKey,
                                includeAlertLinkUrlParams: parameters.includeAlertLinkUrlParams
                            });

                            $.when(diagramHasBeenPrepended).done(function (response) {
                                parameters.onSaveSuccess(response.editTargetDiagramUrl, response.editTargetPageUrl, dialog.isThisPageSelected(), targetDiagramName, response.pageTitle, response.spaceName);
                            }).fail(function () {
                                displayErrorAlert(parameters['gliffy.confluence.saveas.error.generic']);
                                var parentSelector = '.gliffy-container-' + parameters.diagramAttachmentId;
                                AJS.messages.error(parentSelector, {title:"The ability to copy diagrams to existing pages has been disabled by your Confluence administrator.", insert:'prepend'});
                                $(parentSelector).find('.aui-message').css('z-index', 100000).css('position', 'absolute').css('top', '42px');

                            });
                        };

                        if (dialog.isThisPageSelected()) {
                            prependDiagramToPage(parameters.ceoId, parameters.diagramName, parameters.diagramVersion, parameters.pageId, dialog.getTargetDiagramName());
                        } else if (dialog.isNewPageSelected()) {
                            prependDiagramToPage(parameters.ceoId, parameters.diagramName, parameters.diagramVersion, null, dialog.getTargetDiagramName(), dialog.getTargetPageTitle(), dialog.getTargetSpaceKey());
                        } else if (dialog.isExistingPageSelected()) {
                            prependDiagramToPage(parameters.ceoId, parameters.diagramName, parameters.diagramVersion, dialog.getTargetPageId(), dialog.getTargetDiagramName());
                        }
                    }
                });
                dialog.show();
            }).fail(function () {
                displayErrorAlert(parameters['gliffy.confluence.saveas.error.generic']);
            });
        };

        return {
            showDialog: showDialog
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-saveascopyto', location = 'gliffy/confluence/saveas/CommonDialogFactory.js' */
/**
 * Save As/CopyTo dialog common logic.
 */
define("gliffy/confluence/saveas/commonDialogFactory",
    [
        "jquery",
        "selectize",
        "gliffy/controls/listtable/listTableFactory",
        "gliffy/objectValidatorFactory"
    ],
    function($, selectize, listTableFactory, objectValidatorFactory) {
        "use strict";

        var WARN_ICON = `<svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3799 3.61385C13.3207 1.78432 10.6792 1.78431 9.62002 3.61385L2.08891 16.6221C1.02751 18.4555 2.35042 20.75 4.46884 20.75H19.531C21.6495 20.75 22.9724 18.4555 21.911 16.6221L14.3799 3.61385ZM12.7499 9C12.7499 8.58579 12.4141 8.25 11.9999 8.25C11.5857 8.25 11.2499 8.58579 11.2499 9V13C11.2499 13.4142 11.5857 13.75 11.9999 13.75C12.4141 13.75 12.7499 13.4142 12.7499 13V9ZM12.9999 16C12.9999 16.5523 12.5522 17 11.9999 17C11.4477 17 10.9999 16.5523 10.9999 16C10.9999 15.4477 11.4477 15 11.9999 15C12.5522 15 12.9999 15.4477 12.9999 16Z"/>
        </svg>`

        var CommonDialog = function (parameters) {
            var self = this;
            var spaceSearchQuery="";
            var parameters = $.extend({
                onCancel: function () {
                    // intentionally empty
                }
            }, parameters);

            objectValidatorFactory.create({
                description: "SaveAsDialog constructor parameters",
                keyToPredicateMap: {
                    "diagramName": objectValidatorFactory.predicates.isString,
                    "displayName": objectValidatorFactory.predicates.isString,
                    "pageId": objectValidatorFactory.predicates.isString,
                    "initialSpaces": objectValidatorFactory.predicates.isArray,
                    "currentPageDiagrams": objectValidatorFactory.predicates.isArray,
                    "validateDiagramName": objectValidatorFactory.predicates.isFunction,
                    "validatePageTitle": objectValidatorFactory.predicates.isFunction,
                    "validatePageSelection": objectValidatorFactory.predicates.isFunction,
                    "resetExistingPageSearch": objectValidatorFactory.predicates.isFunction,
                    "nextExistingPageSearch": objectValidatorFactory.predicates.isFunction,
                    "resetNewPageSpaceSearch": objectValidatorFactory.predicates.isFunction,
                    "nextNewPageSpaceSearch": objectValidatorFactory.predicates.isFunction,
                    "resetExistingPageSpaceSearch": objectValidatorFactory.predicates.isFunction,
                    "nextExistingPageSpaceSearch": objectValidatorFactory.predicates.isFunction,
                    "onSave": objectValidatorFactory.predicates.isFunction,
                    "setOkEnabled": objectValidatorFactory.predicates.isFunction,
                    "showDialog": objectValidatorFactory.predicates.isFunction,
                    "gliffy.confluence.page": objectValidatorFactory.predicates.isString,
                    "gliffy.confluence.space": objectValidatorFactory.predicates.isString,

                }
            }).validate(parameters);

            // Function to be called any time inputs are changed in order to update state of the dialog.
            var validateInput = function () {

                // if no message, it is considered valid.
                var updateErrorStatus = function (controlGroup, message) {
                    if (message) {

                        var msgHtml = `<span>${WARN_ICON}</span> <span>${message}</span>`
                        controlGroup.find('.help-inline').html(msgHtml).show().css("display", "flex");
                        controlGroup.addClass('error');
                        parameters.setOkEnabled(self._.rootElement, false);
                    } else {
                        controlGroup.removeClass('error');
                        controlGroup.find('.help-inline').hide()
                    }
                };
                updateErrorStatus(self._.rootElement.find(".help-inline-error"));

                var targetPageId = (self.isThisPageSelected() && parameters.pageId) ||
                    (self.isExistingPageSelected() && self.getTargetPageId())
                    || null;

                parameters.validateDiagramName(self.getTargetDiagramName(), targetPageId, self._.rootElement.find(".diagram-name-group"), function (result) {
                    if (result.valid) {
                        if (self.isNewPageSelected()) {
                            parameters.validatePageTitle(self.getTargetPageTitle(), self.getTargetSpaceKey(), targetPageId, self._.rootElement.find('.gliffy-confluence-select-new-page'), function (result) {
                                if (result.valid) {
                                    parameters.setOkEnabled(self._.rootElement, true);
                                } else {
                                    updateErrorStatus(result.controlGroup, result.message);
                                }
                            });
                        } else if (self.isExistingPageSelected()) {
                            parameters.validatePageSelection(self.getTargetPageId(), self._.rootElement.find('.gliffy-confluence-select-existing-page .control-group'), function (result) {
                                if (result.valid) {
                                    parameters.setOkEnabled(self._.rootElement, true);
                                } else {
                                    updateErrorStatus(result.controlGroup, result.message);
                                }
                            });
                        } else {
                            parameters.setOkEnabled(self._.rootElement, true);
                        }
                    } else {
                        updateErrorStatus(result.controlGroup, result.message);
                    }
                });
            };

            // private instance values
            this._ = {
                rootElement: null,
                diagramName: parameters.diagramName,
                displayName: parameters.displayName,
                initialSpaces: parameters.initialSpaces,
                onSave: parameters.onSave,
                onCancel: parameters.onCancel,
                showDialog: parameters.showDialog,
                hasBeenShown: false,
                currentAddSpaceCallback: null,
                buildBodyHtml: function (initialSpaces) {
                    return gliffySoy.dialog.saveAs.commonDialog.Body({
                        initialSpaces: initialSpaces,
                        diagramName: parameters.displayName
                    });
                },
                attachToDialogDom: function () {
                    // Record and tag dialog class so we can style it (make it wider)
                    var root = $('#alertDialog');
                    if(root.length == 0) {
                        root = $('#gliffy-copyto-dialog');
                    } else {
                        root.addClass("gliffy-saveas-common-panel");
                    }
                    this.rootElement = root;

                    // add collapse/expand and validation hooks to radio buttons
                    root.find('input[type=radio]').on('change', function () {
                        if (!this.checked) {
                            return;
                        }

                        root.find('.collapsing').slideUp();
                        $(this).closest('.selection-group').find('.collapsing').slideDown();

                        validateInput();
                    });

                    // add validation hook to diagram name text box. adding 'keyup' handler works around ie9 not
                    // sending 'input' events after delete/backspace/cut/etc., but using it exclusively sacrifices some
                    // speed.
                    root.find('.js-diagram-name').on('input', validateInput).on('keyup', _.debounce(validateInput, 500));

                    // add validation hook to new page name and space dropdown. adding 'keyup' handler works around ie9 not
                    // sending 'input' events after delete/backspace/cut/etc., but using it exclusively sacrifices some
                    // speed.
                    root.find('.gliffy-confluence-new-page-name').on('input', validateInput).on('keyup', _.debounce(validateInput, 500));


                    var attachPageSearchElements = function () {
                        var getPageQuery = function () {
                            return root.find('.gliffy-confluence-search-pages').val();
                        };

                        // Add pages list table. This could eventually likely be replaced by a web component with custom element type rather than manually here.
                        self._.pageListTable = listTableFactory.create({
                            parent: root.find('.gliffy-save-as-page-list-table'),
                            columnNames: [parameters['gliffy.confluence.page'], parameters['gliffy.confluence.space']]
                        });
                        self._.pageListTable.addSelectionChangedListener(validateInput);
                        self._.pageListTable.addScrollToMaximumListener(function () {

                            parameters.nextExistingPageSearch();
                        });

                        // When page search string or selected space is changed, rebuild the page table.
                        // Adding 'keyup' handler works around ie9 not sending 'input' events after delete/backspace/cut/etc.,
                        // but using it exclusively sacrifices some speed.
                        var updateSearch = function() {
                            self._.pageListTable.reset();
                            parameters.resetExistingPageSearch(getPageQuery());
                            parameters.nextExistingPageSearch();
                            validateInput();
                        }
                        root.find('.gliffy-confluence-search-pages').on('input', updateSearch).on('keyup', updateSearch);
                        root.find('.gliffy-confluence-select-existing-page .gliffy-select-space').on('change', updateSearch);

                        parameters.nextExistingPageSearch();
                    };


                    var attachSpaceSearchElements = function (dropdownSelect, resetSpaceSearch, nextSpaceSearch, maxSelectionCount) {
                        var totalCount, page, perPage=20;
                        // enhance with selectize
                        //GCONF-2656 - Changes to support infinite scroll in selectize.js
                        dropdownSelect.selectize({
                            plugins: ['infinite_scroll'],
                            valueField: 'key',
                            labelField: 'name',
                            searchField: ['name', 'key'],
                            maxItems: maxSelectionCount,
                            parameters: [],
                            create: false,
                            load: function (query, callback) {
                                // YES I AM ATTACHING A CALLBACK TO THE DOM. SORRY BUT IT SEEMS LEAST EVIL.
                                query = JSON.parse(query);
                                page = query.page || 1;
                                spaceSearchQuery = query.search;
                                dropdownSelect.data("currentAddSpaceCallback", callback);
                                if(!totalCount || totalCount > ( (page - 1) * perPage) ){
                                    resetSpaceSearch(query.search);
                                    totalCount = nextSpaceSearch(page);

                                }else{
                                    callback();
                                }
                            }

                        });
                    };

                    attachPageSearchElements();
                    attachSpaceSearchElements(root.find('.gliffy-confluence-select-new-page .dropdown'), parameters.resetNewPageSpaceSearch, parameters.nextNewPageSpaceSearch, 1);
                    attachSpaceSearchElements(root.find('.gliffy-confluence-select-existing-page .dropdown'), parameters.resetExistingPageSpaceSearch, parameters.nextExistingPageSpaceSearch, 1);

                    validateInput();
                }
            };
        };

        CommonDialog.prototype.show = function () {
            var self = this;
            if (self._.hasBeenShown) {
                throw new Error("SaveAsDialog can be shown only once per instance lifetime.");
            }

            var bodyHtml = self._.buildBodyHtml(self._.initialSpaces);
            self._.showDialog(bodyHtml, self._.onSave, self._.onCancel);
            self._.attachToDialogDom();
            self._.hasBeenShown = true;
        };

        // IE9 messes up the .val() return when placeholder text is present.
        var getPlaceholderSafeValue = function($targetElement) {
            if($targetElement === null || $targetElement.hasClass("placeholded")) {
                return null;
            }
            return $targetElement.val();
        };

        CommonDialog.prototype.getPageSearchTerm = function () {
            return getPlaceholderSafeValue(this._.rootElement.find('.gliffy-confluence-search-pages'));
        };

        CommonDialog.prototype.getNewPageSpaceKeys = function () {
            return getPlaceholderSafeValue(this._.rootElement.find('.gliffy-confluence-select-existing-page .gliffy-select-space'));
        };

        CommonDialog.prototype.getTargetDiagramName = function () {
            return getPlaceholderSafeValue(this._.rootElement.find('.js-diagram-name'));
        };

        CommonDialog.prototype.getTargetSpaceKey = function () {
            return getPlaceholderSafeValue(this._.rootElement.find('.gliffy-confluence-select-new-page .gliffy-select-space'));
        };

        CommonDialog.prototype.getTargetPageTitle = function () {
            return getPlaceholderSafeValue(this._.rootElement.find('.gliffy-confluence-new-page-name'));
        };

        CommonDialog.prototype.getTargetPageId = function () {
            return this._.pageListTable.getSelectedValue();
        };

        CommonDialog.prototype.isThisPageSelected = function () {
            return this._.rootElement.find('.gliffy-confluence-save-as-radio:checked').val() === 'this';
        };

        CommonDialog.prototype.isNewPageSelected = function () {
            return this._.rootElement.find('.gliffy-confluence-save-as-radio:checked').val() === 'new';
        };

        CommonDialog.prototype.isExistingPageSelected = function () {
            return this._.rootElement.find('.gliffy-confluence-save-as-radio:checked').val() === 'existing';
        };

        CommonDialog.prototype.addExistingPages = function (pages) {
            var self = this;
            pages.forEach(function (page) {
                self._.pageListTable.addRow({
                    value: page.id,
                    cellLabels: [page.title, page.space.name]
                });
            });
        };

        CommonDialog.prototype.addNewPageSpaces = function (spaces) {
            var callback = this._.rootElement.find('.gliffy-confluence-select-new-page .dropdown').data("currentAddSpaceCallback");
            if (callback) {
                callback(spaces);
            }
        };

        CommonDialog.prototype.addExistingPageSpaces = function (spaces) {
            var callback = this._.rootElement.find('.gliffy-confluence-select-existing-page .dropdown').data("currentAddSpaceCallback");
            if (callback) {
                callback(spaces);
            }
        };

        return {
            create: function(parameters) {
                return new CommonDialog(parameters);
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-copyto', location = 'gliffy/confluence/saveas/CopyToDialogController.js' */
/**
 * Controls CopyTo... dialog and executes associated operations.
 */
define("gliffy/confluence/saveas/copyToDialogController", [
        "jquery",
        "gliffy/confluence/saveas/commonDialogController",
        "gliffy/confluence/saveas/copyToDialogFactory",
        "gliffy/confluence/pageFacade",
    ], function($, commonDialogController, dialogFactory, pageFacade) {
        "use strict";

        var showDialog = function ($macroContainer) {
            var diagramReference = pageFacade.getDiagramReference($macroContainer);
            commonDialogController.showDialog({
                "dialogFactory": dialogFactory,
                "ceoId": String(diagramReference.ownerPageId),
                "pageId": AJS.params.pageId,
                "displayName": diagramReference.displayName.toString(), // Guard for diagrams with numerical names with .toString()
                "diagramName": diagramReference.name.toString(), // Guard for diagrams with numerical names with .toString()
                "diagramVersion": diagramReference.version,
                "diagramAttachmentId": diagramReference.diagramAttachmentId,
                "spaceKey": AJS.params.spaceKey,
                "spaceName": AJS.params.spaceName,
                "baseConfluenceUrl": AJS.params.baseUrl,
                "includeAlertLinkUrlParams": false,
                "gliffy.confluence.saveas.error.generic" : "An error occurred while attempting to save the diagram",
                "gliffy.confluence.saveas.diagram_name_exists" : "Diagram with this name exists in page",
                "gliffy.confluence.saveas.diagram_name_required" : "Diagram name required",
                "gliffy.confluence.saveas.invalid_diagram_name" : "Invalid diagram name",
                "gliffy.confluence.saveas.page_title_required" : "Page title required",
                "gliffy.confluence.saveas.space_selection_required" : "Space selection required",
                "gliffy.confluence.saveas.invalid_page_title" : "Invalid page title",
                "gliffy.confluence.saveas.page_title_exists" : "Page with this title exists in space",
                "gliffy.confluence.saveas.page_selection_required" : "Page selection required",
                "onSaveSuccess": function(editTargetDiagramUrl, editTargetPageUrl, isSamePage, diagramName, pageTitle, spaceName) {
                    if(isSamePage) {
                        window.location.reload(true);
                    } else {
                        var alert = gliffySoy.controls.alert.CompleteAlert({
                            diagramName: diagramName,
                            pageName: pageTitle,
                            spaceName: spaceName,
                            linkUrl: AJS.params.baseUrl + editTargetPageUrl
                        });

                        $('.gliffy-alert').remove();
                        $(alert).appendTo($('#main')).fadeIn(700).delay(5000).fadeOut(700);
                    }
                }
            });
        };

        return {
            showDialog: showDialog
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-copyto', location = 'gliffy/confluence/saveas/CopyToDialogFactory.js' */
/**
 * CopyTo.. dialog.
 */
define("gliffy/confluence/saveas/copyToDialogFactory",
    [
        "jquery",
        "gliffy/confluence/saveas/commonDialogFactory"
    ],
    function($, commonDialogFactory) {
        "use strict";

        return {
            create: function(parameters) {
                return commonDialogFactory.create($.extend({
                    "gliffy.confluence.page": "Page",
                    "gliffy.confluence.space": "Space",
                    pageId: AJS.params.pageId,
                    setOkEnabled: function(dialogRootElement, enabled) {
                        dialogRootElement.find('.gliffy-dialog-save').attr('aria-disabled', !enabled).prop('disabled', !enabled);
                    },
                    showDialog: function(bodyHtml, onSave, onCancel) {
                        var clickOutsideDialogHandler = function(event) {
                            if (!$(event.target).closest('.gliffy-saveas-common-panel').length) {
                                $(document).off('click', clickOutsideDialogHandler);
                                dialog.remove();
                                onCancel();
                            }
                        };
                        var dialog = new AJS.Dialog({
                            width: 680,
                            height: 480,
                            id: 'gliffy-copyto-dialog',
                            closeOnOutsideClick: false
                        });

                        dialog.addPanel('Panel 1', bodyHtml, 'gliffy-saveas-common-panel');

                        AJS.$('.gliffy-save-as-modal-footer').on('click', '#gliffy-save-as-cancel-button', function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            $(document).off('click', clickOutsideDialogHandler);
                            dialog.remove();
                            onCancel();
                        }.bind(this))

                        AJS.$('.gliffy-save-as-modal-footer').on('click', '#gliffy-save-as-save-button', function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            $(document).off('click', clickOutsideDialogHandler);
                            dialog.remove();
                            onSave();
                        }.bind(this))

                        AJS.$('.gliffy-save-as-modal-header').on('click', '.modal-close-btn', function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            $(document).off('click', clickOutsideDialogHandler);
                            dialog.remove();
                        }.bind(this));

                        dialog.show();
                        $(document).on('click', clickOutsideDialogHandler);
                    }
                }, parameters));
            }
        }
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-unlink', location = 'gliffy/confluence/linked/UnlinkDiagramDialog.soy' */
// This file was automatically generated from UnlinkDiagramDialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.dialog.unlinkDiagram.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.dialog == 'undefined') { gliffySoy.dialog = {}; }
if (typeof gliffySoy.dialog.unlinkDiagram == 'undefined') { gliffySoy.dialog.unlinkDiagram = {}; }


gliffySoy.dialog.unlinkDiagram.body = function(opt_data, opt_ignored) {
  return '<p class=\'gliffy-diagram-unlink-description\'>' + soy.$$escapeHtml('Once unlinked, changes made to the original diagram will not be reflected here, and vice versa.') + '</p><label class=\'gliffy-diagram-input-label\'>' + soy.$$escapeHtml('Diagram Name') + '</label><input class=\'gliffy-diagram-name-input\' value="' + soy.$$escapeHtml(opt_data.sourceDiagramName) + '"></input><div class=\'gliffy-diagram-name-error\'><span></span></div>';
};
if (goog.DEBUG) {
  gliffySoy.dialog.unlinkDiagram.body.soyTemplateName = 'gliffySoy.dialog.unlinkDiagram.body';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-unlink', location = 'gliffy/confluence/linked/UnlinkDiagramController.js' */
/**
 * Controls CopyTo... dialog and executes associated operations.
 */
define("gliffy/confluence/linked/unlinkDiagramController", [
        "jquery",
        "gliffy/confluence/rest/webRequestPromiseFactory"
    ], function($, webRequestPromiseFactory) {
        "use strict";

        var showDialog = function ($gliffyContainer) {
            var dialog = new AJS.Dialog({
                width: 460,
                height: 275,
                id: 'gliffy-diagram-unlink',
                closeOnOutsideClick: true
            });

            var targetPageId = AJS.params.pageId;
            var currentPageDiagramsRequest = webRequestPromiseFactory.buildGetDiagramsInPagePromise(targetPageId);

            $.when(currentPageDiagramsRequest).done(function(currentPageDiagrams) {
                var validateDiagramName = function(name, keyCode) {

                    name = name.toString(); // Guard for diagrams with numerical names

                    var invalidCharacters = ['\"', '\\', '/', '|', ':', '{', '<', '&', '+', '?', '=', ';'];
                    var containsInvalidCharacters = invalidCharacters.some(function(character) {
                        return name.indexOf(character) !== -1;
                    });

                    if (containsInvalidCharacters) {
                        disableButton(true);
                        displayErrorMessage("The diagram name cannot contain any of the following characters:" + ' ' + invalidCharacters.join(' '));
                        return;
                    }

                    var containsOnlyWhiteSpace = !/^.*\S.*$/.test(name);
                    if (containsOnlyWhiteSpace) {
                        disableButton(true);
                        displayErrorMessage("The diagram name must not be empty or contain only whitespace.");
                        return;
                    }

                    var titleIsUnique = currentPageDiagrams.every(function(diagram) {
                        return diagram.title !== name;
                    });

                    if (titleIsUnique) {
                        disableButton(false);

                        // clear error message if there was one
                        displayErrorMessage('');

                        // if user hit enter key
                        if (keyCode && keyCode === 13) {
                            unlinkDiagram();
                        }
                    } else {
                        disableButton(true);
                        displayErrorMessage("There is already a diagram with this name on this page.");
                    }
                };

                var disableButton = function(disable) {
                    var $button = $('#gliffy-diagram-unlink button.button-panel-button');
                    $button.prop('disabled', disable);
                    if (disable) {
                        $button.addClass('gliffy-button-disabled');
                    } else {
                        $button.removeClass('gliffy-button-disabled');
                    }
                };

                var displayErrorMessage = function(message) {
                    var errorDisplay = $('.gliffy-diagram-name-error');
                    errorDisplay.text(message);
                };

                var unlinkDiagram = function() {
                    var newDiagramName = $('.gliffy-diagram-name-input').val();
                    dialog.remove();

                    var diagramUnlinkRequest = webRequestPromiseFactory.buildUnlinkDiagramPromise({
                        sourcePageId: $gliffyContainer.data('ceoid'),
                        sourceDiagramName: sourceDiagramName,
                        sourceDiagramVersion: $gliffyContainer.data('version'),
                        targetPageId: targetPageId,
                        targetDiagramName: newDiagramName
                    });

                    $.when(diagramUnlinkRequest).done(function () {
                      //fix for viewpage.action redirection to inexisting page
                        if(window.location.href.includes('viewpage.action')){
                          window.location.href = window.location.href + '&' + $.param({unlinked: true});
                        } else {
                          window.location.href = window.location.pathname + '?' + $.param({unlinked: true});
                        }
                    }).fail(function () {
                        var alert = gliffySoy.controls.alert.ErrorAlert({
                            errorDetail: "There was an error on the server while unlinking the diagram."
                        });

                        $(alert).appendTo($('body')).fadeIn(700).delay(5000).fadeOut(700);
                    });
                };

                var sourceDiagramName = $gliffyContainer.data('filename');
                var unlinkDialogHtml= gliffySoy.dialog.unlinkDiagram.body({
                    sourceDiagramName: sourceDiagramName
                });

                dialog.addHeader("Unlink Diagram" + '?');
                dialog.addPanel('Panel 1', unlinkDialogHtml, 'panel-body');

                dialog.addLink("Cancel", function (dialog) {
                    dialog.remove();
                }, '#');
                dialog.addButton("Unlink Diagram", function () {
                    unlinkDiagram();
                }, '#');
                dialog.show();

                validateDiagramName(sourceDiagramName);

                $('.gliffy-diagram-name-input')
                    .select()
                    .on('keyup', function(e) {
                        validateDiagramName($(this).val(), e.keyCode);
                    });
            });
        };

        return {
            showDialog: showDialog
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-macro-desktop', location = 'gliffy/confluence/macro/macro.soy' */
// This file was automatically generated from macro.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.macro.chrome.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.macro == 'undefined') { gliffySoy.macro = {}; }
if (typeof gliffySoy.macro.chrome == 'undefined') { gliffySoy.macro.chrome = {}; }


gliffySoy.macro.chrome.controls = function(opt_data, opt_ignored) {
  return '<div class="gliffy-chrome-container"><div class="gliffy-chrome">' + ((opt_data.version) ? '<div class="gliffy-logo-container" title="' + soy.$$escapeHtml(opt_data.title) + ' (v' + soy.$$escapeHtml(opt_data.version) + ')">' : '<div class="gliffy-logo-container" title="' + soy.$$escapeHtml(opt_data.title) + '">') + '<div class="gliffy-logo"></div><div class="diagram-prefix">/</div><div class="gliffy-title">' + soy.$$escapeHtml(opt_data.title) + '</div>' + ((opt_data.version) ? '<div class=\'gliffy-diagram-version\'>(v' + soy.$$escapeHtml(opt_data.version) + ')</div>' : '') + '</div><div class="gliffy-buttons"><span id="created-at">Created on ' + soy.$$escapeHtml(opt_data.creationDate) + '</span>' + ((opt_data.editLink) ? '<a href="' + soy.$$escapeHtml(opt_data.editLink) + '" id="gliffy-edit-button"><div class="btn gliffy-edit" title="' + soy.$$escapeHtml('Edit Diagram') + '"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.154 3a.988.988 0 0 0-.696.272L12.55 6.18 5.2 13.53l-.97.97c-.134.135-.204.327-.242.515L3.02 19.86a.943.943 0 0 0 1.12 1.12l4.845-.97c.188-.037.38-.107.515-.241l.968-.97 7.352-7.351 2.907-2.906A.988.988 0 0 0 21 7.845c0-1.585-.404-2.718-1.241-3.573C18.912 3.409 17.783 3 16.154 3Zm.382 1.955c.874.052 1.44.252 1.829.65.397.404.648.966.702 1.823-.53.53-1.307 1.295-1.944 1.93L14.64 6.877c.638-.636 1.366-1.39 1.896-1.92Zm-3.288 3.313 2.483 2.484-5.959 5.958-2.483-2.483 5.959-5.959ZM5.896 15.62l2.483 2.483-.09.091c-.64.128-1.93.398-3.12.636l.636-3.12.091-.09Z"/></svg></div></a>' : '') + '<a href="' + soy.$$escapeHtml(opt_data.fullscreenLink) + '"><div class="btn gliffy-fullscreen" title="' + soy.$$escapeHtml('Fullscreen') + '"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 9a1 1 0 1 1-2 0v-.241c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C7.29 3 7.954 3 8.758 3H9a1 1 0 1 1 0 2h-.2c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C5 7.361 5 7.943 5 8.8V9Zm-1 5a1 1 0 0 1 1 1v.2c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.82.18C7.361 19 7.942 19 8.8 19H9a1 1 0 1 1 0 2h-.24c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 16.71 3 16.046 3 15.242V15a1 1 0 0 1 1-1Zm15 1a1 1 0 1 1 2 0v.241c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H15a1 1 0 1 1 0-2h.2c.857 0 1.439 0 1.89-.038.438-.035.662-.1.818-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V15Zm1-5a1 1 0 0 1-1-1v-.2c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C16.64 5 16.057 5 15.2 5H15a1 1 0 1 1 0-2h.241c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564C21 7.29 21 7.954 21 8.758V9a1 1 0 0 1-1 1Z" clip-rule="evenodd"/></svg></div></a>' + ((opt_data.editLink) ? (opt_data.isLinked) ? '<div class="btn gliffy-macro-dropdown-button" title="' + soy.$$escapeHtml('More') + '"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.014 10.01a2 2 0 1 0 0 3.999 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 3.999 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 3.999 2 2 0 0 0 0-4Z"/></svg></div>' : ((opt_data.embedFeatureEnabled) ? '<a id="macro-chrome-embed" href="#"><div class="btn gliffy-embed" title="' + soy.$$escapeHtml('Embed') + '"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.99 2.999a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-4-4h-10Zm0 2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2Zm2.75 3.03c-.25.05-.502.178-.655.408l-1.97 2.968a1.026 1.026 0 0 0 0 1.125l2.032 3.063c.306.459.947.555 1.406.25a.987.987 0 0 0 .282-1.376l-1.688-2.5 1.594-2.406c.306-.46.21-1.1-.25-1.406a.985.985 0 0 0-.75-.125Zm4.47 0a.985.985 0 0 0-.75.126c-.46.307-.588.947-.281 1.406l1.593 2.406-1.625 2.47a.986.986 0 0 0 .282 1.373.985.985 0 0 0 1.374-.28l2.032-3a1.026 1.026 0 0 0 0-1.125l-2-2.968a.946.946 0 0 0-.625-.407Z"/></svg></div></a>' : '') + '<div class="btn gliffy-copyto" title="' + soy.$$escapeHtml('Copy Diagram') + '"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.998 2.014c-3.56 0-7 3.406-7 6.969v5.687c0 1.864 1.611 3.344 3.562 3.344h.438v.656c0 1.864 1.611 3.344 3.562 3.344h6.876c1.951 0 3.562-1.48 3.562-3.344V9.358c0-1.864-1.61-3.344-3.562-3.344h-.438v-.656c0-1.864-1.61-3.344-3.562-3.344H9.998Zm1 2h2.438c.888 0 1.562.63 1.562 1.344v9.312c0 .714-.674 1.344-1.562 1.344H6.56c-.888 0-1.562-.63-1.562-1.344v-4.656h2.438c1.95 0 3.562-1.48 3.562-3.344V4.014Zm-2 .25V6.67c0 .714-.674 1.344-1.562 1.344H5.217c.46-1.767 2.01-3.28 3.781-3.75Zm8 3.75h.438c.888 0 1.562.63 1.562 1.344v9.312c0 .714-.674 1.344-1.562 1.344H10.56c-.888 0-1.562-.63-1.562-1.344v-.656h4.438c1.951 0 3.562-1.48 3.562-3.344V8.014Z"/></svg></div>' : '') + '</div></div></div>';
};
if (goog.DEBUG) {
  gliffySoy.macro.chrome.controls.soyTemplateName = 'gliffySoy.macro.chrome.controls';
}


gliffySoy.macro.chrome.dropdown = function(opt_data, opt_ignored) {
  return '<div class="gliffy-macro-dropdown-container"><ul class="gliffy-macro-dropdown-list">' + ((opt_data.editLink) ? '<li class="gliffy-macro-dropdown-item gliffy-copyto-link"><svg version="1.1" id="Layer_1" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0.5 16 16" enable-background="new 0 0.5 16 16" xml:space="preserve"><title>Copy Diagram 2</title><desc>Created with Sketch.</desc><g id="small-bar2" sketch:type="MSPage"><g id="Button-CSS" transform="translate(-440.000000, -214.000000)" sketch:type="MSArtboardGroup"><g id="Final-2" transform="translate(184.000000, 206.000000)" sketch:type="MSLayerGroup"><g id="Copy-Diagram-2" transform="translate(256.000000, 8.750000)" sketch:type="MSShapeGroup"><g id="Rectangle-9-_x2B_-Rectangle-10"><path id="copyto-icon-1" fill="#172B4D" d="M11,1.8v-1c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v11c0,0.6,0.4,1,1,1h3v-10 c0-0.6,0.4-1,1-1H11z"/><path id="copyto-icon-2" fill="#172B4D" d="M6,2.8h9c0.6,0,1,0.4,1,1v11c0,0.6-0.4,1-1,1H6c-0.6,0-1-0.4-1-1v-11 C5,3.2,5.4,2.8,6,2.8z"/></g></g></g></g></g></svg><span class="gliffy-macro-dropdown-item-link">' + soy.$$escapeHtml('Copy Diagram') + '</span></li>' + ((opt_data.isLinked) ? '<li class="gliffy-macro-dropdown-item gliffy-unlink-link"><svg version="1.1" id="Layer_1" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0.5 16 16" enable-background="new 0 0.5 16 16" xml:space="preserve"><g id="small-bar2" sketch:type="MSPage"><g id="Button-CSS" transform="translate(-684.000000, -214.000000)" sketch:type="MSArtboardGroup"><g id="Final-2" transform="translate(184.000000, 206.000000)" sketch:type="MSLayerGroup"><path id="unlink-icon" sketch:type="MSShapeGroup" fill="#172B4D" d="M511.8,20.7c-0.1-0.1-0.1-0.3,0-0.4c0.1-0.1,0.3-0.1,0.4,0 l2.5,2.5c0.1,0.1,0.1,0.3,0,0.4c-0.1,0.1-0.1,0.1-0.2,0.1s-0.2,0-0.2-0.1L511.8,20.7z M510.2,21.1c0-0.2,0.1-0.3,0.3-0.3 c0.2,0,0.3,0.1,0.3,0.3v3.1c0,0.2-0.1,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3V21.1z M512.3,19c0-0.2,0.1-0.3,0.3-0.3h3.1 c0.2,0,0.3,0.1,0.3,0.3c0,0.2-0.1,0.3-0.3,0.3h-3.1C512.4,19.3,512.3,19.1,512.3,19L512.3,19z M500.8,18.2l3.3-3.3 c0.2-0.2,0.4-0.3,0.6-0.4l0.2,2.4l-2.7,2.7c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.2,0.1,0.5,0.3,0.7l1.4,1.4c0.4,0.4,1,0.3,1.3,0l2.7-2.7 l2.4,0.2c-0.1,0.2-0.2,0.4-0.4,0.6l-3.3,3.3c-0.5,0.5-1.3,0.8-2,0.8s-1.5-0.3-2-0.8l-1.4-1.4c-0.5-0.5-0.8-1.2-0.8-2 S500.3,18.8,500.8,18.2z M506,13.2c0.1-0.2,0.2-0.4,0.4-0.6l3.3-3.3c0.5-0.5,1.3-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8l1.4,1.4 c0.5,0.5,0.8,1.2,0.8,2s-0.3,1.5-0.8,2l-3.3,3.3c-0.2,0.2-0.4,0.3-0.6,0.4l-0.2-2.4l2.7-2.7c0.2-0.2,0.3-0.4,0.3-0.7 c0-0.2-0.1-0.5-0.3-0.7l-1.4-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-2.7,2.7L506,13.2z M500,14 c0-0.2,0.1-0.3,0.3-0.3h3.1c0.2,0,0.3,0.1,0.3,0.3c0,0.2-0.1,0.3-0.3,0.3h-3.1C500.1,14.3,500,14.2,500,14L500,14z M505.2,8.8 c0-0.2,0.1-0.3,0.3-0.3s0.3,0.1,0.3,0.3v3.1c0,0.2-0.1,0.3-0.3,0.3s-0.3-0.1-0.3-0.3V8.8z M501.3,10.3c-0.1-0.1-0.1-0.3,0-0.4 c0.1-0.1,0.3-0.1,0.4,0l2.5,2.5c0.1,0.1,0.1,0.3,0,0.4c-0.1,0.1-0.1,0.1-0.2,0.1s-0.2,0-0.2-0.1L501.3,10.3z"/></g></g></g></svg><span class="gliffy-macro-dropdown-item-link">' + soy.$$escapeHtml('Unlink Diagram') + '</span></li><a href="' + soy.$$escapeHtml(opt_data.originalAttachmentLink) + '"><li class="gliffy-macro-dropdown-item gliffy-original-attachment-link"><svg version="1.1" id="Layer_1" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-0.5 0 16 16" enable-background="new -0.5 0 16 16" xml:space="preserve"><g id="small-bar2" sketch:type="MSPage"><g id="Button-CSS" transform="translate(-839.000000, -214.000000)" sketch:type="MSArtboardGroup"><g id="Final-2" transform="translate(184.000000, 206.000000)" sketch:type="MSLayerGroup"><g id="_xF002_-_x2B_-_xF016_" transform="translate(655.000000, 8.000000)" sketch:type="MSShapeGroup"><path id="original-attachment-icon-1" fill="#172B4D" d="M11.2,7.2c0,1.5-1.2,2.7-2.7,2.7S5.9,8.7,5.9,7.2s1.2-2.7,2.7-2.7S11.2,5.7,11.2,7.2 L11.2,7.2z M15.2,12.6l-2.4-2.4c0.6-0.8,0.9-1.8,0.9-2.8c0-2.7-2.2-5-5-5s-5,2.2-5,5s2.2,5,5,5c1,0,2-0.3,2.8-0.9l2.4,2.4 c0.2,0.2,0.4,0.3,0.6,0.3c0.5,0,0.9-0.4,0.9-0.9C15.5,13,15.4,12.8,15.2,12.6z"/><path id="original-attachment-icon-2" fill="#172B4D" d="M12.2,12.8v2H0.7V5.7h3.8c0.5,0,0.9-0.4,0.9-0.9V1.1h6.9v1.3C12.7,2.7,13,3,13.4,3.2V0.9 C13.4,0.4,13,0,12.5,0H4.4C3.9,0,3.3,0.3,2.9,0.6L0.1,3.4c-0.3,0.3-0.6,1-0.6,1.5v10.3c0,0.5,0.4,0.9,0.9,0.9h12.1 c0.5,0,0.9-0.4,0.9-0.9v-1.1C13,13.8,12.7,13.2,12.2,12.8z"/></g></g></g></g></svg><span class="gliffy-macro-dropdown-item-link">' + soy.$$escapeHtml('View Attachment') + '</span></li></a>' : '') : '') + '</ul></div>';
};
if (goog.DEBUG) {
  gliffySoy.macro.chrome.dropdown.soyTemplateName = 'gliffySoy.macro.chrome.dropdown';
}


gliffySoy.macro.chrome.unlinkAlert = function(opt_data, opt_ignored) {
  return '<div class="alert alert-success gliffy-alert">' + soy.$$escapeHtml('Diagram Successfully Unlinked') + '</div>';
};
if (goog.DEBUG) {
  gliffySoy.macro.chrome.unlinkAlert.soyTemplateName = 'gliffySoy.macro.chrome.unlinkAlert';
}


gliffySoy.macro.chrome.linkAlert = function(opt_data, opt_ignored) {
  return '<div class="alert alert-success gliffy-alert">' + soy.$$escapeHtml('Diagram Successfully Linked') + '</div>';
};
if (goog.DEBUG) {
  gliffySoy.macro.chrome.linkAlert.soyTemplateName = 'gliffySoy.macro.chrome.linkAlert';
}


gliffySoy.macro.chrome.linkFailedAlert = function(opt_data, opt_ignored) {
  return '<div class="alert alert-error gliffy-alert">' + soy.$$escapeHtml('Diagram Linking Failed') + '</div>';
};
if (goog.DEBUG) {
  gliffySoy.macro.chrome.linkFailedAlert.soyTemplateName = 'gliffySoy.macro.chrome.linkFailedAlert';
}


gliffySoy.macro.chrome.noSaveDialog = function(opt_data, opt_ignored) {
  return '<div>' + soy.$$escapeHtml(opt_data.pageUnsavedMessage) + '</div>';
};
if (goog.DEBUG) {
  gliffySoy.macro.chrome.noSaveDialog.soyTemplateName = 'gliffySoy.macro.chrome.noSaveDialog';
}


gliffySoy.macro.chrome.confirmDeactivate = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="gliffy-embed-confirm-deactivate-dialog" class="aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="true"><div class="confirm-deactivate-header"><div class="title">Deactivate Link</div><div class="confirm-deactivate-close-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9393 4.93934C17.5251 4.35355 18.4749 4.35355 19.0607 4.93934C19.6464 5.52513 19.6464 6.47487 19.0607 7.06066L14.1213 12L19.0607 16.9393C19.6464 17.5251 19.6464 18.4749 19.0607 19.0607C18.4749 19.6464 17.5251 19.6464 16.9393 19.0607L12 14.1213L7.06066 19.0607C6.47487 19.6464 5.52513 19.6464 4.93934 19.0607C4.35355 18.4749 4.35355 17.5251 4.93934 16.9393L9.87868 12L4.93934 7.06066C4.35355 6.47487 4.35355 5.52513 4.93934 4.93934C5.52513 4.35355 6.47487 4.35355 7.06066 4.93934L12 9.87868L16.9393 4.93934Z" fill="#44546F" /></svg></div></div><div class="aui-dialog2-content"><p>' + soy.$$escapeHtml('All embedded diagrams will no longer be viewable anywhere.') + '</p></div><footer class="aui-dialog2-footer1"><div class="aui-dialog2-footer-actions"><button id="gliffy-confirm-deactivate-link-cancel-button" class="aui-button aui-button-link">Close</button><button id="gliffy-confirm-deactivate-link-ok-button" class="aui-button aui-button-primary">Deactivate Link</button></div></footer></section>';
};
if (goog.DEBUG) {
  gliffySoy.macro.chrome.confirmDeactivate.soyTemplateName = 'gliffySoy.macro.chrome.confirmDeactivate';
}


gliffySoy.macro.chrome.embedPanel = function(opt_data, opt_ignored) {
  return '<div class=\'embed-panel panel-body\'><div class="panel-body-header"><div class="title">' + soy.$$escapeHtml('Embed') + '</div><div class="panel-body-close-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9393 4.93934C17.5251 4.35355 18.4749 4.35355 19.0607 4.93934C19.6464 5.52513 19.6464 6.47487 19.0607 7.06066L14.1213 12L19.0607 16.9393C19.6464 17.5251 19.6464 18.4749 19.0607 19.0607C18.4749 19.6464 17.5251 19.6464 16.9393 19.0607L12 14.1213L7.06066 19.0607C6.47487 19.6464 5.52513 19.6464 4.93934 19.0607C4.35355 18.4749 4.35355 17.5251 4.93934 16.9393L9.87868 12L4.93934 7.06066C4.35355 6.47487 4.35355 5.52513 4.93934 4.93934C5.52513 4.35355 6.47487 4.35355 7.06066 4.93934L12 9.87868L16.9393 4.93934Z" fill="#44546F" /></svg></div></div><div class="instruction header" >' + soy.$$escapeHtml('Select where you want to embed a live version of your diagram:') + '</div><div class="embed-target-button-grid"><div class="embed-target-button embed-target-custom"></div><div class="embed-target-button embed-target-jira"></div><div class="embed-target-button embed-target-service-desk"></div><div class="embed-target-button embed-target-confluence"></div><div class="embed-target-button embed-target-hipchat"></div><div class="embed-target-button embed-target-trello"></div><div class="embed-target-button embed-target-slack"></div></div><div class="embed-link-container"><div class="instruction copy"></div><div class="copy-link-container"><input class="embed-target-link link-input" type="text" name="share-url" id="embed-link"><button class="primary-button" id="embed-link-copy" data-link-container="embed-link"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2427 9.85733L10.3 8.91333L11.2427 7.97066C11.5544 7.66162 11.8021 7.29406 11.9714 6.88906C12.1407 6.48406 12.2283 6.0496 12.2293 5.61064C12.2303 5.17167 12.1445 4.73683 11.977 4.3311C11.8094 3.92536 11.5634 3.55671 11.253 3.24631C10.9426 2.93592 10.574 2.68988 10.1682 2.52234C9.76248 2.3548 9.32764 2.26905 8.88868 2.27001C8.44971 2.27097 8.01526 2.35863 7.61026 2.52794C7.20526 2.69726 6.83769 2.94491 6.52865 3.25666L5.58599 4.19999L4.64265 3.25733L5.58665 2.31466C6.46187 1.43944 7.64891 0.947754 8.88665 0.947754C10.1244 0.947754 11.3114 1.43944 12.1867 2.31466C13.0619 3.18987 13.5536 4.37692 13.5536 5.61466C13.5536 6.8524 13.0619 8.03944 12.1867 8.91466L11.2433 9.85733H11.2427ZM9.35732 11.7427L8.41399 12.6853C7.53877 13.5605 6.35173 14.0522 5.11399 14.0522C3.87625 14.0522 2.6892 13.5605 1.81399 12.6853C0.938773 11.8101 0.447083 10.6231 0.447083 9.38533C0.447083 8.14759 0.938773 6.96054 1.81399 6.08533L2.75732 5.14266L3.69999 6.08666L2.75732 7.02933C2.44557 7.33836 2.19792 7.70593 2.02861 8.11093C1.85929 8.51593 1.77163 8.95038 1.77067 9.38935C1.76971 9.82832 1.85546 10.2632 2.023 10.6689C2.19055 11.0746 2.43658 11.4433 2.74698 11.7537C3.05737 12.0641 3.42602 12.3101 3.83176 12.4776C4.2375 12.6452 4.67233 12.7309 5.1113 12.73C5.55026 12.729 5.98472 12.6414 6.38972 12.472C6.79472 12.3027 7.16229 12.0551 7.47132 11.7433L8.41399 10.8007L9.35732 11.7433V11.7427ZM8.88532 4.67133L9.82865 5.61466L5.11465 10.328L4.17132 9.38533L8.88532 4.67199V4.67133Z" fill="#ffffff" /></svg> Copy Link</button></div><div id="embed-disable-error" class="aui-dialog2-footer-hint error"></div><div id="deactivate-links">' + soy.$$escapeHtml('Deactivate All Embed Links') + '</div></div></div>';
};
if (goog.DEBUG) {
  gliffySoy.macro.chrome.embedPanel.soyTemplateName = 'gliffySoy.macro.chrome.embedPanel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-macro-desktop', location = 'gliffy/confluence/Analytics.js' */
define("gliffy/interface/analytics", [
    "jquery",
    "gliffy/confluence/rest/webRequestPromiseFactory"
], function($, webRequestPromiseFactory) {

    var isEnabled = false;

    var getAnalyticsDisabled = webRequestPromiseFactory.buildGetPropertyValuePromise("com.gliffy.integration.confluence.ANALYTICS_OFF");
    $.when(getAnalyticsDisabled).then(function(result) {
        isEnabled = !result;
        if(isEnabled) {
            analytics.event('init', {accountType:'google', accountID:'UA-248648-13', optPageName:'Gliffy Confluence Init'});
            // to debug analytics, uncomment the following line
            analytics.event('logEvents', {logEvents: true, logger: console});
            analytics.event('setLabel', {label: 'none'});
            analytics.event('setCustomVariables', {
                product: 'Confluence',
                license: $('meta[name=gliffy-license-type]').attr("content"),
                numUsers: parseInt($('meta[name=gliffy-license-quantity]').attr("content"))
            });
        }
    });

    var analytics = {
        event: function (type, options) {
            if (isEnabled) {
                $(window).trigger(type + '.gliffyAnalytics', options);
            }
        }
    };

    return analytics;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-macro-desktop', location = 'gliffy/confluence/macro/controller/DefaultMacroController.js' */
// Register as apex module so this module can be instantiated after everybody is registered.
require("gliffy/amd/apexModuleManager").
define("gliffy/confluence/macro/controller/DefaultMacroController", [
    "jquery",
    "gliffy/url",
    "gliffy/confluence/saveas/copyToDialogController",
    "gliffy/confluence/linked/unlinkDiagramController",
    "gliffy/confluence/editor/editorLauncher",
    "gliffy/interface/analytics",
    "gliffy/confluence/macro/controller/EmbedMacroController"
], function($, url, copyToDialogController, unlinkDiagramController, editorLauncher, analytics, EmbedMacroController) {
    "use strict";

    function getMeta(name) {
        return $('meta[name=' + name + ']').attr('content');
    }

    //GCONF-2639 : if container gets too small, then calculate minimum width for the container
    function calculateMinButtonContainerWidth(container, isLinked) {
         var widthOfLogoContainer = container.find('.gliffy-logo-container').outerWidth(true);
         var widthOfButton = container.find('.gliffy-button').outerWidth(true);
         var totalWidth = widthOfLogoContainer + widthOfButton * 4 + 15; // 4 buttons(edit, copy, full-screen and embedded) and 15px for padding
         if (isLinked) {
             totalWidth += widthOfButton * 2; // for two extra buttons that get added for linked diagrams
         }
         return totalWidth;
    }

    // GCONF-3373: Scale map area coordinates
    function scaleLinkMap(windowToImageRatio, linkMapEl) {
        $(linkMapEl).find('area').each(function() {
            let coords = this.getAttribute('coords').split(',');
            coords = coords.map(coord => parseInt(coord, 10) * windowToImageRatio);
            coords = coords.join(',');
            this.setAttribute('coords', coords);
        });
    }

    // hides macro toolbar dropdown if user clicks outside elsewhere
    $(document).on('click', function () {
        $('.gliffy-macro-dropdown-container').addClass('gliffy-hidden')
            .closest('.gliffy-container')
            .find('.gliffy-macro-dropdown-button').removeClass('gliffy-macro-dropdown-button-active');
    });

    //Adds chrome styling and fancybox support to gliffy macros.
    //This should be applied to the gliffy macro container only
    //@Author: Kerry Liu
    $.fn.gliffyMacroView = function () {
        return this.each(function () {
            const container = $(this),
                iframe = container.find("iframe.gliffy-html5-container"),
                html5Enabled = iframe.length > 0 && iframe.data("html5-enabled"),
                chrome = container.find(".gliffy-chrome"),
                containerId = container.id;

            /**
             * if the user has manually disabled the html5 viewer for a particular diagram,
             * then remove the iframe viewer, leaving just the preview image
             */
            if (!html5Enabled) {
                iframe.remove();
            }

            // uncomment if need when debugging
            //container.addClass('gliffy-active');
            const mainContentWidth = document.querySelector('#main-content').clientWidth;
            const el = document.querySelector('#' + containerId);
            if (el) {
                const imgEl = el.querySelector('img.gliffy-image');
                if (imgEl.clientWidth > mainContentWidth) {
                    const scale = mainContentWidth/imgEl.clientWidth;
                    imgEl.setAttribute('width', scale*imgEl.clientWidth);
                    imgEl.setAttribute('height', scale*imgEl.clientHeight);
                    el.style.width = (scale*el.clientWidth + 2) + 'px'; //2 pixels for border
                }

                // Scales link map coordinates based on real image size
                const windowToImageRatio = mainContentWidth/imgEl.naturalWidth;
                if (windowToImageRatio < 1.0) {
                    const mapEl = el.querySelector(imgEl.getAttribute("usemap"));
                    if (mapEl) {
                        scaleLinkMap(windowToImageRatio, mapEl);
                    }
                }
            }

            // TODO: Could we remove the code below as IE9 is not supported any more?
            //fallback for ie9            
            container.hover(function () {
                container.addClass("gliffy-active");
                chrome.css({
                    position: "static"
                });
                //opera does not support css calc)
                chrome.width(container.find("iframe:visible,.gliffy-image:visible").width() + 2);
            }, function () {
                container.removeClass("gliffy-active");
                chrome.css({
                    position: "relative",
                    left: "-9999px;"
                });
                var $dropDownContainer = container.find(".gliffy-macro-dropdown-container");
                $dropDownContainer.addClass("gliffy-hidden");
                container.find(".gliffy-macro-dropdown-button").removeClass("gliffy-macro-dropdown-button-active");
            });

            // if the diagram is linked, show the link icon
            var linkedPageId = container.data("ceoid");
            var isLinked = container.data("islinked");
            var originalAttachmentLink = '';
            if (isLinked) {
                originalAttachmentLink = AJS.format("{0}/pages/viewpageattachments.action?pageId={1}", AJS.Confluence.getContextPath(), linkedPageId);
            }
            var version = container.data("version");
            var editLink = container.data("edit");
            var creationDate = container.data("creationdate");
            container.prepend(gliffySoy.macro.chrome.controls({
                title: container.data("displayname") || container.data("filename"),
                editLink: editLink,
                fullscreenLink: container.data("full"),
                contextPath: AJS.Confluence.getContextPath(),
                html5Viewer: html5Enabled,
                version: version,
                isLinked: isLinked,
                creationDate: creationDate,
                originalAttachmentLink: originalAttachmentLink,
                embedFeatureEnabled: container.data("embed-link-enabled")
            }));

            //GCONF-2848: Replaced 'div.gliffy-container' with ''#'+container.attr("id")' to select the correct container if there are more than one.  
            var containerSelector = '#' + container.attr("id")
            var widthOfContainer = $(containerSelector).outerWidth(true);
            if (widthOfContainer < 400) {
                $(containerSelector + ' #created-at').remove();
            }
            // if container gets too small, remove title and pinned version
            if (widthOfContainer < 220) {
                // GDEV-544: Prefix selectors to scope to only this container
                $(containerSelector + ' .gliffy-logo-container').css('padding', 0);
                $(containerSelector + ' .gliffy-title, .gliffy-diagram-version').remove();
                $(containerSelector + ' .diagram-prefix').remove();
                $(containerSelector + ' .btn').css('margin-left', 0);
                //GCONF-2639 : if container gets too small, then calculate minimum width for the container and set the min width
                widthOfContainer = calculateMinButtonContainerWidth(container, isLinked);
                //GCONF-2848:Updating the correct container instead of all if there are more than one.
                $('#'+container.attr("id")).width( widthOfContainer );
            }

            

            //unsupported browsers!
            if (!html5Enabled) {

                var fullScreenButton = container.find(".gliffy-fullscreen a");
                //GCONF-2013 fancy box is deprecated, use image previewer instead, but fall back to
                //fancybox if the previewer is nto available
                if (fullScreenButton.previewer) {
                    var previewImage = container.find("img.gliffy-image");
                    fullScreenButton.previewer({
                        type: 'image/png',
                        src: previewImage.attr('src'),
                        title: previewImage.attr('alt')
                    }).attr('href', '#').click(function () {
                        var sourceContainer = container;
                        var loadMapHandler = function () {
                            if ($('#cp-img').length > 0) {
                                $('body').unbind('DOMSubtreeModified', loadMapHandler);
                                var scaledWidth, map, scale, linkMapUrl;
                                //IE8 GCONF-900
                                scaledWidth = $('#cp-img').width();
                                map = container.find("map.gliffy-dynamic");
                                scale = scaledWidth / parseInt(container.data("fullwidth"), 10);

                                linkMapUrl = AJS.format("{0}/rest/gliffy/1.0/ceo/{1}/diagrams/{2}/map?name={3}&scale={4}",
                                    AJS.Confluence.getContextPath(),
                                    container.data("ceoid"),
                                    encodeURIComponent(container.data("filename")),
                                    map.attr("name"),
                                    scale);

                                map.on( "load", function() { return linkMapUrl + " area" });
                                $("#cp-img").attr('usemap', '#' + map.attr("name"));
                            }
                        };
                        $('body').bind('DOMSubtreeModified', loadMapHandler);
                    });
                } else {
                    //copy the img url
                    container.find(".gliffy-fullscreen a").attr("href", container.find("img.gliffy-image").attr("src"));
                    //fallback png zoom
                    container.find(".gliffy-fullscreen a").fancybox({
                        padding: 0,
                        zoomSpeedIn: 200,
                        zoomSpeedOut: 200,
                        overlayShow: true,
                        overlayOpacity: 0.5,
                        onComplete: function () {
                            var scaledWidth, map, scale, linkMapUrl;
                            //IE8 GCONF-900
                            scaledWidth = $('#fancybox-content').width();
                            map = container.find("map.gliffy-dynamic");
                            scale = scaledWidth / parseInt(container.data("fullwidth"), 10);
                            linkMapUrl = AJS.format("{0}/rest/gliffy/1.0/ceo/{1}/diagrams/{2}/map?name={3}&scale={4}",
                                AJS.Confluence.getContextPath(),
                                container.data("ceoid"),
                                encodeURIComponent(container.data("filename")),
                                map.attr("name"),
                                scale);

                            map.on( "load", function() { return linkMapUrl + " area" });
                            $("#fancybox-img").attr('usemap', '#' + map.attr("name"));
                        }
                    });
                }
            }

            // Hook to dropdown and to macro chrome button
            container.delegate(".gliffy-copyto, .gliffy-copyto-link", "click", function () {
                // GCONF-2056: Controller requires the macro container as argument. This allows comment diagrams to be handled properly.
                copyToDialogController.showDialog(container);
            });

            // Hook to dropdown
            container.delegate(".gliffy-unlink-link", "click", function () {
                // GCONF-2056: Controller requires the macro container as argument. This allows comment diagrams to be handled properly.
                unlinkDiagramController.showDialog(container);
            });

            var $moreOptionsButton = container.find(".gliffy-macro-dropdown-button");
            var firstClick = true;
            var $dropdownContainer;
            $moreOptionsButton.on("click", function (e) {
                // don't want this event to propagate all the way up because if it hits the document,
                // it will hide the dropdown even when you are trying to open the dropdown
                // because of the click handler on the document set at the beginning of this file
                e.stopPropagation();

                if (firstClick) {
                    $dropdownContainer = $(gliffySoy.macro.chrome.dropdown({
                        isLinked: isLinked,
                        editLink: editLink,
                        originalAttachmentLink: originalAttachmentLink
                    }));
                    $dropdownContainer.appendTo(container.find('.gliffy-buttons'));
                    firstClick = false;
                } else {
                    if ($dropdownContainer.hasClass("gliffy-hidden")) {
                        $dropdownContainer.removeClass("gliffy-hidden");
                        $(this).addClass("gliffy-macro-dropdown-button-active");
                    } else {
                        $dropdownContainer.addClass("gliffy-hidden");
                        $(this).removeClass("gliffy-macro-dropdown-button-active");
                    }
                }
            });

            var $embedButton = container.find('#macro-chrome-embed');
            var embedController = new EmbedMacroController(container);
            $embedButton.click(embedController.buttonClicked.bind(embedController));
        });
    };

    AJS.toInit(function () {
        if (window.location.search.indexOf('unlinked=true') !== -1) {
            var unlinkAlert = gliffySoy.macro.chrome.unlinkAlert({});
            $(unlinkAlert).appendTo($('#main')).fadeIn(700).delay(5000).fadeOut(700);
        } else if (window.location.search.indexOf('linked=true') !== -1) {
            var linkAlert = gliffySoy.macro.chrome.linkAlert({});
            $(linkAlert).appendTo($('#main')).fadeIn(700).delay(5000).fadeOut(700);
        }

        var gliffyMacro = $("div.gliffy-container");

        //apply chrome
        gliffyMacro.filter(function () {
            return !$(this).hasClass("gliffy-min") && !$(this).hasClass("gliffy-no-chrome");
        }).gliffyMacroView();

        // Add AUI tooltips to the buttons in the macro toolbar
        $('.gliffy-button, .gliffy-logo-container').tooltip({gravity: 's', delayIn: 0});

        if (gliffyMacro.length > 0) {
            //set debug to false before checking in!
            analytics.event('trackEvent', {
                category: 'viewer',
                action: 'showInlineViewer',
                value: gliffyMacro.length
            });

            /** GCONF-2723 - let the user go directly to the Gliffy editor now.
            //gliffy-edit
            $("body").delegate(".gliffy-chrome-container .gliffy-edit", "click", function (ev) {
                analytics.event('trackEvent', {category: 'viewer', action: 'clickEdit', value: gliffyMacro.length});
                ev.preventDefault();
                $('li.ajs-button a#editPageLink').click();
            });
            */

            //fullscreen
            $("body").delegate(".gliffy-chrome-container .gliffy-fullscreen", "click", function () {
                analytics.event('trackEvent', {
                    category: 'viewer',
                    action: 'clickFullscreen',
                    value: gliffyMacro.length
                });
            });

            //copy-to
            $("body").delegate(".gliffy-chrome-container .gliffy-copyto", "click", function () {
                analytics.event('trackEvent', {
                    category: 'viewer',
                    action: 'clickCopyTo',
                    value: gliffyMacro.length
                });
            });

            //gliffy-unlink
            $("body").delegate(".gliffy-chrome-container .gliffy-unlink", "click", function () {
                analytics.event('trackEvent', {
                    category: 'viewer',
                    action: 'clickUnlink',
                    value: gliffyMacro.length
                });
            });

            //gliffy-linked
            $("body").delegate(".gliffy-chrome-container .gliffy-original-diagram", "click", function () {
                analytics.event('trackEvent', {
                    category: 'viewer',
                    action: 'clickLinked',
                    value: gliffyMacro.length
                });
            });
        }
    });
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-macro-desktop', location = 'gliffy/confluence/macro/controller/EmbedMacroController.js' */
require("gliffy/amd/apexModuleManager").
    define("gliffy/confluence/macro/controller/EmbedMacroController", [
        "jquery",
        "GliffySpinner",
        "gliffy/confluence/rest/urlFactory",
        "gliffy/confluence/rest/webRequestPromiseFactory",
        "gliffy/confluence/pageFacade",
        "gliffy/interface/analytics"
    ], function ($, GliffySpinner, urlFactory, webRequestPromiseFactory, pageFacade, analytics) {
        var targetMap = {
            'embed-target-custom': {
                target : 'custom',
                instruction: "Use this link anywhere. It will always point to the latest version of the diagram:",
                markup: function (url) { return url;}
            },
            'embed-target-confluence' : {
                target : 'confluence',
                instruction: "Copy and paste the code into &#34;Insert Images from the web&#34; option from your Confluence page:",
                markup: function (url) { return url + '?utm_medium=live&utm_source=confluence';}
            },
            'embed-target-jira': {
                target : 'jira',
                instruction: "Copy and paste the code it into your JIRA issue:",
                markup: function(url) { return '!'+url+'?utm_medium=live&utm_source=jira!';}
            },
            'embed-target-service-desk': {
                target : 'service-desk',
                instruction: "Copy and paste the code into Jira Service desk:",
                markup: function (url) { return url + '?utm_medium=live&utm_source=service-desk';}
            },
            'embed-target-trello': {
                target : 'trello',
                instruction: "Copy add as an attachment to your Trello card:",
                markup: function (url) { return url + '?utm_medium=live&utm_source=trello'; }
            },
            'embed-target-hipchat': {
                target : 'hipchat',
                instruction: "Copy and paste the code into your Hipchat message:",
                markup: function(url) { return url + '?utm_medium=live&utm_source=hipchat'; }
            },
            'embed-target-slack': {
                target : 'slack',
                instruction: "Copy and paste the code into your Slack message:",
                markup: function (url) { return url + '?utm_medium=live&utm_source=slack';}
            }
        };

        return function (container) {
            this.container = container;

            this.outsideClickHandler = function (event) {
                if (!$(event.target).closest('#gliffy-embed-dialog').length) {
                    $(document).off('click.gliffyEmbedDialog');
                    this.dialog.remove();
                }
            };

            this.buttonClicked = function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                analytics.event('trackEvent', { category: 'viewer', action: 'showEmbedDialog' });
                $(document).on('click.gliffyEmbedDialog', this.outsideClickHandler.bind(this));

                this.dialog = this.createDialog();
                this.showSpinner();

                this.getPermissions()
                    .then(this.showPanel.bind(this))
                    .fail(this.showError.bind(this));
            };

            this.getPermissions = function () {
                this.pageId = this.container.data('ceoid');
                var name = this.container.data('filename');

                return webRequestPromiseFactory.buildGetEditDiagramPermissionPromise(this.pageId, name)
                    .then(function (permissions) {
                        this.attachmentId = permissions.attachmentId;
                    }.bind(this));
            };

            this.createDialog = function () {
                var dialog = new AJS.Dialog({
                    width: 630,
                    height: 420,
                    id: 'gliffy-embed-dialog',
                    closeOnOutsideClick: false // GCONF-2194: don't set this to true. it can break dialog functionality
                });

                dialog.addPanel('Panel 1', '<div/>', 'gliffy-embed-body');

                // attach event handlers to the dialog after it has been rendered in the DOM
                AJS.$('#gliffy-embed-dialog').on('click', '#deactivate-links', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    AJS.dialog2("#gliffy-embed-confirm-deactivate-dialog").show();
                })

                AJS.$('#gliffy-embed-dialog').on('click', '#embed-link-copy', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    AJS.$('.embed-target-link').select();
                    this.copySelection();
                    $(document).off('click.gliffyEmbedDialog');
                    dialog.remove();
                }.bind(this))

                AJS.$('#gliffy-embed-dialog').on('click', '.panel-body-close-btn', function (e) {
                    $(document).off('click.gliffyEmbedDialog');
                    dialog.remove();
                }.bind(this))

                dialog.show();

                return dialog;
            };

            this.deactivateLink = function(){
                var deactivateUrl = urlFactory.buildDeactivateEmbedLinkUrl();
                var self = this;
                return $.ajax({
                    type: "POST",
                    url: deactivateUrl,
                    contentType: 'application/json',
                    data: JSON.stringify({
                        pageId: this.pageId,
                        attachmentId: this.attachmentId
                    })
                }).then(function() {
                    self.embedUrl = null;
                    AJS.dialog2("#gliffy-embed-confirm-deactivate-dialog").hide();
                    $('.instruction').text("The link has been deactivated")
                });
            };

            this.copySelection = function () {
                document.execCommand('copy');
            };

            this.showSpinner = function () {
                var embedDialog = AJS.$('#gliffy-embed-dialog');
                this.spinner = new GliffySpinner(embedDialog.get(0), {
                    radius: 50,
                    color: '#666'
                });
                this.spinner.start();
            };

            this.showPanel = function () {
                var self = this;
                this.spinner.stop();
                this.requestUrl = urlFactory.buildCreateEmbedLinkUrl();
                $('.gliffy-embed-body').html(gliffySoy.macro.chrome.embedPanel());
                $('.embed-target-button').click(this.selectTarget.bind(this));
                $('body').append(gliffySoy.macro.chrome.confirmDeactivate());

                $("#gliffy-confirm-deactivate-link-cancel-button").click(function(ev) {
                    ev.stopPropagation();
                    AJS.dialog2("#gliffy-embed-confirm-deactivate-dialog").hide();
                });

                $(".confirm-deactivate-close-btn").click(function(ev) {
                    ev.stopPropagation();
                    AJS.dialog2("#gliffy-embed-confirm-deactivate-dialog").hide();
                });

                $("#gliffy-confirm-deactivate-link-ok-button").click(function(ev) {
                    ev.stopPropagation();
                    self.deactivateLink();
                });

                $('.embed-target-button-grid > :first-child').trigger('click');
            };

            this.getEmbedUrl = function () {
                return $.ajax({
                    type: "POST",
                    url: this.requestUrl,
                    contentType: 'application/json',
                    data: JSON.stringify({
                        pageId: this.pageId,
                        attachmentId: this.attachmentId
                    })
                }).pipe(function (resp) {
                    this.embedUrl = resp.embedUrl;
                    return resp.embedUrl;
                }.bind(this)).fail(function (error) {
                    $('.instruction').append(error.responseText);
                });
            };

            this.selectTarget = function (event) {
            	event.preventDefault();
                var targetClass = event.target.classList[1];
                this.target = targetMap[targetClass];
                $(event.target.parentNode.childNodes).removeClass('selected');
                $(event.currentTarget).toggleClass('selected');

                this.getTargetUrl()
                    .done(function (url) {
                        this.currentUrl = url;
                        $('.instruction.copy').empty();
                        $('.instruction.copy').append(this.target.instruction);
                        $('.embed-target-link').val(this.currentUrl).select();
                    }.bind(this));
            };

            this.getTargetUrl = function () {
                return this.embedUrl ?
                    $.Deferred().resolve(this.target.markup(this.embedUrl)) :
                    this.getEmbedUrl()
                        .pipe(function (url) {
                            return this.target.markup(url);
                        }.bind(this));
            };

            this.showError = function () {
                this.spinner.stop();
                $('#gliffy-embed-dialog').remove();
                var dialog = new AJS.Dialog({
                    width: 340,
                    height: 190,
                    id: 'gliffy-embed-dialog',
                    closeOnOutsideClick: true
                });

                var data = {
                    pageUnsavedMessage: "Please save the diagram and document to generate an embed link!"
                };

                dialog.addPanel('Diagram Embed Error', gliffySoy.macro.chrome.noSaveDialog(data), 'gliffy-embed-body'); // ?
                dialog.addButton("Close", function (dialog) {
                    dialog.remove();
                });

                dialog.gotoPanel(0);
                dialog.show();
            };
        };
});

}catch(e){WRMCB(e)};