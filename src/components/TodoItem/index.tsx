import { useState } from 'react'
import { Pressable, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from '@expo/vector-icons';
import colors from '../../theme/colors';
import { styles } from './styles';

interface TodoItemProps {
    description: string,
    active?: boolean,
    onPress: () => void;
    onRemove: () => void
}

export function TodoItem({
    description,
    active,
    onPress,
    onRemove
}: TodoItemProps){

    const [checked, setChecked] = useState(active || false)

    const onPressItem = (isChecked: boolean) => {
        setChecked(isChecked)
        onPress()
    }

    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={20}
                isChecked={checked}
                text={description}
                textStyle={styles.description}
                fillColor={checked ? colors['purple'] : colors['blue']}
                unfillColor={colors['gray.400']}
                iconStyle={{ borderColor: "red" }}
                onPress={onPressItem}
            />

            <Feather name="trash-2" size={24} color={colors['gray.300']} onPress={onRemove}/>
        </View>
    )
}