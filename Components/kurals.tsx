import React, { useEffect, useState } from "react";
import { Text, View, StatusBar, FlatList, StyleSheet } from "react-native";
import kurals from "../kurals";

interface KuralsList {
  paal: string;
}

const KuralsList: React.FC<KuralsList> = ({ paal }) => {
  const [aramDetails, setaramDetails] = useState<any[]>([]);
  const [porulDetails, setporulDetails] = useState<any[]>([]);
  const [kaamamDetails, setkaamamDetails] = useState<any[]>([]);
  // const [kurals, setkurals] = useState<any[]>([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    fetchDetails();
  }, [aramDetails, porulDetails, kaamamDetails]);

  async function fetchDetails() {
    const url =
      "https://raw.githubusercontent.com/nibaji/thirukkural/master/detail.json";

    const response = await fetch(url);
    // console.log(response.ok);

    if (response.ok) {
      const jsonData = await response.json();
      // console.log(jsonData[0].section.detail[0].chapterGroup.detail);
      setaramDetails(jsonData[0].section.detail[0].chapterGroup.detail);
      setporulDetails(jsonData[0].section.detail[1].chapterGroup.detail);
      setkaamamDetails(jsonData[0].section.detail[2].chapterGroup.detail);
      seterror("");
      return;
    } else {
      seterror("Error");
      return;
    }
  }

  return (
    // CHAPTER GROUP - Titles - <FlatList>
    // CHAPTER NAME - Sub titles - <FlatList>
    // KURALS - <FlatList>
    <View style={styles.main}>
      <StatusBar />
      <FlatList
        data={
          paal == "aram"
            ? aramDetails
            : paal == "porul"
            ? porulDetails
            : kaamamDetails
        }
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.chapterGroup}>{item.name}</Text>
            <FlatList
              data={item.chapters.detail}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => {
                //console.log(item.start);
                return (
                  <View>
                    <Text style={styles.chapter}>{item.name}</Text>
                    <FlatList
                      data={kurals.kural.filter(
                        (element: { Number: number }) => {
                          return (
                            element.Number >= item.start &&
                            element.Number <= item.end
                          );
                        }
                      )}
                      keyExtractor={(item) => item.Line1}
                      renderItem={({ item }) => (
                        <View style={styles.kuralView}>
                          <Text>{item.Line1}</Text>
                          <Text>{item.Line2}</Text>
                        </View>
                      )}
                      showsVerticalScrollIndicator={false}
                    />
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, padding: 5 },
  chapterGroup: {
    padding: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  chapter: {
    padding: 8,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
  },
  kuralView: {
    padding: 5,
  },
});

export default KuralsList;
