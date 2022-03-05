import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy'
import EventList from '../../components/events/event-list'
import { Fragment } from 'react'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'

export default function FilteredEventsPage() {
  const router = useRouter()
  const center = { margin: 'auto', textAlign: 'center' }

  const filterData = router.query.slug

  if (!filterData) {
    return <p style={center}>Loaing..</p>
  }

  const numYear = +filterData[0]
  const numMonth = +filterData[1]

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return <Fragment>
      <ErrorAlert>
        <p>Invalid filter.</p>
      </ErrorAlert>
      <div style={center}>
        <Button link='/events'>Show all events</Button>
      </div>
    </Fragment>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if (!filteredEvents || !filteredEvents.length) {
    return <Fragment>
      <ErrorAlert>
        <p>No events found.</p>
      </ErrorAlert>
      <div style={center}>
        <Button link='/events'>Show all events</Button>
      </div>
    </Fragment>
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}