import EventItem from './event-item'
import classes from './event-list.module.css'

export default function EventList(props) {
  const { items } = props

  return (
    <ul className={classes.list}>
      {items.map(list => <EventItem
        key={list.id}
        id={list.id}
        title={list.title}
        location={list.location}
        date={list.date}
        image={list.image}
      />)}
    </ul>
  )
}