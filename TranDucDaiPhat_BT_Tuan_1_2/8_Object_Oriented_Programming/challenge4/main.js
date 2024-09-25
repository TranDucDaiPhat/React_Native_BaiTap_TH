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
}

class EVCL extends CarCl{
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.setCharge(charge)
    }

    setCharge(charge) {
        this.#charge = charge;
    }

    getCharge() {
        return this.#charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log('Battery: ' + this.charge + '%')
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    }
}

const car = new EVCL('Rivian', 120, 23);
// car.charge = 11 -> Tạo biến mới -> không ảnh hưởng gì đến biến private
console.log(car);

car.accelerate()
car.brake()