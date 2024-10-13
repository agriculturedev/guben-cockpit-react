import {DateRangeFilter} from "@/components/filters/DateRangeFilter";
import {TextFilter} from "@/components/filters/TextFilter";
import * as React from "react";
import {useEventFilters} from "@/hooks/useEventFilters";
import {CategoryFilter} from "@/components/filters/CategoryFilter";

interface Props {
    filters: [string, string][];
    setFilters: (filters: [string, string][]) => void;
}

export const EventFilterContainer = ({filters, setFilters}: Props) => {
    const {
        dateController,
        textController,
        categoryController
    } = useEventFilters(filters, setFilters);

    return (
        <div className={"flex py-2"}>
            <DateRangeFilter dateRangeFilterController={dateController}/>
            <CategoryFilter categoryFilterController={categoryController} />
            <div>
                <TextFilter textFilterController={textController}/>
            </div>
        </div>
    );
}
