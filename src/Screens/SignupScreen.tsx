import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View,  Image, Text, TextInput, Button, TouchableOpacity } from 'react-native';
const logo = require("../../assets/images/logo.png")
export default function SingupScreen() {

    const navigation = useNavigation(); // Get the navigation object

    const handleLoginPress = () => {
        // Navigate to the "Profile" screen
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 50}}>
            <Image source={logo}/>
            <Text style={{ marginStart: 40, alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 24, marginBottom: 30 }}>Register</Text>

            <TextInput
                placeholder="Full Name"
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%', paddingLeft: 10 }}
            />

            <TextInput
                placeholder="Phone Number"
                secureTextEntry={true}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%', paddingLeft: 10 }}
            />
            <TextInput
                placeholder="Password"
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%', paddingLeft: 10 }}
            />

            <TextInput
                placeholder="Confirm Password"
                secureTextEntry={true}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 30, width: '80%', paddingLeft: 10 }}
            />

            <View style={{ width: '80%' }}>
                <Button title="Register" color="#FFD700" onPress={handleLoginPress}/>
            </View>

            <TouchableOpacity style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}} >
                <Text>Already havev an account? </Text>
                <Text onPress={handleLoginPress} style={{color: '#F5C901'}}>Login</Text>
            </TouchableOpacity>

        </View>

    );
}
