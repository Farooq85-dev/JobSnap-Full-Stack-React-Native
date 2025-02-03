// Libraries Imports...
import { useLocalSearchParams, useRouter } from "expo-router";
import { Formik } from "formik";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
// Local Imports...
import { saveUserInfo } from "@/appWrite";
import ButtonComp from "@/components/Button";
import InputComp from "@/components/Input";
import { toastConfig } from "@/config/toast";
import { colorsPalette } from "@/constants/colors";
import { userProfileSchema } from "@/schema";
import { styles } from "@/styles/screens/userProfile";

const UserProfileScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  let parsedJobs: string[] = [];
  if (typeof params?.selectedJobs === "string") {
    try {
      parsedJobs = JSON.parse(params.selectedJobs);
    } catch (error) {
      parsedJobs = [];
    }
  } else {
    parsedJobs = [];
  }

  console.log(params?.selectedJobs);
  return (
    <SafeAreaView style={styles.safeareViewStyle}>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>
            Complete Your Profile - Share a Bit About Yourself
          </Text>
        </View>
        <View style={styles.formContainerStyle}>
          <Formik
            initialValues={{
              userFullName: "",
              userAge: "",
              userFindLocation: "",
              userEmail: "",
              userPhoneNumber: "",
            }}
            onSubmit={async (values, errors) => {
              try {
                const userInfo = await saveUserInfo(values, parsedJobs);
                Toast.show({
                  type: "success",
                  position: "top",
                  text2: "You information has been saved successfully!",
                  visibilityTime: 3000,
                  autoHide: true,
                  topOffset: 50,
                  bottomOffset: 50,
                });
                console.log(userInfo);
                errors.resetForm();
                setTimeout(() => {
                  router.push("/sign-in");
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
            validationSchema={userProfileSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View
                style={{
                  gap: 10,
                }}
              >
                <InputComp
                  keyBoardType="default"
                  isPasswordInput={false}
                  placeholder="Type name here"
                  label="Name"
                  onChangeText={handleChange("userFullName")}
                  onBlur={handleBlur("userFullName")}
                  value={values.userFullName}
                  otherStyles={{
                    borderColor:
                      errors.userFullName && touched.userFullName
                        ? "red"
                        : values.userFullName !== ""
                        ? colorsPalette.primaryColor
                        : colorsPalette.primaryColor,
                  }}
                />
                <InputComp
                  keyBoardType="number-pad"
                  isPasswordInput={false}
                  placeholder="Type age here"
                  label="Age"
                  onChangeText={handleChange("userAge")}
                  onBlur={handleBlur("userAge")}
                  value={values.userAge}
                  otherStyles={{
                    borderColor:
                      errors.userAge && touched.userAge
                        ? "red"
                        : values.userAge !== ""
                        ? colorsPalette.primaryColor
                        : colorsPalette.primaryColor,
                  }}
                />
                <InputComp
                  keyBoardType="default"
                  isPasswordInput={false}
                  placeholder="Type location here"
                  label="Find Location"
                  onChangeText={handleChange("userFindLocation")}
                  onBlur={handleBlur("userFindLocation")}
                  value={values.userFindLocation}
                  otherStyles={{
                    borderColor:
                      errors.userFindLocation && touched.userFindLocation
                        ? "red"
                        : values.userFindLocation !== ""
                        ? colorsPalette.primaryColor
                        : colorsPalette.primaryColor,
                  }}
                />
                <InputComp
                  keyBoardType="email-address"
                  isPasswordInput={false}
                  placeholder="Type email here"
                  label="Email"
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
                  keyBoardType="number-pad"
                  isPasswordInput={false}
                  placeholder="Type phone number here"
                  label="Phone Number"
                  onChangeText={handleChange("userPhoneNumber")}
                  onBlur={handleBlur("userPhoneNumber")}
                  value={values.userPhoneNumber}
                  otherStyles={{
                    borderColor:
                      errors.userPhoneNumber && touched.userPhoneNumber
                        ? "red"
                        : values.userPhoneNumber !== ""
                        ? colorsPalette.primaryColor
                        : colorsPalette.primaryColor,
                  }}
                />
                <ButtonComp title="Save Changes" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
        <Toast config={toastConfig} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
