// Libraries Imports...
import { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
// Local Imports...
import ButtonComp from "@/components/Button";
import RadioButtonsComp from "@/components/Checkbox";
import InputComp from "@/components/Input";
import { colorsPalette } from "@/constants/colors";
import { userSignUpSchema } from "@/schema";
import { styles } from "@/styles/screens/sign-up";
import { Link, useRouter } from "expo-router";
import { userSignUp } from "@/appWrite/index";

const SignUpScreen = () => {
  const [checked, setChecked] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <ScrollView style={styles.scrollViewStyle}>
        <Formik
          initialValues={{
            userName: "",
            userEmail: "",
            userPassword: "",
            userConfirmPassword: "",
          }}
          onSubmit={async (values, errors) => {
            if (
              !values.userName ||
              !values.userEmail ||
              !values.userPassword ||
              !values.userConfirmPassword ||
              !checked
            ) {
              return Alert.alert("Something is missing!");
            }

            if (values.userPassword !== values.userConfirmPassword) {
              return Alert.alert("Password don't match!");
            }

            const data = {
              ...values,
              userRole: checked,
            };

            try {
              const user = await userSignUp(
                values.userEmail,
                values.userPassword,
                values.userName
              );
              errors.resetForm();
              setChecked("");
              router.push("/sign-in");
            } catch (error) {
              console.log(error);
            }
          }}
          validationSchema={userSignUpSchema}
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
                  Start Your Career Journey with - Just a Few Steps!
                </Text>
              </View>
              <View style={styles.inputContainerStyle}>
                <InputComp
                  keyBoardType="default"
                  isPasswordInput={false}
                  placeholder="Type name here"
                  label="Name"
                  onChangeText={handleChange("userName")}
                  onBlur={handleBlur("userName")}
                  value={values.userName}
                  otherStyles={{
                    borderColor:
                      errors.userName && touched.userName
                        ? "red"
                        : values.userName !== ""
                        ? colorsPalette.primaryColor
                        : colorsPalette.primaryColor,
                  }}
                />
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
                <InputComp
                  isPasswordInput={true}
                  placeholder="Type password here"
                  label="Repeat Password"
                  onChangeText={handleChange("userConfirmPassword")}
                  onBlur={handleBlur("userConfirmPassword")}
                  value={values.userConfirmPassword}
                  otherStyles={{
                    borderColor:
                      errors.userConfirmPassword && touched.userConfirmPassword
                        ? "red"
                        : values.userConfirmPassword !== ""
                        ? colorsPalette.primaryColor
                        : colorsPalette.primaryColor,
                  }}
                />
                <RadioButtonsComp
                  label="Who are you?"
                  setChecked={setChecked}
                  checked={checked}
                  option={["empolyer", "job seeker"]}
                />
              </View>
              <View style={styles.btnAndSpanContainerStyle}>
                <ButtonComp title="Signup" onPress={handleSubmit} />
                <Text style={styles.textContainerStyle}>
                  Already have an account?{" "}
                  <Link href={"/sign-in"}>
                    <Text style={styles.spanLikeTextStyle}>SignIn Now</Text>
                  </Link>
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
