import { useSelector } from "@/assets/utils/hooks";
import { FunctionComponent } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Task } from "../task/task";



export const Tasks: FunctionComponent = () => {
    const todoList = useSelector(store => store?.todo);

    return (
        <ScrollView>
            {
                todoList?.map((item, index) => <Task task={item} key={index} />)
            }
        </ScrollView>
    )
}