let store = { drivers: [], passengers: [], trips: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  };

  trips() {
    const result = [];
    return store.trips.filter(
      function(trip) {
        if (trip.driverId === this.driverId) {
          result.push(trip);
        }
        return result;
      }.bind(this)
    );
  };

  passengers() {
    const passengers = [];
    for (const trip of this.trips()) {
      passengers.push(trip.passenger());
    }
    return passengers;
  };
};

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  };

  trips() {
    const result = [];
    return store.trips.filter(
      function(trip) {
        if (trip.passengerId = this.id) {
          result.push(trip);
        }
        return result;
      }.bind(this)
    );
  };

  drivers() {
    const drivers = []
    for (const trip of this.trips()) {
      drivers.push(trip.driver());
    }
    return drivers;
  }
};

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver() {
    const result = store.drivers.filter(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    );
    return result[0];
  };

  passenger() {
    const result = store.passengers.filter(
      function(passenger) {
        return passenger.id == this.passengerId;
      }.bind(this)
    );
    return result[0];
  };
};
