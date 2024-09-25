function Car(make, speed) {
    this.make = make;
    this.speed = speed;

    this.accelerate = () => {
        this.speed += 10;
        console.log(this.make, this.speed + 'km/h');
    }

   this.brake = () => {
        this.speed -= 5;
        console.log(this.make, this.speed + 'km/h');
    }
}

function EV(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;

    this.chargeBattery = function(chargeTo) {
        this.charge = chargeTo;
        console.log('Battery: ' + this.charge + '%')
    }

    this.accelerate = function() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

const car = new EV('Tesla', 120, 23);

console.log(car);

car.chargeBattery(90);
car.accelerate();
