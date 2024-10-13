import {Event, EventListResponseDataItem} from "@/endpoints/gubenProdSchemas";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EventCardProps {
    event: EventListResponseDataItem;
}

export const EventCard = ({event}: EventCardProps) => {
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
                        <div>{event.attributes?.startDate}</div>
                    </div>
                    <div>
                        <div>End date</div>
                        <div>{event.attributes?.endDate}</div>
                    </div>

                </CardContent>
            </Card>
        </>
    )
}
