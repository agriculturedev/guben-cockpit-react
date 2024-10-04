import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {useGetEvents, useGetEventView} from "@/endpoints/gubenProdComponents";
import {View} from "@/components/layout/View";
import {PaginationContainer} from "@/components/DataDisplay/PaginationContainer";
import {defaultPaginationProps, usePagination} from "@/hooks/usePagination";
import {EventsList} from "@/components/events/EventsList";
import {useEffect} from "react";

export const Route = createFileRoute('/events')({
    component: EventComponent,
})

function EventComponent() {
    const {page, pageCount, total, pageSize, nextPage, previousPage, setPageIndex, setPageSize,setTotal, setPageCount} = usePagination();
    const {data: eventsData, error: eventsError, isLoading: eventsIsloading} = useGetEvents({queryParams: {"pagination[pageSize]": pageSize, "pagination[page]": page}}, {});
    const {data: eventViewData, error: eventViewErrors, isLoading: eventViewIsLoading} = useGetEventView({queryParams: {}});

    useEffect(() => {
        // setPageSize(eventsData?.meta?.pagination?.pageSize ?? defaultPaginationProps.pageSize);
        // setPageIndex(eventsData?.meta?.pagination?.page ?? defaultPaginationProps.page);
        setTotal(eventsData?.meta?.pagination?.total ?? defaultPaginationProps.total);
        setPageCount(eventsData?.meta?.pagination?.pageCount ?? defaultPaginationProps.pageCount);
    }, [eventsData]);

    return (
        <>
            <View title={eventViewData?.data?.attributes?.Title} description={eventViewData?.data?.attributes?.Description} isLoading={eventViewIsLoading}>
                <PaginationContainer nextPage={nextPage} previousPage={previousPage} setPageIndex={setPageIndex} setPageSize={setPageSize} total={total} pageCount={pageCount} pageSize={pageSize} page={page}>
                    <EventsList events={eventsData?.data} />
                </PaginationContainer>
            </View>
        </>
    );
}
