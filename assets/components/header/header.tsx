import { addTodoAction } from "@/assets/services/actions/add-todo-action";
import { useDispatch, useSelector } from "@/assets/utils/hooks";
import { ChangeEvent, FunctionComponent, useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native"
import uuid from 'react-native-uuid';

export const Header: FunctionComponent = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(store => store?.todo);

    const [textValue, setTextValue] = useState<string>('');
    const [placeholder, setPlaceHolder] = useState<string>('Описание задачи');

    const addTodoFunc = () => {
        if (textValue !== '') { 
            const key = uuid.v4();

            dispatch(addTodoAction({
                name: textValue,
                status: false,
                key: key
            }))

            setTextValue('')
            setPlaceHolder('Описание задачи')
        } else {
            setPlaceHolder('Введите описание!')
        }
    }

    console.log(todoList)

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={placeholder} 
                value={textValue}
                onChangeText={text => setTextValue(text)} 
                style={styles.form}
            />
            <Button title="Добавить задачку" onPress={addTodoFunc} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 15,
        alignItems: "center"
    },

    form: {
        flex: 3,
        height: 15,
        padding: 15,
        marginRight: 15
    },
})