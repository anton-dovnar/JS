class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}


class HondaFactory {
    createCar(model) {
        switch (model) {
            case 'pilot':
                return new Car(5, 'V8', 'Obsidian blue');
            case 'accord':
                return new Car(5, 'V8', 'Radiant red metallic');
        }
    }
}


class TeslaFactory {
    createCar(model) {
        switch (model) {
            case 'model x':
                return new Car(5, 'Dual Motor', 'Pearl White');
            case 'model s':
                return new Car(5, 'Dual Motor', 'Red Multi-Coat');
        }
    }
}

const hondaFactory = new HondaFactory();
const teslaFactory = new TeslaFactory();

const autoManufacturer = (make, model) => {
    switch (make) {
        case 'Tesla':
            return teslaFactory.createCar(model);
        case 'Honda':
            return hondaFactory.createCar(model);
    }
};

const carMixin = {
    revEngine() {
        console.log(`The ${this.engine} engine is doing Vroom Vroom!`);
    },
};
Object.assign(Car.prototype, carMixin);

const teslaModelS = autoManufacturer('Tesla', 'model s');
console.log(teslaModelS);
console.log(teslaModelS.revEngine());

const hondaAccord = autoManufacturer('Honda', 'accord');
console.log(hondaAccord);
console.log(hondaAccord.revEngine());
