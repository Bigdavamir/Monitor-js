(function(G){try{if(window.AJS&&!AJS.DarkFeatures.isEnabled("heatmapper")){return 
}window.HeatMapper=window.HeatMapper||{};
var E="\"#$%&'()*+,./:;<=>?@[\\]^`{|}~";
function C(J,I,L,K){if(window.AJS&&window.AJS.log){window.AJS.log(J,I,L,K)
}}function D(I){if(!I){return null
}var N="",K;
var M=I.split(" ");
for(var L=0,J=M.length;
L<J;
L++){K=G.trim(M[L]);
if(K.length){N+="."+K
}}return N
}function F(L){var J="";
for(var K=0,I=L.length;
K<I;
K++){var M=L.charAt(K);
if(E.indexOf(M)>=0){J+="\\"
}J+=M
}return J
}function A(I){var K=[];
for(var J in I){if(I.hasOwnProperty(J)&&(J==="name"||J.indexOf("id")>=0)){K.push(J)
}}return K
}var B={click:"a,input,button,textarea,.aui-button",mousedown:"select"};
HeatMapper.DOM={find:function(){return G.find(HeatMapper.DOM.findSelector)
},findSelector:G.map(B,function(I){return I
}).join(","),eventSelectors:B,findAsSelectors:function(){return HeatMapper.DOM.mapToUniqueSelectors(HeatMapper.DOM.find())
},uniqueSelector:function(I){try{if(!I.jquery){I=G(I)
}if(I.attr("id")){return"#"+I.attr("id")
}var K=I.closest("[id]").attr("id")||"";
if(K.length){K="#"+K+" "
}var R=D(I.attr("class"));
var L=K+R;
if(R&&R.length&&G(L).length===1){return L
}var S=HeatMapper.DOM.getAttributes(I);
var T=A(S);
var N;
for(var M=0,J=T.length;
M<J;
M++){N=K+"["+T[M]+'="'+F(S[T[M]])+'"]';
if(G(N).length===1){return N
}}var P=K+I[0].nodeName;
if(R){P+=R
}var Q=G(P).index(I);
return P+":eq("+Q+")"
}catch(O){C("Failed to get selector for:");
C(I);
C(O);
return null
}},mapToUniqueSelectors:function(I){return G.map(I,function(J){return HeatMapper.DOM.uniqueSelector(J)
})
},getAttributes:function(M){if(!M||!M.length){return{}
}var N={};
var K=M[0].attributes;
for(var L=0,J=K.length;
L<J;
L++){var I=K[L];
N[I.name]=I.value
}return N
}}
}catch(H){if(AJS){AJS.log("heat-mapper-dom.js - unexpected exception");
AJS.log(H)
}}})(window.jQuery);