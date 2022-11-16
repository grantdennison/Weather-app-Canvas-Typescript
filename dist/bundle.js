(()=>{"use strict";var t={d:(i,e)=>{for(var a in e)t.o(e,a)&&!t.o(i,a)&&Object.defineProperty(i,a,{enumerable:!0,get:e[a]})},o:(t,i)=>Object.prototype.hasOwnProperty.call(t,i)};t.d({},{Do:()=>a,Dt:()=>s,Rm:()=>r,qN:()=>n});class i{x;y;tileH;divW;colour;tileText;textX;textY;img1X;img1Y;img2X;img2Y;img3X;img3Y;img3TX;img3TY;date;constructor(t,i,e,a,s,r,n,h,m,o,g,l,d,x,c,w){this.x=t,this.y=i,this.tileH=e,this.divW=a,this.colour=s,this.tileText=r,this.textX=n,this.textY=h,this.img1X=m,this.img1Y=o,this.img2X=g,this.img2Y=l,this.img3X=d,this.img3Y=x,this.img3TX=c,this.img3TY=w,this.date=this.tileText.day.split(", ")}draw(){a.globalAlpha=.4,a.fillStyle=this.colour,a.fillRect(this.x,this.y,this.divW,this.tileH),a.beginPath(),a.lineWidth=.2,a.rect(this.x,this.y,this.divW,this.tileH),a.stroke(),a.globalAlpha=1,a.strokeStyle="black",a.fillStyle="white",a.lineWidth=4,a.font="italic  30px LatoWeb",a.strokeText(`${this.date[0]} ~`,15+this.x,33+this.y),a.fillText(`${this.date[0]} ~`,15+this.x,33+this.y),a.font="italic  18px LatoWeb",a.strokeText(this.date[1],this.textX+this.x,this.textY+this.y),a.fillText(this.date[1],this.textX+this.x,this.textY+this.y),a.font="italic  33px LatoWeb",a.strokeText(this.tileText.temperature,this.x+this.img1X+50,this.y+this.img1Y+50),a.fillText(this.tileText.temperature,this.x+this.img1X+50,this.y+this.img1Y+50),a.font="italic  33px LatoWeb",a.strokeText(this.tileText.wind,this.x+this.img2X+60,this.y+this.img2Y+50),a.fillText(this.tileText.wind,this.x+this.img2X+60,this.y+this.img2Y+50),a.drawImage(r,this.x+this.img1X,this.y+this.img1Y,60,60),a.drawImage(n,this.x+this.img2X,this.y+this.img2Y,60,60),this.img3X&&this.img3Y&&this.img3TX&&this.img3TY&&(a.drawImage(s,this.x+this.img3X,this.y+this.img3Y,100,100),a.font="italic  30px LatoWeb",a.strokeText(this.tileText.description,this.x+this.img3X+this.img3TX,this.y+this.img3Y+this.img3TY),a.fillText(this.tileText.description,this.x+this.img3X+this.img3TX,this.y+this.img3Y+this.img3TY))}}const e=document.getElementById("canvas1"),a=e.getContext("2d"),s=new Image,r=new Image,n=new Image,h=["./img/sun.png","./img/thermo.png","./img/wind.png"],m=[s,r,n];var o=0;for(let t=0;t<m.length;t++)m[t].src=h[t],m[t].onload=()=>{(o+=1)===m.length&&L()};let g=window.innerWidth,l=window.innerHeight,d=150,x=200,c=(l-x-450)/2,w="black",y=g/1.2-120,p=d/2.2,u=g-g/1.2/2,X=d/2.2;const Y={day:(new Date).toLocaleDateString("default",{weekday:"long",day:"2-digit",month:"short",year:"numeric"}),temperature:"0 °C ",wind:"0 km/h",description:"Clear"},f={day:new Date((new Date).getTime()+864e5).toLocaleDateString("default",{weekday:"long",day:"2-digit",month:"short",year:"numeric"}),temperature:"0 °C ",wind:"0 km/h"},T={day:new Date((new Date).getTime()+1728e5).toLocaleDateString("default",{weekday:"long",day:"2-digit",month:"short",year:"numeric"}),temperature:"0 °C ",wind:"0 km/h"},v={day:new Date((new Date).getTime()+2592e5).toLocaleDateString("default",{weekday:"long",day:"2-digit",month:"short",year:"numeric"}),temperature:"0 °C ",wind:"0 km/h"};!async function(){let t=await function(t){const i=localStorage.getItem("weather");if(i){const t=JSON.parse(i);if(t.expiry&&t.expiry>Date.now())return t.value}return!1}();t||(t=await async function(){try{const t=await fetch("https://goweather.herokuapp.com/weather/london"),i=await t.json();if(![i.temperature,i.wind,i.description,i.forecast[0].day,i.forecast[0].temperature,i.forecast[0].wind,i.forecast[1].day,i.forecast[1].temperature,i.forecast[1].wind,i.forecast[2].day,i.forecast[2].temperature,i.forecast[2].wind].every((t=>"string"==typeof t)))throw"Type error please contact Api administrator";return i}catch(t){alert(`Unable to updatedate reason: ${t}`)}}(),function(t,i){const e={value:i,expiry:Date.now()+9e5};localStorage.setItem("weather",JSON.stringify(e))}(0,t)),Y.temperature=t.temperature,Y.wind=t.wind,Y.description=t.description,f.temperature=t.forecast[0].temperature,f.wind=t.forecast[0].wind,T.temperature=t.forecast[1].temperature,T.wind=t.forecast[1].wind,v.temperature=t.forecast[2].temperature,v.wind=t.forecast[2].wind,H(),H(),L()}(),e.width=g,e.height=l;const W=new i(g-g/1.2/2,c,x,g/1.2,w,Y,y,30,0,p,u,X,0,0,1,1),k=new i(g-g/1.2/2,c+x,d,g/1.2,w,f,y,30,0,p,u,X),D=new i(g-g/1.2/2,c+d+x,d,g/1.2,w,T,y,30,0,p,u,X),b=new i(g-g/1.2/2,c+300+x,d,g/1.2,w,v,y,30,0,p,u,X);function H(){const t=[W,k,D,b];let i,e,a,s;if("C"===W.tileText.temperature.slice(-1))for(let r=0;r<t.length;r++)e=parseFloat(t[r].tileText.temperature.slice(0,-3)),i=isNaN(e)?"  ?":Math.round(9*e/5+32),a=parseFloat(t[r].tileText.wind.slice(0,-5)),s=isNaN(a)?"  ?":Math.round(.621371*a),t[r].tileText.temperature=`${i} °F`,t[r].tileText.wind=`${s} mph`;else for(let r=0;r<t.length;r++)i=parseFloat(t[r].tileText.temperature.slice(0,-3)),isNaN(i)?e="  ?":(e=Math.round(5*(i-32)/9),e=e<0?"-"+-1*e:`+${e}`),s=parseFloat(t[r].tileText.wind.slice(0,-4)),a=isNaN(s)?"  ?":Math.round(s/.621371),t[r].tileText.temperature=`${e} °C`,t[r].tileText.wind=`${a} km/h`;L()}function L(){let t;W.img3TX=110,W.img3TY=60,e.width=g,l<650&&(l=650),e.height=l,c=(l-x-450)/2,g<1e3?(g<400&&(g=400),t=g/1.2,e.width=g,W.divW=k.divW=D.divW=b.divW=t,k.tileH=D.tileH=b.tileH=d,W.y=c,k.y=c+x,D.y=c+d+x,b.y=c+300+x,W.x=k.x=D.x=b.x=(g-t)/2,W.img1X=k.img1X=D.img1X=b.img1X=0,W.img1Y=x/3,k.img1Y=D.img1Y=b.img1Y=75,W.img2X=0,k.img2X=D.img2X=b.img2X=g/2.5,W.img2Y=x/1.5,k.img2Y=D.img2Y=b.img2Y=75,g>570?(W.img3X=t-300,W.img3Y=x/3):(W.img3X=t-140,W.img3Y=x/4.3,W.img3TX=10,W.img3TY=130),W.textX=k.textX=D.textX=b.textX=t-100,W.textY=k.textY=D.textY=b.textY=30):(c=(l-x-d)/2,t=g>1300?1300/1.2:g/1.2,k.tileH=D.tileH=b.tileH=x,W.divW=t,k.divW=D.divW=b.divW=t/3,W.y=c,k.y=D.y=b.y=c+x,W.x=k.x=(g-t)/2,D.x=k.x+k.divW,b.x=D.x+D.divW,W.img1X=k.img1X=D.img1X=b.img1X=0,W.img1Y=x/2.3,k.img1Y=D.img1Y=b.img1Y=60,W.img2X=t/3,k.img2X=D.img2X=b.img2X=0,W.img2Y=x/2.3,k.img2Y=D.img2Y=b.img2Y=d/1.15,W.img3X=2*W.img2X,W.img3Y=x/3,W.textX=t-100,k.textX=D.textX=b.textX=t/3-100,W.textY=k.textY=D.textY=b.textY=30),W.draw(),k.draw(),D.draw(),b.draw()}L(),e.addEventListener("click",(function(){H()})),window.addEventListener("resize",(function(){l=window.innerHeight,g=window.innerWidth,L()}))})();