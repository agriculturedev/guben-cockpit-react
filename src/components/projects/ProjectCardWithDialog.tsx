import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ProjectListResponseDataItem } from "@/endpoints/gubenProdSchemas";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { isNullOrUndefinedOrWhiteSpace } from "@/lib/stringUtils";

interface Props {
  project: ProjectListResponseDataItem;
}

export const ProjectCardWithDialog = ({ project }: Props) => {
  const hasDescription = !isNullOrUndefinedOrWhiteSpace(project.attributes?.description);

  return (
    <Dialog>
      <DialogTrigger>
        <ProjectCard project={project}/>
      </DialogTrigger>
      <DialogContent className="w-2/3 max-w-full max-h-min h-3/4 overflow-auto">
        <DialogHeader className={"flex gap-1"}>
          <DialogTitle>{project.attributes?.title}</DialogTitle>
          <div className={"rounded drop-shadow-lg relative self-center bg-transparent w-4/5"}>
            <img className={"rounded"} alt={project.attributes?.imageCaption} src={project.attributes?.imageUrl}/>
            <p className={"absolute rounded-tr rounded-bl p-1 left-0 bottom-0 backdrop-blur-sm backdrop-brightness-75 text-white"}>{project.attributes?.imageCredits}</p>
          </div>
          {hasDescription &&
						<DialogDescription>
							<div dangerouslySetInnerHTML={{ __html: project.attributes?.description! }}>
							</div>
						</DialogDescription>
          }
        </DialogHeader>
        <div dangerouslySetInnerHTML={{ __html: project.attributes?.fullText ?? "" }}>
        </div>
      </DialogContent>
    </Dialog>
  )
}
