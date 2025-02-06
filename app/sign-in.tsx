// Libraries Imports...
import { View, Text, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import Toast from "react-native-toast-message";
// Local Imports...
import ButtonComp from "@/components/Button";
import InputComp from "@/components/Input";
import { colorsPalette } from "@/constants/colors";
import { userSignInSchema } from "@/schema";
import { styles } from "@/styles/screens/sign-up";
import { Link, useRouter } from "expo-router";
import { userSignIn } from "@/appWrite";
import { toastConfig } from "@/config/toast";
import { useEffect } from "react";

const SignInScreen = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/job-finding");
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <ScrollView style={styles.scrollViewStyle}>
        <Formik
          initialValues={{
            userEmail: "",
            userPassword: "",
          }}
          onSubmit={async (values, errors) => {
            if (!values.userEmail || !values.userPassword) {
              return Alert.alert("Something is missing!");
            }
            try {
              const user = await userSignIn(
                values.userEmail,
                values.userPassword
              );
              Toast.show({
                type: "success",
                position: "top",
                text2: "You have been signin successfully!",
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 50,
                bottomOffset: 50,
              });
              console.log(user);
              errors.resetForm();
              setTimeout(() => {
                router.push("/job-finding");
              }, 3500);
            } catch (error: any) {
              Toast.show({
                type: "error",
                position: "top",
                text2: error?.message,
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 50,
                bottomOffset: 50,
              });
              console.log(error);
            }
          }}
          validationSchema={userSignInSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={styles.headerStyle}>
                <Text style={styles.headerTextStyle}>
                  Unlock Your Future - Sign In to Get Started!
                </Text>
              </View>
              <View style={styles.inputContainerStyle}>
                <InputComp
                  keyBoardType="email-address"
                  isPasswordInput={false}
                  placeholder="Type email here"
                  label="Email Address"
                  onChangeText={handleChange("userEmail")}
                  onBlur={handleBlur("userEmail")}
                  value={values.userEmail}
                  otherStyles={{
                    borderColor:
                      errors.userEmail && touched.userEmail
                        ? "red"
                        : values.userEmail !== ""
                        ? colorsPalette.primaryColor
                        : colorsPalette.primaryColor,
                  }}
                />
                <InputComp
                  isPasswordInput={true}
                  placeholder="Type password here"
                  label="Password"
                  onChangeText={handleChange("userPassword")}
                  onBlur={handleBlur("userPassword")}
                  value={values.userPassword}
                  otherStyles={{
                    borderColor:
                      errors.userPassword && touched.userPassword
                        ? "red"
                        : values.userPassword !== ""
                        ? colorsPalette.primaryColor
                        : colorsPalette.primaryColor,
                  }}
                />
              </View>
              <View style={styles.btnAndSpanContainerStyle}>
                <ButtonComp title="Signin" onPress={handleSubmit} />
                <Text style={styles.textContainerStyle}>
                  Don't have an account?{" "}
                  <Link href={"/sign-up"}>
                    <Text style={styles.spanLikeTextStyle}>SignUp Now</Text>
                  </Link>
                </Text>
              </View>
            </View>
          )}
        </Formik>
        <Toast config={toastConfig} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
