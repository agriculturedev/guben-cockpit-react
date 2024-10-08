import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ReactNode} from "@tanstack/react-router";

export interface TabItem {
    value: string;
    description: string;
    content: ReactNode;
}


interface DashboardTabsProps {
    tabs: TabItem[];
}

export const DashboardTabs = ({tabs}: DashboardTabsProps) => {
    return (
        <Tabs defaultValue="account" className="w-full flex flex-col gap-2">
            <TabsList className={"flex flex-row justify-evenly font-bold"}>
                {tabs.map((tab, index) => <TabsTrigger key={index} value={tab.value}>{tab.description}</TabsTrigger>)}
            </TabsList>
            {tabs.map((tabContent, index) => <TabsContent key={index} value={tabContent.value}>{tabContent.content}</TabsContent>)}
        </Tabs>
    )
}
