import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,  
      backgroundColor: colors['gray.600'],
    },
    countersContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginTop: 60
    },
    containerDivisor: {
      marginTop: 20,
      justifyContent: 'center',
      marginHorizontal: 20,
      marginBottom: 48
    }
});