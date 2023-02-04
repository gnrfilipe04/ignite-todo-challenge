import { useState } from 'react'
import { Image, TouchableOpacity, View, Alert } from "react-native";
import Logo from '../../assets/Logo.png';
import { Input } from "../Input";
import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-native-uuid'
import { TodoDTO } from '../../dto/TodoDTO';
import { styles } from "./styles";
import { useTodo } from '../../context/TodoContext';

export function Header(){

    const { addTodo } = useTodo()

    const [ description, setDescription ] = useState<string>('')

    const onAddTodo = () => {

        if(!description){
            return Alert.alert('Sem tarefa', 'Digite uma tarefa para que ela seja adicionada')
        }

        const todo: TodoDTO = {
            id: uuid.v4(),
            description,
            active: false
        }

        setDescription('')
        addTodo(todo)

    }

    return (
        <View style={styles.container}>
            <Image source={Logo} resizeMode='contain' style={styles.image}/>

            <View style={styles.containerInput}>
                <Input onSubmitEditing={onAddTodo} placeholder="Adicione uma nova tarefa" value={description} onChange={(e) => setDescription(e)}/>
                <TouchableOpacity activeOpacity={0.7} onPress={onAddTodo} style={styles.addButton}>
                    <Ionicons name="add-circle-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}