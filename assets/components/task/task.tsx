import { TTaskType, checkTaskAction, removeTodoAction } from "@/assets/services/actions/add-todo-action";
import { useDispatch, useSelector } from "@/assets/utils/hooks";
import { FunctionComponent, useState } from "react";
import { Button, Text, StyleSheet } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type TPropsType = {
    task: TTaskType;
}

export const Task: FunctionComponent<TPropsType> = (props) => {
    const { task } = props;
    const dispatch = useDispatch();
    const todoList = useSelector(store => store.todo);

    const deleteTask = () => {
        dispatch(removeTodoAction(task.key, todoList));
    }

    const checkTask = () => {
        dispatch(checkTaskAction(task.key));
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={task.status ? {...styles.check, backgroundColor: '#2196F3'} : styles.check} onPress={checkTask}></TouchableOpacity>
            <Text style={task.status ? {...styles.text, textDecorationLine: 'line-through'} : styles.text}>{task.name}</Text>
            <Button title="Удалить" onPress={deleteTask} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        padding: 15
    },
    text: {
        flex: 2,
        padding: 15,
    },
    check: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: "#2196F3",
    }
})