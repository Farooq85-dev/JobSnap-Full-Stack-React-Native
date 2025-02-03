// Libraries Imports...
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
// Local Imports...
import ButtonComp from "@/components/Button";
import { styles } from "@/styles/screens/jobFinding";
import { useRouter } from "expo-router";

const JobFindingScreen = () => {
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const router = useRouter();

  const handleSelectedJobs = (value: string) => {
    setSelectedJobs((prevSelectedJobs) => {
      if (prevSelectedJobs.includes(value)) {
        return prevSelectedJobs.filter((job) => job !== value);
      } else {
        return [...prevSelectedJobs, value];
      }
    });
  };

  const handlePress = () => {
    if (selectedJobs.length === 0) {
      Alert.alert("Please select at least one job!");
      return;
    }

    router.push({
      pathname: "/user-profile",
      params: { selectedJobs: JSON.stringify(selectedJobs) },
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View>
        <FlatList
          data={[
            {
              id: "1",
              title: "HR",
              icon: <FontAwesome name="users" size={30} color="black" />,
            },
            {
              id: "2",
              title: "IT",
              icon: <MaterialIcons name="computer" size={30} color="black" />,
            },
            {
              id: "3",
              title: "Design",
              icon: <Ionicons name="color-palette" size={30} color="black" />,
            },
            {
              id: "4",
              title: "Marketing",
              icon: (
                <MaterialCommunityIcons
                  name="speaker-wireless"
                  size={30}
                  color="black"
                />
              ),
            },
            {
              id: "5",
              title: "Sales",
              icon: <Entypo name="bar-graph" size={30} color="black" />,
            },
          ]}
          numColumns={2}
          renderItem={({ item }) => (
            <View
              style={[
                styles.flatListRenderItemStyle,
                selectedJobs.includes(item.title) && styles.selectedJobBg,
              ]}
            >
              <TouchableOpacity onPress={() => handleSelectedJobs(item.title)}>
                <View
                  style={[
                    styles.flatListRenderIconStyle,
                    selectedJobs.includes(item.title) && styles.selectedJobBg,
                  ]}
                >
                  {item?.icon}
                </View>
              </TouchableOpacity>
              <Text style={styles.flatListRenderTextStyle}>{item?.title}</Text>
            </View>
          )}
          ListHeaderComponent={
            <View style={styles.flatListHeaderStyle}>
              <Text style={styles.flatListHeaderTextStyle}>
                Your Path to Success - Simplifying the Job Search
              </Text>
            </View>
          }
          ListFooterComponent={
            <View style={styles.flatListFooterStyle}>
              <ButtonComp title="Find Jobs" onPress={handlePress} />
            </View>
          }
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default JobFindingScreen;
