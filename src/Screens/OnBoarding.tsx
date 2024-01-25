import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Platform } from "react-native";
import color from "../../color";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../Components/CustomButton";

const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container_img}>
        <Image
          style={{
            width: "100%",
            backgroundColor: color.background,
          }}
          source={require("../../assets/appicon.png")}
        />
      </View>

      <View style={styles.text_container}>
        <Text style={styles.title}>Breakdown</Text>

        <Text style={styles.subtitle}>
          Your vehicle broke down midway? No worries. We’ve got you covered. Providing the nearest services to assist you no matter where you are.
        </Text>
      </View>

      <View style={styles.button}>
        <CustomButton
          onPress={() => navigation.navigate("tabNavigation")}
          text="Quik Start"
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 5 : 0,
  },
  container_img: {
    marginVertical: 100,
    justifyContent: 'center',
  },
  text_container: {
    width: '90%',
    flex: 0.3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 40,
    color: color.black,
  },
  subtitle: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
    color: color.black,
  },
  button: {
    marginTop: 100,
    width: 250,
    flex: 0.1,
    alignSelf: 'center',
  },
});
