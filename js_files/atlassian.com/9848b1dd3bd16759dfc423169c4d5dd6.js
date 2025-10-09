
if(jQuery.isLithium!==true){jQuery=LITHIUM.jQuery;}
;(function($){LITHIUM.PartialRenderProxy=function(params){document.addEventListener(params.listenerEvent,function(event){$(document).trigger(params.relayEvent,{calls:JSON.stringify(event.detail.calls),success:event.detail.success});});document.addEventListener(params.limuirsComponentRenderedEvent,function(){LITHIUM.Loader.onJsAttached(function(){if(LITHIUM.AngularSupport.isAngularEnabled()){LITHIUM.AngularSupport.compile();}
if(LITHIUM.renderImages){LITHIUM.renderImages();}});});}})(LITHIUM.jQuery);
