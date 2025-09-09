import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.token;
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error("Auth error:", error);
        res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};

export default authMiddleware