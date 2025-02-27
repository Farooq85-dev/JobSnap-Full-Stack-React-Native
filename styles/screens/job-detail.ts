// Libraries Imports...
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create(
    {
        manScreenContainerStyle: {
            flex: 1,
            padding: 20,
        }, scrollViewStyle: {
            flexGrow: 1
        }, allContainersContainerStyle: {
            gap: 10,
        }, companyDetailContainerStyle: {
            flexDirection: "column",
        }, companyBgStyle: {
            width: "40%",
            alignItems: "center",
            borderRadius: 10,
            padding: 20,
        }, comapnyLogoTextStyle: {
            fontFamily: "KSB",
            fontSize: 30,
        }, comapnyNameTextStyle: {
            fontFamily: "KSB",
            fontSize: 20,
        }, companyCountryNameStyle: {
            fontFamily: "KSM",
            fontSize: 18,
        }, dividerStyle: {
            borderColor: "grey",
            borderWidth: 1,
            opacity: 0.2,
        }, jobOverviewContainerStyle: {
            gap: 10,
        }, jobOverviewTextStyle: {
            fontFamily: "KSB",
            fontSize: 18,
        }, jobDetailBadgesContainerStyle: {
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
        }, jobBadgeBgStyle: {
            fontFamily: "KSM",
            fontSize: 16,
            borderRadius: 20,
            borderColor: "grey",
            borderWidth: 2,
            paddingHorizontal: 10,
            paddingVertical: 5,
        }, descriptionContainerStyle: {
            gap: 10,
        }, descriptionHeadingTextStyle: {
            fontFamily: "KSB",
            fontSize: 18,
        }, descriptionTextStyle: {
            fontFamily: "KSM",
            fontSize: 14,
        }, responsibilitiesContainerStyle: {
            gap: 10,
        }, responsibilityHeadingAndRequiredSkillsHeadingTextStyle: {
            fontFamily: "KSB",
            fontSize: 18,
        }, responsibilityAndRequiredSkillsTextStyle: {
            fontFamily: "KSM",
            fontSize: 14,
        }, requiredSkillsContainerStyle: {
            gap: 10
        }
    }
)