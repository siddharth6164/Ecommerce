import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import razorpay from 'razorpay'

// global variables
const currency = 'inr'
const deliveryCharge = 10

// gateway initiliaze
// const razorpayInstance = new razorpay({
//     key_id : process.env.RAZORPAY_KEY_ID,
//     key_SECRET : process.env.RAZORPAY_KEY_SECRET
// })

// Placing orders using COD Method
const placeOrder = async (req, res) => {
    try {
        // Get userId from token (set by auth middleware)
        const userId = req.userId;
        const { items, amount, address, paymentMethod } = req.body;

        // Validate request body
        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Items are required and must be an array"
            });
        }

        if (!amount || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: "Valid amount is required"
            });
        }

        if (!address || !address.firstName || !address.phone) {
            return res.status(400).json({
                success: false,
                message: "Complete address details are required"
            });
        }

        // Log the received data
        console.log("Processing order:", {
            userId,
            itemsCount: items.length,
            amount,
            address
        });

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: paymentMethod || "COD",
            payment: false,
            status: "Order Placed",
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Clear user's cart
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({
            success: true,
            message: "Order Placed Successfully",
            orderId: newOrder._id
        });

    } catch (error) {
        console.error("Order placement error:", error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: Object.values(error.errors).map(err => err.message).join(', ')
            });
        }
        res.status(500).json({
            success: false,
            message: "Error placing order"
        });
    }
};

// Placing orders using COD Method
const placeOrderStripe = async (req,res) =>{

}

// Placing orders using COD Method
const placeOrderRazorpay = async (req,res) =>{
    try {
        const {userId, items, amount, address} = req.body

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"Razorpay",
            payment:false,
            date:Date.now(),
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const options = {
            amount:amount * 100,
            currency: currency.toUpperCase(),
            receipt: newOrder._id.toString()
        }

        await razorpayInstance.orders.create(options, (error,order) =>{
            if(error){
                console.log(error);
                return res.json({success:false, message:error})
            }
            res.json({success:true,order})
        })

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// All Orders data for Admin Panel
const allOrders = async (req,res) =>{

    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}

// User Order Data for frontend
const userOrders = async (req,res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required"
            });
        }

        console.log("Fetching orders for userId:", userId);

        const orders = await orderModel.find({ userId })
            .sort({ date: -1 }) // Sort by date descending
            .lean(); // Convert to plain JavaScript objects

        console.log("Found orders:", orders);

        res.json({
            success: true,
            orders
        });
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Error fetching orders"
        });
    }
};

// update order status from Admin Panel
const updateStatus = async (req,res) =>{
    
    try {
        
        const {orderId, status } = req.body

        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message:'Status Updated.'})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export {placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus }