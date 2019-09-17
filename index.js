let store = {drivers: [], passengers: [], trips: [] }
let driverId = 1 

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }
  
  passengers() {
    let passengers = []
    this.trips().forEach(function(trip) {
      passengers.push(trip.passenger());
    });
    return passengers;
  }
}

let passengerId = 1

class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name 
    store.passengers.push(this)
  }
  
  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id);
  }

  drivers() {
    let drivers = [];
    this.trips().forEach(function(trip) {
      drivers.push(trip.driver());
    });
    return drivers;
  }
  
  
}

let tripId = 1
class Trip {
  constructor(driver,passenger){
  this.id = ++tripId  
  this.driverId = driverId;
  this.passengerId = passengerId;
 store.trips.push(this)
 }
  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId);
  }
  
  driver() {
    return store.drivers.find(driver => driver.id === this.driverId);
  }
 
}

