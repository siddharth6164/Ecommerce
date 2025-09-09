import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) =>{

    try {
        const { token } = req.headers
        if(!token){
            return res.json({success:false, msg:"Not Authorized Login Again."})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false, msg:"Not Authorized Login Again."})
        }

        next()
    } catch (error) {
        console.log(error);
        res.json({success:false, msg: error.message})
    }
}

export default adminAuth

// "eyJhbGciOiJIUzI1NiJ9.YWRtaW5AZXhwbG9yZUF0dGlyZS5jb21hZG1pbkBleHBsb3Jl.io4XkJCXncJRAMfdouJJgN1pCJ4W9uh4KaVj5rVUSps"