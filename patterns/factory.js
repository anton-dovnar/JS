class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}


class CarFactory {
    createCar(type) {
        switch(type) {
            case 'honda':
                return new Car(4, 'V6', 'grey');
            case 'mazda':
                return new Car(2, 'V8', 'red');
        }
    }
}


const factory = new CarFactory();
const honda = factory.createCar('honda');
console.log(honda);
const mazda = factory.createCar('mazda');
console.log(mazda);
