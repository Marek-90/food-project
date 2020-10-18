import React from 'react'
// import { useMediaQuery } from 'react-responsive'
import LandingPageMain from "./components/landingPage/landingPageMain";
import Header from './components/Header/header';

const App = () => {

    // const isMobile = useMediaQuery({ query: '(max-width: 900px)' }) 
    // const mobileView = <h2>Widok Mobilny</h2>
    // const desktopView = <h2>Desktop</h2>
    return (
        <>
            <Header/>
            
            {/* {isMobile ? mobileView : desktopView} */}
            <LandingPageMain/>
            
        </>
    )
}

export default App