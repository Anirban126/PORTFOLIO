import { motion, useReducedMotion } from 'framer-motion'
import {
    SiCplusplus,
    SiCss,
    SiExpress,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiMongodb,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
} from 'react-icons/si'

const skillGroups = [
    {
        title: 'Frontend',
        description: 'Interfaces that feel fast, clear, and effortless to use.',
        skills: [
            { name: 'React', icon: SiReact, color: 'text-cyan-300' },
            { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
            { name: 'HTML5', icon: SiHtml5, color: 'text-orange-400' },
            { name: 'CSS3', icon: SiCss, color: 'text-blue-400' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        ],
    },
    {
        title: 'Backend & data',
        description: 'Practical server-side systems and data-driven features.',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
            { name: 'Express.js', icon: SiExpress, color: 'text-slate-200' },
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-300' },
            { name: 'NextJS', icon: SiNextdotjs, color: 'text-green-300' }
        ],
    },
    {
        title: 'Tools & foundations',
        description: 'The tools and fundamentals behind reliable development.',
        skills: [
            { name: 'Git', icon: SiGit, color: 'text-orange-400' },
            { name: 'GitHub', icon: SiGithub, color: 'text-white' },
            { name: 'DSA (C++)', icon: SiCplusplus, color: 'text-blue-300' },
        ],
    },
]

const marqueeSkills = skillGroups.flatMap((group) => group.skills)

const Skills = () => {
    const shouldReduceMotion = useReducedMotion()

    return (
        <section
            id='skills'
            className='relative overflow-hidden bg-black px-6 py-24 text-white sm:px-10 lg:px-16'
        >
            <div className='absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl' />
            <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl' />

            <div className='relative z-10 mx-auto max-w-7xl'>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7 }}
                    className='mx-auto max-w-3xl text-center'
                >
                    <p className='mb-4 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
                        {/* <span className='h-px w-10 bg-cyan-300' />
                        My toolkit
                        <span className='h-px w-10 bg-cyan-300' /> */}
                    </p>
                    <h2 className='text-4xl font-black leading-tight sm:text-5xl lg:text-6xl'>
                        Skills that turn ideas into
                        <span className='block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent'>
                            real experiences.
                        </span>
                    </h2>
                    <p className='mt-6 text-base leading-8 text-slate-400 sm:text-lg'>
                        A growing collection of technologies I use to design, build, and ship
                        thoughtful digital products.
                    </p>
                </motion.div>

                <div
                className='mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] py-4'
                aria-label='Technologies I use'
                >
                <motion.div
                    className='flex w-max items-center gap-4 pr-4'
                    initial={shouldReduceMotion ? false : { x: '-50%' }}
                    animate={{ x: 0 }}
                    transition={
                        shouldReduceMotion
                            ? { duration: 0 }
                            : { duration: 24, ease: 'linear', repeat: Infinity }
                    }
                >
                    {[...marqueeSkills, ...marqueeSkills].map(
                        ({ name, icon: Icon, color }, index) => (
                            <div
                                key={`${name}-${index}`}
                                className='flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200'
                            >
                                <Icon className={`text-lg ${color}`} aria-hidden='true' />
                                {name}
                            </div>
                        ),
                    )}
                </motion.div>
                </div>

                <div className='mt-16 grid gap-6 lg:grid-cols-3'>
                    {skillGroups.map((group, groupIndex) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: groupIndex * 0.12 }}
                            className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/10 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] sm:p-7'
                        >
                            <div className='absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-colors duration-300 group-hover:bg-cyan-400/20' />
                            <div className='relative'>
                                <div className='mb-7 flex items-start justify-between gap-4'>
                                    <div>
                                        <p className='text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300'>
                                            0{groupIndex + 1}
                                        </p>
                                        <h3 className='mt-2 text-2xl font-bold'>{group.title}</h3>
                                    </div>
                                    <span className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400'>
                                        {group.skills.length} skills
                                    </span>
                                </div>
                                <p className='mb-7 min-h-12 text-sm leading-6 text-slate-400'>
                                    {group.description}
                                </p>

                                <div className='space-y-5'>
                                    {group.skills.map(({ name, icon: Icon, level, color }) => (
                                        <div key={name} className='group/skill'>
                                            <div className='mb-2 flex items-center justify-between text-lg'>
                                                <span className='flex items-center gap-3 font-medium text-slate-200'>
                                                    <Icon className={`text-2xl ${color}`} aria-hidden='true' />
                                                    {name}
                                                </span>
                                                {/* <span className='text-xs text-slate-500'>{level}%</span> */}
                                            </div>
                                            {/* <div className='h-1.5 overflow-hidden rounded-full bg-white/10'>
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.25 + groupIndex * 0.1 }}
                                                    className='h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500'
                                                />
                                            </div> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className='mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-violet-500/10 p-6 text-center sm:flex-row sm:px-8 sm:text-left'
                >
                    <div>
                        <p className='text-lg font-semibold text-white'>Always learning, always building.</p>
                        <p className='mt-1 text-sm text-slate-400'>
                            Currently exploring backend architecture and better user experiences.
                        </p>
                    </div>
                    <a
                        href='#contact'
                        className='shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:-translate-y-1'
                    >
                        Let&apos;s connect
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
