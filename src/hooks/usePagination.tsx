import {useCallback, useMemo, useState} from "react";

interface PaginationProps {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
}

export const usePagination = ({page: defaultPage, pageCount: defaultPageCount, pageSize: defaultPageSize, total: defaultTotal}: PaginationProps) => {
    const [page, setPage] = useState(defaultPage);
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [total, setTotal] = useState(defaultTotal);
    const [pageCount, setPageCount] = useState(defaultPageCount);

    const nextPage = useCallback(() => {
        if (page < pageCount) {
            return page + 1;
        }
    }, [page]);
    const previousPage = useCallback(() => {
        if (page > 1) {
            return page - 1;
        }
    }, [page]);

    const setPageIndex = useCallback((index: number) => {
        if (index >= 1 && index <= pageCount) {
            setPage(index);
        }
    }, [pageCount]);

    return {
        page,
        setPage,
        pageSize,
        setPageSize,
        total,
        setTotal,
        pageCount,
        setPageCount,
        nextPage,
        previousPage,
        setPageIndex
    }
}
