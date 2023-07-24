import React, { useEffect, useState } from "react";

export default function App() {
    const [windowWidth, setWindowWith] = useState(window.innerWidth)

    const handleResize = () =>{
        setWindowWith(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <div> {windowWidth} </div>
    )
}