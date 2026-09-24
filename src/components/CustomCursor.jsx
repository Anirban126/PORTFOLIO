import { transform } from 'framer-motion'
import React from 'react'
import { useEffect,useState } from 'react'
const CustomCursor = () => {
    const [Position, setPosition] = useState({x:0,y:0})

    useEffect(() => {
        //once this useeffect is run this function is defined
        const moveHandler =(e) =>{
            setPosition({x : e.clientX, y: e.clientY})
        }
        window.addEventListener("mousemove",moveHandler);
        return ()=> window.removeEventListener("mousemove",moveHandler)
    },[])
    //using this style we can move the div
    return (
        <div className='pointer-events-none fixed top-0 left-0 z-9999' style={{transform : `translate(${Position.x - 40}px,${Position.y - 40}px)`}}>
            
            <div className='w-20 h-20 rounded-full bg-linear-to-r from-pink-500 to-blue-500 blur-3xl opacity-80'>

            </div>
        </div>
    )
}

export default CustomCursor

