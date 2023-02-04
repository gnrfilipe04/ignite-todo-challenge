import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import { Header } from "../../components/Header";
import { Counter } from "../../components/Counter";
import colors from "../../theme/colors";
import { Divisor } from "../../components/Divisor";
import { EmptyList } from "../../blocks/EmptyList";
import { styles } from "./styles";
import { TodoItem } from "../../components/TodoItem";
import { useTodo } from "../../context/TodoContext";
import { useState } from "react";
import { TodoDTO } from "../../dto/TodoDTO";
import { Visibility } from "../../components/Visibility";


export function Home(){

    const { todos, onTouchTodo, removeTodo } = useTodo()

    const allTodosCount = todos.length

    const readyTodosCount = todos.filter(todo => todo.active).length

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <Header />

            <View style={styles.countersContainer}>

                <Counter 
                    colorLabel={colors['blue']}
                    count={allTodosCount}
                    label='Criadas'
                />

                <Counter 
                    colorLabel={colors['purple']}
                    count={readyTodosCount}
                    label='Concluídas'
                />

            </View>

            <View style={ styles.containerDivisor }>
                <Divisor />
            </View>

            <Visibility
                visible={Boolean(todos.length)}
                replacement={<EmptyList />} 
                children={<FlatList 
                    data={todos}
                    keyExtractor={(item) => String(item.id)}
                    contentContainerStyle={{ marginHorizontal: 20,}}
                    renderItem={({item}) => (
                        <View style={{ marginBottom: 10 }}>
                            <TodoItem
                                onRemove={() => removeTodo(item.id)}
                                active={item.active}
                                description={item.description}
                                onPress={() => onTouchTodo(item.id)}
                            />
                        </ View>
                    )}
                />}
            />

            
            
        </View>
    )
}