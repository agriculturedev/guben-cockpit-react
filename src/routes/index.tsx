import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {useGetHomeView} from "@/endpoints/gubenProdComponents";
import {View} from "@/components/layout/View";
import {DashboardTabs, TabItem} from "@/components/home/DashboardTabs";

export const Route = createFileRoute('/')({
    component: HomeComponent,
})

function HomeComponent() {
    const {data: homeViewData, error: homeViewError, isLoading: homeViewIsLoading} = useGetHomeView({queryParams: {populate: "tabs,tabs.cards"}});

    console.log(homeViewData);

    const tabItems: TabItem[] | undefined = homeViewData?.data?.attributes?.tabs?.data?.map((tab) => {
        return {
            value: tab?.attributes?.title,
            description: tab?.attributes?.title,
            content: tab?.attributes?.cards?.map((card) => {
                return (
                    <div key={card.id}>
                        <h1>{card.title}</h1>
                        <p>{card.description}</p>
                    </div>
                )
            })
        } as TabItem
    });

    console.log(tabItems);

    return (
        <>
            <View title={homeViewData?.data?.attributes?.title} description={homeViewData?.data?.attributes?.description} isLoading={homeViewIsLoading}>

                {tabItems && <DashboardTabs tabs={tabItems}/>}
            </View>
        </>
    );
}
