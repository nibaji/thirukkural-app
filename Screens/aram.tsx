import React, { useEffect, useState } from "react";
import { Text, View, StatusBar, FlatList, StyleSheet } from "react-native";

export default function aram() {
  const [aramDetails, setaramDetails] = useState<any[]>([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    fetchDetails();
  });

  async function fetchDetails() {
    const url =
      "https://raw.githubusercontent.com/nibaji/thirukkural/master/detail.json";

    const response = await fetch(url);
    // console.log(response.ok);

    if (response.ok) {
      const jsonData = await response.json();
      // console.log(jsonData[0].section.detail[0].chapterGroup.detail);
      setaramDetails(jsonData[0].section.detail[0].chapterGroup.detail);
      seterror("");
      return;
    } else {
      seterror("Error");
      return;
    }
  }

  return (
    <View style={styles.main}>
      <StatusBar />
      <FlatList
        data={aramDetails}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.chapterGroup}>{item.name}</Text>
            <FlatList
              data={item.chapters.detail}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <View>
                  <Text style={styles.chapter}>{item.name}</Text>
                </View>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, padding: 5 },
  chapterGroup: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "grey",
  },
  chapter: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
  },
});
