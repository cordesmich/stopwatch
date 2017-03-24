var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
var newLap = document.getElementById('lap');
var delLaps = document.getElementById('delLaps');

var watch = new Stopwatch(timer);

toggleBtn.addEventListener("click", function() {
    if (watch.isOn) {
        watch.stop();
        toggleBtn.textContent = "Start";
    } else {
        watch.start();
        toggleBtn.textContent = "Stop";
    }
});

resetBtn.addEventListener("click", function() {
    watch.reset();

});

newLap.addEventListener("click", function() {

    if (watch.isOn) {
        watch.newLap();

        var text = watch.getLastLap();
        var row = "<tr>" + "<td>" + text + " </td> </tr>";

        document.getElementById("tbLaps").getElementsByTagName("tbody")[0].innerHTML += row;
    }

});

delLaps.addEventListener("click", function() {

    document.getElementById("tbLaps").getElementsByTagName("tbody")[0].innerHTML = "<tr><th>Laps:</th></tr>"

});