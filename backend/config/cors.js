const corsOptions = {
    origin: ['https://exploreattire-frontend.vercel.app', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'token'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
};

export default corsOptions; 