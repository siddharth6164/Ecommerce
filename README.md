# E-Commerce Platform :- ExploreAttire...

## Overview

This is a complete **E-Commerce Platform** that includes both **Frontend** and **Backend** components to manage products, orders, and user interactions. The platform allows customers to browse products, add them to their cart, place orders, and track their purchases. Admin users can manage the product catalog, view orders, update order statuses, and manage users.

### Key Features:

#### **Frontend** (Client-Side)
- **Product Listing**: View a list of products with search and filter options.
- **Product Details**: View detailed information about products.
- **Shopping Cart**: Add products to the cart, update quantities, and view the total cost.
- **Checkout**: Place orders by providing shipping details and completing payment.
- **User Authentication**: Register, login, and manage user accounts.
- **Order History**: View past orders and track order status.

#### **Backend** (Server-Side)
- **Product Management**: Admins can add, update, delete, and view products.
- **Order Management**: Admins can view, update order status, and cancel orders.
- **User Authentication**: Secure user login and registration with JWT authentication.
- **Order Creation**: Customers can place orders, which are stored and processed by the backend.
- **Image Upload**: Admins can upload product images.
- **Order Status Tracking**: Update order statuses (e.g., Pending, Shipped, Delivered).

---

## Technologies Used:

### **Frontend**
- **React** (or any other JS framework)
- **React Router** (for navigation)
- **Axios** (for API communication)
- **CSS** or **Styled-Components** (for styling)

### **Backend**
- **Node.js** with **Express** (API server)
- **MongoDB** with **Mongoose** (Database)
- **JWT** (for user authentication)
- **Multer** (for handling file uploads)
- **bcryptjs** (for password hashing)

---

## Folder Structure

### **Frontend**
```
/frontend
  /src
    /components
    /pages
    /services
    /contexts
    - App.js
```

### **Backend**
```
/backend
  /config
  /controllers
  /models
  /routes
  /middlewares
  - server.js
```

---

## Setup and Installation

### 1. **Clone the repository:**
   ```bash
   git clone https://github.com/shreyam91/ExploreAttire.git
   cd e-commerce
   ```

### 2. **Frontend Setup**:

   - Navigate to the `/frontend` directory and install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Configure `.env` with the API base URL:
     ```env
     REACT_APP_API_URL=http://localhost:5000/api
     ```
   - Start the frontend:
     ```bash
     npm start
     ```

### 3. **Backend Setup**:

   - Navigate to the `/backend` directory and install dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Configure `.env` for database and JWT settings:
     ```env
     PORT=5000
     DATABASE_URI=mongodb://localhost:27017/ecommerce
     JWT_SECRET=your_jwt_secret
     ```
   - Start the backend:
     ```bash
     npm start
     ```

---

## Contributing

We welcome contributions! If you'd like to improve the project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
