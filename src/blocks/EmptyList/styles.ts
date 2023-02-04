import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize'
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    icon: {
        marginVertical: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: RFValue(16),
        color: colors['gray.300']        
    },
    subtitle: {
        fontSize: RFValue(16),
        color: colors['gray.300']   
    }
});