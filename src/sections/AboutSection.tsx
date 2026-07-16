import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const decorativeImages = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'Moon icon',
    className: 'hidden sm:block w-[90px] md:w-[140px] lg:w-[170px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    fadeProps: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: '3D object',
    className: 'hidden sm:block w-[80px] md:w-[120px] lg:w-[150px] absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    fadeProps: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Lego icon',
    className: 'hidden sm:block w-[90px] md:w-[140px] lg:w-[170px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    fadeProps: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3D group',
    className: 'hidden sm:block w-[100px] md:w-[140px] lg:w-[180px] absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    fadeProps: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
]

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative"
      style={{ background: '#000' }}
    >
      {/* Decorative images */}
      {decorativeImages.map((img, i) => (
        <FadeIn key={i} {...img.fadeProps} className={img.className}>
          <img src={img.src} alt={img.alt} className="w-full" />
        </FadeIn>
      ))}

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
