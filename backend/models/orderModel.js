import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    items: [{
        _id: String,
        name: String,
        price: Number,
        size: String,
        quantity: Number,
        image: [String]
    }],
    address: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true },
        country: { type: String, required: true },
        phone: { type: String, required: true }
    },
    amount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        uppercase: true,
        enum: ['COD', 'STRIPE', 'RAZORPAY']
    },
    payment: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: "Order Placed"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)
export default orderModel;