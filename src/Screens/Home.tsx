import { Platform, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../color'
import CustomHeader from '../Components/Header/CustomHeader'
import { Icon } from 'react-native-vector-icons/Icon'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <CustomHeader
          iconleft="menu"
          iconfirstRight="mail"
          iconSecondRight="bell"
          IconColor={color.button}
          iconColorSecond={color.button}
        />
        <View>
          <Text style={styles.welcomeText}>
            Welcome to Road Assistance!
          </Text>
        </View>

        <View style={styles.container_img}>
        <Image
          style={{
            width: '100%',
            height: 230,
            backgroundColor: color.background,
          }}
          source={require("../../assets/banner.png")}
        />
      </View>

      <View style={{paddingLeft: '5%'}}>
        <Text style={styles.service}>Problam Check</Text>
      </View>

      <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollViewContentContainer}
        >
            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/googlemap.png")}
                style={styles.scroll}
              >
                <View style={styles.centerAlign}>
                  <View style={styles.viewInsideImage}>
                    <Text numberOfLines={2} style={styles.textimg}>
                      Vihical Tow
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/googlemap.png")}
                style={styles.scroll}
              >
                <View style={styles.centerAlign}>
                  <View style={styles.viewInsideImage}>
                    <Text numberOfLines={2} style={styles.textimg}>
                      Vihical Tow
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/googlemap.png")}
                style={styles.scroll}
              >
                <View style={styles.centerAlign}>
                  <View style={styles.viewInsideImage}>
                    <Text numberOfLines={2} style={styles.textimg}>
                      Vihical Tow
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/googlemap.png")}
                style={styles.scroll}
              >
                <View style={styles.centerAlign}>
                  <View style={styles.viewInsideImage}>
                    <Text numberOfLines={2} style={styles.textimg}>
                      Vihical Tow
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
        </ScrollView>

        <View style={{paddingLeft: '5%'}}>
        <Text style={styles.service}>Services</Text>
      </View>
      
      <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollViewContentContainer}
        >
            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/googlemap.png")}
                style={styles.scroll}
              >
                <View style={styles.centerAlign}>
                  <View style={styles.viewInsideImage}>
                    <Text numberOfLines={2} style={styles.textimg}>
                      Vihical Tow
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/googlemap.png")}
                style={styles.scroll}
              >
                <View style={styles.centerAlign}>
                  <View style={styles.viewInsideImage}>
                    <Text numberOfLines={2} style={styles.textimg}>
                      Vihical Tow
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/googlemap.png")}
                style={styles.scroll}
              >
                <View style={styles.centerAlign}>
                  <View style={styles.viewInsideImage}>
                    <Text numberOfLines={2} style={styles.textimg}>
                      Vihical Tow
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/googlemap.png")}
                style={styles.scroll}
              >
                <View style={styles.centerAlign}>
                  <View style={styles.viewInsideImage}>
                    <Text numberOfLines={2} style={styles.textimg}>
                      Vihical Tow
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
        </ScrollView>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
      width: '100%',
      flex: 1,
      paddingTop: Platform.OS === "android"? 5 : 0,
  },
  welcome: {
  },
  welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingLeft: '5%',
  },
  container_img: {
      width: '90%',
      height: 230,
      alignItems: 'center',
      // backgroundColor: color.button,
      marginHorizontal: '5%',
  },
  service: {
      fontSize: 20,
      fontWeight: '400',
  },
  scroll: {
    width: 144,
    height: 160,
    backgroundColor: color.brown,
    margin: 10,
  },
  centerAlign: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewInsideImage: {
    marginTop: 50,
    width: 124,
    height: 92,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: color.yellow,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  textimg: {
    color: color.white,
    fontSize: 16,
    fontFamily: "Medium",
    textAlign: "center",
  },
  scrollViewContentContainer: {
    // alignItems: "center",
    // width: '100%',
    height: 160,
    // marginHorizontal: '5%',
  },
});