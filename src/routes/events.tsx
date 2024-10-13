import * as React from 'react'
import {useEffect, useMemo} from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {useGetEvents, useGetEventView} from "@/endpoints/gubenProdComponents";
import {View} from "@/components/layout/View";
import {PaginationContainer} from "@/components/DataDisplay/PaginationContainer";
import {defaultPaginationProps, usePagination} from "@/hooks/usePagination";
import {EventsList} from "@/components/events/EventsList";
import {useDateFilter} from "@/hooks/useDateFilter";
import {DateRangeFilter} from "@/components/filters/DateRangeFilter";
import {TextFilter} from "@/components/filters/TextFilter";
import {useTextFilter} from "@/hooks/useTextFilter";
import {useEventFilters} from "@/hooks/useEventFilters";
import {EventFilterContainer} from "@/components/events/EventFilterContainer";

export const Route = createFileRoute('/events')({
    component: EventComponent,
})

export interface Filters {
}

function EventComponent() {
    const {
        page,
        pageCount,
        total,
        pageSize,
        nextPage,
        previousPage,
        setPageIndex,
        setPageSize,
        setTotal,
        setPageCount
    } = usePagination();

    const [filters, setFilters] = React.useState<[string, string][]>([]);

    const queryParams = useMemo(() => {
        const query: {
            [key: string]: string | number;
        } = {"pagination[pageSize]": pageSize, "pagination[page]": page};

        filters.forEach(filter => {
            query[filter[0]] = filter[1];
        });

        return query;
    }, [filters, page, pageSize]);

    const {
        data: eventsData,
        error: eventsError,
        isLoading: eventsIsloading
    } = useGetEvents({queryParams: queryParams}, {});
    const {
        data: eventViewData,
        error: eventViewErrors,
        isLoading: eventViewIsLoading
    } = useGetEventView({queryParams: {}});

    useEffect(() => {
        // setPageSize(eventsData?.meta?.pagination?.pageSize ?? defaultPaginationProps.pageSize);
        // setPageIndex(eventsData?.meta?.pagination?.page ?? defaultPaginationProps.page);
        setTotal(eventsData?.meta?.pagination?.total ?? defaultPaginationProps.total);
        setPageCount(eventsData?.meta?.pagination?.pageCount ?? defaultPaginationProps.pageCount);
    }, [eventsData]);

    return (
        <>
            <View title={eventViewData?.data?.attributes?.Title}
                  description={eventViewData?.data?.attributes?.Description} isLoading={eventViewIsLoading}>
                <PaginationContainer nextPage={nextPage} previousPage={previousPage} setPageIndex={setPageIndex}
                                     setPageSize={setPageSize} total={total} pageCount={pageCount} pageSize={pageSize}
                                     page={page}>
                    <EventFilterContainer filters={filters} setFilters={setFilters} />
                    <EventsList events={eventsData?.data}/>
                </PaginationContainer>
            </View>
        </>
    );
}
