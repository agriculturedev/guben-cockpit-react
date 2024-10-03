import {ReactNode} from "@tanstack/react-router";

interface Props {
    title?: string;
    description?: string;
    children?: ReactNode;
}

export const View  = ({children, title, description}: Props) => {
    return (
        <main className={"w-full flex flex-col items-center"}>
            <article className={"w-full max-w-[1200px]"}>
                <h1>{title}</h1>
                <div>{description}</div>
            </article>
            <section>
                {children}
            </section>
        </main>
    );
}
