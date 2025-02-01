import { colorsPalette } from "@/constants/colors";
import { Text, TouchableOpacity } from "react-native";

interface ButtonPropTypes {
  title: string;
  styles: Object;
  isLoading?: boolean;
}

const ButtonComp = ({ title, styles, isLoading }: ButtonPropTypes) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles} disabled={isLoading}>
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
