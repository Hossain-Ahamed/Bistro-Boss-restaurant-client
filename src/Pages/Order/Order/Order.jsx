import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import CoverPhoto from '../../Shared/CoverPhoto/CoverPhoto';
// import tabs 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../../../components/ScrollToTop/ScrollToTop';


const Order = () => {

    const categories = ['salads', 'pizza', 'soup', 'desserts', 'drinks'];
    const { category } = useParams();

    let initialIndex = 0;
    if (category && categories.indexOf(category) !== -1) {
        initialIndex = categories.indexOf(category)
    }


    const [tabIndex, setTabIndex] = useState(initialIndex);

    const {menu} = useMenu();


    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>


            <Helmet>
                <title>Bistro Boss | {categories[initialIndex].toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase())}</title>
            </Helmet>
            <CoverPhoto
                img={orderCoverImg}
                title="Our Shop"
                msg="WOUL YOU LIKE TO TRY A DISH?"
            />

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel><OrderTab items={salad} /></TabPanel>
                <TabPanel><OrderTab items={pizza} /></TabPanel>
                <TabPanel><OrderTab items={soup} /></TabPanel>
                <TabPanel><OrderTab items={dessert} /></TabPanel>
                <TabPanel><OrderTab items={drinks} /></TabPanel>

            </Tabs>
            <ScrollToTop />
        </div>
    );
};

export default Order;