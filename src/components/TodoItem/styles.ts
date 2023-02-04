import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors['gray.500'],
        borderWidth: 1,
        borderColor: colors['gray.400'],
        borderRadius: 6,
        padding: 16,
        minHeight: 65,

    },
    description: {
        fontSize: RFValue(16),
        lineHeight: 22,
        paddingVertical: 5,
        color: colors['gray.100'],
        maxWidth: 270
    }
});