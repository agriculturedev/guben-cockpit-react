import { EventListResponseDataItem } from "@/endpoints/gubenProdSchemas";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EventCardProps {
  event: EventListResponseDataItem;
}

export const EventCard = ({event}: EventCardProps) => {

  const startDate = event.attributes?.startDate ? new Date(event.attributes?.startDate) : null
  const endDate = event.attributes?.endDate ? new Date(event.attributes?.endDate) : null
  const categories = event.attributes?.categories?.data ?? []
  const hasCategories = categories?.length > 0;
  const links = event.attributes?.urls ?? [];

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className={"text-[var(--guben-accent)]"}>{event.attributes?.title}</CardTitle>
          <CardDescription>
            <ScrollArea className="h-24 rounded">
              {event.attributes?.description}
            </ScrollArea>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className={"grid grid-cols-3 gap-2"}>
            <div className={"col-span-1 flex justify-end"}>Start date</div>
            <div className={"col-span-2"}>{startDate?.formatDateTime(false)}</div>
          </div>
          <div className={"grid grid-cols-3 gap-2"}>
            <div className={"col-span-1 flex justify-end"}>End date</div>
            <div className={"col-span-2"}>{endDate?.formatDateTime(false)}</div>
          </div>

          {hasCategories &&
              <div className={"grid grid-cols-3 gap-2"}>
                <div className={"col-span-1 flex justify-end"}>Kategorie</div>
                <div className={"col-span-2"}>{categories?.map(c => c.attributes?.Name).join(", ")}</div>
              </div>
          }

          {links.length > 0 &&
              <div className={"grid grid-cols-3 gap-2"}>
                <div className={"col-span-1 flex justify-end"}>Links</div>
                <div
                    className={"col-span-2"}>{links.filter((link: any) => link.link !== '' && link.description !== '').map((link: any, index: number) => <a className={"text-blue-700 underline"} href={link.link}>{index !== 0 && ", "}{link.description}</a>
                )}</div>
            </div>
          }

        </CardContent>
      </Card>
    </>
  )
}
