// Local Imports...
import { View, Text, Image, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { Formik } from "formik";

// Libraries Imports...
import { colorsPalette } from "@/constants/colors";
import InputComp from "@/components/Input";
import ButtonComp from "@/components/Button";
import { jobSearchSchama } from "@/schema";
import { styles } from "@/styles/tabs/index";

const HomeScreen = () => {
  return (
    <View style={styles.mainViewStyle}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.listHeaderMainViewStyle}>
            <View style={styles.listHeaderHeadViewStyle}>
              <View style={styles.listHeaderHeadLeftStyle}>
                <Image
                  style={styles.listHeaderHeadImageStyle}
                  resizeMode="contain"
                  source={require("@/assets/images/user-avatar-select-img.png")}
                />
                <View>
                  <Text style={styles.listheaderHeadUpperLeftTextStyle}>
                    Muhammad Farooq
                  </Text>
                  <Text style={styles.listHeaderHeadLeftBottomTextStyle}>
                    HR
                  </Text>
                </View>
              </View>
              <View>
                <Ionicons name="notifications-sharp" size={30} color="black" />
              </View>
            </View>
            <View>
              <Formik
                initialValues={{ jobTitle: "" }}
                validationSchema={jobSearchSchama}
                onSubmit={async (values, errors) => {
                  if (!values.jobTitle) {
                    return;
                  }
                  console.log(values);
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <View style={styles.formViewStyle}>
                    <InputComp
                      isPasswordInput={false}
                      keyBoardType="default"
                      label="Find a Job"
                      placeholder="Enter a job title"
                      onChangeText={handleChange("jobTitle")}
                      onBlur={handleBlur("jobTitle")}
                      value={values.jobTitle}
                      otherStyles={{
                        borderColor:
                          errors.jobTitle && touched.jobTitle
                            ? "red"
                            : values.jobTitle !== ""
                            ? colorsPalette.secondaryColor
                            : colorsPalette.secondaryColor,
                      }}
                    />
                    <ButtonComp title="Search" onPress={handleSubmit} />
                  </View>
                )}
              </Formik>
            </View>
          </View>
        }
        data={[
          {
            id: "129372",
            companyName: "People Company",
            jobTitle: "HR",
            jobType: "Full-time",
            jobLevel: "Mid level",
            jobSalaryPerMonth: "12K/ year",
            companyPrimaryLogoColor: "#d7d0ff",
          },
          {
            id: "129373",
            companyName: "Tech Innovations",
            jobTitle: "Software Engineer",
            jobType: "Full-time",
            jobLevel: "Senior level",
            jobSalaryPerMonth: "15K/ year",
            companyPrimaryLogoColor: "#ff7f50",
          },
          {
            id: "129374",
            companyName: "Creative Labs",
            jobTitle: "Graphic Designer",
            jobType: "Part-time",
            jobLevel: "Junior level",
            jobSalaryPerMonth: "8K/ year",
            companyPrimaryLogoColor: "#90ee90",
          },
          {
            id: "129375",
            companyName: "Global Solutions",
            jobTitle: "Marketing Manager",
            jobType: "Full-time",
            jobLevel: "Mid level",
            jobSalaryPerMonth: "13K/ year",
            companyPrimaryLogoColor: "#ff6347",
          },
          {
            id: "129376",
            companyName: "Digital Dynamics",
            jobTitle: "Data Scientist",
            jobType: "Full-time",
            jobLevel: "Senior level",
            jobSalaryPerMonth: "18K/ year",
            companyPrimaryLogoColor: "#48c9b0",
          },
        ]}
        renderItem={({ item }) => (
          <View style={styles.listRenderMainViewStyle}>
            <View style={styles.listRenderJobListedViewStyle}>
              <View style={styles.jobTopViewStyle}>
                <View style={styles.jobLeftViewStyle}>
                  <View
                    style={[
                      {
                        backgroundColor: item.companyPrimaryLogoColor,
                      },
                      styles.jobBgViewStyle,
                    ]}
                  >
                    <Text style={styles.jobCompanyTextStyle}>
                      {item.companyName.slice(0, 1).toLocaleUpperCase()}
                    </Text>
                  </View>
                  <View style={styles.jobLevelTypeViewStyle}>
                    <Text style={styles.jobTitleTextStyle}>
                      {item.jobTitle}
                    </Text>
                    <Text style={styles.jobCompanyTitleTextStyle}>
                      {item.companyName}
                    </Text>
                  </View>
                </View>
                <View>
                  <Entypo name="shopping-bag" size={30} color="black" />
                </View>
              </View>
              <View style={styles.jobBottomViewStyle}>
                <View style={styles.jobBottomLrftViewStyle}>
                  <Text style={styles.jobTypeTextStyle}>{item.jobType}</Text>
                  <Text style={styles.jobLevelTextStyle}>{item.jobLevel}</Text>
                </View>

                <Text style={styles.jobSalaryPerMonthTextStyle}>
                  {item.jobSalaryPerMonth}
                </Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
