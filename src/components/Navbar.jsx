import React, { useEffect } from 'react'
import OverlayMenu from './OverlayMenu'
import Logo from "../assets/Logo.png"
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
    const [Visible, setVisible] = useState(true);
    const [forceVisible, setforceVisible] = useState(false);

    useEffect(() => {
        //it try to find home iN DOM
        const homeSection = document.querySelector("#home");
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setforceVisible(true);
                    setVisible(true);
                } else {
                    setforceVisible(false);
                    setVisible(false);

                }
            }, { threshold : 0.1 }
        )
        if (homeSection) observer.observe(homeSection);
        return () => {
            if (homeSection) observer.unobserve(homeSection);
        }


    }, [])

    useEffect(() => {
        const handleScroll = ()=>{
            if(window.innerWidth < 1024){
                setVisible(true);
                return;
            }
            if(forceVisible){
                setVisible(true);
                return;
            }
            setVisible(false)


        }

        window.addEventListener("scroll",handleScroll,{passive:true});


        return () => {
            window.removeEventListener("scroll",handleScroll)
        }
    }, [forceVisible])

    return (
        <>
            <div
                className='fixed left-0 top-0 z-40 hidden h-4 w-full lg:block'
                onMouseEnter={() => setVisible(true)}
                aria-hidden='true'
            />
            <nav
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => {
                    if (!forceVisible) setVisible(false)
                }}
                className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${Visible ? "translate-y-0" : "-translate-y-full"} max-lg:translate-y-0`}
            >
                <div className='flex items-center space-x-2'>
                    <img src={Logo} alt="logo" className='w-8 h-8' />
                    <div className='text-2xl font-bold text-white hidden sm:block '>Anirban Khanra</div>
                    {/* lg: means apply this from the lg breakpoint and above. */}
                </div>
                <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 ">
                    <button onClick={() => setMenuOpen(true)} className='text-white text-3xl focus:outline-none' aria-label="open Menu">

                        <IoMenu />

                    </button>
                </div>

                <div className="hidden lg:block">
                    <a href="#contact" className="bg-linear-to-r from-pink-500 to to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300">
                        Reach Out
                    </a>
                </div>
            </nav>

            <OverlayMenu isOpen={MenuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
}

export default Navbar
