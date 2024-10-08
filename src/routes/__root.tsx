import * as React from 'react'
import { Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Navigation} from "@/components/layout/Navigation";
import "./index.css";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <div className={"min-h-dvh bg-secondary"}>
            <Navigation/>
            <QueryClientProvider client={queryClient}>
                <Outlet/>
                <ReactQueryDevtools initialIsOpen={false} position={"bottom"} />
            </QueryClientProvider>
            <TanStackRouterDevtools position="bottom-left" />
        </div>
    )
}
