//tealium universal tag - utag.110 ut4.0.202407011441, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}
if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}
if(o.id){b.id=o.id;}
if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}
l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"_corder":"_corder","_cprice":"_cprice","_cquan":"_cquan","_cprodname":"_cprodname","_cprod":"_cprod","_cpromo":"_cpromo","_ctotal":"_ctotal"};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
(function(m,o,v,a,b,l,e){if(typeof m['MovableInkTrack']!=='undefined'){return;}
m['MovableInkTrack']=b;l=o.createElement(v);e=o.getElementsByTagName(v)[0];l.type='text/javascript';l.async=true;l.src='//'+a+'/p/js/1.js';m[b]=m[b]||function(){(m[b].q=m[b].q||[]).push(arguments);};e.parentNode.insertBefore(l,e);})(window,document,'script','mi.bathandbodyworks.com','mitr');if(utag.data._corder.length>0){for(var i=0;i<utag.data._cprod.length;i++){mitr('addProduct',{sku:utag.data._cprod[i],name:utag.data._cprodname[i],price:utag.data._cprice[i],quantity:utag.data._cquan[i]})
}
if(utag.data._cpromo.length>0){mitr('addPromo',{code:utag.data._cpromo});}
mitr('send','conversion',{revenue:utag.data._ctotal,identifier:utag.data._corder});}
}};utag.o[loader].loader.LOAD(id);})("110","bbw.new");}catch(error){utag.DB(error);}
