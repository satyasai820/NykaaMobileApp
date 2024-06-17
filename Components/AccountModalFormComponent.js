import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Pressable, Alert, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { firebase } from '../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const ModalFormComponent = ({ handleCloseModal }) => {
    const [isSignIn, setIsSiginIn] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigation = useNavigation();

    const isValidation = () => {
        const errors = {};
        let isValid = true;

        if (isSignIn) {
            if (!formData.name.trim()) {
                errors.name = "Name is required";
                isValid = false;
            } else if (formData.name.trim().length < 3) {
                errors.name = "It must be at least 3 characters";
                isValid = false;
            } else if (/\d/.test(formData.name.trim())) {
                errors.name = "Name must not contain numbers";
                isValid = false;
            } else if (/[^a-zA-Z ]/.test(formData.name.trim())) {
                errors.name = "Must not contain special characters";
                isValid = false;
            }
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
            isValid = false;
        }

        if (!formData.password.trim()) {
            errors.password = "Password is required";
            isValid = false;
        } else if (formData.password.trim().length < 6) {
            errors.password = "It must be at least 6 characters";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    const handleFieldFunction = (input, text) => {
        setFormData((prevData) => ({
            ...prevData,
            [input]: text
        }));
    }

    const handleSignUpFunction = async (e) => {
        if (!isValidation()) {
            return;
        }
        e.preventDefault();
        try {
            await firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password);
            const user = firebase.auth().currentUser;
            await user.updateProfile({
                displayName: formData.name,
            });
            const accessToken = await user.getIdToken();
            console.log('this is users --->', accessToken);
            await AsyncStorage.setItem('email', user.email);
            await AsyncStorage.setItem('name', user.displayName);
            await AsyncStorage.setItem('accessToken', accessToken);
            Alert.alert('Congratulations!', 'Your account has been successfully created.')
            navigation.navigate('Account')
            handleCloseModal();
        } catch (error) {
            console.log(error.message);
            Alert.alert('It looks like you already have an account', 'Please log in instead')
        }


        setFormData({
            name: '',
            email: '',
            password: ''
        });
    }


    const handleLoginFunction = async () => {

        if (!isValidation()) {
            Alert.alert('Validation Failed', 'Please check the input fields');
            return;
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(formData.email, formData.password);
            const user = firebase.auth().currentUser;

            if (user) {
                const accessToken = await user.getIdToken();
                console.log('Access Token:', accessToken);
                await AsyncStorage.setItem('email', user.email);
                await AsyncStorage.setItem('name', user.displayName);
                await AsyncStorage.setItem('accessToken', accessToken);
                Alert.alert('You have successfully logged in.', 'Welcome back!');
                navigation.navigate('Account')
                handleCloseModal();
            } else {
                Alert.alert('User is not authenticated.');
            }
        } catch (error) {
            console.log(error);
            Alert.alert('It looks like you don`t have an account', 'Please sign up first')
        }

        setFormData({
            name: '',
            email: '',
            password: ''
        });

    }

      //Google Authentication

      GoogleSignin.configure({
        webClientId: '886082312426-cq4jpiobuiin0vg7brd6j9cuqfajc74h.apps.googleusercontent.com',
        
    });

    const handleGoogleAccount = async () => {
        try {
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            const userCredential = await auth().signInWithCredential(googleCredential);
            const user = userCredential.user
            // here getting token
            const token = await user.getIdToken();
            // here storing details into asyncStorage
            await AsyncStorage.setItem('email', user.email);
            await AsyncStorage.setItem('name', user.displayName);
            await AsyncStorage.setItem('accessToken', token);
            handleCloseModal();

        } catch (error) {
            console.error('Error during Google sign-in:', error);
        }
    };

  


    const handleToggleButton = () => {
        setIsSiginIn((prevIsSignIn) => !prevIsSignIn);
    }

    return (
        <Modal animationType="slide" statusBarTranslucent={true} transparent={true} visible={true}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
                <View style={styles.modalContainer}>
                    <View style={styles.modalFormStyle}>
                        <Ionicons name='close-outline' size={25} style={{ marginLeft: 'auto' }} onPress={handleCloseModal} />
                        <View style={styles.FirstView}>
                            <Image style={{ width: 85, height: 25 }} source={require('../assets/nykaa-1.png')} />
                            <Text style={styles.title}>{isSignIn ? 'Signup' : 'Login'} </Text>
                            <Text style={{ color: 'grey' }}>Get Started & grab best offers on top brands!</Text>
                        </View>
                        <View>
                            {isSignIn ? (
                                <View>
                                    <TextInput
                                        style={styles.textInputContainer}
                                        placeholder='Enter Name'
                                        onChangeText={(text) => handleFieldFunction('name', text)}
                                        value={formData.name}
                                    />
                                    {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
                                </View>
                            ) : null}
                            <View>
                                <TextInput
                                    style={styles.textInputContainer}
                                    placeholder='Enter Email'
                                    onChangeText={(text) => handleFieldFunction('email', text)}
                                    value={formData.email}
                                />
                                {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
                            </View>
                            <View>
                                <TextInput
                                    style={styles.textInputContainer}
                                    placeholder='Enter Password'
                                    onChangeText={(text) => handleFieldFunction('password', text)}
                                    value={formData.password}
                                    secureTextEntry={true}
                                />
                                {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            {isSignIn ? (
                                <Pressable onPress={handleSignUpFunction} style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text>
                                </Pressable>
                            ) : (
                                <Pressable onPress={handleLoginFunction} style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Log In</Text>
                                </Pressable>
                            )}
                        </View>
                        <Text style={{ marginHorizontal: 'auto', marginBottom: 5 }}>
                            <Text>{isSignIn ? 'Already have an account' : 'Don`t have an account'} <Text style={{ color: '#E80071', fontWeight: 'bold' }} onPress={handleToggleButton}> {isSignIn ? 'Log in' : 'Sign Up'}</Text> </Text>
                        </Text>
                        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleAccount}>
                            <Text style={{ padding: 8, fontSize: 17, color: 'grey', fontWeight: 'bold' }}>Continue With Google</Text>
                            <Ionicons name="logo-google" size={18} style={{ marginLeft: 'auto', paddingRight: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
}

export default ModalFormComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalFormStyle: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    FirstView: {
        marginBottom: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    keyboardAvoidingView: {
        width: '100%',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10
    },
    textInputContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5,
        marginHorizontal: 25,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 8
    },
    buttonContainer: {
        backgroundColor: '#E80071',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        margin: 'auto'
    },
    pressed: {
        opacity: 0.75
    },
    googleButton: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30,
        borderRadius: 5
    },
    errorText: {
        color: 'red',
        marginLeft: 30,
        marginBottom: 5
    }
});
