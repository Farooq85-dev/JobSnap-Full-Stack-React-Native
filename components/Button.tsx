// Libraries Imports...
import { Text, TouchableOpacity } from "react-native";
// Local Imports...
import { colorsPalette } from "@/constants/colors";

interface ButtonPropTypes {
  title: string;
  isLoading?: boolean;
  onPress?: () => void;
}

const ButtonComp = ({ title, isLoading, onPress }: ButtonPropTypes) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: "100%",
        backgroundColor: colorsPalette.secondaryColor,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
      }}
      onPress={onPress}
      disabled={isLoading}
    >
      <Text
        style={{
          fontFamily: "KSB",
          fontSize: 18,
          color: colorsPalette.tertiaryColor,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;
