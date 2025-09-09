# E-Commerce Backend

## Overview

This is the **Backend** of the E-Commerce platform. It handles the core business logic, including product management, order processing, user authentication, and communication with the database. The backend exposes APIs that the frontend interacts with to manage products, handle orders, and manage user accounts.

The backend is built with **Node.js**, **Express**, and **MongoDB** for data storage, along with other essential packages to manage authentication, file uploads, and API communication.

## Features

### Product Management:
- **Add Products**: Admins can add new products to the store, including product details such as name, description, price, and images.
- **Update Products**: Admins can modify product details such as price, description, or images.
- **Delete Products**: Admins can remove products from the store that are no longer available.
- **View Products**: Fetch all products to be displayed on the frontend.

### Order Management:
- **View Orders**: View all customer orders, including order status, total cost, and shipping details.
- **Update Order Status**: Admins can update the status of an order (e.g., "Pending," "Shipped," "Delivered").
- **Create Orders**: Customers can place orders, and the order details are stored in the database.
- **Cancel Orders**: Admins can cancel an order if necessary (depending on business rules).

### User Authentication:
- **User Registration**: Customers can register by providing basic details like name, email, and password.
- **User Login**: Customers can log in to their accounts to view their order history.
- **JWT Authentication**: Secure authentication with JWT (JSON Web Token) for accessing protected routes.
- **Password Hashing**: User passwords are hashed using bcrypt to ensure security.

### File Upload:
- **Product Image Upload**: Admins can upload images for products, which are stored securely in the server or cloud storage.

### Key Folders/Files:
- **/config**: Configuration files for the database connection and JWT settings.
- **/controllers**: Contains functions that define how requests are handled. These are the logic behind adding, updating, or deleting products, as well as managing orders.
- **/models**: Contains Mongoose models for **Product**, **Order**, and **User**.
- **/routes**: Defines the API routes, such as routes for managing products, orders, and user authentication.
- **/middlewares**: Contains middleware functions, like authentication checks and error handling.
- **/utils**: Utility functions, such as handling file uploads or any other common functions.
- **server.js**: The entry point of the application that sets up the Express server.

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js**: Make sure you have the latest LTS version of Node.js installed.
- **npm** or **yarn**: Package managers used to install dependencies.
- **MongoDB**: MongoDB should be installed locally or you should have a MongoDB Atlas account (or another database of your choice).

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/e-commerce-backend.git
   cd e-commerce-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   Or, if using yarn:

   ```bash
   yarn install
   ```

3. **Configure environment variables**:
   - Create a `.env` file in the root directory and configure your environment variables, such as:
     ```env
     PORT=5000
     DATABASE_URI=mongodb://localhost:27017/ecommerce
     JWT_SECRET=your_jwt_secret
     JWT_EXPIRATION=1h
     ```

4. **Start the server**:

   ```bash
   npm start
   ```

   Or, if using yarn:

   ```bash
   yarn start
   ```

   This will start the backend server on `http://localhost:5000` (or the port defined in `.env`).

## Usage

### Product Management Endpoints

- **GET /api/products**: Get a list of all products.
- **GET /api/products/:id**: Get details of a single product by ID.
- **POST /api/products**: Add a new product (admin only).
- **PUT /api/products/:id**: Update an existing product (admin only).
- **DELETE /api/products/:id**: Delete a product (admin only).


### Order Management Endpoints

- **GET /api/orders**: Get a list of all orders (admin only).
- **GET /api/orders/:id**: Get details of a single order.
- **POST /api/orders**: Create a new order (user only).
- **PUT /api/orders/:id/status**: Update the status of an order (admin only).
- **DELETE /api/orders/:id**: Cancel an order (admin only).


### User Authentication Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login a user and generate a JWT token.
- **GET /api/auth/me**: Get the current logged-in user's details (protected route).


## Technologies Used

- **Backend Framework**: Node.js with Express
- **Database**: MongoDB with Mongoose for data modeling
- **Authentication**: JWT-based authentication and bcrypt for password hashing
- **File Uploads**: Multer for handling file uploads
- **API Documentation**: Postman or Swagger (if applicable)
- **Utilities**: Various helper utilities for error handling, file uploads, etc.

## Contributing

We welcome contributions! If you'd like to contribute to the development of this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
