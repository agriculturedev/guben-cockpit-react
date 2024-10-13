import * as React from "react";
import {useDateFilter} from "@/hooks/useDateFilter";
import {useTextFilter} from "@/hooks/useTextFilter";
import {useCategoryFilter} from "@/hooks/useCategoryFilter";


export const useEventFilters = (filters: [string, string][], setFilters: (filters: [string, string][]) => void) => {
    const dateController = useDateFilter([
        "filters[$and][0][$or][0][$and][0][startDate][$gte]",
        "filters[$and][0][$or][0][$and][1][startDate][$lte]",
        "filters[$and][0][$or][1][$and][0][endDate][$gte]",
        "filters[$and][0][$or][1][$and][1][endDate][$lte]",
        "filters[$and][0][$or][2][$and][0][startDate][$lte]",
        "filters[$and][0][$or][2][$and][1][endDate][$gte]",
        "filters[$and][0][$and][0][startDate][$gte]",
        "filters[$and][0][$and][0][endDate][$lte]"
    ], filters, setFilters);
    const textController = useTextFilter("filters[$and][0][title][$contains]", filters, setFilters);
    const categoryController = useCategoryFilter("filters[categories][Name][$eq]", filters, setFilters);

    return {
        dateController,
        textController,
        categoryController
    };
}
