// Libraries Imports...
import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
// Local Imports...
import ButtonComp from "@/components/Button";
import { styles } from "@/styles/screens/jobFinding";

const JobFindingScreen = () => {
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
              title: "Markeeting",
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
            <View style={styles.flatListRenderItemStyle}>
              <View style={styles.flatListRenderIconStyle}>{item.icon}</View>
              <Text style={styles.flatListRenderTextStyle}>{item.title}</Text>
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
              <ButtonComp title="Find Jobs" />
            </View>
          }
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default JobFindingScreen;
