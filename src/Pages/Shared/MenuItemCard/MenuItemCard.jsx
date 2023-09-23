import React from 'react';

const MenuItemCard = ({item}) => {
    const {name,image,price,recipe} = item
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius : '0px 200px 200px 200px'
            }} className='w-[120px] h-[104px] border' src={image} alt={name} />
            <div>
                <h3 className='text-xl mb-3 uppercase font-normal line-clamp-1' title={name}>{name}-------------</h3>
                <p className='text-[#737373] text-base leading-4 lg:leading-6'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
            
        </div>
    );
};

export default MenuItemCard;