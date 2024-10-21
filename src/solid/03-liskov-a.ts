import { Tesla, Audi, Toyota, Honda, Vehiculo, Fortinet } from './03-liskov-b'

(() => {

  const printCarSeats = (cars: Vehiculo[]) => {

    // for (const car of cars) {

    //   if (car instanceof Tesla) {
    //     console.log('Tesla', car.getNumberOfSeats())
    //     continue
    //   }
    //   if (car instanceof Audi) {
    //     console.log('Audi', car.getNumberOfSeats())
    //     continue
    //   }
    //   if (car instanceof Toyota) {
    //     console.log('Toyota', car.getNumberOfSeats())
    //     continue
    //   }
    //   if (car instanceof Honda) {
    //     console.log('Honda', car.getNumberOfSeats())
    //     continue
    //   }
    //   if (car instanceof Fortinet) {
    //     console.log('Fortinet', car.getNumberOfSeats())
    //     continue
    //   }
    // }

    cars.forEach(car => {
      console.log( car.constructor.name, car.getNumberOfSeats() )
    })
  }

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Fortinet(3),
  ]

  printCarSeats(cars)

})()