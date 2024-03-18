import User from "../models/UserSchema.js";

export const updateUser=async(req,res)=>{

    const id=req.params.id
    
    try {
        const updateUser=await User.findByIdAndUpdate(id,{$set:req.body},{new:true}) //{new:true} is used to return the new updated data instead of old data

        res.status(200).json({success:true,message:"Updated successfully ",data:updateUser});
    } catch (err) {
        res.status(500).json({success:false,message:"Failed to update"});
    }
};
export const deleteUser=async(req,res)=>{

    const id=req.params.id
    
    try {
        const deleteUser=await User.findByIdAndDelete(id);

        res.status(200).json({success:true,message:"Deleted successfully "});
    } catch (err) {
        res.status(500).json({success:false,message:"Failed to delete"});
    }
};
export const getSingleUser=async(req,res)=>{

    const id=req.params.id
    
    try {
        const user=await User.findById(id).select('-password');
        res.status(200).json({success:true,message:"User found ",data:user});
    } catch (err) {
        res.status(404).json({success:false,message:"No user found"});
    }
};
export const getAllUser=async(req,res)=>{

    try {
        const users=await User.find({}).select('-password'); //-->select function excludes the password field 
        res.status(200).json({success:true,message:"User found ",data:users});
    } catch (err) {
        res.status(404).json({success:false,message:"Not found"});
    }
};