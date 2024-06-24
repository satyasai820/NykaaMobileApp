import React, { useState } from 'react';
import { firebase } from '../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Imports from './Imports';

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
            Imports.Alert.alert('Congratulations!', 'Your account has been successfully created.')
            navigation.navigate('Account')
            handleCloseModal();
        } catch (error) {
            console.log(error.message);
            Imports.Alert.alert('It looks like you already have an account', 'Please log in instead')
        }


        setFormData({
            name: '',
            email: '',
            password: ''
        });
    }


    const handleLoginFunction = async () => {

        if (!isValidation()) {
            Imports.Alert.alert('Validation Failed', 'Please check the input fields');
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
                Imports.Alert.alert('You have successfully logged in.', 'Welcome back!');
                navigation.navigate('Account')
                handleCloseModal();
            } else {
                Imports.Alert.alert('User is not authenticated.');
            }
        } catch (error) {
            console.log(error);
            Imports.Alert.alert('It looks like you don`t have an account', 'Please sign up first')
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
        console.log("google code is commented");
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
        <Imports.Modal animationType="slide" statusBarTranslucent={true} transparent={true} visible={true}>
            <Imports.KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
                <Imports.View style={styles.modalContainer}>
                    <Imports.View style={styles.modalFormStyle}>
                        <Imports.Ionicons name='close-outline' size={25} style={{ marginLeft: 'auto' }} onPress={handleCloseModal} />
                        <Imports.View style={styles.FirstView}>
                            <Imports.Image style={{ width: 85, height: 25 }} source={require('../assets/nykaa-1.png')} />
                            <Imports.Text style={styles.title}>{isSignIn ? 'Signup' : 'Login'} </Imports.Text>
                            <Imports.Text style={{ color: 'grey' }}>Get Started & grab best offers on top brands!</Imports.Text>
                        </Imports.View>
                        <Imports.View>
                            {isSignIn ? (
                                <Imports.View>
                                    <Imports.TextInput
                                        style={styles.textInputContainer}
                                        placeholder='Enter Name'
                                        onChangeText={(text) => handleFieldFunction('name', text)}
                                        value={formData.name}
                                    />
                                    {errors.name ? <Imports.Text style={styles.errorText}>{errors.name}</Imports.Text> : null}
                                </Imports.View>
                            ) : null}
                            <Imports.View>
                                <Imports.TextInput
                                    style={styles.textInputContainer}
                                    placeholder='Enter Email'
                                    onChangeText={(text) => handleFieldFunction('email', text)}
                                    value={formData.email}
                                />
                                {errors.email ? <Imports.Text style={styles.errorText}>{errors.email}</Imports.Text> : null}
                            </Imports.View>
                            <Imports.View>
                                <Imports.TextInput
                                    style={styles.textInputContainer}
                                    placeholder='Enter Password'
                                    onChangeText={(text) => handleFieldFunction('password', text)}
                                    value={formData.password}
                                    secureTextEntry={true}
                                />
                                {errors.password ? <Imports.Text style={styles.errorText}>{errors.password}</Imports.Text> : null}
                            </Imports.View>
                        </Imports.View>
                        <Imports.View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            {isSignIn ? (
                                <Imports.Pressable onPress={handleSignUpFunction} style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                                    <Imports.Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Sign Up</Imports.Text>
                                </Imports.Pressable>
                            ) : (
                                <Imports.Pressable onPress={handleLoginFunction} style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                                    <Imports.Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Log In</Imports.Text>
                                </Imports.Pressable>
                            )}
                        </Imports.View>
                        <Imports.Text style={{ marginHorizontal: 'auto', marginBottom: 5 }}>
                            <Imports.Text>{isSignIn ? 'Already have an account' : 'Don`t have an account'} <Imports.Text style={{ color: '#E80071', fontWeight: 'bold' }} onPress={handleToggleButton}> {isSignIn ? 'Log in' : 'Sign Up'}</Imports.Text> </Imports.Text>
                        </Imports.Text>
                        <Imports.TouchableOpacity style={styles.googleButton} onPress={handleGoogleAccount}>
                            <Imports.Text style={{ padding: 8, fontSize: 17, color: 'grey', fontWeight: 'bold' }}>Continue With Google</Imports.Text>
                            <Imports.Ionicons name="logo-google" size={18} style={{ marginLeft: 'auto', paddingRight: 10 }} />
                        </Imports.TouchableOpacity>
                    </Imports.View>
                </Imports.View>
            </Imports.KeyboardAvoidingView>
        </Imports.Modal>
    );
}

export default ModalFormComponent;

const styles = Imports.StyleSheet.create({
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
