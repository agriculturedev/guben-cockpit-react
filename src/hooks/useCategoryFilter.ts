import {useEffect, useState} from "react";
import {Filters} from "@/routes/events";
import {FilterController} from "@/hooks/useDateFilter";

export interface CategoryFilterController extends FilterController {
    setCategory: (searchText: string) => void;
    category: string;
}

export const useCategoryFilter = (paramName: string, filters: [string,string][], setFilters: (filters: [string,string][]) => void) => {
    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        const newFilters = filters.filter(([key, value]) => key !== paramName);
        if (category !== '') {
            setFilters([
                ...newFilters,
                [paramName, category]
            ])
        }
    }, [category]);

    return {
        category,
        setCategory
    } as CategoryFilterController;
}
