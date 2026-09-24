import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa'

const highlights = [
    {
        icon: FaCode,
        title: 'Clean code',
        description: 'Turning ideas into clean, maintainable solutions built for the long run.',
    },
    {
        icon: FaLightbulb,
        title: 'Creative ideas',
        description: 'Turning rough concepts into engaging experiences.',
    },
    {
        icon: FaRocket,
        title: 'Always learning',
        description: 'Growing with every project, challenge, and release.',
    },
]

const About = () => {
    return (
        <section
            id='about'
            className='relative flex min-h-screen items-center overflow-hidden bg-black px-6 py-24 text-white sm:px-10 lg:px-16'
        >
            <div className='absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl' />
            <div className='absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl' />

            <div className='relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7 }}
                    className='relative mx-auto w-full max-w-md'
                >
                    <div className='absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-blue-500/10 to-violet-600/30 blur-xl' />

                    <div className='relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-7 shadow-2xl shadow-cyan-950/40 backdrop-blur-sm sm:p-9'>
                        <span className='absolute right-8 top-8 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_6px_rgba(34,211,238,0.45)]' />

                        <p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
                            A little about me
                        </p>
                        <h3 className='mt-7 text-3xl font-black leading-tight sm:text-4xl'>
                            Building Full Stack
                            <span className='block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent'>
                                Website
                            </span>
                        </h3>

                        <div className='my-8 h-px bg-gradient-to-r from-cyan-400/70 via-white/20 to-transparent' />

                        <div className='grid grid-cols-2 gap-6 justify-center '>
                            <div>
                                <p className='text-3xl font-bold text-white'>3+</p>
                                <p className='mt-1 text-sm text-slate-400'>Projects built</p>
                            </div>
                            <div>
                                <p className='text-3xl font-bold text-white'><img src="job.svg" alt="" className='invert-100' /></p>
                                <p className='mt-1 text-sm text-slate-400'>Seeking for Intership Opportunity</p>
                            </div>
                        </div>

                        <div className='mt-9 flex flex-wrap gap-2'>
                            {['React', 'JavaScript', 'Tailwind CSS', 'Node.js'].map((skill) => (
                                <span
                                    key={skill}
                                    className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    {/* <p className='mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
                        <span className='h-px w-10 bg-cyan-300' />
                        About me-
                    </p> */}

                    <h2 className='max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl'>
                        Learning, building
                        <span className='block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent'>
                            becoming a better developer.
                        </span>
                    </h2>

                    <p className='mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg'>
                        I’m Anirban Khanra, a CSE student at Netaji Subhash Engineering College, pursuing B.Tech (2028). I build user-focused applications and strengthen my problem-solving skills through C++ and DSA.


                        
                    </p>
                    <p className='mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg'>
                        My experience spans modern web development with React, JavaScript, HTML, CSS, Tailwind CSS, Node.js, Express.js, and MongoDB, along with Git and GitHub. I’m currently focused on growing as a full-stack and backend developer, building projects that are clean, maintainable, and practical.
                    </p>

                    <div className='mt-6 inline-flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-500/5 px-4 py-3 shadow-[0_0_20px_rgba(34,211,238,0.08)]'>
                        <span className='text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300'>CGPA</span>
                        <span className='text-lg font-bold text-white'>8.5 </span>
                    </div>

                    <div className='mt-9 grid gap-5 sm:grid-cols-3'>
                        {highlights.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className='rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-white/10'
                            >
                                <Icon className='text-xl text-cyan-300' />
                                <h3 className='mt-3 font-semibold text-white'>{title}</h3>
                                <p className='mt-2 text-sm leading-6 text-slate-400'>{description}</p>
                            </div>
                        ))}
                    </div>

                    <a
                        href='#contact'
                        className='mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:-translate-y-1'
                    >
                        Let&apos;s work together
                        <FaArrowRight className='text-sm' />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default About
