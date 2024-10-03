import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/map')({
  component: MapComponent,
})

function MapComponent() {
  return <div className="">Map</div>
}
