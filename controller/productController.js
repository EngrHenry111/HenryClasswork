const productModel = require("../model/productModel")



exports.createProduct = async(req , res)=>{

 
    try {
      const getUser = await userModel.findById(req.params.userID)
        const { ProductName, Price , Availability, Category} = req.body
        
        const ProductList = await productModel.create({
           ProductName, Price, Availability, Category
        })
        await getUser.Products.push(ProductList._id)
        await getUser.save()
       
        return res.status(201).json({
            message : "these are our products",
            data : ProductList
        })
    } catch (error) {
        console.error("couldn't found products here" , error)
    }
      };

      exports.getAllProducts = async (req, res) => {
        try {
          const Products = await productModel.find();
          return res.status(200).json({
            message: 'gotten all Products',
            data: Products,
          });
        } catch (error) {
          return res.status(400).json({
            message: "couldn't get Products",
            error,
          });
        }
      };

      exports.getOneById = async (req, res) => {
        try {
       const {id} = res.params
       const products = await productModel.findById({id});
          return res.status(200).json({
            message: 'gotten products by id',
            data: products,
          });
        } catch (error) {
          return res.status(400).json({
            message: "couldn't get products by id",
            error,
          });
        }
      };

     
      exports.deleteProduct = async (req, res) => {
        try {
          const deleteProduct = await productModel.findByIdAndDelete(req.params.id);
          return res.status(200).json({
            message: 'products deleted',
            data: deleteProduct,
          });
        } catch (error) {
          return res.status(400).json({
            message: "couldn't delete product",
            error,
          });
        }
      };
      
      exports.updateProduct = async(req, res)=>{
        try {
          const {id} = req.params
          const {ProductName , Price} = req.body
          const updates = await productModel.findByIdAndUpdate(id , {ProductName , Price} , {new:true})
          return res.status(202).json({
            message : "product updated",
            data : updates
          })
        } catch (error) {
          return res.status(400).json({
            message : "failed to update product",
            error
          });
        }
    };

