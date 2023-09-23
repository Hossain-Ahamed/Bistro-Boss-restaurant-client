
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/Navbar/NavBar';
import { Toaster } from 'react-hot-toast';
import ToasterProvider from '../components/Toaster/ToasterProvider';

const Main = () => {
    const location = useLocation();
    const noHeaderFooterArray = ['/login', '/sign-up'];
    const noHeadFoot = noHeaderFooterArray.some((str) =>
        str.toLowerCase() === location.pathname.toLowerCase()
    );

    return (
        <>
            <header className={`${noHeadFoot || 'max-w-screen-xl'} mx-auto px-1  `}>
                {noHeadFoot || <NavBar />}
            </header>
            <main className={`${noHeadFoot || 'max-w-screen-xl'} mx-auto px-1 `}>
                <Outlet></Outlet>
            </main>
            {noHeadFoot || <Footer />}
            <ToasterProvider />
        </>
    );
};

export default Main;


