import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactButton from '../components/ContactButton'
import modelImage from '../../model.png'
import logoImage from '../../logo.png'

const navLinks = ['About', 'Services', 'Auditions', 'Contact']

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.offsetTop
      const rawOffset = (window.scrollY - sectionTop) * 0.4
      setOffset(rawOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-10 py-4 md:py-6 bg-[#0C0C0C] border-b border-[#D7E2EA]/10">
        <Link to="/" className="flex-shrink-0">
          <img
            src={logoImage}
            alt="Logo"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>
        <div className="flex gap-6 md:gap-10 lg:gap-16">
          {navLinks.map((link) => {
            const target = link.toLowerCase() === 'contact' ? '/contact' : `/#${link.toLowerCase()}`
            return (
              <Link
                key={link}
                to={target}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs md:text-sm lg:text-base hover:opacity-70 transition-opacity duration-200 whitespace-nowrap"
              >
                {link}
              </Link>
            )
          })}
        </div>
      </nav>

      <section className="relative h-screen bg-[#0C0C0C] overflow-hidden">
        <div className="sticky top-[72px] h-screen flex flex-col" style={{ overflowX: 'clip' }}>
          <div ref={sectionRef} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden gap-0">
            <div
              className="flex items-center whitespace-nowrap text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem] font-bold uppercase tracking-wider text-white/60 select-none font-sans"
              style={{ transform: `translateX(${-offset}px)`, letterSpacing: '0.05em' }}
            >
              {Array.from({ length: 12 }, (_, idx) => (
                <span key={idx} className="inline-block px-6 whitespace-nowrap">
                  We Don't Rush, We Build
                </span>
              ))}
              {Array.from({ length: 12 }, (_, idx) => (
                <span key={`dup-${idx}`} className="inline-block px-6 whitespace-nowrap">
                  We Don't Rush, We Build
                </span>
              ))}        
            </div>

            <div
              className="flex items-center whitespace-nowrap text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem] font-bold uppercase tracking-wider text-white/60 select-none font-sans"
              style={{ transform: `translateX(${offset}px)`, letterSpacing: '0.05em' }}
            >
              {Array.from({ length: 10 }, (_, idx) => (
                <span key={idx} className="inline-block px-6 whitespace-nowrap">
                    ---- Making INDIA'S BiGGEST GIRL DANCE GROUP
                </span>
              ))}
              {Array.from({ length: 10 }, (_, idx) => (
                <span key={`dup-${idx}`} className="inline-block px-6 whitespace-nowrap">
                 Making INDIA'S BiGGEST GIRL DANCE GROUP 'debut 2026'
                </span>
              ))}         n
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center px-6 md:px-10 relative z-10">
            <div className="w-[65vw] max-w-[620px] sm:w-[60vw] lg:w-[52vw] xl:w-[48vw]" style={{ opacity: 1 }}>
              <img
                src={modelImage}
                alt="Hero model"
                className="w-full h-auto rounded-[1.25rem] object-contain"
                style={{ imageRendering: 'auto' }}
              />
            </div>
          </div>

          <div className="relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
            <div style={{ opacity: 1 }}>
              <p
                className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
                style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
              >
              Building the Next Generation of Pop Artists
              </p>
            </div>``

            <div style={{ opacity: 1 }}>
              <ContactButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
