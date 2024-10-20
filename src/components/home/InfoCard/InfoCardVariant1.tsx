import {CardsInformationCardVariant1Component} from "@/endpoints/gubenProdSchemas";
import {Button} from "@/components/ui/button";

interface Props {
    card: CardsInformationCardVariant1Component;
}

export const InfoCardVariant1 = ({card}: Props) => {
    console.log(card);
    return (
      <div className="flex flex-col bg-white p-4 gap-1 rounded-lg shadow-md">
            <h1 className="text-xl font-bold text-[#cd1421] text-center">{card.title}</h1>
            <p className="text-gray-500">{card.description}</p>

            {card.button?.url && card.button?.text && <div className={"flex justify-center"}>
	            <Button variant={"destructive"}><a href={card.button?.url} target={"_blank"}>{card.button?.text}</a></Button>
            </div>}
        </div>
    );
}
