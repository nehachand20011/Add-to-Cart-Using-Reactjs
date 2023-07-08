import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Card from './Card';

const Home = () => {
  const itemStore = useSelector((store) => store.itemStore);
  const items = itemStore.items;

  return (
    <>
      <Navbar />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {items.map((v) => (
          <Card key={v.id} v={v} />
        ))}
      </div>
    </>
  );
};

export default Home;
