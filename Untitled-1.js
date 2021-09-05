setInterval(showTime, 1000)

function  showTime() {
    let time = new Date();
    let hour = time.getHours()
    let minute = time.getMinutes()
    let seconds = time.getSeconds()
    let am_pm = "AM";

    if (hour > 12) {
        hour+=12;
        am_pm ="PM";
    }
    
    hour = hour < 10 ? "0" + hour: hour;
    minute = minute < 10 ? "0" + minute: minute;
    seconds = seconds < 10 ? "0" + seconds: seconds;


    let currenttime = hour + ":" + minute + ":" + seconds + am_pm;
    document.getElementById("clock").innerHTML = currenttime

    
}

showTime();