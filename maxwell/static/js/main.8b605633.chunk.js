(this.webpackJsonpmaxwell=this.webpackJsonpmaxwell||[]).push([[0],{183:function(e,t,i){},184:function(e,t,i){"use strict";i.r(t);var a=i(1),r=i.n(a),n=i(73),u=i.n(n),l=(i(81),i(7)),c=i(14),s=i(21);function o(e){var t={};return function(i){return t[i]||(t[i]=e()),t[i]}}var d=function e(t,i,a,r){var n=this;function u(e,t,i,a,r){return a<0||a>=t||r<0||r>=i?0:e[r][a]}Object(s.a)(this,e),this.gpu=t,this.gridSize=i,this.cellSize=a,this.reflectiveBoundary=r,this.data=void 0,this.updateMagneticX=void 0,this.updateMagneticY=void 0,this.updateMagneticZ=void 0,this.updateElectricX=void 0,this.updateElectricY=void 0,this.updateElectricZ=void 0,this.injectSource=void 0,this.decaySource=void 0,this.makeFieldTexture=void 0,this.copyTexture=void 0,this.drawOnTexture=void 0,this.setGridSize=function(e){n.gridSize=e,[n.updateElectricX,n.updateElectricY,n.updateElectricZ,n.updateMagneticX,n.updateMagneticY,n.updateMagneticZ,n.injectSource,n.decaySource,n.makeFieldTexture("ex"),n.makeFieldTexture("ey"),n.makeFieldTexture("ez"),n.makeFieldTexture("mx"),n.makeFieldTexture("my"),n.makeFieldTexture("mz"),n.makeFieldTexture("esz"),n.makeFieldTexture("permeability"),n.makeFieldTexture("permittivity"),n.copyTexture("loadPermittivity"),n.copyTexture("loadPermittivity"),n.copyTexture("permeability"),n.copyTexture("permittivity"),n.copyTexture("ex"),n.copyTexture("ey"),n.copyTexture("esz"),n.copyTexture("mx"),n.copyTexture("my"),n.copyTexture("mz"),n.drawOnTexture("esz"),n.drawOnTexture("permeability"),n.drawOnTexture("permittivity")].forEach((function(t){return t.setOutput(e)})),n.data.electricFieldX.shape=e,n.data.electricFieldY.shape=e,n.data.electricFieldZ.shape=e,n.data.magneticFieldX.shape=e,n.data.magneticFieldY.shape=e,n.data.magneticFieldZ.shape=e,n.data.permittivity.shape=e,n.data.permeability.shape=e,n.data.permittivity.values=n.copyTexture("permittivity")(n.data.permittivity.values),n.data.permeability.values=n.copyTexture("permeability")(n.data.permeability.values),n.resetFields()},this.setCellSize=function(e){n.cellSize=e,n.resetFields()},this.stepElectric=function(e){var t=n.data.electricFieldX.values,i=n.data.electricFieldY.values,a=n.data.electricFieldZ.values,r=n.data.magneticFieldX.values,u=n.data.magneticFieldY.values,l=n.data.magneticFieldZ.values,c=n.data.permittivity.values,s=n.injectSource(n.data.electricSourceFieldZ.values,a,e);n.data.electricSourceFieldZ.values=n.decaySource(n.copyTexture("esz")(n.data.electricSourceFieldZ.values),e),n.data.electricFieldX.values=n.updateElectricX(u,l,c,n.copyTexture("ex")(t),e,n.cellSize,n.reflectiveBoundary),n.data.electricFieldY.values=n.updateElectricY(r,l,c,n.copyTexture("ey")(i),e,n.cellSize,n.reflectiveBoundary),n.data.electricFieldZ.values=n.updateElectricZ(r,u,c,s,e,n.cellSize,n.reflectiveBoundary),n.data.time+=e/2},this.stepMagnetic=function(e){var t=n.data.electricFieldX.values,i=n.data.electricFieldY.values,a=n.data.electricFieldZ.values,r=n.data.magneticFieldX.values,u=n.data.magneticFieldY.values,l=n.data.magneticFieldZ.values,c=n.data.permeability.values;n.data.magneticFieldX.values=n.updateMagneticX(i,a,c,n.copyTexture("mx")(r),e,n.cellSize,n.reflectiveBoundary),n.data.magneticFieldY.values=n.updateMagneticY(t,a,c,n.copyTexture("my")(u),e,n.cellSize,n.reflectiveBoundary),n.data.magneticFieldZ.values=n.updateMagneticZ(t,i,c,n.copyTexture("mz")(l),e,n.cellSize,n.reflectiveBoundary),n.data.time+=e/2},this.resetFields=function(){n.data.time=0,n.data.electricFieldX.values=n.makeFieldTexture("ex")(0),n.data.electricFieldY.values=n.makeFieldTexture("ey")(0),n.data.electricFieldZ.values=n.makeFieldTexture("ez")(0),n.data.magneticFieldX.values=n.makeFieldTexture("mx")(0),n.data.magneticFieldY.values=n.makeFieldTexture("my")(0),n.data.magneticFieldZ.values=n.makeFieldTexture("mz")(0),n.data.electricSourceFieldZ.values=n.makeFieldTexture("esz")(0)},this.resetMaterials=function(){n.data.permeability.values=n.makeFieldTexture("permeability")(1),n.data.permittivity.values=n.makeFieldTexture("permittivity")(1)},this.drawPermeability=function(e,t,i){n.data.permeability.values=n.drawOnTexture("permeability")(e,t,i,0,n.copyTexture("permability")(n.data.permeability.values))},this.drawPermittivity=function(e,t,i){n.data.permittivity.values=n.drawOnTexture("permittivity")(e,t,i,0,n.copyTexture("permittivity")(n.data.permittivity.values))},this.injectSignal=function(e,t,i,a){n.data.electricSourceFieldZ.values=n.drawOnTexture("esz")(e,t,i*a,1,n.copyTexture("esz")(n.data.electricSourceFieldZ.values))},this.loadPermittivity=function(e){n.data.permittivity.values=n.copyTexture("loadPermittivity")(e)},this.loadPermeability=function(e){n.data.permeability.values=n.copyTexture("loadPermeability")(e)},this.getData=function(){return n.data},this.makeFieldTexture=o((function(){return n.gpu.createKernel((function(e){return e})).setOutput(n.gridSize).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single")})),this.copyTexture=o((function(){return n.gpu.createKernel((function(e){return e[this.thread.y][this.thread.x]})).setOutput(n.gridSize).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single")})),this.data={time:0,electricFieldX:{values:this.makeFieldTexture("ex")(0),shape:this.gridSize},electricFieldY:{values:this.makeFieldTexture("ey")(0),shape:this.gridSize},electricFieldZ:{values:this.makeFieldTexture("ez")(0),shape:this.gridSize},magneticFieldX:{values:this.makeFieldTexture("mx")(0),shape:this.gridSize},magneticFieldY:{values:this.makeFieldTexture("my")(0),shape:this.gridSize},magneticFieldZ:{values:this.makeFieldTexture("mz")(0),shape:this.gridSize},electricSourceFieldZ:{values:this.makeFieldTexture("esz")(0),shape:this.gridSize},permittivity:{values:this.makeFieldTexture("permittivity")(1),shape:this.gridSize},permeability:{values:this.makeFieldTexture("permeability")(1),shape:this.gridSize}},this.drawOnTexture=o((function(){return n.gpu.createKernel((function(e,t,i,a,r){var n=this.thread.x,l=this.thread.y,c=u(r,this.output.x,this.output.y,n,l);return Math.max(Math.abs(e[0]-n),Math.abs(e[1]-l))<t?i+a*c:c}),{constants:{cellSize:a}}).setOutput(n.gridSize).setFunctions([u]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single")})),this.injectSource=this.gpu.createKernel((function(e,t,i){var a=this.thread.x,r=this.thread.y,n=this.output.x,l=this.output.y;return u(t,n,l,a,r)+u(e,n,l,a,r)*i})).setOutput(this.gridSize).setFunctions([u]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single"),this.decaySource=this.gpu.createKernel((function(e,t){var i=this.thread.x,a=this.thread.y;return u(e,this.output.x,this.output.y,i,a)*Math.pow(.1,t)})).setOutput(this.gridSize).setFunctions([u]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single"),this.updateMagneticX=this.gpu.createKernel((function(e,t,i,a,r,n,l){var c=this.thread.x,s=this.thread.y,o=this.output.x,d=this.output.y;if(!l){var p=c<2?1:0,m=c+2>=o?-1:0,h=s<2?1:0,g=s+2>=d?-1:0;if(0!==p||0!==m||0!==h||0!==g)return a[s+h+g][c+p+m]}return u(a,o,d,c,s)-r/(u(i,o,d,c,s)*n)*(u(t,o,d,c,s+1)-u(t,o,d,c,s))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([u]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single"),this.updateMagneticY=this.gpu.createKernel((function(e,t,i,a,r,n,l){var c=this.thread.x,s=this.thread.y,o=this.output.x,d=this.output.y;if(!l){var p=c<2?1:0,m=c+2>=o?-1:0,h=s<2?1:0,g=s+2>=d?-1:0;if(0!==p||0!==m||0!==h||0!==g)return a[s+h+g][c+p+m]}return u(a,o,d,c,s)-r/(u(i,o,d,c,s)*n)*-(u(t,o,d,c+1,s)-u(t,o,d,c,s))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([u]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single"),this.updateMagneticZ=this.gpu.createKernel((function(e,t,i,a,r,n,l){var c=this.thread.x,s=this.thread.y,o=this.output.x,d=this.output.y;if(!l){var p=c<2?1:0,m=c+2>=o?-1:0,h=s<2?1:0,g=s+2>=d?-1:0;if(0!==p||0!==m||0!==h||0!==g)return a[s+h+g][c+p+m]}return u(a,o,d,c,s)-r/(u(i,o,d,c,s)*n)*(u(t,o,d,c+1,s)-u(t,o,d,c,s)-(u(e,o,d,c,s+1)-u(e,o,d,c,s)))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([u]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single"),this.updateElectricX=this.gpu.createKernel((function(e,t,i,a,r,n,l){var c=this.thread.x,s=this.thread.y,o=this.output.x,d=this.output.y;if(!l){var p=c<2?1:0,m=c+2>=o?-1:0,h=s<2?1:0,g=s+2>=d?-1:0;if(0!==p||0!==m||0!==h||0!==g)return a[s+h+g][c+p+m]}return u(a,o,d,c,s)+r/(u(i,o,d,c,s)*n)*(u(t,o,d,c,s)-u(t,o,d,c,s-1))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([u]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single"),this.updateElectricY=this.gpu.createKernel((function(e,t,i,a,r,n,l){var c=this.thread.x,s=this.thread.y,o=this.output.x,d=this.output.y;if(!l){var p=c<2?1:0,m=c+2>=o?-1:0,h=s<2?1:0,g=s+2>=d?-1:0;if(0!==p||0!==m||0!==h||0!==g)return a[s+h+g][c+p+m]}return u(a,o,d,c,s)+r/(u(i,o,d,c,s)*n)*-(u(t,o,d,c,s)-u(t,o,d,c-1,s))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([u]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single"),this.updateElectricZ=this.gpu.createKernel((function(e,t,i,a,r,n,l){var c=this.thread.x,s=this.thread.y,o=this.output.x,d=this.output.y;if(!l){var p=c<2?1:0,m=c+2>=o?-1:0,h=s<2?1:0,g=s+2>=d?-1:0;if(0!==p||0!==m||0!==h||0!==g)return a[s+h+g][c+p+m]}return u(a,o,d,c,s)+r/(u(i,o,d,c,s)*n)*(u(t,o,d,c,s)-u(t,o,d,c-1,s)-(u(e,o,d,c,s)-u(e,o,d,c,s-1)))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([u]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single")},p=i(74);var m=function e(t,i,a,r){var n=this;Object(s.a)(this,e),this.amplitude=t,this.frequency=i,this.position=a,this.turnOffTime=r,this.inject=function(e,t){var i=e.getData().time;if(void 0===n.turnOffTime||i<=n.turnOffTime){var a=-n.amplitude*Math.cos(2*Math.PI*n.frequency*i);e.injectSignal(n.position,1,a,t)}}};function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(i,!0).forEach((function(t){Object(p.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function y(e){var t=Object(a.useState)(void 0!==e.initiallyCollapsed&&e.initiallyCollapsed),i=Object(l.a)(t,2),n=i[0],u=i[1];return r.a.createElement("div",{id:e.id,className:e.className,style:g({textAlign:"center",background:"rgb(33, 33, 33)",fontWeight:"lighter",color:"white"},e.style)},r.a.createElement("button",{onClick:function(e){return u(!n)},style:g({width:"100%",height:"24px",background:"rgb(50, 50, 50)",border:"0px",color:"white",fontWeight:"bold",cursor:"pointer"},e.buttonStyle)},e.title?"".concat(e.title," "):"","[",n?"+":"-","]"),!n&&e.children)}function v(e){return r.a.createElement("div",null,r.a.createElement("label",null,e.label),r.a.createElement("div",null,r.a.createElement("input",{type:"range",min:e.min,max:e.max,value:e.value,step:e.step,onChange:function(t){return e.setValue(parseFloat(t.target.value))},style:{height:10,width:"100%"}}),r.a.createElement("div",{style:{textAlign:"center",lineHeight:.2,marginBottom:"7px"}},e.value)))}function f(e){return r.a.createElement("div",{style:{margin:"10px"}},e.options.map((function(t,i){return r.a.createElement("button",{className:e.buttonClassName,key:t,style:{backgroundColor:"rgb(50, 50, 50)",color:"white",border:i===e.selectedOption?"3px solid rgb(0, 150, 255)":"0",height:"30px",width:"70px",overflow:"hidden",textOverflow:"hidden"},onClick:function(t){return e.setSelectedOption(i)}},t)})))}function b(e){var t=e.simulator,i=e.gridSize,n=Object(a.useState)(""),u=Object(l.a)(n,2),c=u[0],s=u[1],o=Object(a.useCallback)((function(){if(t){var e=t.getData();window.open(function(e){var t=document.createElement("canvas");t.width=e.shape[0],t.height=e.shape[1];var i=e.permeability,a=e.permittivity,r=t.getContext("2d");r.fillStyle="rgb(1, 0, 1)",r.fillRect(0,0,t.width,t.height),r.fillStyle="rgb(0, 255, 0)",r.textAlign="center",r.textBaseline="middle",r.fillText("warlock.ai/maxwell",t.width/2,t.height/2);for(var n=r.getImageData(0,0,t.width,t.height),u=0;u<t.width;u++)for(var l=0;l<t.height;l++)n.data[4*u+l*t.width*4+0]=Math.round(a[l][u]),n.data[4*u+l*t.width*4+2]=Math.round(i[l][u]),n.data[4*u+l*t.width*4+3]=255;return r.putImageData(n,0,0),t.toDataURL("image/png")}({permittivity:e.permittivity.values.toArray(),permeability:e.permeability.values.toArray(),shape:[e.permeability.shape[0],e.permeability.shape[1]]}))}}),[t]),d=Object(a.useCallback)((function(){t&&function(e,t,i){var a=document.createElement("canvas");a.width=t[0],a.height=t[1];var r=new Image;r.crossOrigin="anonymous",r.onload=function(e){var n=a.getContext("2d");n.fillStyle="rgb(1, 0, 1)",n.fillRect(0,0,a.width,a.height),n.drawImage(r,0,0,r.width,r.height);for(var u={permeability:[],permittivity:[],shape:t},l=n.getImageData(0,0,a.width,a.height).data,c=0;c<t[1];c++){u.permittivity.push([]),u.permeability.push([]);for(var s=0;s<t[0];s++)u.permittivity[c].push(Math.max(1,l[4*s+c*t[0]*4+0])),u.permeability[c].push(Math.max(1,l[4*s+c*t[0]*4+2]))}i(u)},r.src=e}(c,[i[0],i[1]],(function(e){t&&(t.loadPermeability(e.permeability),t.loadPermittivity(e.permittivity))}))}),[t,i,c]);return r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("div",null,r.a.createElement("button",{onClick:o,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Save map")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(e){return s(e.target.value)},style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}}),r.a.createElement("button",{onClick:d,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Load map url")))}function S(e){var t=e.simulator,i=e.setGridSizeLongest,n=e.setDt,u=e.setCellSize,l=e.setSimulationSpeed,c=e.setSources,s=Object(a.useCallback)((function(e){t&&(t.resetFields(),t.loadPermeability(e.materialMap.permeability),t.loadPermittivity(e.materialMap.permittivity));var a=e.sourcesDescriptors.map((function(e){if("point"===e.type)return new m(e.amplitude,e.frequency,e.position,e.turnOffTime);throw new Error("Unsupported source type: ".concat(e.type))}));u(e.simulationSettings.cellSize),n(e.simulationSettings.dt),l(e.simulationSettings.simulationSpeed),i(Math.max(e.simulationSettings.gridSize[0],e.simulationSettings.gridSize[1])),c(a)}),[t,u,n,l,i,c]),o=Object(a.useMemo)((function(){return{dt:e.dt,cellSize:e.cellSize,gridSize:e.gridSize,simulationSpeed:e.simulationSpeed}}),[e.dt,e.cellSize,e.gridSize,e.simulationSpeed]);return r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("button",{onClick:function(e){return s(function(e){for(var t={permittivity:[],permeability:[],shape:e.gridSize},i=0;i<e.gridSize[1];i++)t.permittivity.push(new Array(e.gridSize[0]).fill(1)),t.permeability.push(new Array(e.gridSize[0]).fill(1));return{sourcesDescriptors:[],simulationSettings:e,materialMap:t}}(o))},style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px"}},"Empty"),r.a.createElement("button",{onClick:function(e){return s(function(e){for(var t={permittivity:[],permeability:[],shape:e.gridSize},i=Math.round(.75*e.gridSize[0]),a=0;a<e.gridSize[1];a++){var r=Math.abs(a-e.gridSize[1]/5)<2,n=new Array(e.gridSize[0]).fill(r?100:1);if(r){for(var u=i-20;u<i-10;u++)n[u]=1;for(var l=i+20;l>i+10;l--)n[l]=1}t.permittivity.push(n),t.permeability.push(new Array(e.gridSize[0]).fill(1))}return{sourcesDescriptors:[{type:"point",amplitude:15e4,frequency:3,position:[Math.round(i),Math.round(e.gridSize[1]/15)]}],simulationSettings:e,materialMap:t}}(o))},style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px"}},"Double slit"),r.a.createElement("button",{onClick:function(e){return s(function(e){for(var t={permittivity:[],permeability:[],shape:e.gridSize},i=0;i<e.gridSize[1];i++)t.permittivity.push(new Array(e.gridSize[0]).fill(1)),t.permeability.push(new Array(e.gridSize[0]).fill(1));function a(t){return[Math.round(3*e.gridSize[0]/4+e.gridSize[0]/5*.5/(2*t+1)*-Math.sin(2*Math.PI*t)),Math.round(e.gridSize[1]*(.1+.8*t))]}for(var r=0;r<100;r++)for(var n=a(r/100),u=-2+n[0];u<2+n[0];u++)for(var l=-2+n[1];l<2+n[1];l++)u>=0&&l>=0&&u<e.gridSize[0]&&l<e.gridSize[1]&&(t.permittivity[l][u]=2);var c=a(1);return{sourcesDescriptors:[{type:"point",amplitude:4e4,frequency:5,position:[c[0]-1,c[1]],turnOffTime:.5},{type:"point",amplitude:4e4,frequency:5,position:[c[0]+2,c[1]],turnOffTime:.5}],simulationSettings:e,materialMap:t}}(o))},style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px"}},"Fiber optics"),r.a.createElement("button",{onClick:function(e){return s(function(e){var t={permittivity:[],permeability:[],shape:e.gridSize},i=[.6*e.gridSize[0],e.gridSize[1]/2];function a(t){var a=t[0]-i[0],r=t[1]-i[1];return 4*a*a+r*r<e.gridSize[0]*e.gridSize[0]/100}for(var r=0;r<e.gridSize[1];r++){t.permittivity.push([]),t.permeability.push(new Array(e.gridSize[0]).fill(1));for(var n=0;n<e.gridSize[0];n++)t.permittivity[r].push(a([n,r])?3:1)}return{sourcesDescriptors:[{type:"point",amplitude:1e5,frequency:2,position:[Math.round(e.gridSize[0]/10),Math.round(e.gridSize[1]/2)],turnOffTime:.5}],simulationSettings:e,materialMap:t}}(o))},style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px"}},"Lens"))}function x(e){return r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement(v,{label:"Grid length",value:e.gridSizeLongest,setValue:e.setGridSizeLongest,min:100,max:2e3,step:100}),r.a.createElement(v,{label:"Time step size",value:e.dt,setValue:e.setDt,min:.001,max:.1,step:.001}),r.a.createElement(v,{label:"Cell size",value:e.cellSize,setValue:e.setCellSize,min:.002,max:.2,step:.001}),r.a.createElement(v,{label:"Resolution scale",value:e.resolutionScale,setValue:e.setResolutionScale,min:.1,max:2,step:.1}),r.a.createElement(v,{label:"Simulation speed",value:e.simulationSpeed,setValue:e.setSimulationSpeed,min:0,max:10,step:.1}),r.a.createElement("input",{type:"checkbox",checked:e.reflectiveBoundary,onChange:function(t){return e.setReflectiveBoundary(t.target.checked)}}),"Reflective boundary")}function O(e){return r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement(v,{label:"Brush size",value:e.brushSize,setValue:e.setBrushSize,min:1,max:100,step:1}),r.a.createElement(v,{label:"Brush value",value:e.brushValue,setValue:e.setBrushValue,min:1,max:255,step:1}),r.a.createElement(v,{label:"Signal frequency",value:e.signalFrequency,setValue:e.setSignalFrequency,min:0,max:25,step:.25}),r.a.createElement(f,{options:["\u03b5-Brush","\xb5-Brush","Signal"],selectedOption:e.clickOption,setSelectedOption:e.setClickOption}),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.resetFields,style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px",width:"130px"}},"Reset fields"),r.a.createElement("button",{onClick:e.resetMaterials,style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px",width:"130px"}},"Reset materials")))}function z(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}var F=i(75),w=i.n(F);i(183);var j=function(){if(c.GPU.isSinglePrecisionSupported){if(c.GPU.isWebGL2Supported)return"webgl2";if(c.GPU.isWebGLSupported)return"webgl"}return"cpu"}();console.log("Using GPU mode ".concat(j));var M="cpu"===j?5:50,E="cpu"===j?1:3,T="cpu"===j?.026:.013,k="cpu"===j?.04:.02,A="cpu"===j?200:400,D="cpu"===j?.3:1,C=[window.innerWidth,window.innerHeight],P=X(C,D),Y=B(A,P);function X(e,t){return[Math.round(e[0]*t),Math.round(e[1]*t)]}function B(e,t){var i=t[0]/t[1];return t[0]>=t[1]?[e,Math.ceil(e/i)]:[Math.ceil(e*i),e]}function Z(e,t,i){return Math.max(e,Math.min(t,i))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement((function(){var e=Object(a.useRef)(null),t=Object(a.useState)(P),i=Object(l.a)(t,2),n=i[0],u=i[1],s=Object(a.useState)(C),o=Object(l.a)(s,2),p=o[0],m=o[1],h=Object(a.useState)(A),g=Object(l.a)(h,2),v=g[0],f=g[1],F=Object(a.useState)(T),U=Object(l.a)(F,2),V=U[0],W=U[1],R=Object(a.useState)(k),G=Object(l.a)(R,2),q=G[0],I=G[1],K=Object(a.useState)(D),L=Object(l.a)(K,2),N=L[0],Q=L[1],H=Object(a.useState)(1),J=Object(l.a)(H,2),$=J[0],_=J[1],ee=Object(a.useState)(!1),te=Object(l.a)(ee,2),ie=te[0],ae=te[1],re=Object(a.useState)([]),ne=Object(l.a)(re,2),ue=ne[0],le=ne[1];Object(a.useEffect)((function(){var e=function(){var e=[window.innerWidth,window.innerHeight];u(X(e,N)),m(e)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[N]);var ce=Object(a.useMemo)((function(){return B(v,n)}),[n,v]),se=Object(a.useState)(null),oe=Object(l.a)(se,2),de=oe[0],pe=oe[1];Object(a.useEffect)((function(){e.current&&pe(new c.GPU({mode:j,canvas:e.current}))}),[e]);var me=Object(a.useMemo)((function(){return de?new d(de,Y,k,!1):null}),[de]),he=Object(a.useMemo)((function(){return de?function(e,t){function i(e,t,i,a,r){return a<0||a>=t||r<0||r>=i?0:e[r][a]}return("cpu"!==j?e.createKernel((function(e,t,a,r,n,u,l,c,s){var o=s[0],d=s[1],p=o*this.thread.x/this.output.x,m=d*(1-this.thread.y/this.output.y),h=i(e,o,d,p,m)*i(e,o,d,p,m)+i(t,o,d,p,m)*i(t,o,d,p,m)+i(a,o,d,p,m)*i(a,o,d,p,m),g=i(r,o,d,p-.5,m-.5),y=i(n,o,d,p-.5,m-.5),v=i(u,o,d,p-.5,m-.5),f=g*g+y*y+v*v,b=2/(1+Math.exp(-.4*i(l,o,d,p,m)))-1,S=2/(1+Math.exp(-.4*i(c,o,d,p,m)))-1,x=Math.max(1,s[0]/this.output.x),O=Math.max(1,s[1]/this.output.y),z=(Math.abs(x*p%1-.5)<.25?1:0)*(Math.abs(O*m%1-.5)<.25?1:0),F=1-z;this.color(Math.min(1,h/15+.8*z*b),Math.min(1,h/15+f/15),Math.min(1,f/15+.8*F*S))})):e.createKernel((function(e,t,a,r,n,u,l,c,s){var o=s[0],d=s[1],p=o*this.thread.x/this.output.x,m=d*(1-this.thread.y/this.output.y),h=Math.round(p),g=Math.round(m),y=i(e,o,d,h,g)*i(e,o,d,h,g)+i(t,o,d,h,g)*i(t,o,d,h,g)+i(a,o,d,h,g)*i(a,o,d,h,g),v=i(r,o,d,h,g),f=i(n,o,d,h,g),b=i(u,o,d,h,g),S=v*v+f*f+b*b,x=2/(1+Math.exp(-.4*i(l,o,d,h,g)))-1,O=2/(1+Math.exp(-.4*i(c,o,d,h,g)))-1,z=Math.max(1,s[0]/this.output.x),F=Math.max(1,s[1]/this.output.y),w=(Math.abs(z*h%1-.5)<.25?1:0)*(Math.abs(F*g%1-.5)<.25?1:0),j=1-w;this.color(Math.min(1,y/15+.8*w*x),Math.min(1,y/15+S/15),Math.min(1,S/15+.8*j*O))}))).setOutput(t).setGraphical(!0).setFunctions([i]).setWarnVarUsage(!1).setTactic("performance").setPrecision("unsigned").setDynamicOutput(!0).setDynamicArguments(!0)}(de,Y):null}),[de]);Object(a.useEffect)((function(){he&&he.setOutput(n)}),[he,n]),Object(a.useEffect)((function(){me&&me.setGridSize(ce)}),[me,ce]),Object(a.useEffect)((function(){me&&me.setCellSize(q)}),[me,q]),Object(a.useEffect)((function(){me&&(me.reflectiveBoundary=ie)}),[me,ie]);var ge=Object(a.useState)(1),ye=Object(l.a)(ge,2),ve=ye[0],fe=ye[1],be=Object(a.useState)(M),Se=Object(l.a)(be,2),xe=Se[0],Oe=Se[1],ze=Object(a.useState)(E),Fe=Object(l.a)(ze,2),we=Fe[0],je=Fe[1],Me=Object(a.useState)(!1),Ee=Object(l.a)(Me,2),Te=Ee[0],ke=Ee[1],Ae=Object(a.useState)(!1),De=Object(l.a)(Ae,2),Ce=De[0],Pe=De[1],Ye=Object(a.useState)(2),Xe=Object(l.a)(Ye,2),Be=Xe[0],Ze=Xe[1],Ue=Object(a.useState)(null),Ve=Object(l.a)(Ue,2),We=Ve[0],Re=Ve[1],Ge=Object(a.useRef)(0),qe=Object(a.useRef)(null),Ie=Object(a.useMemo)((function(){return function(e){return[Z(0,ce[0]-1,Math.floor(ce[0]*e[0]/p[0])),Z(0,ce[1]-1,Math.floor(ce[1]*e[1]/p[1]))]}}),[p,ce]),Ke=Object(a.useCallback)((function(){if(me){var e=me.getData();if(null!==qe.current){var t=Ie(qe.current),i=Math.round(ve/2);me.injectSignal(t,i,2e3*-xe*Math.cos(2*Math.PI*we*e.time),V)}var a=!0,r=!1,n=void 0;try{for(var u,l=ue[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){u.value.inject(me,V)}}catch(c){r=!0,n=c}finally{try{a||null==l.return||l.return()}finally{if(r)throw n}}me.stepMagnetic(V),me.stepElectric(V)}}),[me,V,we,xe,ve,ue,Ie]);Object(a.useEffect)((function(){if($>0){var e=setInterval(Ke,1e3/$*V);return function(){return clearInterval(e)}}}),[Ke,V,$]);var Le=Object(a.useCallback)((function(){if(me&&he){if(e.current){var t=X([window.innerWidth,window.innerHeight],N);e.current.width=t[0],e.current.height=t[1]}var i=me.getData();i.time>0&&he(i.electricFieldX.values,i.electricFieldY.values,i.electricFieldZ.values,i.magneticFieldX.values,i.magneticFieldY.values,i.magneticFieldZ.values,i.permittivity.values,i.permeability.values,ce)}}),[me,he,ce,N,e]);Object(a.useEffect)((function(){var e=!1;return requestAnimationFrame((function t(){e||(Le(),requestAnimationFrame(t))})),function(){e=!0}}),[Le]);var Ne=Object(a.useCallback)((function(e,t){if(me){var i=Math.round(ce[0]*(e[0]/p[0])),a=Math.round(ce[1]*(e[1]/p[1])),r=Math.round(ve/2);"permittivity"===t?me.drawPermittivity([i,a,0],r,xe):me.drawPermeability([i,a,0],r,xe)}}),[me,ce,p,ve,xe]),Qe=Object(a.useCallback)((function(){me&&me.resetMaterials()}),[me]),He=Object(a.useCallback)((function(){me&&(me.resetFields(),Ge.current=0)}),[me]),Je=Object(a.useCallback)((function(e){var t=Object(l.a)(e,2),i=t[0],a=t[1];me&&(2===Be?qe.current=[i,a]:0===Be?(Ne([i,a],"permittivity"),Pe(!0)):1===Be&&(Ne([i,a],"permeability"),ke(!0)))}),[me,Ne,Be]),$e=Object(a.useCallback)((function(e){var t=Object(l.a)(e,2),i=t[0],a=t[1];me&&(2===Be&&null!==qe.current&&(qe.current=[i,a]),Ce&&Ne([i,a],"permittivity"),Te&&Ne([i,a],"permeability"))}),[me,Ne,Be,Te,Ce]),_e=Object(a.useCallback)((function(){2===Be?qe.current=null:1===Be?ke(!1):0===Be&&Pe(!1)}),[Be]),et=Object(a.useState)(2),tt=Object(l.a)(et,2),it=tt[0],at=tt[1],rt=Object(a.useState)(1),nt=Object(l.a)(rt,2),ut=nt[0],lt=nt[1],ct=Object(a.useState)(M),st=Object(l.a)(ct,2),ot=st[0],dt=st[1],pt=Object(a.useState)(5),mt=Object(l.a)(pt,2),ht=mt[0],gt=mt[1],yt=Object(a.useState)(5),vt=Object(l.a)(yt,2),ft=vt[0],bt=vt[1];return Object(a.useEffect)((function(){2===Be&&2!==it?(gt(ve),bt(xe),fe(ut),Oe(ot)):2!==Be&&2===it&&(lt(ve),dt(xe),fe(ht),Oe(ft)),at(Be)}),[Be,it,ut,ot,ht,ft,ve,xe]),r.a.createElement("div",{style:{touchAction:"none",userSelect:"none"}},r.a.createElement("canvas",{width:n[0],height:n[1],ref:e,style:{position:"absolute",width:p[0],height:p[1]},onMouseDown:function(e){return Je([e.clientX,e.clientY])},onMouseMove:function(e){Re([e.clientX,e.clientY]),$e([e.clientX,e.clientY])},onMouseUp:function(e){return _e()},onMouseLeave:function(e){return _e()},onTouchStart:function(e){Re([e.touches[0].clientX,e.touches[0].clientY]),Je([e.touches[0].clientX,e.touches[0].clientY])},onTouchMove:function(e){Re([e.touches[0].clientX,e.touches[0].clientY]),$e([e.touches[0].clientX,e.touches[0].clientY])},onTouchEnd:function(e){Re(null),_e()},onTouchCancel:function(e){Re(null),_e()},onContextMenu:function(e){return e.preventDefault()}}),r.a.createElement("div",{style:{position:"absolute",bottom:10,right:10}},r.a.createElement("a",{href:"https://github.com/RobinKa/maxwell-simulation",rel:"noopener noreferrer",target:"_blank",style:{fontWeight:"lighter",color:"rgba(255, 255, 255, 100)",textDecoration:"none"}},"Source code")),We&&r.a.createElement("div",{style:{position:"absolute",pointerEvents:"none",left:We[0]-2*(ve+1),top:We[1]-2*(ve+1),width:4*(ve+1),height:4*(ve+1),border:"2px solid yellow"}}),"cpu"===j&&r.a.createElement("div",{style:{position:"absolute",pointerEvents:"none",left:10,bottom:10,color:"red",fontWeight:"lighter"}},"Using CPU (WebGL with float textures unsupported by your device)"),r.a.createElement("img",{onClick:z,src:w.a,alt:"Fullscreen",style:{position:"absolute",right:10,top:10,cursor:"pointer"}}),r.a.createElement(y,{id:"Menu",title:"Menu",buttonStyle:{background:"rgb(60, 60, 60)"}},r.a.createElement(y,{title:"Examples"},r.a.createElement(S,{simulator:me,setCellSize:I,setDt:W,setGridSizeLongest:f,setSimulationSpeed:_,setSources:le,gridSize:ce,dt:V,cellSize:q,simulationSpeed:$})),r.a.createElement(y,{title:"Controls"},r.a.createElement(O,{brushSize:ve,setBrushSize:fe,brushValue:xe,setBrushValue:Oe,signalFrequency:we,setSignalFrequency:je,clickOption:Be,setClickOption:Ze,resetFields:He,resetMaterials:Qe})),r.a.createElement(y,{title:"Save / Load",initiallyCollapsed:!0},r.a.createElement(b,{simulator:me,gridSize:ce})),r.a.createElement(y,{title:"Settings",initiallyCollapsed:!0},r.a.createElement(x,{gridSizeLongest:v,setGridSizeLongest:f,simulationSpeed:$,setSimulationSpeed:_,resolutionScale:N,setResolutionScale:Q,cellSize:q,setCellSize:I,reflectiveBoundary:ie,setReflectiveBoundary:ae,dt:V,setDt:W}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABISURBVFhH7dchDgAhDETRKfe/M1TUlgyqgv8Mq+AnQMjGTjJFqs+rlzlXjWMIIKC9Be6Jd3XrsAUEAAB4jgkYD+DPiIDfA6QD/j8gGcpVf+MAAAAASUVORK5CYII="},76:function(e,t,i){e.exports=i(184)},81:function(e,t,i){}},[[76,1,2]]]);
//# sourceMappingURL=main.8b605633.chunk.js.map