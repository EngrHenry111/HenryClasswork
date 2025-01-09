
const BookModel = require("../model/bookModel")
const UserModel = require("../model/bookModel")


exports.createBooks = async(req , res)=>{
 
    try {
     const getUser = await UserModel.findById(req.params.userId)
        const {Title , Discription , Category} = req.body;
        
        const newBook = await BookModel.create({
          Title,
          Discription,
          Category,
        });
         getUser.Books.push(newBook._id)
        await getUser.save()

        return res.status(201).json({
            message : "these are the list of books that we have",
            data : newBook
        })
    } catch (error) {
        console.error("couldn't found book here" , error);
    }
      };
     

      
      exports.getOne = async(req , res)=>{

        try {
          
          const {Title} = req.body;
          if (!Title) {
            return res.status(404).json({
              Message: "Title must be use here",
            });
           }
          const books = await BookModel.findOne({Title});
          return res.status(200).json({
            message : "get books by title",
            data : books  
          })
        } catch (error) {
          return res.status(400).json({
            message : "couldn't get books",
            error
          });
        }
      };


      exports.updateBooks = async(req, res)=>{
        try {
          const {id} = req.params
          const {Title , Discription} = req.body;
          const updates = await BookModel.findByIdAndUpdate(id,
             {Title , Discription} , 
             {new: true}
            )
          return res.status(202).json({
            message : "updated",
            data : updates
          });
        } catch (error) {
          return res.status(400).json({
            message : "failed to update books",
            error
          });
        }
      };
      exports.deleteBooks = async(req, res)=>{
        try {
          // const {id} = req.params
          // const {Title , Discription} = req.body
          const deletes = await BookModel.findByIdAndDelete(req.params.id)
          return res.status(202).json({
            message : "books deleted",
            data : deletes
          });
        } catch (error) {
          return res.status(400).json({
            message : "failed to delete ",
            error
          });
        }
      };