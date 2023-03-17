import './reset.css'
import { useEffect, useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';


export default function App() {

    // Mobile detection
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const isMobile = width <= 768;

    return (<>
        <About />
        {isMobile ? <MobileFooter /> : <Footer />}
    </>)

};