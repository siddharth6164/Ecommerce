import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl,currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      console.log("Fetched orders:", response.data); // Debug log
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      setLoading(true);
      const newStatus = event.target.value;
      console.log("Updating status:", { orderId, newStatus }); // Debug log

      const response = await axios.post(
        backendUrl + '/api/order/status', 
        { orderId, status: newStatus }, 
        { headers: { token } }
      );

      if(response.data.success){
        toast.success('Order status updated successfully');
        await fetchAllOrders();
      }
    } catch (error) {
      console.error("Status update error:", error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      {loading && <p>Loading...</p>}
      <div>
        {orders.map((order, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700">
            <img src={assets.parcel_icon} alt="" className="w-12" />

            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="py-0.5" key={index}>{" "} {item.name} X {item.quantity} <span> {item.size}</span></p>
                    );
                  } else {
                    return (
                      <p className="py-0.5" key={index}>{" "}{item.name} X {item.quantity} <span> {item.size}</span>{" "},{" "}</p>
                    );
                  }
                })}
              </div>

              <p className="mt-3 mb-2 font-medium">{order.address.firstName + " " + order.address.lastName}</p>

              <div>
                <p>{order.address.street + ", "}</p>
                <p>{order.address.city +", " + order.address.state + ", " + order.address.country + ", " + order.address.zipCode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]"> Items : {order.items.length}</p>
              <p className="mt-3"> Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
              <p> Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <p className="text-sm sm:text-[15px]">{currency}{order.amount}</p>

            <select 
              value={order.status || "Order Placed"}
              onChange={(event) => statusHandler(event, order._id)}
              disabled={loading}
              className={`p-2 font-semibold ${loading ? 'opacity-50' : ''}`}
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
