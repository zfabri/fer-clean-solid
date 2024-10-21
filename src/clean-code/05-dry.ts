type Size = '' | 'S' | 'M' | 'L'

class Product {

  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ) { }

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if (this[key].length <= 0) throw new Error(`${key} is empty`)
          break

        case 'number':
          if (this[key] <= 0) throw new Error(`${key} is zero`)
          break

        default:
          throw new Error(`${typeof this[key]} is not supported`)
      }
    }

    return true
  }

  toString() {
    // no dry
    // if (this.name.length <= 0) throw new Error('name is empty')
    // if (this.price <= 0) throw new Error('price is zero')
    // if (this.size.length <= 0) throw new Error('size is empty')

    if (!this.isProductReady()) return

    return `${this.name} ${this.price} ${this.size}`
  }
}

(() => {
  const bluePants = new Product('blue pants', 9, 'L')
  console.log(bluePants.toString())
})()