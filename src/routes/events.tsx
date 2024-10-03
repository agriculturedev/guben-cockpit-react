import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {useGetEvents, useGetEventView} from "@/endpoints/gubenProdComponents";

export const Route = createFileRoute('/events')({
    component: EventComponent,
})

function EventComponent() {
    const {data: eventsData, error: eventsError, isLoading: eventsIsloading} = useGetEvents({queryParams: {}});
    const {data: eventViewData, error: eventViewErrors, isLoading: eventViewIsLoading} = useGetEventView({queryParams: {}});

    return <div className="">Events</div>
}
