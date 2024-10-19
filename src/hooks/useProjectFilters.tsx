import {useTextFilter} from "@/hooks/useTextFilter";


export const useProjectFilters = (filters: [string, string][], setFilters: (filters: [string, string][]) => void) => {
    const textController = useTextFilter("filters[$and][0][title][$contains]", filters, setFilters);

    return {
        textController
    };
}
