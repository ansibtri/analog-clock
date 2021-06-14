setInterval(()=>{
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    millitime = date.getMilliseconds();

    hrotation=(30*htime+mtime/2);
    mrotation=(6*htime+stime/10);
    srotation=(6*stime + millitime*6/1000);
    millirotation = (millitime*6/1000);
    
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    millisecond.style.transform = `rotate(${millrotation}deg)`;
},1);