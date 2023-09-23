import React from 'react';
import MenuItemCard from '../../Shared/MenuItemCard/MenuItemCard';
import CoverPhoto from '../../Shared/CoverPhoto/CoverPhoto';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title, msg }) => {

    return (
        <div className='p-3 lg:p-8 flex flex-col items-center '>

            <div className='w-full' aria-label='cover-image'>
                {
                    (title && img) && <CoverPhoto img={img} title={title} msg={msg} />
                }
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-16' aria-label='menu-item-container'>
                {
                    items.map(item => <MenuItemCard
                        key={item._id}
                        item={item}
                    ></MenuItemCard>)
                }

        </div>


            <Link to={`/order/${title.toLowerCase()}`}>
                <button className='btn btn-outline w-full  uppercase max-w-lg  border-0 border-b-4 mt-4'>
                    Order your favorite Food
                </button>
            </Link>
        </div>
    );
};

export default MenuCategory;