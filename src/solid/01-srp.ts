(() => {

  interface Product {
    id: number
    name: string
  }

  class ProductService {
    // private httpAdapter: Object

    getProduct(id: number) {
      console.log('Producto: ', { id, name: 'OLED TV' }) 
    }

    saveProduct(product: Product) {
      console.log('Guardando en base de datos', product)
    }
  }

  class Mailer {
    public masterEmail: string = 'hola@google.com'

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admin') {
      console.log('Enviando correo a los clientes', template)
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = []

    addToCart(productId: number) {
      console.log('Agregando al carrito ', productId)
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    
    private productService: ProductService
    private mailer: Mailer
    
    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService
      this.mailer = mailer
    }

    loadProduct(id: number) {
      this.productService.getProduct(id)
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product)
    }

    notifyClients() {
      this.mailer.sendEmail(['pepito@google.com'], 'to-clients')
    }
  }

  const cartBloc = new CartBloc()
  const productService = new ProductService()
  const mailer = new Mailer()
  
  const productBloc = new ProductBloc(productService, mailer)

  productService.getProduct(10)
  productService.saveProduct({ id: 10, name: 'OLED TV' })
  mailer.sendEmail(['juan@google.com'], 'to-admin')
  cartBloc.addToCart(10)
})()