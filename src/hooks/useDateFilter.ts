import {useEffect, useState} from "react";
import {Filters} from "@/routes/events";


export enum DateFilterPreset {
    TODAY = 'today',
    TOMORROW = 'tomorrow',
    THIS_WEEK = 'this_week',
    NEXT_WEEK = 'next_week',
    THIS_MONTH = 'this_month',
    NEXT_MONTH = 'next_month',
    THIS_YEAR = 'this_year',
}

export interface FilterController {

}

export interface DateFilterController extends FilterController {
    setSpecificRange: (range: [Date, Date] | null) => void;
    selectedPreset: DateFilterPreset | null;
    setSelectedPreset: (preset: DateFilterPreset) => void;
    setUsePreset: (usePreset: boolean) => void;
}

/**
 *
 * @param {string} paramName the name of the search parameter that will be used to filter the data.
 *      This value will be appended to the query url.
 * @returns DateFilterController
 */
export const useDateFilter = (paramName: string[], filters: [string,string][], setFilters: (filters: [string,string][]) => void) => {
    const [selectedPreset, setSelectedPreset] = useState<DateFilterPreset | null>(null);
    const [specificRange, setSpecificRange] = useState<[Date, Date] | null>(null);
    const [usePreset, setUsePreset] = useState<boolean>(true);

    const [dates, setDates] = useState<[Date,Date] | Date | null>(null);

    useEffect(() => {
        const newFilters = filters.filter(([key, value]) => !paramName.includes(key));
        if (dates && dates instanceof Array) {
            setFilters([
                ...newFilters,
                ["filters[$and][0][$or][0][$and][0][startDate][$gte]", dates[0].toISOString()],
                ["filters[$and][0][$or][0][$and][1][startDate][$lte]", dates[1].toISOString()],
                ["filters[$and][0][$or][1][$and][0][endDate][$gte]", dates[0].toISOString()],
                ["filters[$and][0][$or][1][$and][1][endDate][$lte]", dates[1].toISOString()],
                ["filters[$and][0][$or][2][$and][0][startDate][$lte]", dates[0].toISOString()],
                ["filters[$and][0][$or][2][$and][1][endDate][$gte]", dates[1].toISOString()],
            ])
        } else if (dates && dates instanceof Date) {
            setFilters([
                ...newFilters,
                ["filters[$and][0][$and][0][startDate][$gte]", dates.toISOString()],
                ["filters[$and][0][$and][0][endDate][$lte]", dates.toISOString()],
            ])
        }
    }, [filters, selectedPreset]);

    useEffect(() => {
        const today = new Date();
        let date: [Date, Date] | Date | null = null;
        switch (selectedPreset) {
            case DateFilterPreset.TODAY:
                date = today;
                break;
            case DateFilterPreset.TOMORROW:
                const tomorrow = new Date(today);
                tomorrow.setDate(today.getDate() + 1);
                date = tomorrow;
                break;
            case DateFilterPreset.NEXT_WEEK:
                const startOfNextWeek = new Date(today);
                startOfNextWeek.setDate(today.getDate() + (7 - today.getDay()) + 1);
                const endOfNextWeek = new Date(startOfNextWeek);
                endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);
                date = [startOfNextWeek, endOfNextWeek];
                break;
            // Add more cases as needed
            case DateFilterPreset.THIS_WEEK:
                const startOfWeek = new Date(today);
                startOfWeek.setDate(today.getDate() - today.getDay());
                const endOfWeek = new Date(startOfWeek);
                endOfWeek.setDate(startOfWeek.getDate() + 6);
                date = [startOfWeek, endOfWeek];
                break;
            case DateFilterPreset.THIS_MONTH:
                const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
                date = [startOfMonth, endOfMonth];
                break;
            case DateFilterPreset.NEXT_MONTH:
                const startOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
                const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);
                date = [startOfNextMonth, endOfNextMonth];
                break;
            case DateFilterPreset.THIS_YEAR:
                const startOfYear = new Date(today.getFullYear(), 0, 1);
                const endOfYear = new Date(today.getFullYear(), 11, 31);
                date = [startOfYear, endOfYear];
                break;
            default:
                date = null;
        }
        setDates(date);
    }, [usePreset, specificRange, selectedPreset]);

    useEffect(() => {
        console.log("dates updated", dates)
    }, [dates]);

    return {
        specificRange,
        setSpecificRange,
        selectedPreset,
        setSelectedPreset,
        usePreset,
        setUsePreset
    } as DateFilterController;
}
