// Libraries Imports..
import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
// Local Imports...
import styles from "@/styles/screens/company-detail";

const CompanyDetailScreen = () => {
  const {
    companyCityName,
    companyScope,
    companyDescription,
    companyWebsite,
    currentCompanyEmplyees,
    officePerks,
    companyPrimaryLogoColor,
    companyCountryName,
    companyName,
  } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View
              style={[
                styles.logoContainer,
                { backgroundColor: `${companyPrimaryLogoColor}` },
              ]}
            >
              <Text style={styles.logoText}>
                {companyName.toLocaleString().slice(0, 1).toLocaleUpperCase()}
              </Text>
            </View>
            <View style={styles.companyInfo}>
              <Text style={styles.companyName}>{companyName}</Text>
              <View style={styles.location}>
                <Text style={styles.companyLocation}>{companyCountryName}</Text>
                <Text style={styles.companyLocation}>{companyCityName}</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.companyDescription}>{companyDescription}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Website:</Text>
              <Text style={styles.detailValue}>{companyWebsite}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Employees:</Text>
              <Text style={styles.detailValue}>{currentCompanyEmplyees}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Company Scope:</Text>
              <Text style={styles.detailValue}>{companyScope}</Text>
            </View>
          </View>
          <View style={styles.perksContainer}>
            <Text style={styles.sectionTitle}>Office Perks</Text>
            <View style={styles.perkTags}>
              {officePerks
                ?.toLocaleString()
                ?.split(", ")
                ?.map((v, i) => (
                  <View key={i} style={styles.perkTag}>
                    <Text style={styles.perkText}>{v}</Text>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CompanyDetailScreen;
