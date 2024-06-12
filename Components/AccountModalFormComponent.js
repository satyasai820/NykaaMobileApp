import React from 'react';
import { Modal, View, Text, StyleSheet, Image, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Pressable, Platform, Keyboard, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const ModalFormComponent = ({ handleCloseModal }) => {
    return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='position'>
                    <Modal animationType="slide" statusBarTranslucent={true} transparent={true} visible={true}>
                        <View style={styles.modalContainer}>
                            {/* <ScrollView style={styles.scrollViewContent}> */}
                            <View style={styles.modalFormStyle}>
                                <Ionicons name='close-outline' size={25} style={{ marginLeft: 'auto' }} onPress={handleCloseModal} />
                                <View style={styles.FirstView}>
                                    <Image style={{ width: 85, height: 25 }} source={require('../assets/nykaa-1.png')} />
                                    <Text style={styles.title}>Login or Signup</Text>
                                    <Text style={{ color: 'grey' }}>Get Started & grab best offers on top brands!</Text>
                                </View>
                                <View>
                                    <TextInput style={styles.textInputContainer} placeholder='Enter Name' />
                                    <TextInput style={styles.textInputContainer} placeholder='Enter Email' />
                                    <TextInput style={styles.textInputContainer} placeholder='Enter Password' />
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                    <Pressable style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>Sign Up</Text>
                                    </Pressable>
                                    {/* <Text style={styles.buttonContainer}>Log In</Text> */}
                                </View>
                                <View style={{ marginHorizontal: 'auto' }}>
                                    <Text>Don't have an account <Text style={{ color: '#E80071', fontWeight: 'bold' }}>Sign Up</Text> </Text>
                                    {/* <Text>Already have an account <Text style={{color:'#E80071', fontWeight:'bold'}}>Log in</Text> </Text> */}
                                </View>
                                <View style={styles.googleButton}>
                                    <Text style={{ padding: 8, fontSize: 17, color: 'grey', fontWeight: 'bold' }}>Continue With Google</Text>
                                    <Ionicons name="logo-google" size={18} style={{ marginLeft: 'auto', paddingRight: 10 }} />
                                </View>
                            </View>
                            {/* </ScrollView> */}
                        </View>
                    </Modal>
            </KeyboardAvoidingView>
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
        height: 500,
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
    scrollViewContent: {
        flexGrow: 1
    }
});


