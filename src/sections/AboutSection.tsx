import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative"
      style={{ background: '#000' }}
    >
      {/* Content */}
      <div className="flex flex-col items-center gap-6 md:gap-10 z-10 w-full max-w-3xl">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.6rem, 8.2vw, 108px)' }}
          >
            About Us
          </h2>
        </FadeIn>

        <AnimatedText
          text="We are a structured entertainment and artist development company dedicated to building world-class performance talent from India. Through discipline, creativity, and continuous training, we discover and develop talented individuals for national and global stages working toward India's leading girl group and a professional, internationally competitive entertainment system."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-full px-4 sm:px-0"
          style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.2rem)' }}
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 z-10">
        <ContactButton />
      </div>
    </section>
  )
}

export default AboutSection
