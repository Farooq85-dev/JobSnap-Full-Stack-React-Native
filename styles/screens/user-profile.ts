// Libraries Imports..
import { StyleSheet } from "react-native";
// Local Imports..
import { colorsPalette } from "@/constants/colors";

export const styles = StyleSheet.create({
    safeareViewStyle: {
        flex: 1
    },
    scrollViewStyle: {
        flexGrow: 1
    }, headerStyle: {
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
    formContainerStyle: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
    }
}) 