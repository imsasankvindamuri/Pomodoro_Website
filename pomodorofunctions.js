(function () {
    var secondsElapsed = 0;
    var timeMinsFocus = 25, timeMinsBreak = 5, timeMinsLongBreak = 15;



    var _timer = function (time) {
        var setTime = setInterval(function () {
            if (secondsElapsed == time) {
                secondsElapsed = 0;
                clearInterval(setTime);
                return;
            }
            console.log("Hi");
            secondsElapsed++;
        },1000);
    };

    const focustime = function () {
        console.log("focus");
        _timer(30);
    };
    const breaktime = function () {
        console.log("break");
    };
    const longbreaktime = function () {
        console.log("long break");
    };

    var _pomo = {
        focustime,
        breaktime,
        longbreaktime,
    };


    document.getElementById("focustime").addEventListener("click",_pomo.focustime);
    document.getElementById("breaktime").addEventListener("click",_pomo.breaktime);
    document.getElementById("longbreaktime").addEventListener("click",_pomo.longbreaktime);

}) ();