WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:querystring', location = '/includes/js/api/querystring.js' */
define("confluence/api/querystring",[],function(){return{stringify:function(a){var c="",b;for(b in a)for(var d=0;d<a[b].length;d++)c+="\x26"+b,a[b][d]&&(c+="\x3d"+a[b][d]);return c.substring(1)},stringifyMap:function(a){var c="";a=Array.from(a);for(var b=0;b<a.length;b++)for(var d=a[b][0],f=a[b][1],e=0;e<f.length;e++)c+="\x26"+d,f[e]&&(c+="\x3d"+f[e]);return c.substring(1)},parse:function(a){var c={};if(a){"?"===a.substr(0,1)&&(a=a.substr(1));a=a.split("\x26");for(var b=0;b<a.length;b++){var d=a[b].split("\x3d");
c[d[0]]||(c[d[0]]=[]);c[d[0]].push(a[b].substring(d[0].length+1))}}return c},parseMap:function(a){var c=new Map;if(a){"?"===a.substr(0,1)&&(a=a.substr(1));a=a.split("\x26");for(var b=0;b<a.length;b++){var d=a[b].split("\x3d");c.has(d[0])||c.set(d[0],[]);c.get(d[0]).push(a[b].substring(d[0].length+1))}}return c}}});
}catch(e){WRMCB(e)};