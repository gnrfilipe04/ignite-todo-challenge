import { View } from "react-native";
import { styles } from "./styles";

interface Divisor {
    width?: string | number
}

export function Divisor({
    width
}: Divisor){
    return (
        <View style={[{ width: width || '100%' }, styles.divisor]}/>
    )
}