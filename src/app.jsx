import React from 'react'
import { useMediaQuery } from 'react-responsive'

const App = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 900px)' }) 
    const mobileView = <h2>Widok Mobilny</h2>
    const desktopView = <h2>Desktop</h2>
    return (
        <>
            {isMobile ? mobileView : desktopView}
        </>
    )
}

export default App