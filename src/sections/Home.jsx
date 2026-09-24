import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import ParticleBackground from '../components/ParticleBackground'
import profileImage from '../assets/avator.png'

const techStack = ['React', 'Tailwind CSS', 'JavaScript', 'Node js', 'MongoDB']
const roles = ['Web Developer', 'Software Developer']

const Home = () => {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setText(currentRole.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1200)
        }
      } else {
        if (charIndex > 0) {
          setText(currentRole.slice(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 70 : 120)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">
      <ParticleBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="mb-3  flex items-center  gap-2  font-medium tracking-[0.25em] text-cyan-300 ">
            <span className='text-5xl mr-1'>{text}</span>
            <span className="inline-block h-10 w-[4px] animate-pulse bg-cyan-300 align-middle" />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400  glowing-dot" />
            Available for internship and freelancing
            
          </div>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Anirban Khanra
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
          A Web Developer focused on building modern, responsive, and user-friendly websites. I specialize in React, JavaScript, and Tailwind CSS, with experience in Node.js, Express.js, MongoDB, and REST APIs. I turn ideas into clean, functional, and visually engaging web experiences.

          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s Talk
              <FaArrowRight />
            </a>

            <a
              href="#Projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition-colors duration-300 hover:bg-white/10"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-slate-300">
            <a
              href="https://github.com/Anirban126"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition-colors hover:border-cyan-400/60 hover:text-white"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/anirban-khanra-221b32317/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition-colors hover:border-blue-400/60 hover:text-white"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition-colors hover:border-emerald-400/60 hover:text-white"
              target='_blank'
            >
              <FaDownload />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -left-8 top-12 h-24 w-24 rounded-full bg-cyan-500/30 blur-3xl" />
          <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-violet-500/30 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur-sm">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
              <img
                src={profileImage}
                alt="Anirban"
                className="h-[520px] w-full object-cover object-center"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute -left-4 bottom-10 rounded-2xl border border-cyan-400/40 bg-slate-900/90 px-4 py-3 shadow-lg shadow-cyan-900/50 backdrop-blur"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-cyan-300">Specialized in</div>
            <div className="mt-2 text-sm font-semibold text-white">Modern Web Design </div>
            <div className="mt-2 text-sm font-semibold text-white">Frontend & Backend </div>
            <div className="mt-2 text-sm font-semibold text-white"> Developement </div>


          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute -right-2 top-10 rounded-2xl border border-violet-400/40 bg-slate-900/90 px-4 py-3 shadow-lg shadow-violet-900/50 backdrop-blur"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-violet-300">Experience</div>
            <div className="mt-2 text-sm font-semibold text-white">2+ Years</div>
          </motion.div> */}
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center px-6">
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
          {techStack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
