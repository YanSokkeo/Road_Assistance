
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Button } from 'react-native'
import { StyleSheet, TouchableOpacity } from 'react-native';
const profileImg = require("../../assets/images/profile.jpg")
const editImg = require("../../assets/images/round_edit.png")
const logoutImg = require("../../assets/images/logout.png")


export default function ProfileScreen({  }) {
    const navigation = useNavigation(); // Get the navigation object

    const handleLoginPress = () => {
        // Navigate to the "Profile" screen
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={profileImg}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>James</Text>
                <Text style={styles.phone}>097999888</Text>

                <TouchableOpacity style={styles.editButton}>
                    <View style={styles.contentContainer}>
                        <Text>Edit Profile</Text>
                        <Image
                            source={editImg}
                            style={styles.logoutImage}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleLoginPress} style={styles.logoutButton}>
                <View style={styles.contentContainer}>
                    <Text style={styles.logoutButtonText}>Log out</Text>
                    <Image
                        source={logoutImg}
                        style={styles.logoutImage}
                    />
                </View>
            </TouchableOpacity>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 20,
        marginTop: 20,
    },
    phone: {
        fontSize: 16,
        marginTop: 10,
    },
    editButton: {
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 50,
        marginHorizontal: 25,
    },
    logoutButton: {
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 150,
        marginHorizontal: 25,
    },
    contentContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoutButtonText: {
        color: 'white'
    },
    logoutImage: {
        alignSelf: 'flex-end',
        width: 20,
        height: 20,
    }

});