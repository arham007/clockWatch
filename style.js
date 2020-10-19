// 12hr=360deg;
// 1hr=30deg;
// for h hour=30h + (m/2)deg
// 60 min=30deg;
// 1min=(1/2)deg;
// m min=(m/2)deg;//

// for minutes:
// 60min=360deg;
// 1min=6deg;
// m min=6mdeg;//


// for sec:
// 60sec=360deg
// 1sec=6 deg;
// s sec=6s deg//






setInterval(() => {
    var d=new Date();
    var htime=d.getHours();
    var mtime=d.getMinutes();
    var stime=d.getSeconds();

    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    
    hour.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;
}, 1000);