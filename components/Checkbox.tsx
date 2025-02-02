// Libraries Imports...
import React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";

interface RadioButtonPropsTypes {
  label: string;
  option: string[];
  checked: string;
  setChecked: (value: string) => void;
}

const RadioButtonsComp = ({
  label,
  option,
  checked,
  setChecked,
}: RadioButtonPropsTypes) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "KSB",
        }}
      >
        {label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {option?.map((v, i) => (
            <React.Fragment key={i}>
              <RadioButton
                value="user"
                status={checked === v ? "checked" : "unchecked"}
                onPress={() => setChecked(v)}
              />
              <Text style={{ fontSize: 18, fontFamily: "KSM" }}>
                {v.toUpperCase()}
              </Text>
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
};

export default RadioButtonsComp;
