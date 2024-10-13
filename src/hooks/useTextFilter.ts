import {useEffect, useState} from "react";
import {Filters} from "@/routes/events";
import {FilterController} from "@/hooks/useDateFilter";

export interface TextFilterController extends FilterController {
    setSearchText: (searchText: string) => void;
    searchText: string;
}

/**
 *
 * @param {string} paramName the name of the search parameter that will be used to filter the data.
 *      This value will be appended to the query url.
 * @returns DateFilterController
 */
export const useTextFilter = (paramName: string, filters: [string,string][], setFilters: (filters: [string,string][]) => void) => {
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        const newFilters = filters.filter(([key, value]) => key !== paramName);
        setFilters([
            ...newFilters,
            [paramName, searchText]
        ])
    }, [searchText]);

    useEffect(() => {
        console.log("searchText updated", searchText)
    }, [searchText]);

    return {
        searchText,
        setSearchText
    } as TextFilterController;
}
