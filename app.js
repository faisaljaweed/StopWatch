var min=0;
var sec=0;
var msec=0;

var minheading=document.getElementById("min");
var secheading=document.getElementById("sec");
var msecheading=document.getElementById("msec");
let btn=document.getElementById("startBtn");
var interval;


function timer()

{

    msec++;
    msecheading.innerHTML=msec;
    if(msec==120)
    {
        sec++;
        secheading.innerHTML=sec;
        msec=0;
    }
    else if(sec==60)
    {
        min++;
        minheading.innerHTML=min;
        sec=0;
    }

}
const start=()=>{
interval=setInterval(timer,10);
btn.disabled=true;
}


function resetdown()
{
   
    msecheading.innerHTML=0;
    secheading.innerHTML=0;
    minheading.innerHTML=0;
    pausebtn();
}
function pausebtn()
{
 clearInterval(interval);    

}
