import * as React from 'react'
import {Link, Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Outlet/>
            </QueryClientProvider>
            <TanStackRouterDevtools position="bottom-right"/>
        </>
    )
}
