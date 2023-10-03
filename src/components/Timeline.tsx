// Components
import TimelineItem from './TimelineItem'

// Data
import experiences from '../data/experiences.json'

// Types
import type { Experience } from '../@types'

export default function Timeline() {
  return (
    <section className="grid gap-6 border-l-2 border-neutral-600 h-fit">
      {experiences.map((experience: Experience) => (
        <TimelineItem experience={experience} />
      ))}
    </section>
  )
}
