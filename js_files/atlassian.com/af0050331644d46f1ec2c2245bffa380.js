AJS.toInit(function(C){try{if(window.AJS&&!AJS.DarkFeatures.isEnabled("heatmapper")){return 
}window.HeatMapper=window.HeatMapper||{};
if(!AJS.EventQueue&&!HeatMapper.Events){AJS.log("Analytics support not installed. Not tracking click events.");
return 
}function A(I){var H=window.location;
return{selector:HeatMapper.DOM.uniqueSelector(I),element:I[0].nodeName,hostname:H.hostname,port:H.port,protocol:H.protocol,path:H.pathname,userAgent:navigator.userAgent}
}function G(H){if(AJS.EventQueue){AJS.trigger("analyticsEvent",{name:"heatmapper-click",data:H})
}else{if(HeatMapper.Events){HeatMapper.Events.publish("heatmapper",H)
}}}function B(J){var I=C(J.currentTarget);
var H=A(I);
J.heatMapperHandled=true;
G(H)
}var E=C(document);
E.delegate(HeatMapper.DOM.eventSelectors.click,"click",B);
E.delegate(HeatMapper.DOM.eventSelectors.mousedown,"mousedown",B);
var F=jQuery.Event.prototype.stopPropagation;
jQuery.Event.prototype.stopPropagation=function(){try{if(this.currentTarget&&!this.heatMapperHandled&&this.type==="click"){var H=C(this.currentTarget);
if(H.is(HeatMapper.DOM.findSelector)){B(this)
}}}catch(I){AJS.log("Failed to intercept stopPropagation properly - skipping event capture");
AJS.log(I)
}return F.call(this)
}
}catch(D){AJS.log("heat-mapper-events.js - unexpected exception");
AJS.log(D)
}});