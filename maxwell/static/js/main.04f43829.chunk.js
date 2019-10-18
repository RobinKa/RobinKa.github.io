(this.webpackJsonpmaxwell=this.webpackJsonpmaxwell||[]).push([[0],{184:function(t,e,i){"use strict";i.r(e);var n=i(11),a=i.n(n),c=i(72),r=i.n(c),s=(i(81),i(34)),l=i.n(s),u=i(73),o=i(75),d=i(19),h=i(74);function g(t){for(var e=[],i=0;i<t[0]*t[1]*t[2];i++)e.push(0);return{values:e,shape:t}}function p(t,e,i,n,a){t.values[e+i*t.shape[0]+n*t.shape[0]*t.shape[1]]+=a}var v=[window.innerWidth,window.innerHeight],f=[400,Math.ceil(400/v[0]*v[1]),1],S=new function t(e,i){var n=this;Object(h.a)(this,t),this.data=void 0,this.gpu=void 0,this.updateMagneticX=void 0,this.updateMagneticY=void 0,this.updateMagneticZ=void 0,this.updateElectricX=void 0,this.updateElectricY=void 0,this.updateElectricZ=void 0,this.stepElectric=function(t){var e=n.data.electricFieldX.values,i=n.data.electricFieldY.values,a=n.data.electricFieldZ.values,c=n.data.magneticFieldX.values,r=n.data.magneticFieldY.values,s=n.data.magneticFieldZ.values;n.data.electricFieldX.values=n.updateElectricX(r,s,e,t),n.data.electricFieldY.values=n.updateElectricY(c,s,i,t),n.data.electricFieldZ.values=n.updateElectricZ(c,r,a,t),n.data.time+=t/2},this.stepMagnetic=function(t){var e=n.data.electricFieldX.values,i=n.data.electricFieldY.values,a=n.data.electricFieldZ.values,c=n.data.magneticFieldX.values,r=n.data.magneticFieldY.values,s=n.data.magneticFieldZ.values;console.log(n.updateMagneticX(i,a,c,t)[100]),n.data.magneticFieldX.values=n.updateMagneticX(i,a,c,t),n.data.magneticFieldY.values=n.updateMagneticY(e,a,r,t),n.data.magneticFieldZ.values=n.updateMagneticZ(e,i,s,t),n.data.time+=t/2},this.getData=function(){return n.data},this.data={time:0,electricFieldX:g(e),electricFieldY:g(e),electricFieldZ:g(e),magneticFieldX:g(e),magneticFieldY:g(e),magneticFieldZ:g(e),permittivity:g(e),permeability:g(e)};var a=e[0]*e[1]*e[2];function c(t,e,i,n,a,c,r){return a<0||a>=e||c<0||c>=i||r<0||r>=n?0:t[a+c*e+r*e*n]}function r(t,e){return t%e}function s(t,e,i){return Math.floor(t/e)%i}function l(t,e,i,n){return Math.floor(t/(e*i))%n}this.gpu=new d.GPU,this.updateMagneticX=this.gpu.createKernel((function(t,e,i,n){var a=Math.floor(this.thread.x),u=this.constants.gridSizeX,o=this.constants.gridSizeY,d=this.constants.gridSizeZ,h=this.constants.cellSize,g=r(a,u),p=s(a,u,o),v=l(a,u,o,d);return c(i,u,o,d,g,p,v)-n/h*(c(e,u,o,d,g,p+1,v)-c(e,u,o,d,g,p,v))}),{output:[a],constants:{cellSize:i,gridSizeX:e[0],gridSizeY:e[1],gridSizeZ:e[2]}}).setFunctions([r,s,l,c]),this.updateMagneticY=this.gpu.createKernel((function(t,e,i,n){var a=Math.floor(this.thread.x),u=this.constants.gridSizeX,o=this.constants.gridSizeY,d=this.constants.gridSizeZ,h=this.constants.cellSize,g=r(a,u),p=s(a,u,o),v=l(a,u,o,d);return c(i,u,o,d,g,p,v)-n/h*-(c(e,u,o,d,g+1,p,v)-c(e,u,o,d,g,p,v))}),{output:[a],constants:{cellSize:i,gridSizeX:e[0],gridSizeY:e[1],gridSizeZ:e[2]}}).setFunctions([r,s,l,c]),this.updateMagneticZ=this.gpu.createKernel((function(t,e,i,n){var a=Math.floor(this.thread.x),u=this.constants.gridSizeX,o=this.constants.gridSizeY,d=this.constants.gridSizeZ,h=this.constants.cellSize,g=r(a,u),p=s(a,u,o),v=l(a,u,o,d);return c(i,u,o,d,g,p,v)-n/h*(c(e,u,o,d,g+1,p,v)-c(e,u,o,d,g,p,v)-(c(t,u,o,d,g,p+1,v)-c(t,u,o,d,g,p,v)))}),{output:[a],constants:{cellSize:i,gridSizeX:e[0],gridSizeY:e[1],gridSizeZ:e[2]}}).setFunctions([r,s,l,c]),this.updateElectricX=this.gpu.createKernel((function(t,e,i,n){var a=Math.floor(this.thread.x),u=this.constants.gridSizeX,o=this.constants.gridSizeY,d=this.constants.gridSizeZ,h=this.constants.cellSize,g=r(a,u),p=s(a,u,o),v=l(a,u,o,d);return c(i,u,o,d,g,p,v)+n/h*(c(e,u,o,d,g,p,v)-c(e,u,o,d,g,p-1,v))}),{output:[a],constants:{cellSize:i,gridSizeX:e[0],gridSizeY:e[1],gridSizeZ:e[2]}}).setFunctions([r,s,l,c]),this.updateElectricY=this.gpu.createKernel((function(t,e,i,n){var a=Math.floor(this.thread.x),u=this.constants.gridSizeX,o=this.constants.gridSizeY,d=this.constants.gridSizeZ,h=this.constants.cellSize,g=r(a,u),p=s(a,u,o),v=l(a,u,o,d);return c(i,u,o,d,g,p,v)+n/h*-(c(e,u,o,d,g,p,v)-c(e,u,o,d,g-1,p,v))}),{output:[a],constants:{cellSize:i,gridSizeX:e[0],gridSizeY:e[1],gridSizeZ:e[2]}}).setFunctions([r,s,l,c]),this.updateElectricZ=this.gpu.createKernel((function(t,e,i,n){var a=Math.floor(this.thread.x),u=this.constants.gridSizeX,o=this.constants.gridSizeY,d=this.constants.gridSizeZ,h=this.constants.cellSize,g=r(a,u),p=s(a,u,o),v=l(a,u,o,d);return c(i,u,o,d,g,p,v)+n/h*(c(e,u,o,d,g,p,v)-c(e,u,o,d,g-1,p,v)-(c(t,u,o,d,g,p,v)-c(t,u,o,d,g,p-1,v)))}),{output:[a],constants:{cellSize:i,gridSizeX:e[0],gridSizeY:e[1],gridSizeZ:e[2]}}).setFunctions([r,s,l,c])}(f,.05),z=function(t){function e(t,e,i,n,a,c,r){return a<0||a>=e||c<0||c>=i||r<0||r>=n?0:t[a+c*e+r*e*n]}return t.createKernel((function(t,i,n,a,c,r){var s=this.constants.gridSizeX,l=this.constants.gridSizeY,u=this.constants.gridSizeZ,o=this.output.x,d=this.output.y,h=s*this.thread.x/o,g=l*(1-this.thread.y/d),p=Math.floor(h),v=Math.floor(g),f=p+1,S=v+1,z=f===p?0:(h-p)/(f-p),F=S===v?0:(g-v)/(S-v),m=Math.floor(u/2),M=e(t,s,l,u,p,v,m)*e(t,s,l,u,p,v,m)+e(i,s,l,u,p,v,m)*e(i,s,l,u,p,v,m)+e(n,s,l,u,p,v,m)*e(n,s,l,u,p,v,m),X=e(t,s,l,u,p,S,m)*e(t,s,l,u,p,S,m)+e(i,s,l,u,p,S,m)*e(i,s,l,u,p,S,m)+e(n,s,l,u,p,S,m)*e(n,s,l,u,p,S,m),Y=e(t,s,l,u,f,v,m)*e(t,s,l,u,f,v,m)+e(i,s,l,u,f,v,m)*e(i,s,l,u,f,v,m)+e(n,s,l,u,f,v,m)*e(n,s,l,u,f,v,m),Z=e(t,s,l,u,f,S,m)*e(t,s,l,u,f,S,m)+e(i,s,l,u,f,S,m)*e(i,s,l,u,f,S,m)+e(n,s,l,u,f,S,m)*e(n,s,l,u,f,S,m),w=(e(a,s,l,u,p,v,m)+e(a,s,l,u,p+1,v+1,m))/2,x=(e(c,s,l,u,p,v,m)+e(c,s,l,u,p+1,v+1,m))/2,b=(e(r,s,l,u,p,v,m)+e(r,s,l,u,p+1,v+1,m))/2,E=(e(a,s,l,u,p,S,m)+e(a,s,l,u,p+1,S+1,m))/2,j=(e(c,s,l,u,p,S,m)+e(c,s,l,u,p+1,S+1,m))/2,k=(e(r,s,l,u,p,S,m)+e(r,s,l,u,p+1,S+1,m))/2,O=(e(a,s,l,u,f,v,m)+e(a,s,l,u,f+1,v+1,m))/2,y=(e(c,s,l,u,f,v,m)+e(c,s,l,u,f+1,v+1,m))/2,K=(e(r,s,l,u,f,v,m)+e(r,s,l,u,f+1,v+1,m))/2,P=(e(a,s,l,u,f,S,m)+e(a,s,l,u,f+1,S+1,m))/2,q=(e(c,s,l,u,f,S,m)+e(c,s,l,u,f+1,S+1,m))/2,D=(e(r,s,l,u,f,S,m)+e(r,s,l,u,f+1,S+1,m))/2,U=w*w+x*x+b*b,W=E*E+j*j+k*k,B=O*O+y*y+K*K,G=P*P+q*q+D*D,I=z*Y+(1-z)*M,J=z*Z+(1-z)*X,T=Math.max(0,Math.min(300,F*J+(1-F)*I)),C=z*B+(1-z)*U,H=z*G+(1-z)*W,R=Math.max(0,Math.min(300,F*H+(1-F)*C));this.color(Math.sqrt(T/300),Math.sqrt(T/300+R/300),Math.sqrt(R/300))}),{output:[v[0],v[1]],constants:{gridSizeX:f[0],gridSizeY:f[1],gridSizeZ:f[2]},graphical:!0}).setFunctions([e])};function F(t,e,i){return Math.max(t,Math.min(e,i))}var m=null;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement((function(){var t=Object(n.useRef)(null),e=Object(n.useState)(null),i=Object(o.a)(e,2),c=i[0],r=i[1],s=Object(n.useMemo)((function(){return function(t){return[0,0,500*Math.sin(2*Math.PI*t)*60]}}),[]),h=Object(n.useCallback)((function(){var e=!1;return function(){var i=Object(u.a)(l.a.mark((function i(){var n,a,r,u,o;return l.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,new Promise((function(t){return setTimeout(t,10)}));case 2:if(e){i.next=13;break}if(n=S.getData(),null!==c&&t.current)for(a=s(n.time),r=F(0,n.electricFieldX.shape[0]-1,Math.floor(n.electricFieldX.shape[0]*c[0]/t.current.width)),u=F(0,n.electricFieldX.shape[1]-1,Math.floor(n.electricFieldX.shape[1]*c[1]/t.current.height)),o=0;o<n.electricFieldX.shape[2];o++)p(n.electricFieldX,r,u,o,.01*a[0]/2),p(n.electricFieldY,r,u,o,.01*a[1]/2),p(n.electricFieldZ,r,u,o,.01*a[2]/2);return S.stepMagnetic(.01),S.stepElectric(.01),null===m&&null!==t.current&&(m=z(new d.GPU({mode:"webgl2",canvas:t.current}))),null!==m&&m(n.electricFieldX.values,n.electricFieldY.values,n.electricFieldZ.values,n.magneticFieldX.values,n.magneticFieldY.values,n.magneticFieldZ.values),i.next=11,new Promise((function(t){return setTimeout(t,10)}));case 11:i.next=2;break;case 13:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}()(),function(){e=!0}}),[s,c]);return Object(n.useEffect)(h,[h]),a.a.createElement("canvas",{width:v[0],height:v[1],ref:t,onMouseDown:function(t){return r([t.clientX,t.clientY])},onMouseMove:function(t){null!==c&&r([t.clientX,t.clientY])},onMouseUp:function(t){return r(null)}})}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},76:function(t,e,i){t.exports=i(184)},81:function(t,e,i){}},[[76,1,2]]]);
//# sourceMappingURL=main.04f43829.chunk.js.map