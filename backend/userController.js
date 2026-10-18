import User from './userModel.js'

export const getUser = async(req, res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(error){
       res.status(500).json({message:"error finding user", error });
    }
    
}

export const createUser = async(req, res)=>{
    try{
        const data = new User(req.body);
        const result = await data.save();
        res.status(201).json({
            message: 'user seccessfully created',
            success: true,
            data: data
        })
    }catch(error){
        res.status(500).json({message:"error creating user", error });
    }
}

export const updateUser = async(req, res)=>{
    try{
        const {id} = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body,{
            new:true,
            overwrite: true
        })
        res.json({
            message: "user updated successfully",
            success: true,
            data: updatedUser
        })

    }catch(error){
        res.status(500).json({message:"error updating user", error });
    }
}

export const deleteUser = async(req, res)=>{
    try{
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).json({
                message: 'user not found',
                success: false
            })
        }
        res.json({
            message:'user deleted successfully',
            success: true,
            data: deletedUser
        })

    }catch(error){
        res.status(500).json({message:"error deleting user", error });
    }
}