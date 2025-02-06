// Libraries Imports...
import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// Local Imports...
import { colorsPalette } from "@/constants/colors";
import { UserContextProvider } from "@/context/user";
import { UserInfoContextProvider } from "@/context/userInfo";

const RootLayout = () => {
  const [loaded, error] = useFonts({
    KSR: require("../assets/fonts/KumbhSans-Regular.ttf"),
    KSM: require("../assets/fonts/KumbhSans-Medium.ttf"),
    KSB: require("../assets/fonts/KumbhSans-Bold.ttf"),
    KSS: require("../assets/fonts/KumbhSans-SemiBold.ttf"),
    KSE: require("../assets/fonts/KumbhSans-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <UserContextProvider>
      <UserInfoContextProvider>
        <Stack
          screenOptions={{
            headerTitleAlign: "left",
            headerTintColor: colorsPalette.tertiaryColor,
            animation: "slide_from_right",
            headerStyle: {
              backgroundColor: colorsPalette.secondaryColor,
            },
            headerTitleStyle: {
              fontFamily: "KSE",
            },
            statusBarStyle: "light",
            statusBarBackgroundColor: colorsPalette.secondaryColor,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "JOBSNAP",
            }}
          />
          <Stack.Screen
            name="sign-up"
            options={{
              headerTitle: "Sign Up",
            }}
          />
          <Stack.Screen
            name="sign-in"
            options={{
              headerTitle: "Sign In",
            }}
          />
          <Stack.Screen
            name="job-finding"
            options={{
              headerTitle: "Job Finding",
            }}
          />
          <Stack.Screen
            name="user-profile"
            options={{
              headerTitle: "User Profile",
            }}
          />
        </Stack>
      </UserInfoContextProvider>
    </UserContextProvider>
  );
};

export default RootLayout;
