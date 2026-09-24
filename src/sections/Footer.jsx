import React from 'react'
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='border-t border-white/10 bg-[#03050d] px-6 py-8 text-white sm:px-10 lg:px-16'>
            <div className='mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between'>
                <div>
                    <a href='#home' className='text-xl font-black tracking-tight'>
                        Anirban<span className='text-cyan-300'>.</span>
                    </a>
                    <p className='mt-2 text-sm text-slate-500'>
                        Building thoughtful digital experiences.
                    </p>
                </div>

                <nav className='flex flex-wrap items-center gap-5 text-sm text-slate-400'>
                    <a href='#about' className='transition-colors hover:text-cyan-300'>About</a>
                    <a href='#Projects' className='transition-colors hover:text-cyan-300'>Projects</a>
                    <a href='#contact' className='transition-colors hover:text-cyan-300'>Contact</a>
                </nav>

                <div className='flex items-center gap-3'>
                    <a
                        href='https://github.com/Anirban126'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='GitHub'
                        className='rounded-full border border-white/10 p-2.5 text-slate-400 transition-colors hover:border-cyan-300/50 hover:text-white'
                    >
                        <FaGithub />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/anirban-khanra-221b32317/'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='LinkedIn'
                        className='rounded-full border border-white/10 p-2.5 text-slate-400 transition-colors hover:border-cyan-300/50 hover:text-white'
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href='#home'
                        aria-label='Back to top'
                        className='rounded-full bg-cyan-400 p-2.5 text-slate-950 transition-transform hover:-translate-y-1'
                    >
                        <FaArrowUp />
                    </a>
                </div>
            </div>
            <div className='mx-auto mt-7 max-w-7xl border-t border-white/5 pt-5 text-xs text-slate-600'>
                © {new Date().getFullYear()} Anirban Khanra. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
