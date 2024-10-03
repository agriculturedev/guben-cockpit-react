import {
    PageSizePicker,
    Pagination, PaginationIndicator,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {ReactNode} from "@tanstack/react-router";

interface Props {
    nextPage: () => void;
    previousPage: () => void;
    setPageIndex: (index: number) => void;
    setPageSize: (size: number) => void;
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
    children?: ReactNode;
}

export const PaginationContainer = ({nextPage, previousPage, setPageIndex, setPageSize, pageSize, children, page, pageCount, total}: Props) => {
    return (
        <>
            <section>
                {children}
            </section>
            <Pagination>
                <PaginationIndicator>
                    <div>Page: {page} / {pageCount}, total: {total}</div>
                </PaginationIndicator>
                <PaginationPrevious href="#" onClick={() => previousPage()}/>
                <PageSizePicker onChange={(value: string) => setPageSize(parseInt(value))} value={pageSize}/>
                <PaginationNext href="#" onClick={() => nextPage()}/>
            </Pagination>
        </>
    );
}
