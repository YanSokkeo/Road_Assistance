import { Platform, SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import CustomLabel from '../Components/Label/CustomLabel'
import CustomHeader from '../Components/Header/CustomHeader'
import color from '../../color'

const Maping = () => {
  return (
    <SafeAreaView  style={styles.container}>
      <ScrollView>
        <CustomHeader
          iconleft="menu"
          iconfirstRight="mail"
          iconSecondRight="bell"
          IconColor={color.button}
          iconColorSecond={color.button}
        />
      <View style={styles.container_img}>
        <Text>Go to Google Map</Text>
        <Image
          style={{
            width: '100%',
            height:230,
          }}
          source={require("../../assets/googlemap.png")}
        />
      </View>
      <View style={styles.margin}>
        <CustomLabel
          image={require('../../assets/profile.png')}
          title="Devit"
          subtitle="Flat Tire, Engines Problem"
          iconName="phone"
        />
      </View>
      <View style={styles.margin}>
        <CustomLabel
          image={require('../../assets/profile.png')}
          title="Devit"
          subtitle="Flat Tire, Engines Problem"
          iconName="phone"
        />
      </View>
      <View style={styles.margin}>
        <CustomLabel
          image={require('../../assets/profile.png')}
          title="Devit"
          subtitle="Flat Tire, Engines Problem"
          iconName="phone"
        />
      </View>
      <View style={styles.margin}>
        <CustomLabel
          image={require('../../assets/profile.png')}
          title="Devit"
          subtitle="Flat Tire, Engines Problem"
          iconName="phone"
        />
      </View>
      <View style={styles.margin}>
        <CustomLabel
          image={require('../../assets/profile.png')}
          title="Devit"
          subtitle="Flat Tire, Engines Problem"
          iconName="phone"
        />
      </View>
      <View style={styles.margin}>
        <CustomLabel
          image={require('../../assets/profile.png')}
          title="Devit"
          subtitle="Flat Tire, Engines Problem"
          iconName="phone"
        />
      </View>
      <View style={styles.margin}>
        <CustomLabel
          image={require('../../assets/profile.png')}
          title="Devit"
          subtitle="Flat Tire, Engines Problem"
          iconName="phone"
        />
      </View>
      <View style={styles.margin}>
        <CustomLabel
          image={require('../../assets/profile.png')}
          title="Devit"
          subtitle="Flat Tire, Engines Problem"
          iconName="phone"
        />
      </View>
      <View style={styles.margin}>
        <CustomLabel
          image={require('../../assets/profile.png')}
          title="Devit"
          subtitle="Flat Tire, Engines Problem"
          iconName="phone"
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Maping

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingTop: Platform.OS === "android"? 5 : 0,
  },
  margin: {
    width: '100%',
    marginBottom: 15,
  },
  container_img: {
    width: '90%',
    height: 230,
    alignItems: 'center',
    // backgroundColor: color.button,
    marginHorizontal: '5%',
  },
});

