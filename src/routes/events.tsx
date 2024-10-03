import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {useGetEvents, useGetEventView} from "@/endpoints/gubenProdComponents";
import {View} from "@/components/layout/View";

export const Route = createFileRoute('/events')({
    component: EventComponent,
})

function EventComponent() {
    const {data: eventsData, error: eventsError, isLoading: eventsIsloading} = useGetEvents({queryParams: {}}, {});
    const {data: eventViewData, error: eventViewErrors, isLoading: eventViewIsLoading} = useGetEventView({queryParams: {}});

    return (
        <>
            <View title={eventViewData?.data?.attributes?.Title} description={eventViewData?.data?.attributes?.Description}>Events</View>
        </>
    );
}
