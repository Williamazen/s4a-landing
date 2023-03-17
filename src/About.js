import './reset.css'
import { useEffect, useState } from 'react';
import AboutBody from './components/AboutBody';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';


export default function About() {

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

    return (
        <>
            <AboutBody />
            {isMobile ? <MobileFooter /> : <Footer />}
        </>
    )

};