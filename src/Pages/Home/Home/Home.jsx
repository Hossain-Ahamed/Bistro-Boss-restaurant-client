import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Category/Catagory";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimoials/Testimonials";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";


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
            <ScrollToTop/>
        </>
    );
};

export default Home;