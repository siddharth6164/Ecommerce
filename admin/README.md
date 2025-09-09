# E-Commerce Admin Panel

## Overview
This is the **Admin Panel** of the e-commerce project, which allows store administrators to manage both the product catalog and customer orders. The admin panel provides functionalities to **add**, **delete**, **update products**, and **view orders**, including managing the **order status** to track the progress of customer purchases.

## Features
### Product Management:
- **Add Products**: Admins can add new products to the store, including details such as product name, description, price, and images.
- **Delete Products**: Admins can remove products from the store that are no longer available.
- **Update Product Details**: Admins can modify product information such as price, description, images, etc.
- **Product Listing**: Admins can view all the products and access detailed information for each product.

### Order Management:
- **View Orders**: Admins can view the list of customer orders, including product details, customer information, and payment status.
- **Update Order Status**: Admins can update the status of orders (e.g., "Pending," "Shipped," "Delivered," etc.).
- **Order Details**: Admins can view the detailed information of each order, including the products purchased, quantity, customer shipping details, and payment information.
- **Cancel Orders**: Admins can cancel an order if necessary (based on business rules).


### Key Folders/Files:
- **/assets**: Contains static files like CSS and JavaScript used across the admin panel.
- **/components**: React components (or other frameworks) responsible for rendering UI elements, such as product lists, order lists, and forms.
- **/views**: Views for different pages, such as the Dashboard, Add/Edit Product pages, and Order List pages.
- **/controllers**: Logic for handling product and order-related API requests (e.g., adding, deleting, and updating products, viewing and updating orders).
- **/models**: Data models for products and orders.
- **/routes**: API routes related to product and order management.
- **/utils**: Utility functions, like file upload handling.
- **/config**: Configuration for database connection and environment variables.
- **app.js**: The main entry point of the application.

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js**: Ensure you have the latest LTS version installed.
- **npm** or **yarn**: Used to install dependencies.
- **MongoDB** or another database of your choice (ensure database connection settings are configured in `config/dbConfig.js`).

### Setup

1. **Clone the repository:**


2. **Install dependencies:**

   ```bash
   npm install
   ```


3. **Configure environment variables**:
   - Create a `.env` file in the root directory and configure your environment variables such as:
     ```env
     DATABASE_URI=your-database-uri
     PORT=your-port
     ```

4. **Start the server**:

   ```bash
   npm start
   ```


5. **Access the Admin Panel**:
   - Navigate to `http://localhost:3000` (or the port defined in `.env`).

## Usage

### Product Management

#### Adding a Product
To add a product to the store:
1. Log in to the admin panel.
2. Navigate to the **Add Product** page.
3. Fill out the product details form, including name, description, price, and upload images.
4. Click on **Save** to add the product.

#### Deleting a Product
To delete a product:
1. Navigate to the **Product List** page.
2. Find the product you want to delete.
3. Click the **Delete** button next to the product.
4. Confirm the deletion to remove the product from the store.

#### Updating Product Information
To edit a product's details:
1. Navigate to the **Product List** page.
2. Find the product you want to edit.
3. Click the **Edit** button next to the product.
4. Update the product information and click **Save** to apply the changes.

---

### Order Management

#### Viewing Orders
To view customer orders:
1. Navigate to the **Orders** page in the admin panel.
2. You will see a list of all orders, including information such as:
   - Order ID
   - Customer Name
   - Total Amount
   - Order Status (e.g., Pending, Shipped, Delivered)

#### Viewing Order Details
To view detailed information for an order:
1. Click on the **View Details** button next to an order in the list.
2. You will see the order details, including:
   - Products ordered (with quantity)
   - Customer shipping information
   - Payment status
   - Any special notes (e.g., shipping instructions)

#### Updating Order Status
To update an order's status:
1. Open the **Order Details** page for the specific order.
2. Change the order status (e.g., from "Pending" to "Shipped" or "Delivered").
3. Click **Save** to update the order status.

#### Cancelling Orders
To cancel an order:
1. In the **Order Details** page, there may be an option to **Cancel Order**.
2. Once the order is cancelled, the customer will be notified, and the order status will be updated accordingly.

---

## API Documentation

### Product Routes
- **POST /api/products** - Add a new product.
- **GET /api/products** - Get a list of all products.
- **GET /api/products/:id** - Get detailed information about a specific product.
- **PUT /api/products/:id** - Update a product.
- **DELETE /api/products/:id** - Delete a product.

### Order Routes
- **GET /api/orders** - Get a list of all orders.
- **GET /api/orders/:id** - Get detailed information about a specific order.
- **PUT /api/orders/:id/status** - Update the status of an order.
- **DELETE /api/orders/:id** - Cancel or delete an order.

## Technologies Used

- **Frontend**: React.
- **Backend**: Node.js with Express.
- **Database**: MongoDB .
- **File Upload**: Multer .
- **Authentication**: JWT-based authentication .
- **State Management**: Context API .

## Contributing

We welcome contributions! If you'd like to contribute to the development of this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

