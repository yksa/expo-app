import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const refInput = useRef(null);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <TouchableOpacity
        className={`w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl ${
          isFocus && "border-secondary"
        } flex-row items-center`}
        activeOpacity={1}
        onPress={() => {
          setIsFocus(true);
          refInput.current?.focus();
        }}
      >
        <TextInput
          ref={refInput}
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FormField;
