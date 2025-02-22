// Libraries Imports...
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Local Imports...
import ButtonComp from "@/components/Button";
import { styles } from "@/styles/screens/index";
import { useRouter } from "expo-router";
import { useUserContext } from "@/context/user";
import { useUserInfoContext } from "@/context/userInfo";

const WelcomeScreen = () => {
  const router = useRouter();
  const { isUser } = useUserContext();
  const { isUserInfo } = useUserInfoContext();
  const handlePress = async () => {
    // if (isUser && isUserInfo) {
    //   router.push("/sign-up");
    // } else if (isUser && !isUserInfo) {
    //   router.push("/job-finding");
    // } else {
    //   router.push("/sign-up");
    // }
    router.push("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.contnetContainerStyle}>
          <View style={styles.imageAndTextContainerStyle}>
            <Image
              style={styles.imgStyle}
              resizeMode="contain"
              source={require("../assets/images/welcome-img.png")}
            />
            <Text style={styles.textStyle}>
              Over
              <Text style={styles.textLikeSpanStyle}> 5,000 jobs </Text>
              are waiting for you.
            </Text>
          </View>
          <ButtonComp
            onPress={() => handlePress()}
            title={isUser === false ? "Continue with email" : "Continue"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
