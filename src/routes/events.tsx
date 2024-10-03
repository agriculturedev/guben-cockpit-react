import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {useGetEvents, useGetEventView} from "@/endpoints/gubenProdComponents";
import {View} from "@/components/layout/View";
import {PaginationContainer} from "@/components/DataDisplay/PaginationContainer";

export const Route = createFileRoute('/events')({
    component: EventComponent,
})

function EventComponent() {
    const {data: eventsData, error: eventsError, isLoading: eventsIsloading} = useGetEvents({queryParams: {}}, {});
    const {data: eventViewData, error: eventViewErrors, isLoading: eventViewIsLoading} = useGetEventView({queryParams: {}});

    return (
        <>
            <View title={eventViewData?.data?.attributes?.Title} description={eventViewData?.data?.attributes?.Description} isLoading={eventViewIsLoading}>
                <PaginationContainer page={eventsData?.meta?.pagination?.page ?? 1} pageSize={eventsData?.meta?.pagination?.pageSize ?? 1} pageCount={eventsData?.meta?.pagination?.pageCount ?? 1} total={eventsData?.meta?.pagination?.total ?? 1} />
            </View>
        </>
    );
}
