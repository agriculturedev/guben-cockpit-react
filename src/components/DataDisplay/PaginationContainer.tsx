import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {usePagination} from "@/hooks/usePagination";

interface Props {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
}

export const PaginationContainer = ({page, pageCount, pageSize, total}: Props) => {

    const {previousPage, nextPage, setPageIndex} = usePagination({page, pageCount, pageSize, total});

    return (
        <>
            <section>
                Test
            </section>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={() => previousPage()}/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" onClick={() => setPageIndex(1)}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" onClick={() => nextPage()}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
}
