import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {ProjectListResponseDataItem, ProjectView, ProjectViewResponse} from "@/endpoints/gubenProdSchemas";

interface FeaturedProjectsListProps {
    projectView?: ProjectView;
}

export const FeaturedProjectsList = ({projectView}: FeaturedProjectsListProps) => {
    console.log(projectView);
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {projectView && projectView.projects && projectView.projects.data && projectView.projects.data.map((project, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{project.attributes?.title}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

