import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize'
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    input: {
        backgroundColor: colors['gray.500'],
        borderRadius: 6,
        padding: 16,
        width: '75%',
        height: 55,
        fontSize: RFValue(16),
        borderWidth: 1,
        color: colors['gray.100']
      },
});