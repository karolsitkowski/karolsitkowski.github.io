function addZero(tmp){
    if (tmp < 10){
        return "0" + tmp;
    } else return tmp;
}

function clock() {
    var date = new Date();

    var hour =  addZero(date.getHours());
    var minutes =  addZero(date.getMinutes());
    var seconds = addZero(date.getSeconds());
        
    document.getElementById("clock").innerHTML = hour + ":" + minutes + ":" + seconds;

    setTimeout(clock,1000);
}