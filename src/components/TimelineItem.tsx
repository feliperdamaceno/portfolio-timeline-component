// Components
import Pill from './Pill'

// Types
import type { Experience } from '../@types'

interface TimelineItemProps {
  experience: Experience
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative grid items-center p-6 before:-ml-[0.525rem] before:content-['•'] before:absolute before:text-4xl">
      <div className="items-center justify-between leading-none sm:flex">
        <h2 className="text-lg font-medium tracking-wide underline cursor-pointer decoration-transparent hover:decoration-current transition-[text-decoration] underline-offset-4">
          {experience.position}
        </h2>

        <small className="text-xs">
          {experience.startYear} {'→'} {experience.endYear || 'Present'}
        </small>
      </div>

      <p className="mt-2 mb-5 text-neutral-500">{experience.description}</p>

      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <Pill label={skill} />
        ))}
      </div>
    </div>
  )
}
