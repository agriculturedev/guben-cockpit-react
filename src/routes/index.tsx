import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {useGetProjects} from "@/endpoints/gubenProdComponents";

export const Route = createFileRoute('/')({
    component: HomeComponent,
})

function HomeComponent() {

    const values = useGetProjects({queryParams: {}});

    console.log(values);

    return (
        <div className="">
            Dashboard
        </div>
    )
}