import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { changeAppInfoVisibility } from "../Redux/appInfo";

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

          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
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
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
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
});

export default AppInfo;
