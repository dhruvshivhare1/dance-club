import { useRef, useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import logo from '../../logo.png'

const navLinks = ['About', 'Auditions', 'Contact']

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const fade = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.3))
      heroRef.current.style.opacity = String(fade)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen w-full flex flex-col">
      {/* Gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[50] px-4 sm:px-6 md:px-10 py-4 sm:py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/10 px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-5">
          <div className="flex items-center gap-3 sm:gap-4">
            <img src={logo} alt="Logo" className="h-10 sm:h-12 md:h-14 w-auto" />
          </div>

          <div className="hidden sm:flex items-center justify-end gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-medium tracking-[0.2em] text-[0.72rem] uppercase text-gray-200 transition-all duration-200 hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-x-4 top-20 z-[45] rounded-3xl border border-white/10 bg-black/95 p-4 shadow-2xl sm:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-white text-base font-medium hover:text-purple-300 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content — anchored to bottom center */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-6 pb-24">
        <FadeIn delay={0.15} y={30}>
          <h1
            className="hidden sm:block font-semibold leading-tight max-w-5xl text-white"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.4rem)', lineHeight: 1.05 }}
          >
            Making INDIA'S<br />
            BiGGEST GIRL DANCE<br />
            GROUP debut 2026
          </h1>
          <h1
            className="sm:hidden font-semibold leading-tight max-w-full text-white"
            style={{ fontSize: 'clamp(2rem, 7vw, 4.5rem)' }}
          >
            Making INDIA'S BiGGEST GIRL DANCE GROUP{' '}
            <span className="underlined-text">
              <span className="line" />
              <span>debut 2026</span>
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35} y={20}>
          <div className="flex items-center gap-4 mt-10 flex-wrap justify-center">
            <ContactButton />
          </div>
        </FadeIn>
      </div>

      {/* Bounce Arrow */}
      <div className="relative z-10 flex justify-center pb-8">
        <ChevronDown className="w-6 h-6 text-gray-500 bounce-arrow" />
      </div>
    </section>
  )
}

export default HeroSection
