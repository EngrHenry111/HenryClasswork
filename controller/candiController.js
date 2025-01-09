const candiModel = require("../model/candiModel")


exports.createCandidate = async(req, res)=>{
    try{
        const {Name, Institution, Courses, CGP} = req.body

        const Students = await candiModel.create({
            Name, Institution, Courses, CGP
        })
        return res.status(201).json({
            message: "Student data found",
            data: Students
        })
    }catch (error) {
        console.error("couldn't found student data", error)
    }
}


exports.GetAllStudent = async(req,res)=>{
    try{
        const StuNames = await candiModel.find();
        return res.status(200).json({
            Message: "All student found",
            data: StuNames
        })
    }catch (err) {

        console.error("Students not found", err)
        // return res.status(400).json({
        //     Message: "Students not found", 
        //     err
        //})
    }
}