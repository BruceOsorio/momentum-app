function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = getElementById('session');

    document.getElementById('hours').innerHTML = hrs;
    douument.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
// setInterval(displayTime, 10);
setInterval(()=>{
    const time = document.querySelector(".clock");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";


    if(hours > 12){
      day_night = "PM";
      hours = hours - 12;
    }

    if(hours == 0){
      hours =  12;
    }

    if(minutes < 10){
    minutes = "0" + minutes;
    }

    if(seconds < 60){
    seconds = ":" + seconds;
    }


   time.textContent = hours + ":" + minutes + " " + seconds + " " +  day_night;
  });