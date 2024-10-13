import { Input } from "@/components/ui/input"
import {TextFilterController} from "@/hooks/useTextFilter";

interface Props {
    textFilterController: TextFilterController;
}

export function TextFilter({textFilterController}: Props) {
    return <Input type="text" placeholder="Search" value={textFilterController.searchText} onChange={(e) => textFilterController.setSearchText(e.target.value)} />
}
