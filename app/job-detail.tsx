// Libraries Imports...
import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";
// Local Imports...
import ButtonComp from "@/components/Button";
import { styles } from "@/styles/screens/job-detail";

const JobDetailScreen = () => {
  const {
    id,
    companyName,
    jobTitle,
    jobType,
    jobLevel,
    jobStatus,
    jobSalaryPerMonth,
    companyPrimaryLogoColor,
    companyCountryName,
    companyCityName,
    companyScope,
    companyDescription,
    companyWebsite,
    currentCompanyEmplyees,
    officePerks,
    jobDescription,
    jobResponsibilities,
    jobRequiredSkills,
  } = useLocalSearchParams();

  return (
    <View style={styles.manScreenContainerStyle}>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.allContainersContainerStyle}>
          <View style={styles.companyDetailContainerStyle}>
            <Link
              href={{
                pathname: "/company-detail",
                params: {
                  companyCityName,
                  companyScope,
                  companyDescription,
                  companyWebsite,
                  currentCompanyEmplyees,
                  officePerks,
                  companyPrimaryLogoColor,
                  companyCountryName,
                  companyName,
                },
              }}
            >
              <View
                style={[
                  {
                    backgroundColor: `${companyPrimaryLogoColor}`,
                  },
                  styles.companyBgStyle,
                ]}
              >
                <Text style={styles.comapnyLogoTextStyle}>
                  {companyName.toLocaleString().slice(0, 1).toLocaleUpperCase()}
                </Text>
              </View>
            </Link>
            <View>
              <Text style={styles.comapnyNameTextStyle}>{companyName}</Text>
              <Text style={styles.companyCountryNameStyle}>
                {companyCountryName}
              </Text>
            </View>
          </View>
          <View style={styles.dividerStyle}></View>
          <View style={styles.jobOverviewContainerStyle}>
            <Text style={styles.jobOverviewTextStyle}>Job Overview</Text>
            <View style={styles.jobDetailBadgesContainerStyle}>
              <Text style={styles.jobBadgeBgStyle}>{jobType}</Text>
              <Text style={styles.jobBadgeBgStyle}>{jobStatus}</Text>
              <Text style={styles.jobBadgeBgStyle}>{jobSalaryPerMonth}</Text>
            </View>
            <View style={styles.descriptionContainerStyle}>
              <Text style={styles.descriptionHeadingTextStyle}>
                Description
              </Text>
              <Text style={styles.descriptionTextStyle}>{jobDescription}</Text>
            </View>
            <View style={styles.responsibilitiesContainerStyle}>
              <Text
                style={
                  styles.responsibilityHeadingAndRequiredSkillsHeadingTextStyle
                }
              >
                Responsibilities
              </Text>
              {jobResponsibilities
                ?.toLocaleString()
                .split(". ")
                ?.map((v, i) => (
                  <Text
                    key={i}
                    style={styles.responsibilityAndRequiredSkillsTextStyle}
                  >
                    {"- " + v}
                  </Text>
                ))}
            </View>
            <View style={styles.requiredSkillsContainerStyle}>
              <Text
                style={
                  styles.responsibilityHeadingAndRequiredSkillsHeadingTextStyle
                }
              >
                Required Skills
              </Text>
              {jobRequiredSkills
                ?.toLocaleString()
                .split(". ")
                ?.map((v, i) => (
                  <Text
                    key={i}
                    style={styles.responsibilityAndRequiredSkillsTextStyle}
                  >
                    {"- " + v}
                  </Text>
                ))}
            </View>
            <ButtonComp title="Apply Now" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default JobDetailScreen;
