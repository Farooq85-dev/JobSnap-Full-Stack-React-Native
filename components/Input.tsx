// Libraries Imports...
import { useState } from "react";
import { KeyboardTypeOptions, TextInputFocusEventData } from "react-native";
import { View, Text, TextInput, NativeSyntheticEvent } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface InputPropTypes {
  keyBoardType?: KeyboardTypeOptions;
  isPasswordInput: boolean;
  placeholder: string;
  label: string;
  onChangeText: (text: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
  className?: string;
  otherStyles?: object;
}

const InputComp = ({
  keyBoardType,
  isPasswordInput,
  placeholder,
  label,
  onChangeText,
  onBlur,
  value,
  className,
  otherStyles,
}: InputPropTypes) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ width: "100%", gap: 8 }}>
      <Text style={{ fontSize: 16, fontFamily: "KSB" }}>{label}</Text>
      <View style={{ position: "relative" }}>
        <TextInput
          style={{
            borderWidth: 2,
            outline: "none",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 10,
            fontSize: 18,
            fontFamily: "KSM",
            ...otherStyles,
          }}
          className={className}
          onChangeText={onChangeText}
          keyboardType={keyBoardType}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          secureTextEntry={isPasswordInput && !showPassword}
        />
        {isPasswordInput && (
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={28}
            color="black"
            style={{
              position: "absolute",
              top: 18,
              right: 10,
            }}
            onPress={() => setShowPassword(!showPassword)}
          />
        )}
      </View>
    </View>
  );
};

export default InputComp;
