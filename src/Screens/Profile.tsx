import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from "../../color";
import SearchBox from '../Components/SearchBox';
import CustomHeader from '../Components/Header/CustomHeader';

const Profile = () => {
return (
<SafeAreaView style={styles.container}>
    <CustomHeader
      iconleft="menu"
      iconfirstRight="mail"
      iconSecondRight="bell"
      IconColor={color.button}
      iconColorSecond={color.button}
    />
  
</SafeAreaView>
);
};

export default Profile;

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
});