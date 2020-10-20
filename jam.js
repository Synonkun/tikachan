
function tick() 
    {
    var bg = document.getElementById('body');
    var hours, minutes, seconds, ap, br, say;
    var intHours, intMinutes, intSeconds;
    var today;
    today = new Date();
    
    intHours = today.getHours();
    intMinutes = today.getMinutes();
    intSeconds = today.getSeconds();
    if (intHours < 10)
    { 
    hours = "0" + intHours+":";
    ap = "AM";
    br = "<br>";
    say = "Good Morning";
    br = "<br>";
    user = name;
    bg.style.backgroundImage = "url(bgpagi.jpg)";
    }
    else if (intHours < 12)
    { 
    hours = intHours+":";
    ap = "AM";
    br = "<br>";
    say = "Good Morning";
    br = "<br>";
    user = name;
    bg.style.backgroundImage = "url(bgpagi.jpg)";
    } 
    else if (intHours < 15) {
    hours = intHours+":";
    ap = "PM";
    br = "<br>";
    say = "Good Afternoon";
    br = "<br>";
    user = name;
    /* Memberi background saat siang */
    bg.style.backgroundImage = "url(bgsiang.png)";
    }
    else if (intHours < 18) {
    hours = intHours+":";
    ap = "PM";
    br = "<br>";
    say = "Good Evening";
    br = "<br>";
    user = name;
    bg.style.backgroundImage = "url(bgsore.jpg)";
    }
    else
    {
    hours = intHours + ":";
    ap = "PM";
    br = "<br>";
    say = "Good Night";
    br = "<br>";
    user = name;
    bg.style.backgroundImage = "url(bgmalam.jpg)";
    }
    
    if (intMinutes < 10) 
    {
    minutes = "0"+intMinutes+":";
    } 
    else 
    {
    minutes = intMinutes+":";
    }
    
    if (intSeconds < 10) 
    {
    seconds = "0"+intSeconds+" ";
    } 
    else 
    {
    seconds = intSeconds+" ";
    } 
    
    timeString = hours+minutes+seconds+ap+br+say+br+user;
    
    Clock.innerHTML = timeString;
    
    window.setTimeout("tick();", 0);
    }
    
    window.onload = tick;