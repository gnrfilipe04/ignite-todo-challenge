import { Image, Text, View } from "react-native";
import Clipboard from '../../assets/Clipboard.png'
import { styles } from "./styles";

export function EmptyList(){
    return (
        <View style={ styles.container }>
            <Image source={Clipboard} style={ styles.icon }/>
            <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}