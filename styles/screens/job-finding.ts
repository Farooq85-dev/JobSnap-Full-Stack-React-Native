// Libraries mports...
import { colorsPalette } from "@/constants/colors";
// Local mports...
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1,
    },
    flatListRenderItemStyle: {
        flex: 1,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "#fff",
        overflow: "hidden",
        elevation: 1,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        transform: [{ scale: 0.95 }],
    },
    flatListRenderIconStyle: {
        backgroundColor: "#ececee",
        borderRadius: 50,
        padding: 15,
        marginBottom: 10,
    },
    flatListRenderTextStyle: {
        fontSize: 18,
        fontFamily: "KSB",
    },
    flatListHeaderStyle: {
        backgroundColor: colorsPalette.secondaryColor,
        padding: 20,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
    flatListHeaderTextStyle: {
        fontSize: 20,
        fontFamily: "KSB",
        color: colorsPalette.tertiaryColor,
    },
    flatListFooterStyle: {
        padding: 20,
    },
    selectedJobBg: {
        borderWidth: 1,
        borderColor: colorsPalette.primaryColor
    },
});
