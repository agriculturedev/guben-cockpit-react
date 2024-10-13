import {DateRangeFilter} from "@/components/filters/DateRangeFilter";
import {TextFilter} from "@/components/filters/TextFilter";
import * as React from "react";
import {useEventFilters} from "@/hooks/useEventFilters";

interface Props {
    filters: [string, string][];
    setFilters: (filters: [string, string][]) => void;
}

export const EventFilterContainer = ({filters, setFilters}: Props) => {
    const {
        dateController,
        textController
    } = useEventFilters(filters, setFilters);

    return (
        <div className={"flex py-2"}>
            <DateRangeFilter dateRangeFilterController={dateController}/>
            <div>
                <TextFilter textFilterController={textController}/>
            </div>
        </div>
    );
}
