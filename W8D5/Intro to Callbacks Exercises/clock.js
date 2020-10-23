class Clock {
  constructor() {
    // 1. Create a Date object.
    let time = new Date(); //Date.now()

    // 2. Store the hours, minutes, and seconds.
    this.hours = time.getHours(); //3:15pm
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();
    
    // 3. Call printTime.
    
    this.printTime();//3:15:00pm
    // 4. Schedule the tick at 1 second intervals.
    

    // hours, minutes, seconds

    setInterval(this._tick.bind(this), 1000); // this === the clock inst
    
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let formattedTime = [this.hours, this.minutes, this.seconds].join(':');
    console.log(formattedTime);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    //seconds
    this.seconds += 1;
    if (this.seconds > 60) {
      this.seconds = 0;
      this.minutes += 1;
    };

    //minutes
    if (this.minutes > 60) {
      this.minutes = 0;
      this.hours += 1;
    };
    //hours
    if (this.hours > 24) {
      this.hours = 0;
    };
    this.printTime();
  }
}

const clock = new Clock();
