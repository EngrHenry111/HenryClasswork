
const bookModel = require("../model/bookModel")
const userModel = require("../model/userModel")

exports.createbooks = async(req , res)=>{
 
    try {
      const getUserId = await userModel.findById(req.params.userID)
        const {Title , Discription , Category} = req.body
        
        const newBook = await bookModel.create({
           Title  , Discription , Category
        })
        getUserId.books.push(newBook._id)
        await getUserId.save()
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
          
          const {Title} = req.body;
          if (!Title) {
            return res.status(404).json({
              Message: "Title must be use here",
            });
           }
          const books = await bookModel.findOne({Title});
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