import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import projectOne from '../assets/img1.JPG'
import projectTwo from '../assets/img2.JPG'
import projectThree from '../assets/img3.JPG'

const projects = [
  {
    number: '01',
    title: 'Secure Authentication System',
    category: 'Full-stack authentication',
    description:
      'A secure authentication backend built with Node.js and Express, featuring MongoDB user management, password hashing, JWT and Oauth 2.0 - based authentication, and protected user routes.',
    image: projectOne,
    tags: ['React', 'Tailwind CSS', 'Express JS','Node js','JWT','OAuth 2.0'],
    accent: 'from-cyan-400/30 via-teal-400/10 to-transparent',
  },
  {
    number: '02',
    title: 'Password Manager',
    category: 'Password management application',
    description:
      'A password management application that lets users securely organize and manage their saved credentials using a React interface, local storage, and MongoDB.',
    image: projectTwo,
    tags: ['JavaScript', 'Responsive UI', 'React','MongoDB','Local Storage'],
    accent: 'from-orange-400/30 via-amber-400/10 to-transparent',
  },
  {
    number: '03',
    title: 'Spotify Clone',
    category: 'Music streaming interface',
    description:
      'A responsive music streaming interface inspired by Spotify, featuring song browsing, album artwork, playback controls, and an interactive user experience.',
    image: projectThree,
    tags: ['CSS', 'HTML','Js', 'Mobile first'],
    accent: 'from-violet-400/30 via-blue-400/10 to-transparent',
  },
]

const Projects = () => {
  return (
    <section
      id='Projects'
      className='relative overflow-hidden bg-[#050816] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32'
    >
      <div className='absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]' />
      <div className='relative z-10 mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className='mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end'
        >
          <div>
            <p className='mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
              <span className='h-px w-10 bg-cyan-300' />
              Selected work
            </p>
            <h2 className='max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl'>
              A few things I&apos;ve
              <span className='block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent'>
                built with purpose.
              </span>
            </h2>
          </div>
          <p className='max-w-sm text-base leading-7 text-slate-400'>
            Digital experiences where thoughtful interaction meets clean,
            practical development.
          </p>
        </motion.div>

        <div className='space-y-8'>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className='group relative grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 transition-colors duration-500 hover:border-cyan-300/30 lg:grid-cols-2'
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className='relative min-h-[270px] overflow-hidden border-b border-white/10 lg:min-h-[390px] lg:border-b-0 lg:border-r'>
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className='absolute inset-0 h-full w-full object-cover object-center opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-black/10' />
                <span className='absolute left-6 top-6 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white backdrop-blur-md'>
                  {project.number}
                </span>
              </div>

              <div className='relative flex flex-col justify-between p-7 sm:p-10'>
                <div>
                  <p className='text-sm font-medium uppercase tracking-[0.2em] text-cyan-300'>
                    {project.category}
                  </p>
                  <h3 className='mt-4 text-3xl font-black sm:text-4xl'>
                    {project.title}
                  </h3>
                  <p className='mt-5 max-w-lg text-base leading-7 text-slate-300'>
                    {project.description}
                  </p>
                  <div className='mt-7 flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='mt-10 flex flex-wrap items-center gap-3'>
                  <a
                    href='https://github.com/Anirban126'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:-translate-y-1'
                  >
                    View project
                    <FaArrowUpRightFromSquare className='text-xs' />
                  </a>
                  <a
                    href='https://github.com/Anirban126'
                    target='_blank'
                    rel='noreferrer'
                    aria-label={`View ${project.title} source on GitHub`}
                    className='rounded-full border border-white/15 p-3 text-slate-300 transition-colors hover:border-cyan-300/60 hover:text-white'
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
