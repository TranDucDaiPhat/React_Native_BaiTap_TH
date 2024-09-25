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

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car2.brake()