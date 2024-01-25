import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomLabel from '../Components/Label/CustomLabel'

const Maping = () => {
  return (
    <SafeAreaView style={{marginTop: 50}}>
      <CustomLabel
            image={require('../../assets/profile.png')}
            title="Physics daily quiz"
            subtitle="45 Minutes"
            iconName="check"
          />
    </SafeAreaView>
  )
}

export default Maping

const styles = StyleSheet.create({})