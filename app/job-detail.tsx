// Libraries Imports...
import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";
// Local Imports...
import ButtonComp from "@/components/Button";

const description = "Manage onboarding and offboarding web apps.";

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
  } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <ScrollView
        style={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            gap: 10,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 10,
            }}
          >
            <View
              style={{
                width: "30%",
                alignItems: "center",
                borderRadius: 10,
                padding: 20,
                backgroundColor: `${companyPrimaryLogoColor}`,
              }}
            >
              <Text
                style={{
                  fontFamily: "KSB",
                  fontSize: 30,
                }}
              >
                {companyName.toLocaleString().slice(0, 1).toLocaleUpperCase()}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "KSB",
                  fontSize: 20,
                }}
              >
                {companyName}
              </Text>
              <Text
                style={{
                  fontFamily: "KSM",
                  fontSize: 18,
                }}
              >
                {companyCountryName}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderColor: "grey",
              borderWidth: 1,
              opacity: 0.2,
            }}
          ></View>
          <View
            style={{
              gap: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "KSB",
                fontSize: 18,
              }}
            >
              Job Overview
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "KSM",
                  fontSize: 16,
                  borderRadius: 20,
                  borderColor: "grey",
                  borderWidth: 2,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                {jobType}
              </Text>
              <Text
                style={{
                  fontFamily: "KSM",
                  fontSize: 16,
                  borderRadius: 20,
                  borderColor: "grey",
                  borderWidth: 2,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                {jobStatus}
              </Text>
              <Text
                style={{
                  fontFamily: "KSM",
                  fontSize: 16,
                  borderRadius: 20,
                  borderColor: "grey",
                  borderWidth: 2,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                {jobSalaryPerMonth}
              </Text>
            </View>
            <View
              style={{
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "KSB",
                  fontSize: 18,
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  fontFamily: "KSM",
                  fontSize: 14,
                }}
              >
                We are looking for a skillful web developer.
              </Text>
            </View>
            <View
              style={{
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "KSB",
                  fontSize: 18,
                }}
              >
                Responsibilities
              </Text>
              {description?.split(". ")?.map((v, i) => (
                <Text
                  key={i}
                  style={{
                    fontFamily: "KSM",
                    fontSize: 14,
                  }}
                >
                  {"- " + v}
                </Text>
              ))}
            </View>
            <View
              style={{
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "KSB",
                  fontSize: 18,
                }}
              >
                Required Skills
              </Text>
              {description?.split(". ")?.map((v, i) => (
                <Text
                  key={i}
                  style={{
                    fontFamily: "KSM",
                    fontSize: 14,
                  }}
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
