import './reset.css'
import { useEffect, useState } from 'react';
import Header from './components/Header';
import DesktopBody from './components/DesktopBody';
import MobileBody from './components/MobileBody';


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
    <Header isMobile={isMobile} />
    {isMobile ? <MobileBody /> : <DesktopBody />}
  </>)

};