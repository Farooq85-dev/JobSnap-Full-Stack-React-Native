// Libraries Imports...
import { colorsPalette } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeAreaViewStyle: { flex: 1, padding: 20 },
  scrollViewStyle: {
    flexGrow: 1,
  },
  contnetContainerStyle: {
    flex: 1,
    justifyContent: "space-between",
  },
  imageAndTextContainerStyle: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  imgStyle: { width: "100%", height: "60%" },
  textStyle: {
    fontSize: 35,
    fontFamily: "KSB",
    color: colorsPalette.secondaryColor,
    textAlign: "center",
  },
  textLikeSpanStyle: { fontFamily: "KSE", color: colorsPalette.primaryColor },
  btnStyle: {
    backgroundColor: colorsPalette.secondaryColor,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
});
