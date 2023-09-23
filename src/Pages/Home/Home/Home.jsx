import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Category/Catagory";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimoials/Testimonials";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss |  Home</title>
            </Helmet>
            <Banner/>
            <Catagory/>
            <PopularMenu/>
            <Featured/>
            <Testimonials/>
        </>
    );
};

export default Home;