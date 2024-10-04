import React, { useContext } from "react";
import { productContext } from "../App";

const Cart = () => {
  const [data, setData] = useContext(productContext);

  //Total price logic

  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );

  //Total Quantity Logic

  const totalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );

  //Increment the Quantity

  const handleInc = (id, quantity) => {
    setData((curval) => {
      return curval.map((res) => {
        if (res.id === id) {
          return { ...res, quantity: res.quantity + 1 || quantity + 1 };
        }
        return res;
      });
    });
  };

  //Decrement the Quantity
  const handleDec = (id, quantity) => {
    setData((curval) => {
      return curval.map((res) => {
        if (res.id === id && quantity>0) {
          return { ...res, quantity: res.quantity - 1 || quantity - 1 };
        }
        return res;
      });
    });
  };


  return (
    <div>
      <h1>Cart Page</h1>
      <h1>Total Quantity: {totalQuantity}</h1>
      <h1>TotalPrice:{totalPrice}</h1>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <h1>{element.id}</h1>
            <h1>{element.title}</h1>
            <h1>{element.price}</h1>
            <h1>{element.description}</h1>
            <h1>{element.category}</h1>
            {element.images.map((ele, i) => {
              return (
                <div key={i}>
                  <img src={ele} />
                </div>
              );
            })}
            <button
              onClick={() => handleInc(element.id, element.quantity || 1)}
            >
              +
            </button>
            <button
              onClick={() => handleDec(element.id, element.quantity || 1)}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
