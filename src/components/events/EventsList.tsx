import {EventListResponseDataItem} from "@/endpoints/gubenProdSchemas";
import {EventCard} from "@/components/events/EventCard";


interface EventsListProps {
    events?: EventListResponseDataItem[];
}

export const EventsList = ({events}: EventsListProps) => {
    return (
        <div className={"grid grid-cols-3 gap-2"}>{events && events.map((event, index) => <EventCard event={event} />)}</div>
    )
}

// display: grid;
// grid-template-columns: repeat(3, 1fr);
// gap: 10px;
// padding-top: 0.5rem;
