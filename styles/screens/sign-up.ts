// Libraries Imports...
import { StyleSheet } from "react-native";
// Local Imports...
import { colorsPalette } from "@/constants/colors";

export const styles = StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1
    },
    scrollViewStyle: {
        flexGrow: 1
    },
    headerStyle: {
        backgroundColor: colorsPalette.secondaryColor,
        padding: 20,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
    headerTextStyle: {
        fontSize: 20,
        color: colorsPalette.tertiaryColor,
        fontFamily: "KSB",
    },
    inputContainerStyle: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 20,
        gap: 10,
    },
    btnAndSpanContainerStyle: {
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
    },
    textContainerStyle: {
        marginBottom: 10,
        color: colorsPalette.secondaryColor,
        fontSize: 14,
        fontFamily: "KSB",
    },
    spanLikeTextStyle: {
        color: colorsPalette.primaryColor,
        fontFamily: "KSE",
    }
});
