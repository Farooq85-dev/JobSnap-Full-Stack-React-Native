// Libraries Imports...
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Formik } from "formik";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as DocumentPicker from "expo-document-picker";

// Local Imports...
import { saveUserInfo, uplaodFile } from "@/appWrite";
import ButtonComp from "@/components/Button";
import InputComp from "@/components/Input";
import { toastConfig } from "@/config/toast";
import { colorsPalette } from "@/constants/colors";
import { userProfileSchema } from "@/schema";
import { styles } from "@/styles/screens/userProfile";
import { useUserContext } from "@/context/user";

const UserProfileScreen = () => {
  const [imageFile, setImageFile] =
    useState<DocumentPicker.DocumentPickerResult | null>(null);
  const [cvFile, setCvFile] =
    useState<DocumentPicker.DocumentPickerResult | null>(null);
  const { user } = useUserContext();

  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    router.push("/(tabs)");
  }, []);

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

  const handlePickDocument = async (fileType: string) => {
    try {
      let result;

      if (fileType === "image") {
        result = await DocumentPicker.getDocumentAsync({
          type: ["image/jpg", "image/jpeg", "image/png"], // Image types
        });
      } else if (fileType === "cv") {
        result = await DocumentPicker.getDocumentAsync({
          type: ["application/pdf"], // PDF types for CV
        });
      } else {
        throw new Error("Unsupported file type");
      }
      if (fileType === "image") {
        setImageFile(result);
      } else if (fileType === "cv") {
        setCvFile(result);
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };

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
                if (!imageFile?.assets?.length || !cvFile?.assets?.length) {
                  Alert.alert("Something is missing!");
                  return;
                }

                if (
                  imageFile &&
                  cvFile &&
                  imageFile.assets &&
                  cvFile.assets &&
                  imageFile.assets.length > 0 &&
                  cvFile.assets.length > 0
                ) {
                  const ifile = imageFile?.assets[0];
                  const cfile = cvFile?.assets[0];
                  try {
                    await uplaodFile(
                      {
                        name: ifile?.name,
                        type: ifile?.mimeType ?? "",
                        size: ifile?.size ?? 0,
                        uri: ifile?.uri,
                      },
                      user?.$id + "_img"
                    );

                    await uplaodFile(
                      {
                        name: cfile?.name,
                        type: cfile?.mimeType ?? "",
                        size: cfile?.size ?? 0,
                        uri: cfile?.uri,
                      },
                      user?.$id + "_cv"
                    );
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
                  }
                }

                await saveUserInfo(values, parsedJobs);
                Toast.show({
                  type: "success",
                  position: "top",
                  text2: "You information has been saved successfully!",
                  visibilityTime: 3000,
                  autoHide: true,
                  topOffset: 50,
                  bottomOffset: 50,
                });
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
                <View
                  style={{
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => handlePickDocument("image")}
                    style={{
                      position: "relative",
                    }}
                  >
                    <Image
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        borderColor:
                          imageFile?.assets?.length === 0
                            ? "red"
                            : colorsPalette.primaryColor,
                        borderWidth: 2,
                      }}
                      resizeMode="contain"
                      source={require("@/assets/images/user-avatar-select-img.png")}
                    />
                    <AntDesign
                      style={{
                        position: "absolute",
                        right: 0,
                        bottom: 10,
                      }}
                      name="pluscircle"
                      size={30}
                      color={colorsPalette.primaryColor}
                    />
                  </TouchableOpacity>
                </View>
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
                <Text style={{ fontSize: 16, fontFamily: "KSB" }}>
                  Upload CV
                </Text>
                <View
                  style={{
                    borderColor:
                      cvFile?.assets?.length === 0
                        ? "red"
                        : colorsPalette.primaryColor,
                    borderWidth: 2,
                    borderRadius: 10,
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => handlePickDocument("cv")}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      name="cloudupload"
                      size={50}
                      color="black"
                      style={{
                        opacity: 0.5,
                      }}
                    />
                    <Text
                      style={{ fontSize: 18, fontFamily: "KSM", opacity: 0.5 }}
                    >
                      Upload Your CV
                    </Text>
                  </TouchableOpacity>
                </View>
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
