import { Platform, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import color from '../../color'
import CustomHeader from '../Components/Header/CustomHeader'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex: 0.2}}>
        <CustomHeader
          iconleft="menu"
          iconfirstRight="mail"
          iconSecondRight="bell"
          IconColor={color.button}
          iconColorSecond={color.button}
        />
      </View>
        <View style={styles.welcome}>
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
        <Text style={styles.service}>Services</Text>
      </View>
      
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
    flex: 0.,
    // backgroundColor: color.button,
    marginHorizontal: '5%',
},
service: {
    fontSize: 20,
    fontWeight: '400',
},

});