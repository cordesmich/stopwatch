function Stopwatch(elem) {

    var time = 0;
    var interval;
    var offset;
    var laps = [];

    function update() {
        if (this.isOn) {
            time += delta();
        }
        //console.log(timeFormatter(time));
        var formTime = timeFormatter(time);
        elem.textContent = formTime;
    };

    function delta() {
        var now = Date.now();
        var timePassend = now - offset;
        offset = now;
        return timePassend;
    };

    function timeFormatter(timeInMilliseconds) {
        var time = new Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
        }

        return minutes + ' : ' + seconds + ' . ' + milliseconds;

    };

    this.isOn = false;

    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update.bind(this), 10);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function() {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function() {
        if (!this.isOn) {
            time = 0;
            update();
        }
    };

    this.newLap = function() {
        var lap = timeFormatter(time);
        laps.push(lap);

        //console.log(laps)

    };

    this.getLastLap = function() {

        return laps[laps.length - 1];
    };
}