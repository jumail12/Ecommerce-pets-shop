import React, { children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const OrderC = createContext();

export const OrderContext = ({ children }) => {
  const [orderD, setOrderD] = useState({});

  const Log = localStorage.getItem("id");

  const callApi = async () => {
    const res = await axios.get(`http://localhost:3001/users/${Log}`);
    setOrderD(res.data.order);
  };

  useEffect(() => {
    if (Log) {
      callApi();
    }
  }, [orderD]);

  const { Amount } = orderD;
  const { ShippingAddress } = orderD;
  const { OrderItems } = orderD;
  const { date } = orderD;
  const { orderId } = orderD;

  // console.log(Amount);
  // console.log(ShippingAddress);
  // console.log(OrderItems);

  return (
    <OrderC.Provider
      value={{ Amount, ShippingAddress, OrderItems, date, orderId }}
    >
      {children}
    </OrderC.Provider>
  );
};

export default OrderContext;
