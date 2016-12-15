class Clock {
  constructor() {
    const today = new Date();
    this.hrs = today.getHours();
    this.min = today.getMinutes();
    this.secs = today.getSeconds();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    let hrsStr = this.hrs.toString();
    let minStr = this.min.toString();
    let secStr = this.secs.toString();

    if (hrsStr.length === 1){
      hrsStr = "0" + hrsStr;
    }
    if (minStr.length === 1){
      minStr = "0" + minStr;
    }
    if (secStr.length === 1){
      secStr = "0" + secStr;
    }

    console.log(`${hrsStr}:${minStr}:${secStr}`);
  }

  _tick() {
    this.secs += 1;
    if (this.secs >= 60) {
      this.min += 1;
      this.secs = 0;
    }
    if (this.mins >= 60) {
      this.hrs += 1;
      this.mins = 0;
    }
    if (this.hrs >= 24){
      this.hrs = 0;
    }
    this.printTime();
  }
}

const clock = new Clock();
