var y = +4;

function calcDiff() {
    var x = document.getElementById("tdiff");
    
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text = x.elements[i].value + "<br>";
    }

    y = parseInt(text);
  }

setInterval(() => {
    var d = new Date(); //object of date()

    //Variables
    var dy = d.getDate();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    //Converting to Degrees
    var gmt_rotation = (30 * (hr + y) + min / 2);
    var hr_rotation = (30 * hr + min / 2);
    var min_rotation = 6 * min;
    var sec_rotation = 6 * sec;
    
    //Information Display
    document.getElementById("info").innerHTML = d;

    //Date Display
    document.getElementById("day").innerHTML = dy;
    
    //GMT Hand Rotation
    gmt.style.transform = `rotate(${gmt_rotation}deg)`;

    //Clock Hands Rotation
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

    //Manual Time Set
    //gmt.style.transform = `rotate(270deg)`;
    //hour.style.transform = `rotate(270deg)`;
    //minute.style.transform = `rotate(270deg)`;
    //second.style.transform = `rotate(270deg)`;
}, 1000);