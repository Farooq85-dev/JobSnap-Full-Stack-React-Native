// Libraries Imports...
import { useEffect } from "react";
import { View } from "react-native";
import { Tabs, useNavigation } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Local Imports...
import { colorsPalette } from "@/constants/colors";

export default function TabLayout() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: colorsPalette.secondaryColor,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <View>
              <FontAwesome name="home" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ size, color }) => (
            <View>
              <FontAwesome name="search" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <View>
              <FontAwesome name="user-circle-o" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
