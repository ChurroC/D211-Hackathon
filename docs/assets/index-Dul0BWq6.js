import"./modulepreload-polyfill-B5Qt9EMX.js";let r=10,t=0,l=1;function s(o,e){return o=Math.ceil(o),e=Math.floor(e),Math.floor(Math.random()*(e-o+1))+o}function u(o){return new Promise(e=>setTimeout(e,o))}window.numberMemory=async function(){console.log("main"),l=s(r/10,r-1),console.log(l),document.getElementById("num").innerHTML=l,await u(1e3),console.log("alf"),document.getElementById("num").innerHTML="",showHideTextBox("hiddenStuff")};window.check=async function(){let e=!0,n=document.getElementById("input").value,c="The number was "+l;showHideTextBox("hiddenStuff"),console.log(l),console.log(n),l==n?(t=t+1,r=r*10):e=!1,c+="<br> you entered "+n,document.getElementById("num").innerHTML=c,await u(1200),document.getElementById("score").innerHTML="Score: "+t,u(200),document.getElementById("num").innerHTML="",e?(console.log("rec"),numberMemory()):(showHideTextBox("start"),console.log("half"),c="Your final score was "+t,localStorage.getItem("matching-storage")<t&&localStorage.setItem("matching-storage",t),console.log(c),document.getElementById("num").innerHTML=c,console.log("out"),await u(500),document.getElementById("score").innerHTML="",t=0,document.getElementById("num").innerHTML="",console.log("heh"),r=10)};window.showHideTextBox=function(e){console.log("box");var n=document.getElementById(e);n.style.display=="none"?n.style.display="block":n.style.display="none"};
