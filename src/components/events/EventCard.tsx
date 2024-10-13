import { EventListResponseDataItem } from "@/endpoints/gubenProdSchemas";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EventCardProps {
    event: EventListResponseDataItem;
}

export const EventCard = ({event}: EventCardProps) => {

    const startDate = event.attributes?.startDate ? new Date(event.attributes?.startDate) : null
    const endDate = event.attributes?.endDate ? new Date(event.attributes?.endDate) : null

    return (
        <>
            <Card className={""}>
                <CardHeader>
                    <CardTitle>{event.attributes?.title}</CardTitle>
                    <CardDescription>
                        <ScrollArea className="h-24 rounded">
                            {event.attributes?.description}
                        </ScrollArea>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <div>Start date</div>
                        <div>{startDate?.formatDateTime(false)}</div>
                    </div>
                    <div>
                        <div>End date</div>
                        <div>{endDate?.formatDateTime(false)}</div>
                    </div>
                    <div>
                        <div>Kategorie</div>
                        <div>{event.attributes?.categories?.data?.map(c => c.attributes?.Name).join(", ")}</div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
