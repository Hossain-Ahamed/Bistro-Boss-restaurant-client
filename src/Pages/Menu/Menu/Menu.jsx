import React from 'react';
import { Helmet } from 'react-helmet-async';
import CoverPhoto from '../../Shared/CoverPhoto/CoverPhoto';
import img from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import menuImg from '../../../assets/menu/menu-bg.png';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();


    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <>
            <Helmet>
                <title>Bistro Boss |  Menu</title>
            </Helmet>

            <CoverPhoto img={img} title={"Our menu"} msg={"Would you like to try a dish?"} />
            <SectionTitle subheading="Don't Miss" heading="Today's Offer" />


            {/* offered  */}

            <MenuCategory items={offered} title="Offered"  msg="loremdsf asajkldasf dsajflksier fdasjfd"  />


            {/* dessert  */}

            <MenuCategory  img={dessertImg} items={dessert}  title="Desserts" msg="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />


            {/* Pizza  */}

            <MenuCategory img={pizzaImg}  items={pizza} title="Pizza" msg="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            {/* salad  */}

            <MenuCategory  img={saladImg}  items={salad}  title="Salads" msg="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  />
            {/* Soup  */}

            <MenuCategory  img={soupImg} items={soup}  title="Salads" msg="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  />


        </>
    );
};

export default Menu;