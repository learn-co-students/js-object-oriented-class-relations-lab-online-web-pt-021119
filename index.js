let store = {drivers: [], passengers: [], trips: [] };

let driverId = 0; 
let passengerId = 0;
let tripId = 0



class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;
 
        store.drivers.push(this);
    }
    trips() {
        // console.log(store);
        return store.trips.filter(
            function(trip) {
                // console.log(trip)
                return trip.driverId === this.id;
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

class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;
 
        store.passengers.push(this);
    }
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        );
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



class Trip {
    constructor(driver, passenger){
      this.driverId = driver.id;
      this.passengerId = passenger.id;
      this.id = ++tripId;
  
      store.trips.push(this);
    }
  
    driver(){
      return store.drivers.find(
        function(driver){
          return driver.id === this.driverId;
        }.bind(this)
      );
    }
  
    passenger(){
      return store.passengers.find(
        function(passenger){
          return passenger.id === this.passengerId;
        }.bind(this)
      );
    }
  }

