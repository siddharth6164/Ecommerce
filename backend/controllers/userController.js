import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import validator from 'validator'
import jwt from 'jsonwebtoken'

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

// Route for user login...
const loginUser = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User doesn't exist"
            });
        }

        if(user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Generate token with userId
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            message: "Error in login"
        });
    }
}

// Route for user Register...
const registerUser = async(req,res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if(!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email"
            });
        }

        // Create new user
        const newUser = new userModel({
            name,
            email,
            password
        });

        await newUser.save();

        // Generate token
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

        res.status(201).json({
            success: true,
            message: "Registration successful",
            token,
            user: {
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({
            success: false,
            message: "Error in registration"
        });
    }
}

// Route for admin login
const adminLogin = async(req,res) =>{

    try {
        const {email,password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);

            res.json({success:true, token})
        }else{
            res.json({success:false, msg:"Invalid Credentials."})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,msg:error.message})
    }

}

export {loginUser, registerUser, adminLogin}