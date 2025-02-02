// Libraries Imports...
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Local Imports...
import ButtonComp from "@/components/Button";
import { styles } from "@/styles/screens/index";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/sign-up");
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
            title="Continue with email"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
