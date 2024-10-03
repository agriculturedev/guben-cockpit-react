import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {useGetEvents, useGetEventView} from "@/endpoints/gubenProdComponents";

export const Route = createFileRoute('/events')({
    component: EventComponent,
})

function EventComponent() {
    const {data: eventsData, error: eventsError, isLoading: eventsIsloading} = useGetEvents({queryParams: {}}, {queryKeyHashFn: () => 'events'});
    const {data: eventViewData, error: eventViewErrors, isLoading: eventViewIsLoading} = useGetEventView({queryParams: {}});

    console.log(eventsData);

    return <div className="">Events</div>
}
