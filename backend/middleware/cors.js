const corsMiddleware = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://exploreattire-frontend.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
};

export default corsMiddleware; 