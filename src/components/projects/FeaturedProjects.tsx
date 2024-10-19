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
import { ProjectCardWithDialog } from "@/components/projects/ProjectCardWithDialog";

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
                            <ProjectCardWithDialog key={index} project={project}/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

