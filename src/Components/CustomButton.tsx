import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import color from "../../color";

interface Props {
  text: string;
  onPress?: () => void;
}

const CustomButtom: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}> {props.text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButtom;
const styles = StyleSheet.create({
  button: {
    height: 55,
    borderRadius: 10,
    // paddingVertical: 14,
    // paddingHorizontal: 10,
    backgroundColor: color.button,
    margin: 17,
    padding: 10,
  },
  buttonText: {
    color: color.black,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
  },
});
