import { Text, View } from "react-native";
import { styles } from "./styles";

interface CounterProps {
    label: string,
    count: number,
    colorLabel: string;
}

export function Counter({
    count,
    label,
    colorLabel
}: CounterProps){
    return (
        <View style={styles.container}>
            <Text style={[{ color: colorLabel }, styles.label ]}>{label}</Text>
            <View style={ styles.containerCount }>
                <Text style={styles.count}>{count}</Text>
            </View>
        </View>
    )
}