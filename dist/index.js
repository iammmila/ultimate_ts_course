"use strict";
class Ride {
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
Ride._activeRides = 0;
let active1 = new Ride();
active1.start();
let active2 = new Ride();
active2.start();
console.log(Ride.activeRides);
