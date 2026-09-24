import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        setSubmitted(false)
        setError('')

        const form = event.currentTarget
        const formData = new FormData(form)
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        if (!serviceId || !templateId || !publicKey) {
            setError('The contact form is not configured yet. Please email me directly instead.')
            return
        }

        setIsSending(true)

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.get('name'),
                    from_email: formData.get('email'),
                    message: formData.get('message'),
                    reply_to: formData.get('email'),
                },
                { publicKey },
            )

            setSubmitted(true)
            form.reset()
        } catch {
            setError('Your message could not be sent. Please try again or email me directly.')
        } finally {
            setIsSending(false)
        }
    }

    return (
        <section
            id='contact'
            className='relative overflow-hidden bg-[#050816] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32'
        >
            <div className='absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-500/15 blur-[120px]' />
            <div className='absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]' />

            <div className='relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24'>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className='mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
                        <span className='h-px w-10 bg-cyan-300' />
                        Let&apos;s connect
                    </p>
                    <h2 className='text-4xl font-black leading-tight sm:text-5xl lg:text-6xl'>
                        Have an idea?
                        <span className='block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent'>
                            Let&apos;s make it real.
                        </span>
                    </h2>
                    <p className='mt-6 max-w-md text-base leading-8 text-slate-400 sm:text-lg'>
                        I&apos;m always open to discussing new projects, creative ideas,
                        or opportunities to be part of your vision.
                    </p>

                    <div className='mt-10 space-y-5'>
                        <a
                            href='mailto:anirbankhanra.dev@gmail.com'
                            className='group block text-lg font-semibold text-white transition-colors hover:text-cyan-300'
                        >
                            anirbankhanra.dev@gmail.com
                            <span className='mt-2 block h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full' />
                        </a>
                        <p className='text-sm uppercase tracking-[0.2em] text-slate-500'>
                            Kolkata, India · Available worldwide
                        </p>
                    </div>

                    <div className='mt-10 flex gap-3'>
                        <a
                            href='https://github.com/Anirban126'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='GitHub'
                            className='rounded-full border border-white/15 bg-white/5 p-3 text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-300/60 hover:text-white'
                        >
                            <FaGithub />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/anirban-khanra-221b32317/'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='LinkedIn'
                            className='rounded-full border border-white/15 bg-white/5 p-3 text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-300/60 hover:text-white'
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.12 }}
                    className='rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-9'
                >
                    <div className='mb-8 flex items-center justify-between gap-4'>
                        <div>
                            <p className='text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300'>
                                Start a conversation
                            </p>
                            <h3 className='mt-2 text-2xl font-bold'>Tell me about your project.</h3>
                        </div>
                        <FaPaperPlane className='hidden text-2xl text-cyan-300 sm:block' />
                    </div>

                    <div className='grid gap-5 sm:grid-cols-2'>
                        <label className='text-sm text-slate-400'>
                            Your name
                            <input
                                required
                                name='name'
                                type='text'
                                placeholder='Anirban Khanra'
                                className='mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-300/70'
                            />
                        </label>
                        <label className='text-sm text-slate-400'>
                            Email address
                            <input
                                required
                                name='email'
                                type='email'
                                placeholder='you@example.com'
                                className='mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-300/70'
                            />
                        </label>
                    </div>
                    <label className='mt-5 block text-sm text-slate-400'>
                        Message
                        <textarea
                            required
                            name='message'
                            rows='5'
                            placeholder='What can I help you build?'
                            className='mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-300/70'
                        />
                    </label>
                    <div className='mt-6 flex flex-wrap items-center gap-4'>
                        <button
                            type='submit'
                            disabled={isSending}
                            className='inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold shadow-lg shadow-cyan-500/20 transition-transform hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60'
                        >
                            {isSending ? 'Sending...' : 'Send message'}
                            <FaArrowRight className='text-sm' />
                        </button>
                        {submitted && (
                            <p className='text-sm text-emerald-300'>
                                Message sent successfully.
                            </p>
                        )}
                        {error && <p className='text-sm text-rose-300'>{error}</p>}
                    </div>
                </motion.form>
            </div>
        </section>
    )
}

export default Contact
