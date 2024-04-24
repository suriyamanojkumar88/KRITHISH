// 1000ms=1s
// 60s=1m
// 60m=1hr
// 24hrs=1day

let days=document.getElementById('days');
let hours=document.getElementById('hours')
let minutes=document.getElementById('minutes')
let seconds=document.getElementById('seconds')

function updateTime(){
let currentYear=new Date().getFullYear();

let newYear=new Date(`january 1 ${currentYear+1} 00:00:00`)

let currentDate=new Date();
let diff=newYear-currentDate;
let date=Math.floor(diff/1000/60/60/24);

let hour=Math.floor((diff/1000/60/60)%24 )

let min=Math.floor((diff/1000/60)%60)

let sec=Math.floor((diff/1000)%60)

days.innerHTML=date<10?"0"+date:date;
hours.innerHTML=hour<10?"0"+hour:hour;
minutes.innerHTML=min<10?"0"+min:min;
seconds.innerHTML=sec<10?"0"+sec:sec;

}
setInterval(updateTime,1000)