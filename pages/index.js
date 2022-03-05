import { getFeaturedEvents } from '../dummy'
import EventItem from '../components/events/event-list'

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventItem items={featuredEvents} />
    </div>
  )
}