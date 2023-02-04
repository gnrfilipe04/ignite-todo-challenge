import { StyleSheet, } from 'react-native';
import colors from '../../theme/colors';
import { RFPercentage } from 'react-native-responsive-fontsize'
 
export const styles = StyleSheet.create({
    container: {
      backgroundColor: colors['gray.700'],
      alignItems: 'center',
      justifyContent: 'center',
      height: RFPercentage(23)
    },
    image: {
        width: 110,
        height: 32
      },
      containerInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -25,
        right: 0,
        left: 0,

    },
    addButton: {
        marginLeft: 5,
        borderRadius: 6, 
        backgroundColor: colors['blueDark'],
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
      },
});