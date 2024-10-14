import {ProjectListResponseDataItem} from "@/endpoints/gubenProdSchemas";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectCardProps {
    project: ProjectListResponseDataItem;
}

export const ProjectCard = ({project}: ProjectCardProps) => {
    return (
        <>
            <Card>
                <CardHeader> {/* TODO@JOREN: add an optional card Image as header which does not have padding around it, or minimal padding*/}
                    <CardTitle>{project.attributes?.title}</CardTitle>
                    <CardDescription>
                        <ScrollArea className="h-24 rounded">
                            {project.attributes?.description}
                        </ScrollArea>
                    </CardDescription>
                </CardHeader>
            </Card>
        </>
    )
}
