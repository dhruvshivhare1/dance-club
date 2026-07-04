import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import modelImage from '../../model.png'

const projects = [
  {
    number: '01',
    category: 'Talent Search',
    name: 'North East India Talent Search',
    description: 'A focused search to find talents in the North East Region of our Country.',
    images: {
      col1Top: modelImage,
      col1Bottom: modelImage,
      col2: modelImage,
    },
  },
  {
    number: '02',
    category: 'Open Auditions',
    name: 'Nationwide Auditions',
    description: 'Open to Indians living anywhere. Applicants from Nepal are also welcome.',
    images: {
      col1Top: modelImage,
      col1Bottom: modelImage,
      col2: modelImage,
    },
  },
]

interface ProjectCardProps {
  project: (typeof projects)[0]
  index: number
  totalCards: number
  range: [number, number]
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}

const ProjectCard = ({ project, index, totalCards, range, progress }: ProjectCardProps) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      className="h-[85vh] sticky"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 h-full flex flex-col"
        style={{
          background: '#0C0C0C',
          scale,
          transformOrigin: 'top center',
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <span
              className="hero-heading font-black"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
            >
              {project.number}
            </span>
            <span
              className="text-[#D7E2EA] font-light uppercase tracking-widest text-sm sm:text-base"
            >
              {project.category}
            </span>
            <span
              className="text-[#D7E2EA] font-medium uppercase tracking-wide"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
            >
              {project.name}
            </span>
          </div>
          <div className="flex-shrink-0 hidden sm:block">
            <LiveProjectButton label="Audition Closed" href="#audition-form" />
          </div>
        </div>

        <div className="mb-6">
          <p
            className="text-[#D7E2EA] font-light leading-relaxed opacity-70 max-w-3xl"
            style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)' }}
          >
            {project.description}
          </p>
        </div>

        {/* Image grid */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-1 min-h-0">
          {/* Left column - 40% on desktop, hidden on mobile */}
          <div className="hidden sm:flex w-[40%] flex-col gap-3 sm:gap-4">
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.images.col1Top}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden flex-1"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column - full width on mobile, 60% on desktop */}
          <div className="w-full sm:w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
            <img
              src={project.images.col2}
              alt={`${project.name} main`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const ProjectsSection = () => {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      ref={containerRef}
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 -mt-10 sm:-mt-12 md:-mt-14"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Current Auditions
        </h2>
      </FadeIn>

      {projects.map((project, i) => {
        const start = i / projects.length
        const end = (i + 1) / projects.length
        return (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={projects.length}
            range={[start, end]}
            progress={scrollYProgress}
          />
        )
      })}
    </section>
  )
}

export default ProjectsSection
