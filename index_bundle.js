!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){},,function(t,e,n){"use strict";n.r(e);n(0);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i,o=document.querySelector("canvas"),a=o.getContext("2d"),u=new WeakMap,c=new WeakMap,s=new WeakMap,f=new WeakMap,d=new WeakMap,h=new WeakMap,g=new WeakMap,l=new WeakMap,w=new WeakMap,p=function(){function t(e,n,r,i,o){var p=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u.set(this,e),c.set(this,n),s.set(this,r),d.set(this,i),h.set(this,o),f.set(this,s.get(this)),g.set(this,"\n    hsla( ".concat(Math.round(240*Math.random()),",\n          ").concat(Math.round(100*Math.random()),"%,\n          ").concat(Math.round(100*Math.random()),"%,\n          ").concat(Math.random(),"\n    )\n  ")),l.set(this,function(){a.beginPath(),a.arc(u.get(p),c.get(p),s.get(p),0,2*Math.PI,!1),a.fillStyle=g.get(p),a.fill()}),w.set(this,function(){l.get(p)(),(u.get(p)+s.get(p)>window.innerWidth||u.get(p)-s.get(p)<0)&&d.set(p,-1*d.get(p)),(c.get(p)+s.get(p)>window.innerHeight||c.get(p)-s.get(p)<0)&&h.set(p,-1*h.get(p)),u.set(p,u.get(p)+d.get(p)),c.set(p,c.get(p)+h.get(p))})}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(t,[{key:"update",get:function(){return w.get(this)()}},{key:"x",get:function(){return u.get(this)}},{key:"y",get:function(){return c.get(this)}},{key:"r",get:function(){return s.get(this)},set:function(t){s.set(this,t)}},{key:"minR",get:function(){return f.get(this)}}]),t}();function y(){o.width=window.innerWidth,o.height=window.innerHeight}y(),window.addEventListener("resize",function(){y(),v()});var M={x:void 0,y:void 0},m=20*Math.random()+30;function v(){i=[];for(var t=0;t<500;t++){var e=3*Math.random()+1,n=Math.random()*(window.innerWidth-2*e)+e,r=Math.random()*(window.innerHeight-2*e)+e,o=2*(Math.random()-.5),a=1*(Math.random()-.5);i.push(new p(n,r,e,o,a))}}o.addEventListener("mousemove",function(t){M.x=t.x,M.y=t.y}),v(),function t(){requestAnimationFrame(t),a.clearRect(0,0,window.innerWidth,window.innerHeight),i.forEach(function(t){t.update,M.x-t.x<50&&M.x-t.x>-50&&M.y-t.y<50&&M.y-t.y>-50&&t.r<m?t.r+=1:t.r>t.minR&&(t.r-=1)})}()}]);