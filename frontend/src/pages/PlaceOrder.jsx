import React, { useContext, useState } from 'react'
import Title from '../components/Title';
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {

  const [method,setMethod] = useState('cod');
  const{navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipCode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (event) =>{

    const name = event.target.name
    const value = event.target.value

    setFormData(data =>({...data, [name]:value}))
  }

  const initPay = (order) =>{
    
  }

  const onSubmitHandler = async(e) =>{
    e.preventDefault()

    try {
      // Get userId from token
      if (!token) {
        toast.error('Please login first');
        navigate('/login');
        return;
      }

      // Debug logs
      console.log("Cart Items:", cartItems);
      console.log("Form Data:", formData);

      let orderItems = []
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0 ){
              const itemInfo = structuredClone(products.find(product => product._id === items))
              if(itemInfo){
                itemInfo.size = item
                itemInfo.quantity = cartItems[items][item]
                orderItems.push(itemInfo)
              }
          }
        }
      }

      // Validate order items
      if (orderItems.length === 0) {
        toast.error('Cart is empty');
        return;
      }

      // console.log(orderItems);
      let orderData = {
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        address: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country,
          phone: formData.phone
        },
        paymentMethod: method.toUpperCase()
      }

      console.log("Sending order data:", orderData); // Debug log

      const response = await axios.post(
        `${backendUrl}/api/order/place`,
        orderData,
        { 
          headers: { 
            'Content-Type': 'application/json',
            token 
          }
        }
      );

      if(response.data.success) {
        setCartItems({})
        toast.success('Order placed successfully!');
        navigate('/orders')
      }

    } catch (error) {
      console.error("Order error:", error.response?.data || error);
      toast.error(error.response?.data?.message || 'Error placing order');
    }
  }
  

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* ------- Left Side ------- */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          </div>

          <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

            <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          </div>

            <input required onChange={onChangeHandler} name='email' value={formData.email} type="email" placeholder='Email address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

            <input required onChange={onChangeHandler} name='street' value={formData.street} type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

          <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='city' value={formData.city} type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

            <input required onChange={onChangeHandler} name='state' value={formData.state} type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          </div>

          <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='zipCode' value={formData.zipCode} type="number" placeholder='ZipCode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

            <input required onChange={onChangeHandler} name='country' value={formData.country} type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          </div>

            <input required onChange={onChangeHandler} name='phone' value={formData.phone} type="phone" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>

        {/* ----------------- Right Side ----------- */}
        <div className='mt-8'>

          <div className='mt-8 min-w-80'>
            <CartTotal />
          </div>

          <div className='mt-12'>
            <Title text1={'PAYMENT'} text2={'METHOD'}/>

            {/* ------- Payment Method Selection ------ */}
            <div className='flex gap-3 flex-col lg:flex-row'>

              <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={()=> setMethod('stripe')}>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                <img src={assets.stripe_logo} alt="" className='h-5 mx-4'/>
              </div>
              
              <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={()=> setMethod('razorpay')}>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                <img src={assets.razorpay_logo} alt="" className='h-5 mx-4'/>
              </div>
              
              <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={()=> setMethod('cod')}>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
              </div>

            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm rounded'>PLACE ORDER</button>
          </div>

        </div>
    </form>
  )
}

export default PlaceOrder