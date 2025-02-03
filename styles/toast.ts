// Libraries Imports...
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    toastContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 12,
        marginBottom: 15,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 10,
    },
    successToast: {
        backgroundColor: "#28a745",
    },
    errorToast: {
        backgroundColor: "#dc3545",
    },
    toastIcon: {
        marginRight: 15,
    },
    toastTextContainer: {
        flexDirection: "column",
        justifyContent: "center",
    },
    toastText: {
        fontSize: 14,
        color: "#fff",
        fontFamily: "KSM",
    },
});
