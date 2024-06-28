let slide = document.getElementById("range");

let time = document.getElementById("curr-time");

update();

slide.addEventListener("input", update);

function update()
{
    let val = Math.floor((213/100)*slide.value);
    let sec = val%60;
    if (sec < 10)
        sec = '0' + sec;
    let min = Math.floor((val/60));
    if (min < 10)
        min = '0' + min;
    time.innerText = `${min}:${sec}`;
}