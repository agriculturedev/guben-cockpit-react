import {ReactNode} from "@tanstack/react-router";
import {Skeleton} from "@/components/ui/skeleton";

interface Props {
    title?: string;
    description?: string;
    isLoading?: boolean;
    children?: ReactNode;
}

export const View  = ({children, title, description, isLoading}: Props) => {
    return (
        <main className={"w-full flex flex-col items-center"}>
            <article className={"w-full max-w-[1200px] pt-4 pb-4"}>
                {!isLoading && (
                    <div className={"flex gap-3 flex-col"}>
                        <h1 className={"text-accent text-h1"}>{title}</h1>
                        <div>{description}</div>
                    </div>
                )}
                {isLoading && (
                    <div className={"flex flex-col gap-2"}>
                        <Skeleton className="w-[200px] h-[20px] rounded-full" />
                        <Skeleton className="w-[400px] h-[14px] rounded-full" />
                        <Skeleton className="w-[350px] h-[14px] rounded-full" />
                        <Skeleton className="w-[300px] h-[14px] rounded-full" />
                    </div>
                )}
            </article>
            <section className={"w-full max-w-[1200px]"}>
                {children}
            </section>
        </main>
    );
}
