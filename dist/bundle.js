(()=>{"use strict";var t={d:(i,e)=>{for(var g in e)t.o(e,g)&&!t.o(i,g)&&Object.defineProperty(i,g,{enumerable:!0,get:e[g]})},o:(t,i)=>Object.prototype.hasOwnProperty.call(t,i)};t.d({},{Do:()=>g,Dt:()=>m,Rm:()=>a,qN:()=>s});class i{x;y;tileH;divW;colour;tileText;textX;textY;img1X;img1Y;img2X;img2Y;img3X;img3Y;img3TX;img3TY;imageSize;date;offSet;constructor(t,i,e,g,m,a,s,r,h,n,o,l,d,x,c,X,Y,f){this.x=t,this.y=i,this.tileH=e,this.divW=g,this.colour=m,this.tileText=a,this.textX=s,this.textY=r,this.img1X=h,this.img1Y=n,this.img2X=o,this.img2Y=l,this.img3X=x,this.img3Y=c,this.img3TX=X,this.img3TY=Y,this.imageSize=f,this.offSet=d,this.date=this.tileText.day.split(", ")}draw(){g.globalAlpha=.4,g.fillStyle=this.colour,g.fillRect(this.x,this.y,this.divW,this.tileH),g.beginPath(),g.lineWidth=.2,g.rect(this.x,this.y,this.divW,this.tileH),g.textAlign="left",g.stroke(),g.globalAlpha=1,g.strokeStyle="black",g.fillStyle="white",g.lineWidth=4,g.font="italic  33px LatoWeb",g.strokeText(`${this.date[0]} ~`,10+this.x,33+this.y),g.fillText(`${this.date[0]} ~`,10+this.x,33+this.y),g.textAlign="right",g.font="italic  20px LatoWeb",g.strokeText(this.date[1],this.textX+this.x,this.textY+this.y),g.fillText(this.date[1],this.textX+this.x,this.textY+this.y),g.textAlign="left",g.font="italic  33px LatoWeb",g.strokeText(this.tileText.temperature,this.x+this.img1X+50,this.y+this.img1Y+45-this.offSet),g.fillText(this.tileText.temperature,this.x+this.img1X+50,this.y+this.img1Y+45-this.offSet),g.font="italic  33px LatoWeb",g.strokeText(this.tileText.wind,this.x+this.img2X+60,this.y+this.img2Y+45-this.offSet),g.fillText(this.tileText.wind,this.x+this.img2X+60,this.y+this.img2Y+45-this.offSet),g.drawImage(a,this.x+this.img1X,this.y+this.img1Y,this.imageSize,this.imageSize),g.drawImage(s,this.x+this.img2X,this.y+this.img2Y,this.imageSize,this.imageSize),this.img3X&&this.img3Y&&this.img3TX&&this.img3TY&&(g.drawImage(m,this.x+this.img3X,this.y+this.img3Y,100,100),g.font="italic  30px LatoWeb",g.textAlign="center",g.strokeText(this.tileText.description,this.x+this.img3X+this.img3TX,this.y+this.img3Y+this.img3TY),g.fillText(this.tileText.description,this.x+this.img3X+this.img3TX,this.y+this.img3Y+this.img3TY))}}const e=document.getElementById("canvas1"),g=e.getContext("2d"),m=new Image,a=new Image,s=new Image,r=["./img/sun.png","./img/thermo.png","./img/wind.png"],h=[m,a,s];var n=0;for(let t=0;t<h.length;t++)h[t].src=r[t],h[t].onload=()=>{(n+=1)===h.length&&N()};let o=window.innerWidth,l=window.innerHeight,d=150,x=200,c=(l-x-3*d)/2,X="black",Y=o/1.2-120,f=d/2.2,w=o-o/1.2/2,y=d/2.2,p=1,u=1;const v={day:(new Date).toLocaleDateString("default",{weekday:"long",day:"2-digit",month:"short",year:"numeric"}),temperature:"0 °C ",wind:"0 km/h",description:"Clear"},T={day:new Date((new Date).getTime()+864e5).toLocaleDateString("default",{weekday:"long",day:"2-digit",month:"short"}),temperature:"0 °C ",wind:"0 km/h"},S={day:new Date((new Date).getTime()+1728e5).toLocaleDateString("default",{weekday:"long",day:"2-digit",month:"short"}),temperature:"0 °C ",wind:"0 km/h"},W={day:new Date((new Date).getTime()+2592e5).toLocaleDateString("default",{weekday:"long",day:"2-digit",month:"short"}),temperature:"0 °C ",wind:"0 km/h"};!async function(){let t=await function(t){const i=localStorage.getItem("weather");if(i){const t=JSON.parse(i);return!!(t.expiry&&t.expiry>Date.now())&&t.value}}();!1===t&&(console.log("Server"),t=await async function(){try{const t=await fetch("https://goweather.herokuapp.com/weather/london"),i=await t.json();if(![i.temperature,i.wind,i.description,i.forecast[0].day,i.forecast[0].temperature,i.forecast[0].wind,i.forecast[1].day,i.forecast[1].temperature,i.forecast[1].wind,i.forecast[2].day,i.forecast[2].temperature,i.forecast[2].wind].every((t=>"string"==typeof t)))throw"Type error please contact Api administrator";return i}catch(t){alert(`Unable to updatedate reason: ${t}`)}}(),function(t,i){const e={value:i,expiry:Date.now()+9e5};localStorage.setItem("weather",JSON.stringify(e))}(0,t)),v.temperature=t.temperature,v.wind=t.wind,v.description=t.description,T.temperature=t.forecast[0].temperature,T.wind=t.forecast[0].wind,S.temperature=t.forecast[1].temperature,S.wind=t.forecast[1].wind,W.temperature=t.forecast[2].temperature,W.wind=t.forecast[2].wind,L(),L()}(),e.width=o,e.height=l;const H=new i(o-o/1.2/2,c,x,o/1.2,X,v,Y,30,0,f,w,y,0,0,0,p,u,60),b=new i(o-o/1.2/2,c+x,d,o/1.2,X,T,Y,30,0,f,w,y,0,p=0,u=0,p=0,u=0,60),k=new i(o-o/1.2/2,c+d+x,d,o/1.2,X,S,Y,30,0,f,w,y,0,p=0,u=0,p=0,u=0,60),z=new i(o-o/1.2/2,c+2*d+x,d,o/1.2,X,W,Y,30,0,f,w,y,0,0,0,0,0,60),D=(()=>{const t=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t)?"tablet":/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(t)?"mobile":"desktop"})();function L(){const t=[H,b,k,z];let i,e,g,m;if("C"===H.tileText.temperature.slice(-1))for(let a=0;a<t.length;a++)e=parseFloat(t[a].tileText.temperature.slice(0,-3)),i=isNaN(e)?"  ?":Math.round(9*e/5+32),g=parseFloat(t[a].tileText.wind.slice(0,-5)),m=isNaN(g)?"  ?":Math.round(.621371*g),t[a].tileText.temperature=`${i} °F`,t[a].tileText.wind=`${m} mph`;else for(let a=0;a<t.length;a++)i=parseFloat(t[a].tileText.temperature.slice(0,-3)),isNaN(i)?e="  ?":(e=Math.round(5*(i-32)/9),e=e<0?"-"+-1*e:`+${e}`),m=parseFloat(t[a].tileText.wind.slice(0,-4)),g=isNaN(m)?"  ?":Math.round(m/.621371),t[a].tileText.temperature=`${e} °C`,t[a].tileText.wind=`${g} km/h`;N()}function N(){if(b.offSet=k.offSet=z.offSet=0,"mobile"===D)A();else if("tablet"===D)I();else{let t;l=window.innerHeight,o=window.innerWidth,H.img3TX=130,H.img3TY=60,e.width=o,l<650&&(l=650),e.height=l,c=(l-x-3*d)/2,o<1e3?(o<400&&(o=400),t=o/1.2,e.width=o,H.divW=b.divW=k.divW=z.divW=t,b.tileH=k.tileH=z.tileH=d,H.y=c,b.y=c+x,k.y=c+d+x,z.y=c+2*d+x,H.x=b.x=k.x=z.x=(o-t)/2,H.img1X=b.img1X=k.img1X=z.img1X=0,H.img1Y=x/3,b.img1Y=k.img1Y=z.img1Y=d/2,H.img2X=0,b.img2X=k.img2X=z.img2X=o/2.5,H.img2Y=x/1.5,b.img2Y=k.img2Y=z.img2Y=d/2,o>570?(H.img3X=t-300,H.img3Y=x/3):(H.img3X=t-140,H.img3Y=x/4.3,H.img3TX=10,H.img3TY=130),H.textX=b.textX=k.textX=z.textX=t-100,H.textY=b.textY=k.textY=z.textY=30):(c=(l-x-d)/2,t=o>1300?1300/1.2:o/1.2,b.tileH=k.tileH=z.tileH=x,H.divW=t,b.divW=k.divW=z.divW=t/3,H.y=c,b.y=k.y=z.y=c+x,H.x=b.x=(o-t)/2,k.x=b.x+b.divW,z.x=k.x+k.divW,H.img1X=b.img1X=k.img1X=z.img1X=0,H.img1Y=x/2.3,b.img1Y=k.img1Y=z.img1Y=d/2.5,H.img2X=t/3,b.img2X=k.img2X=z.img2X=0,H.img2Y=x/2.3,b.img2Y=k.img2Y=z.img2Y=d/1.15,H.img3X=2*H.img2X,H.img3Y=x/3,H.textX=t-100,b.textX=k.textX=z.textX=t/3-100,H.textY=b.textY=k.textY=z.textY=30),g.clearRect(0,0,g.canvas.width,g.canvas.height),H.draw(),b.draw(),k.draw(),z.draw()}}e.addEventListener("click",(function(){L()})),window.addEventListener("resize",(function(){N()})),screen.orientation.addEventListener("change",(function(){}));const A=()=>{o=screen.availWidth-15,l=screen.availHeight-20,b.offSet=k.offSet=z.offSet=0,e.width=o,e.height=l,c=10;let t=o;screen.width<screen.height?(d=l/5,H.divW=b.divW=k.divW=z.divW=t,H.tileH=2*d,b.tileH=k.tileH=z.tileH=d,x=2*d,H.y=c,b.y=c+x,k.y=c+d+x,z.y=c+2*d+x,H.x=b.x=k.x=z.x=(o-t+20)/2,b.imageSize=k.imageSize=z.imageSize=50,H.img1X=b.img1X=k.img1X=z.img1X=0,H.img1Y=x/3,b.img1Y=k.img1Y=z.img1Y=d/2,H.img2X=0,b.img2X=k.img2X=z.img2X=o/2,H.img2Y=x/1.5,b.img2Y=k.img2Y=z.img2Y=d/2,H.img3X=t-160,H.img3Y=x/2.8,H.img3TX=50,H.img3TY=160,H.textX=b.textX=k.textX=z.textX=t-20):(d=l/7,x=4*d,d*=3,H.tileH=x,b.tileH=k.tileH=z.tileH=d,H.divW=t,b.divW=k.divW=z.divW=t/3,H.y=c,b.y=k.y=z.y=c+x,H.x=b.x=(o-t+15)/2,k.x=b.x+b.divW,z.x=k.x+k.divW,b.imageSize=k.imageSize=z.imageSize=40,b.offSet=k.offSet=z.offSet=15,H.img1X=b.img1X=k.img1X=z.img1X=0,H.img1Y=x/2.3,b.img1Y=k.img1Y=z.img1Y=d/3,H.img2X=t/3.5,b.img2X=k.img2X=z.img2X=0,H.img2Y=x/2.3,b.img2Y=k.img2Y=z.img2Y=d/3*2,H.img3X=2*H.img2X,H.img3Y=x/3,H.textX=t-100,b.textX=k.textX=z.textX=t/3-20,H.textY=b.textY=k.textY=z.textY=30,H.img3TX=200,H.img3TY=70),g.clearRect(0,0,g.canvas.width,g.canvas.height),H.draw(),b.draw(),k.draw(),z.draw()},I=()=>{if(screen.width<screen.height){o=screen.availWidth-15,l=screen.availHeight-20,b.offSet=k.offSet=z.offSet=0,e.width=o,e.height=l,c=10;let t=o;screen.width<screen.height?(d=l/5,H.divW=b.divW=k.divW=z.divW=t,H.tileH=2*d,b.tileH=k.tileH=z.tileH=d,x=2*d,H.y=c,b.y=c+x,k.y=c+d+x,z.y=c+2*d+x,H.x=b.x=k.x=z.x=(o-t+20)/2,b.imageSize=k.imageSize=z.imageSize=50,H.img1X=b.img1X=k.img1X=z.img1X=0,H.img1Y=x/3,b.img1Y=k.img1Y=z.img1Y=d/2,H.img2X=0,b.img2X=k.img2X=z.img2X=o/2,H.img2Y=x/1.5,b.img2Y=k.img2Y=z.img2Y=d/2,H.img3X=t-160,H.img3Y=x/2.8,H.img3TX=50,H.img3TY=160,H.textX=b.textX=k.textX=z.textX=t-20):(d=l/7,x=4*d,d*=3,H.tileH=x,b.tileH=k.tileH=z.tileH=d,H.divW=t,b.divW=k.divW=z.divW=t/3,H.y=c,b.y=k.y=z.y=c+x,H.x=b.x=(o-t+15)/2,k.x=b.x+b.divW,z.x=k.x+k.divW,b.imageSize=k.imageSize=z.imageSize=40,b.offSet=k.offSet=z.offSet=15,H.img1X=b.img1X=k.img1X=z.img1X=0,H.img1Y=x/2.3,b.img1Y=k.img1Y=z.img1Y=d/3,H.img2X=t/3.5,b.img2X=k.img2X=z.img2X=0,H.img2Y=x/2.3,b.img2Y=k.img2Y=z.img2Y=d/3*2,H.img3X=2*H.img2X,H.img3Y=x/3,H.textX=t-100,b.textX=k.textX=z.textX=t/3-20,H.textY=b.textY=k.textY=z.textY=30,H.img3TX=200,H.img3TY=70),g.clearRect(0,0,g.canvas.width,g.canvas.height),H.draw(),b.draw(),k.draw(),z.draw()}};N()})();