import {TextFilter} from "@/components/filters/TextFilter";
import * as React from "react";
import {useProjectFilters} from "@/hooks/useProjectFilters";

interface Props {
    filters: [string, string][];
    setFilters: (filters: [string, string][]) => void;
}

export const ProjectFilterContainer = ({filters, setFilters}: Props) => {
    const {
        textController
    } = useProjectFilters(filters, setFilters);

    return (
        <div className={"flex py-2"}>
            <div>
                <TextFilter textFilterController={textController}/>
            </div>
        </div>
    );
}
