class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }
  static get activeRides() {
    return Ride._activeRides;
  }
}

let active1 = new Ride();
active1.start();

let active2 = new Ride();
active2.start();

console.log(Ride.activeRides); //2
