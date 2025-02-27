// Libraries Imports...
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scrollView: {
        flexGrow: 1,
    },
    content: {
        gap: 10,
    },
    header: {
        gap: 10,
    },
    logoContainer: {
        width: "40%",
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
    },
    logoText: {
        fontFamily: "KSB",
        fontSize: 30,
    },
    companyInfo: {
        flexDirection: "column",
    },
    companyName: {
        fontFamily: "KSB",
        fontSize: 20,
    },
    location: {
        flexDirection: "row",
        gap: 10,
    },
    companyLocation: {
        fontFamily: "KSM",
        fontSize: 18,
    },
    separator: {
        borderColor: "grey",
        borderWidth: 1,
        opacity: 0.2,
    },
    descriptionContainer: {
        gap: 10,
    },
    sectionTitle: {
        fontFamily: "KSB",
        fontSize: 18,
    },
    companyDescription: {
        fontFamily: "KSM",
        fontSize: 14,
    },
    detailsContainer: {
        flexDirection: "column",
        gap: 5,
    },
    detailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    detailLabel: {
        fontFamily: "KSB",
        fontSize: 14,
    },
    detailValue: {
        fontFamily: "KSM",
        fontSize: 14,
    },
    perksContainer: {
        flexDirection: "column",
        gap: 5,
    },
    perkTags: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    perkTag: {
        borderRadius: 10,
        borderColor: "grey",
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    perkText: {
        fontFamily: "KSM",
        fontSize: 14,
    },
});

export default styles;
