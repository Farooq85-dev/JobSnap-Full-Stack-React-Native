// Libraries Imports...
import { Text, View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
// Local Imports...
import { styles } from "@/styles/toast";

export const toastConfig = {
  success: (internalState: any) => (
    <View style={[styles.toastContainer, styles.successToast]}>
      <Octicons
        name="bell-fill"
        size={24}
        color="white"
        style={styles.toastIcon}
      />
      <View style={styles.toastTextContainer}>
        <Text style={styles.toastText}>{internalState.text2}</Text>
      </View>
    </View>
  ),
  error: (internalState: any) => (
    <View style={[styles.toastContainer, styles.errorToast]}>
      <Octicons
        name="bell-fill"
        size={24}
        color="white"
        style={styles.toastIcon}
      />
      <View style={styles.toastTextContainer}>
        <Text style={styles.toastText}>{internalState.text2}</Text>
      </View>
    </View>
  ),
};
