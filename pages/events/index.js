import { getAllEvents } from '../../dummy'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'
import { useRouter } from 'next/router'

export default function AllEventsPage() {
  const router = useRouter()
  const events = getAllEvents()

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  )
}