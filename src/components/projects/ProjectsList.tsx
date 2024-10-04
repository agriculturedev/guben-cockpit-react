import {ProjectListResponseDataItem} from "@/endpoints/gubenProdSchemas";
import {ProjectCard} from "@/components/projects/ProjectCard";


interface ProjectsListProps {
    projects?: ProjectListResponseDataItem[];
}

export const ProjectsList = ({projects}: ProjectsListProps) => {
    return (
        <div className={"grid grid-cols-3 gap-2"}>{projects && projects.map((project, index) => <ProjectCard key={index} project={project} />)}</div>
    )
}
