let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this);
  };

  trips() {
    return store.trips.filter(
      function(trip){
        return trip.driverId === this.id;
      }.bind(this)
    );
  }

  passengers(){
    const passArr = this.trips().map(trip => trip.passengerId);
    const passengerArray = store.passengers.filter(passenger => passArr.includes(passenger.id));
    return passengerArray;
  }
};


class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this);
  };
  trips() {
    return store.trips.filter(
      function(trip){
        return trip.passengerId === this.id;
      }.bind(this)
    );
  }

  drivers(){
    const driverArr = this.trips().map(trip => trip.driverId);
    const driverArray = store.drivers.filter(driver => driverArr.includes(driver.id));
    return driverArray;
  }
};


class Trip {
  constructor(Driver, Passenger) {
    this.driverId = Driver.id
    this.passengerId = Passenger.id
    this.id = ++tripId

    store.trips.push(this);
  };

  driver() {
    return store.drivers.find(
      function(driver){
        return driver.id === this.driverId;
      }.bind(this)
    )
  };

  passenger(){
    return store.passengers.find(
      function(passenger){
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  }
}
