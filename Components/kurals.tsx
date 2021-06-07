import React, { useEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchKuralDetails } from "../Redux/kuralData";
import kuralsList from "../Data/kurals";
import AppColor from "../Theme/colors";

interface KuralsList {
  paal: string;
}

const KuralsList: React.FC<KuralsList> = ({ paal }) => {
  const aramDetails = useSelector(
    (state: any) => state.kuralDetails.aramDetails
  );
  const porulDetails = useSelector(
    (state: any) => state.kuralDetails.porulDetails
  );
  const kaamamDetails = useSelector(
    (state: any) => state.kuralDetails.kaamamDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKuralDetails());
  }, [dispatch]);

  const navigation = useNavigation();

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
          <View style={styles.chapterGroups}>
            <Text style={styles.chapterGroupText}>{item.name}</Text>
            <FlatList
              data={item.chapters.detail}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => {
                //console.log(item.start);
                return (
                  <View style={styles.chapters}>
                    <Text style={styles.chapterText}>{item.name}</Text>
                    <FlatList
                      data={kuralsList.kural.filter(
                        (element: { Number: number }) => {
                          return (
                            element.Number >= item.start &&
                            element.Number <= item.end
                          );
                        }
                      )}
                      keyExtractor={(item) => item.Line1}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate("Kural", {
                              kural: item,
                              title: `குறள் எண்: ${item.Number}`,
                            });
                          }}
                        >
                          <View style={styles.kuralView}>
                            <Text style={styles.kuralText}>{item.Line1}</Text>
                            <Text style={styles.kuralText}>{item.Line2}</Text>
                          </View>
                        </TouchableOpacity>
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
  main: { flex: 1, padding: 5, backgroundColor: AppColor.primary },
  chapterGroups: {
    paddingHorizontal: 0,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: AppColor.accent,
    borderColor: AppColor.accent,
    borderWidth: 1,
    borderRadius: 9,
  },
  chapterGroupText: {
    padding: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  chapters: {
    padding: 5,
    margin: 5,
    backgroundColor: AppColor.primary,
    borderColor: AppColor.primary,
    borderWidth: 1,
    borderRadius: 9,
  },
  chapterText: {
    padding: 8,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: AppColor.accent,
  },
  kuralView: {
    padding: 5,
    margin: 5,
    borderColor: "grey",
    borderBottomWidth: 1,
  },
  kuralText: {
    padding: 5,
    color: AppColor.accent,
  },
});

export default KuralsList;
