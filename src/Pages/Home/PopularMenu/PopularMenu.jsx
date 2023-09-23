import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItemCard from '../../Shared/MenuItemCard/MenuItemCard';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menu, loading] = useMenu();

    const popular = menu.filter(i => i?.category === 'popular');
    return (
        <section className='mb-12  flex flex-col items-center'>
            <SectionTitle
                heading='From our menu'
                subheading='Check it out'
            />


            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                {
                    popular.map(item => <MenuItemCard
                        key={item._id}
                        item={item}
                    ></MenuItemCard>)
                }
            </div>


            <button className='btn btn-outline border-0 border-b-4 mt-4'>
                Visit Our Menu
            </button>


        </section>
    );
};

export default PopularMenu;