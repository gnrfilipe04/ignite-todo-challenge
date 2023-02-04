
import { useState } from 'react'
import { TextInput, View } from "react-native";
import colors from '../../theme/colors';
import { styles } from './styles';

interface InputProps {
    placeholder: string
    value: string
    onChange: (e: string) => void
    onSubmitEditing: () => void;
}

export function Input({ placeholder, value, onChange, onSubmitEditing }: InputProps){
    const [borderColor, setBorderColor] = useState(colors['gray.400'])

    const onInput = () => setBorderColor(colors['purple'])
    const offInput = () => setBorderColor(colors['gray.500'])

    return (
        <TextInput 
            placeholder={placeholder}
            cursorColor={colors['purple']} 
            placeholderTextColor={colors['gray.300']}
            onFocus={onInput}
            onBlur={offInput}
            style={[{  borderColor, }, styles.input]}
            value={value}
            onChangeText={onChange}
            onSubmitEditing={onSubmitEditing}
        />
    )
}