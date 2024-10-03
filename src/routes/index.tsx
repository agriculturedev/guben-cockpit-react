import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {useGetHomeView, useGetProjects} from "@/endpoints/gubenProdComponents";

export const Route = createFileRoute('/')({
    component: HomeComponent,
})

function HomeComponent() {

    const {data, error, isLoading} = useGetHomeView({queryParams: {}});
    
    return (
        <div className="">
            Dashboard
        </div>
    )
}
