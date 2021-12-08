const controller = {

    index: (req,res) => {
        res.render('index');
      },

    listarProductos: (req,res) => {
        res.render('products');
      },

    detalleProducto: (req,res) => {
        res.render('detail');
      },
      
    cart: (req,res) => {
        res.render('shoppingcart');
      },
      
    login: (req,res) => {
        res.render('login');
      },  

    register: (req,res) => {
        res.render('register');
      },

}

module.exports = controller;