import { colors, textType } from "@/constants";
import { locations } from "@/constants/data";
import React, { useMemo } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import ExploreCard from "./ExploreCard";
import EmptyState from "../general/EmptyState";

const ExploreGallery = ({ searchedTerm }: { searchedTerm: string }) => {
  const filteredLocations = useMemo(() => {
    if (searchedTerm) {
      return locations?.filter((location) =>
        location.name.toLowerCase().includes(searchedTerm.toLowerCase())
      );
    }
    return locations;
  }, [searchedTerm]);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 32,
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            ...textType.subHeader,
            fontSize: 20,
            color: colors.black,
          }}
        >
          Popular Destinations
        </Text>
      </View>

      {filteredLocations?.length === 0 && (
        <EmptyState searchedTerm={searchedTerm} />
      )}

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        className="flex-1 w-full "
      >
        {filteredLocations?.map((location, index) => (
          <ExploreCard key={index} location={location} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows wrapping of children
    justifyContent: "space-between", // Adjust spacing between items
    gap: 16, // Space between items (requires React Native 0.71+)
  },
});

export default ExploreGallery;
