import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View,  Image, Text, TextInput, Button, TouchableOpacity } from 'react-native';
const logo = require("../../assets/images/logo.png")
export default function LoginScreen() {

    const navigation = useNavigation(); // Get the navigation object

    const handleLoginPress = () => {
        // Navigate to the "Profile" screen
        navigation.navigate('tabNavigation');
    };
    const handleRegisterPress = () => {
        // Navigate to the "Profile" screen
        navigation.navigate('SignupScreen');
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 50}}>
            <Image source={logo}/>
            <Text style={{ marginStart: 40, alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 24, marginBottom: 30 }}>Login</Text>

            <TextInput
                placeholder="Phone Number"
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%', paddingLeft: 10 }}
            />

            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 30, width: '80%', paddingLeft: 10 }}
            />

            <View style={{ width: '80%' }}>
                <Button title="Login" color="#FFD700" onPress={handleLoginPress}/>
            </View>

            <TouchableOpacity style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}} >
                <Text>New to the app? </Text>
                <Text onPress={handleRegisterPress} style={{color: '#F5C901'}}>Register</Text>
            </TouchableOpacity>

        </View>

    );
}
