const hourEI = document.getElementById("hour");
const minuteEI = document.getElementById("minute");
const secondsEI = document.getElementById("seconds");
const ampmeI = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if(h>12) {
        h=h-12
        ampm="PM"
     }
     h=h<10 ? "0"+"h":h;
     m=m<10 ? "0"+"m":m;
     s=s<10 ? "0"+"s":s;

     hourEI.innerText=h;
     minuteEI.innerText=m;
     secondsEI.innerText=s;
     ampmEI,(innerText=ampm);
     setTimeout(()=>{
        updateclock();

     },1000)
    }
    updateclock();