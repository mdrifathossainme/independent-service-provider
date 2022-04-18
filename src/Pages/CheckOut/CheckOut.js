import React from 'react';
import CardItem from '../../Components/CardItem/CardItem'
import './CheckOut.css'
import CardItemCkech from '../../Components/CardItem/CartItemForCk';

const CheckOut = () => {
    return (

      <div className="chek ">
              <div>
              <div className="service container">
          <h1 className='text-center my-5'> CheckOut Page</h1>  
        </div>
                <CardItemCkech/></div>
                <div className='cart-right px-4 py-5'>
                  <h4>Select Tonament: UEFA Champions Leagu</h4>
                  <h4>Yeatly Cost: $20m</h4>
                </div>
            </div>
        
    );
};

export default CheckOut;