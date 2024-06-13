import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const MyProfile = () => {
    return (
        <View style={{backgroundColor:'#FFFFFF', flex:1}}>
            <View style={styles.container}>
                <ImageBackground
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhXaPX204Jbf1pnMEWJGnqhXJLWjDFz4SlR_w-EudFPY8fV1e' }}
                    style={styles.imageBackground}
                >
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Ionicons name='person-circle-outline' size={120}  />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.innerContainer}>
                    <Text style={styles.textOne}>Name</Text>
                    <Text style={styles.textTwo}>User Name</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.textOne}>Email</Text>
                    <Text style={styles.textTwo}>user@gmail.com</Text>
                </View>
        </View>
    );
}

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        height: 250,
        marginBottom:10
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    innerContainer :{
        marginHorizontal:20,
        marginVertical:10,
        borderBottomWidth:1,
        paddingBottom:10,
        borderBottomColor:'#ccc'
    },
    textOne :{
        fontSize:12,
        color:'grey'
    },
    textTwo : {
        fontSize:20
    }
});

