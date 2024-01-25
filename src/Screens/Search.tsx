import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from "../../color";
import SearchBox from '../Components/SearchBox';
import CustomHeader from '../Components/Header/CustomHeader';
import CustomLabel from '../Components/Label/CustomLabel';

const Search = () => {
return (
<SafeAreaView style={styles.container}>
  <ScrollView>
    <CustomHeader
      iconleft="menu"
      iconfirstRight="mail"
      iconSecondRight="bell"
      IconColor={color.button}
      iconColorSecond={color.button}
    />
  <View style={{marginTop: 15}}>
    <SearchBox iconName="search" placeholder="Search exam test" />
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
);
};

export default Search;

const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: "column",
paddingTop: Platform.OS === "android" ? 5 : 0,
},
flatList: {
marginTop: 80,
paddingHorizontal: '5%',
},
item: {
padding: 10,
fontSize: 18,
height: 44,
},
margin: {
  width: '100%',
  marginBottom: 15,
},
});