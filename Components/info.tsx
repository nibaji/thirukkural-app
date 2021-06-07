import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";
import { useSelector, useDispatch } from "react-redux";
import { changeAppInfoVisibility } from "../Redux/appInfo";
import AppColor from "../Theme/colors";

const AppInfo = () => {
  const dispatch = useDispatch();
  const showInfo: any = useSelector(
    (state: any) => state.appInfoVisibility.appInfoVisibility
  );

  // console.log("modal" + showInfo);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showInfo}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>திருக்குறள்</Text>
          <Image
            source={require("../assets/adaptive-icon.png")}
            style={{
              width: 150,
              height: 150,
            }}
          />
          <Text>
            The Tirukkuṛaḷ is a classic Tamil sangam literature consisting of
            1330 couplets or Kurals. It was authored by Thiruvalluvar.
          </Text>

          <Text style={styles.creditsTitleText}>Credits</Text>
          <View style={styles.creditSectionView}>
            <Text style={styles.creditsText}>
              Huge Thanks to Arjunkumar, who made this huge data available in
              his github for easy access.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`https:github.com/tk120404/thirukkural`)
            }
          >
            <Text style={styles.linktext}>THIRUKKURAL REPO</Text>
          </TouchableOpacity>

          <Text style={styles.creditsTitleText}>App Author</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`https:nibaji.xyz`)}>
            <Text style={styles.linktext}>Nidhun Balaji T R (nibaji)</Text>
          </TouchableOpacity>

          <Text style={styles.creditsTitleText}>App Source</Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`https:github.com/nibaji/thirukkural-react`)
            }
          >
            <Text style={styles.linktext}>GIT</Text>
          </TouchableOpacity>

          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              dispatch(changeAppInfoVisibility());
              //console.log(showInfo);
            }}
          >
            <Text style={styles.textStyle}>OKAY</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: AppColor.primary,
    borderRadius: 20,
    padding: 10,
    marginTop: 9,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  creditsTitleText: {
    margin: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  creditsText: {
    textAlign: "justify",
    fontStyle: "italic",
  },
  linktext: {
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
    color: AppColor.primary,
  },
  creditRowView: {
    flexDirection: "row",
  },
  creditSectionView: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppInfo;
