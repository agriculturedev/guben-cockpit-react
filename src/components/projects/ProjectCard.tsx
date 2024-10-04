import {ProjectListResponseDataItem} from "@/endpoints/gubenProdSchemas";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectCardProps {
    project: ProjectListResponseDataItem;
}

export const ProjectCard = ({project}: ProjectCardProps) => {
    return (
        <>
            <Card className={""}>
                <CardHeader>
                    <CardTitle>{project.attributes?.title}</CardTitle>
                    <CardDescription>
                        <ScrollArea className="h-24 rounded">
                            {project.attributes?.description}
                        </ScrollArea>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </>

    )
}
