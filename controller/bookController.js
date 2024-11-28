
const bookModel = require("../model/bookModel")

exports.createbooks = async(req , res)=>{
    try {
        const {Title , Discription , Category} = req.body
        
        const newBook = await bookModel.create({
           Title  , Discription , Category
        })
        return res.status(201).json({
            message : "these are list of books we have",
            data : newBook
        })
    } catch (error) {
        console.error("couldn't found book here" , error)
    }
      }
     

      
      exports.getOne = async(req , res)=>{
        try {
          
            
          const books = await bookModel.findOne(req.params.id)
          return res.status(200).json({
            message : "get books by title",
            data : books
          })
        } catch (error) {
          return res.status(400).json({
            message : "couldn't get books",
            error
          })
        }
      }


      exports.updateBooks = async(req, res)=>{
        try {
          const {id} = req.params
          const {Title , Discription} = req.body
          const updates = await bookModel.findByIdAndUpdate(id , {Title , Discription} , {new:true})
          return res.status(202).json({
            message : "updated",
            data : updates
          })
        } catch (error) {
          return res.status(400).json({
            message : "failed to update books",
            error
          })
        }
      }
      exports.deleteBooks = async(req, res)=>{
        try {
          const {id} = req.params
          const {Title , Discription} = req.body
          const deletes = await bookModel.findByIdAndDelete(id , {Title , Discription} , {new:true})
          return res.status(202).json({
            message : "deleted",
            data : deletes
          })
        } catch (error) {
          return res.status(400).json({
            message : "failed to delete ",
            error
          })
        }
      }