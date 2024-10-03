import * as React from "react"
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"

import {cn} from "@/lib/utils"
import {ButtonProps, buttonVariants} from "@/components/ui/button"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
    <nav
        role="navigation"
        aria-label="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
    />
)
Pagination.displayName = "Pagination"

const PaginationIndicator = ({ className, ...props }: React.ComponentProps<"div">) => (
    <div
        role="paginationIndicator"
        aria-label="paginationIndicator"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
    />
)
Pagination.displayName = "PaginationIndicator"

const PageSizePicker = React.forwardRef<
    HTMLSelectElement,
    {onChange: (value: string) => void, value: number}
>(({...props}, ref) => {
    return (
        <Select onValueChange={props.onChange} defaultValue={props.value.toString()}>
            <SelectTrigger>
                <SelectValue placeholder="Pagesize" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value={"10"}>10</SelectItem>
                <SelectItem value={"25"}>25</SelectItem>
                <SelectItem value={"50"}>50</SelectItem>
                <SelectItem value={"100"}>100</SelectItem>
            </SelectContent>
        </Select>
    )
})
PageSizePicker.displayName = "PageSizePicker"

type PaginationLinkProps = {
    isActive?: boolean
} & Pick<ButtonProps, "size"> &
    React.ComponentProps<"a">

const PaginationLink = ({
                            className,
                            isActive,
                            size = "icon",
                            ...props
                        }: PaginationLinkProps) => (
    <a
        aria-current={isActive ? "page" : undefined}
        className={cn(
            buttonVariants({
                variant: isActive ? "outline" : "ghost",
                size,
            }),
            className
        )}
        {...props}
    />
)
PaginationLink.displayName = "PaginationLink"
const PaginationPrevious = ({
                                className,
                                ...props
                            }: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to previous page"
        size="default"
        className={cn("gap-1 pl-2.5", className)}
        {...props}
    >
        <ChevronLeftIcon className="h-4 w-4"/>
    </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
                            className,
                            ...props
                        }: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to next page"
        size="default"
        className={cn("gap-1 pr-2.5", className)}
        {...props}
    >
        <ChevronRightIcon className="h-4 w-4"/>
    </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

export {
    Pagination,
    PageSizePicker,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationIndicator
}
