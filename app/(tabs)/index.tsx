// Local Imports...
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { Formik } from "formik";

// Libraries Imports...
import { colorsPalette } from "@/constants/colors";
import InputComp from "@/components/Input";
import ButtonComp from "@/components/Button";
import { jobSearchSchama } from "@/schema";
import { styles } from "@/styles/tabs/index";
import { Link } from "expo-router";

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
            id: "129375",
            companyName: "Global Solutions",
            jobTitle: "Marketing Manager",
            jobType: "Full-time",
            jobStatus: "On-Site",
            jobLevel: "Mid level",
            jobSalaryPerMonth: "13K/ year",
            companyPrimaryLogoColor: "#ff6347",
            companyCountryName: "Pakistan",
            jobDescription:
              "As a Marketing Manager, you will be responsible for developing marketing strategies, overseeing campaigns, and ensuring the company's brand presence is strong in the market. The role involves managing a team, conducting market research, and collaborating with the sales department.",
            requiredSkills:
              "Strong communication skills, Project management experience, Proficiency in digital marketing tools, SEO/SEM expertise, Team leadership and collaboration, Analytical mindset",
            companyDescription:
              "Global Solutions is a leading marketing consultancy firm that offers a wide range of services to global clients. Based in Pakistan, the company has a diverse team of professionals and focuses on delivering innovative and impactful marketing strategies to help businesses thrive in the digital age.",
          },
          {
            id: "129376",
            companyName: "Tech Innovators",
            jobTitle: "Software Engineer",
            jobType: "Full-time",
            jobStatus: "Remote",
            jobLevel: "Junior level",
            jobSalaryPerMonth: "8K/ year",
            companyPrimaryLogoColor: "#4682b4",
            companyCountryName: "India",
            jobDescription:
              "As a Software Engineer, you will be developing high-performance applications and writing efficient, maintainable code. You'll work closely with a team of developers to improve product functionality and deliver solutions that align with the company's goals.",
            requiredSkills:
              "Proficiency in Java, Strong problem-solving abilities, Experience with Git, Understanding of algorithms and data structures, Ability to work in an Agile environment",
            companyDescription:
              "Tech Innovators is an emerging software development company in India. We specialize in providing innovative tech solutions and digital transformations to startups and established businesses alike.",
          },
          {
            id: "129377",
            companyName: "GreenTech Ventures",
            jobTitle: "Sustainability Consultant",
            jobType: "Part-time",
            jobStatus: "On-Site",
            jobLevel: "Senior level",
            jobSalaryPerMonth: "15K/ year",
            companyPrimaryLogoColor: "#32cd32",
            companyCountryName: "USA",
            jobDescription:
              "The Sustainability Consultant will work with clients to create sustainability strategies and ensure that green practices are integrated into their operations. This role requires knowledge of environmental regulations and sustainable development goals.",
            requiredSkills:
              "Deep understanding of sustainability practices, Knowledge of environmental laws, Strong research and analytical skills, Ability to create actionable reports, Communication and client management skills",
            companyDescription:
              "GreenTech Ventures is a leading sustainability consultancy based in the USA. We work with companies worldwide to help them adopt eco-friendly practices and meet sustainability goals, driving green innovations across industries.",
          },
          {
            id: "129378",
            companyName: "Creative Works",
            jobTitle: "Graphic Designer",
            jobType: "Freelance",
            jobStatus: "Remote",
            jobLevel: "Entry level",
            jobSalaryPerMonth: "5K/ year",
            companyPrimaryLogoColor: "#ff1493",
            companyCountryName: "Canada",
            jobDescription:
              "The Graphic Designer will be responsible for creating visual concepts for marketing materials, social media, websites, and branding. You'll work closely with the creative team to bring concepts to life.",
            requiredSkills:
              "Proficiency in Adobe Creative Suite, Understanding of typography and layout design, Strong creativity, Ability to work independently, Time management skills",
            companyDescription:
              "Creative Works is a Canadian creative agency that focuses on delivering stunning visual designs and branding services to clients in various industries, from fashion to tech.",
          },
        ]}
        renderItem={({ item }) => (
          <View style={styles.listRenderMainViewStyle}>
            <View style={styles.listRenderJobListedViewStyle}>
              <View style={styles.jobTopViewStyle}>
                <Link
                  href={{
                    pathname: "/job-detail",
                    params: {
                      id: item?.id,
                      companyName: item?.companyName,
                      jobTitle: item?.jobTitle,
                      jobType: item?.jobType,
                      jobLevel: item?.jobLevel,
                      jobStatus: item?.jobStatus,
                      jobSalaryPerMonth: item?.jobSalaryPerMonth,
                      companyPrimaryLogoColor: item?.companyPrimaryLogoColor,
                      companyCountryName: item?.companyCountryName,
                    },
                  }}
                >
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
                </Link>
                <View>
                  <Entypo name="shopping-bag" size={30} color="black" />
                </View>
              </View>
              <View style={styles.jobBottomViewStyle}>
                <View style={styles.jobBottomLrftViewStyle}>
                  <Text style={styles.jobTypeTextStyle}>
                    {item.jobType + " " + "/" + " " + item.jobStatus}
                  </Text>
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
