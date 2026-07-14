import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import logo from '../../logo.png'

const navLinks = ['About', 'Auditions', 'News', 'Contact']

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
        <div className="mx-auto flex w-[92%] max-w-[92rem] items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-start gap-3 sm:gap-4 pl-1">
            <img src={logo} alt="Logo" className="h-9 w-auto sm:h-10 md:h-11" />
          </div>

          <div className="hidden sm:flex items-center justify-end gap-6 md:gap-8">
            {navLinks.map((link) => (
              link === 'Contact' ? (
                <Link
                  key={link}
                  to="/contact"
                  className="font-medium tracking-[0.2em] text-[0.8rem] uppercase text-gray-200 transition-all duration-200 hover:text-white"
                >
                  {link}
                </Link>
              ) : (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="font-medium tracking-[0.2em] text-[0.8rem] uppercase text-gray-200 transition-all duration-200 hover:text-white"
                >
                  {link}
                </a>
              )
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
              link === 'Contact' ? (
                <Link
                  key={link}
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-base font-medium hover:text-purple-300 transition-colors duration-200"
                >
                  {link}
                </Link>
              ) : (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-base font-medium hover:text-purple-300 transition-colors duration-200"
                >
                  {link}
                </a>
              )
            ))}
          </div>
        </div>
      )}

      {/* Hero Content — anchored to bottom center */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-6 pb-24">
        <FadeIn delay={0.15} y={30}>
          <h1
            className="font-semibold leading-tight max-w-5xl text-white text-center"
            style={{ fontSize: 'clamp(2rem, 7vw, 4.4rem)', lineHeight: 1.2 }}
          >
            BUILDING INDIA'S NEXT POPSTARS
          </h1>
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
