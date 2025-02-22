// Libraries Imports...
import { StyleSheet } from "react-native";
// Local Imports...
import { colorsPalette } from "@/constants/colors";

export const styles = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        padding: 20,
    },
    listHeaderMainViewStyle: {
        flexDirection: "column",
        gap: 20
    },
    listHeaderHeadViewStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listHeaderHeadLeftStyle: {
        flexDirection: "row",
        gap: 10,
    },
    listHeaderHeadImageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
    }, listheaderHeadUpperLeftTextStyle: {
        fontFamily: "KSB"
    }, listHeaderHeadLeftBottomTextStyle: {
        fontFamily: "KSS"
    }, formViewStyle: {
        flexDirection: "column",
        gap: 10,
    },
    listRenderMainViewStyle: {
        marginTop: 20,
        borderRadius: 10,
        borderColor: colorsPalette.secondaryColor,
        borderWidth: 2,
        padding: 10,
    }, listRenderJobListedViewStyle: {
        flexDirection: "column",
        gap: 20,
    }, jobTopViewStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
    }, jobLeftViewStyle: {
        flexDirection: "row",
        gap: 10,
    }, jobBgViewStyle: {
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
    }, jobCompanyTextStyle: {
        fontFamily: "KSE",
        fontSize: 18,
    }, jobLevelTypeViewStyle: {
        flexDirection: "column",
        justifyContent: "flex-start",
    }, jobTitleTextStyle: {
        fontFamily: "KSB",
        fontSize: 16,
    }, jobCompanyTitleTextStyle: {
        fontFamily: "KSM",
        fontSize: 16,
    }, jobBottomViewStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    }, jobBottomLrftViewStyle: {
        justifyContent: "flex-start",
        flexDirection: "column",
    }, jobTypeTextStyle: { fontFamily: "KSB" }
    , jobSalaryPerMonthTextStyle: { fontFamily: "KSB" },
    jobLevelTextStyle: { fontFamily: "KSB" },

})