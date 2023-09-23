import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-3'>
            { items.map((item, _idx) => <FoodCard key={_idx} item={item} />) }
        </div>
    );
};

export default OrderTab;