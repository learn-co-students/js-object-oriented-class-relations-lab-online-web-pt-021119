let store = {drivers: [], passengers: [], trips: []};

let driverID = 0;

class Driver {
  constructor (name) {
    this.name = name;
    this.id = ++driverID;
    store.drivers.push(this);
  }
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id
      }.bind(this)
    );
  }
  passengers() {
    const passengers = [];
    this.trips().forEach (
      function(trip) {
        passengers.push(store.passengers.find(
          function(passenger) {
            return trip.passengerId === passenger.id
          }
        ))
      }
    )
    return passengers;
  }
}

let passengerID = 0;

class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++passengerID;
    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id
      }.bind(this)
    )
  }
  drivers() {
    const drivers = [];
    this.trips().forEach (
      function(trip) {
        drivers.push(store.drivers.find(
          function(driver) {
            return trip.driverId === driver.id
          }
        ))
      }
    )
    return drivers;
  }
}

let tripID = 0;

class Trip {
  constructor(driver, passenger){
    this.id = ++tripID;
    this.passengerId = passenger.id;
    this.driverId = driver.id;
    store.trips.push(this);
  }
  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId
      }.bind(this)
    );
  }
  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId
      }.bind(this)
    );
  }
}