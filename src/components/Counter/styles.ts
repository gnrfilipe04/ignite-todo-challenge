import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize'
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
        fontSize: RFValue(14)
      },
    containerCount: {
        borderRadius: 40,
        backgroundColor: colors['gray.400']
    },
    count: {
        color: colors['gray.100'],
        paddingHorizontal: 13,
        paddingVertical: 6,
        fontSize: RFValue(12)
    }
});