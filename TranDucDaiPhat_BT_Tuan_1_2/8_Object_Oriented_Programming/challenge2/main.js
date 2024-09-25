class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(this.make, this.speed + 'km/h');
    }

    brake() {
        this.speed -= 5;
        console.log(this.make, this.speed + 'km/h');
    }

    getSpeedUS() {
        return (this.speed/1.6).toFixed();
    }

    setSpeedUs(speed) {
        this.speed =  (speed*1.6).toFixed();
    }
}

const car = new CarCl('Ford', 120);

car.accelerate();
car.brake();
console.log(car.getSpeedUS(), 'mi/h');

