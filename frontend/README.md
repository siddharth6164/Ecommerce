# E-Commerce Frontend

## Overview

This is the **Frontend** of the E-Commerce platform. It provides the user interface for customers to browse products, add items to the cart, view orders, and interact with the store. The frontend is built to communicate with the backend API to fetch product data, manage the shopping cart, handle user authentication, and manage customer orders.

## Features

- **Product Listing**: Displays a list of all products available for sale with details such as name, price, and images.
- **Product Search**: Users can search for products by name, category, or other attributes.
- **Product Details Page**: Shows detailed information about a selected product, including price, description, and available sizes or variations.
- **Shopping Cart**: Allows users to add products to their cart, adjust quantities, and view the total cost.
- **Checkout**: Users can proceed with their orders, provide shipping details, and complete the payment process.
- **User Authentication**: Includes login and registration pages for customers to create accounts, log in, and view their order history.
- **Order Management**: Allows users to view their order status, track delivery, and cancel orders (if applicable).


### Key Folders/Files:
- **/assets**: Contains static assets like images and CSS files.
- **/components**: React components used to render various parts of the app, such as the navbar, product cards, and checkout forms.
- **/pages**: The main pages of the app like the homepage, product details page, and cart page.
- **/services**: Contains services for interacting with the backend API (e.g., fetching products, handling authentication).
- **/contexts**: Stores global state, such as user authentication status and cart data, using React Context API.
- **/utils**: Utility functions, like a custom route handler for protected pages.

## Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js**: Make sure you have the latest LTS version of Node.js installed.
- **npm** or **yarn**: Package managers used to install dependencies.

### Setup

1. **Clone the repository:**


2. **Install dependencies:**

   ```bash
   npm install
   ```

   Or, if using yarn:

   ```bash
   yarn install
   ```

3. **Configure environment variables**:
   - Create a `.env` file in the root directory and configure the API base URL or other necessary environment variables:
     ```env
     REACT_APP_API_URL=http://localhost:5000/api
     ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   Or, if using yarn:

   ```bash
   yarn start
   ```

   This will start the frontend application on `http://localhost:3000` by default (or another port if defined in `.env`).

## Usage

### Home Page
The **Home Page** displays a list of products available for purchase. It includes search functionality to filter products by name or category. Clicking on a product takes the user to the **Product Details** page.

### Product Details Page
The **Product Details** page provides more information about a specific product, including:
- Product images
- Description
- Price
- Available sizes or variations (if applicable)

From this page, users can add the product to their **Shopping Cart**.

### Cart Page
The **Cart Page** allows users to view the items they have added to the cart. Users can adjust quantities or remove products. The total cost is dynamically updated based on the cart contents.

### Checkout Page
The **Checkout Page** allows users to input their shipping details and proceed with payment. After confirming their order, users will receive an order confirmation.

### Login / Register
Users can log in to their existing accounts or register a new one. Once logged in, they will have access to their **Order History**.

### Order History
Users can view their past orders, see the order status (e.g., Pending, Shipped, Delivered), and track their deliveries.


## Technologies Used

- **Frontend Framework**: React .
- **State Management**: React Context API.
- **Routing**: React Router (for page navigation).
- **API Communication**: Axios (or Fetch API).
- **Styling**: CSS, Sass, or styled-components (depending on your styling method).
- **Authentication**: JWT-based authentication for user login and registration.

## Contributing

We welcome contributions! If you'd like to contribute to the development of this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
