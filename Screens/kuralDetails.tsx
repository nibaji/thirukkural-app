import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppColor from "../Theme/colors";

interface KuralDetails {
  route: any;
}

const KuralDetails: React.FC<KuralDetails> = ({ route }) => {
  const { kural } = route.params;

  return (
    <View style={styles.main}>
      <View style={styles.kuralView}>
        <Text style={{ ...styles.detailsText, width: "100%" }}>
          {kural.Line1}
        </Text>
        <Text style={{ ...styles.detailsText, width: "100%" }}>
          {kural.Line2}
        </Text>
      </View>

      <View style={styles.rowView}>
        <Text style={styles.titletext}>Translation :</Text>
        <Text style={styles.detailsText}>{kural.Translation}</Text>
      </View>

      <View style={styles.rowView}>
        <Text style={styles.titletext}>டாக்டர் மு.வரதராசனார் :</Text>
        <Text style={styles.detailsText}>{kural.mv}</Text>
      </View>

      <View style={styles.rowView}>
        <Text style={styles.titletext}>Explanation :</Text>

        <Text style={styles.detailsText}>{kural.explanation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 5,
    backgroundColor: AppColor.accent,
    alignItems: "center",
  },
  kuralView: {
    margin: 18,
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //flexWrap: "wrap",
    marginTop: 8,
    marginBottom: 14,
  },
  titletext: {
    padding: 5,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    width: "30%",
  },
  detailsText: {
    padding: 5,
    textAlign: "justify",
    fontWeight: "bold",
    fontSize: 14,
    color: AppColor.primary,
    flexWrap: "wrap",
    width: "70%",
  },
});

export default KuralDetails;
