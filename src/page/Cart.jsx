import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cartStore = useSelector((store) => store.itemCart);
  const cart = cartStore.cart_items;

  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    }
  };

  return (
    <>
      <div className="container-fluid text-center">
        <table className="table w-75 m-auto my-3 table-bordered text-center table-hover align-middle">
          <thead>
            <tr className="table-dark">
              <th>S.no</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.product.item_name}</td>
                <td>
                  <img src={item.product.item_image} alt="" height="120px" />
                </td>
                <td>1</td>
                <td>{item.product.item_price}</td>

                <td>
                  <div className="btn-group">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <i className="bi bi-trash"></i> Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

<button className='btn btn-danger' onClick={()=>{
  dispatch({type:"EMPTY"})
}}>Remove all </button>
        

      </div>
    </>
  );
};

export default Cart;
