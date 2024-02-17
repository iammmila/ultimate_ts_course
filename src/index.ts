class SeatAssignment {
  // index signarture property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mila";
seats.A2 = "Mina";
// without this method we cannot write seatsA1='mila and etc.
