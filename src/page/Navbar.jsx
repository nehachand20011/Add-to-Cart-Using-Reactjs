import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartStore = useSelector(store => store.itemCart);
  const cart = cartStore.cart_items.length;

  return (
    <div className='container-fluid bg-primary'>
      <ul className='d-flex justify-content-center list-style list-unstyled'>
        <Link to='/'>
          <li className='fs-3 text-dark me-5'>Home</li>
        </Link>
        <Link to='/cart'>
          <li className='fs-3 text-dark me-5'>
            Cart <sup>{cart}</sup>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
