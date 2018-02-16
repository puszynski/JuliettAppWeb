var i = 0, j = 0, timer, numberForCycle;
function start() {
    if (timer == null)
        looperManager(); //timer = self.setInterval("increment(3000)", (10));     // increment() function will be call every 1000/100=10 ms    
}
function looperManager() {
    if (j < 18) {
        if (j % 2 == 0) {
            timer = self.setInterval("increment(3000)", (10));
            document.getElementById("comment").innerHTML = "30:" + (Math.round(j / 2) + 1) + " / 10:" + (Math.round(j / 2));
        } //j 0 2 4..
        else if (j % 2 == 1) {
            timer = self.setInterval("increment(1000)", (10));
            document.getElementById("comment").innerHTML = "30:" + (Math.round(j / 2)) + " / 10:" + (Math.round(j / 2));
        } //j 1 3 5..
    }
    else {
        document.getElementById("timeBlock").innerHTML = ":)";
        document.getElementById("comment").innerHTML = "You reach the goal!";
    }
}
function increment(numberForCycle) {
    i++;
    if (i == numberForCycle) {
        nextLoop();
        j++;
        looperManager();
    }
    document.getElementById("timeBlock").innerHTML = (i / 100).toString();
}
function stopTimer() {
    clearInterval(timer);
    timer = null;
}
function nextLoop() {
    stopTimer();
    i = 0;
    document.getElementById("timeBlock").innerHTML = "00.00";
}
function reset() {
    stopTimer();
    i = 0;
    j = 0;
    document.getElementById("timeBlock").innerHTML = "00.00";
    document.getElementById("comment").innerHTML = "30:0 / 10:0";
}
//window.onload = () => {
//    var el = document.getElementById('content');
//    var greeter = new Greeter(el);
//    greeter.start();
//};
//# sourceMappingURL=app.js.map