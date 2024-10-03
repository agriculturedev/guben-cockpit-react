import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events')({
    component: EventComponent,
})

function EventComponent() {
    return <div className="">events</div>
}
