import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView>
      <View className="bg-primary">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full h-full justify-center items-center px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              resizeMode="contain"
              className="max-w-[380px] w-full h-[300px]"
            />

            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with{" "}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Image
                source={images.path}
                resizeMode="contain"
                className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              />
            </View>

            <Text className="text-gray-100 text-center text-sm font-pregular mt-7">
              Where creativity meets innovation: embark on a journey of
              limitless exploration with Aora
            </Text>

            <CustomButton
              title="Continue with Email"
              handlePress={() => {
                router.push("/sign-in");
              }}
              containerStyle="w-full mt-7"
            />
          </View>
        </ScrollView>
      </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
