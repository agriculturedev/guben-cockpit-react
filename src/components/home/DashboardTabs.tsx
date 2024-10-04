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
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                {tabs.map((tab, index) => <TabsTrigger key={index} value={tab.value}>{tab.description}</TabsTrigger>)}
            </TabsList>
            {tabs.map((tabContent, index) => <TabsContent value={tabContent.value}>{tabContent.content}</TabsContent>)}
        </Tabs>
    )
}
