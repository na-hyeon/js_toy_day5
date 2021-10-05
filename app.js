const timeH = document.querySelector('h1');
let timeSecond =5;

displayTime(timeSecond)

const countDown = setInterval (()=>{
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1){
        endTime();
        clearInterval(countDown);
    }
},1000)

function displayTime(second){
    const min = math.floor(second / 60);
    const sec = math.floor(second % 60);
    timeH.innerHTML= `${min<10 ? '0':''}${min}:${sec<10?'0':''}${sec}`
}
function endTime(){
    timeH.innerHTML = 'TIME OUT'
}


