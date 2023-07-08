import React from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ v }) => {
  const dispatch = useDispatch();

  const addtocart = () => {
    let cart_item = {
      id: Date.now(),
      product: v,
    };

    dispatch({ type: 'ADD_TO_CART', payload: cart_item });
    toast.success('Item added successfully');
  };

  return (
    <div>
      <div className="col">
        <ToastContainer position="top-right" autoClose={1000} theme="colored" />

        <div className="card">
          <img src={v.item_image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{v.item_name}</h5>
            <p className="card-text">{v.item_price}</p>
            <button className="btn btn-primary w-100" onClick={addtocart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
