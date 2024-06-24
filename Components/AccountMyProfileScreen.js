import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Imports from './Imports';


const MyProfile = () => {
    const [token, setToken] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const tokenFun = async () => {
        try {
            tokenData = await AsyncStorage.getItem('accessToken')
            nameVale = await AsyncStorage.getItem('name')
            emailValue = await AsyncStorage.getItem('email')
            setToken(tokenData);
            setName(nameVale);
            setEmail(emailValue);
        } catch (e) {

        }
    }
    tokenFun();
    return (
        <Imports.View style={{backgroundColor:'#FFFFFF', flex:1}}>
            <Imports.View style={styles.container}>
                <Imports.ImageBackground
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhXaPX204Jbf1pnMEWJGnqhXJLWjDFz4SlR_w-EudFPY8fV1e' }}
                    style={styles.imageBackground}
                >
                    <Imports.View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Imports.Ionicons name='person-circle-outline' size={120}  />
                    </Imports.View>
                </Imports.ImageBackground>
            </Imports.View>
            <Imports.View style={styles.innerContainer}>
                    <Imports.Text style={styles.textOne}>Name</Imports.Text>
                    {token ? (<Imports.Text style={styles.textTwo}>{name}</Imports.Text>) : (<Imports.Text style={styles.textTwo}>User Name</Imports.Text>)}
                   
                </Imports.View>
                <Imports.View style={styles.innerContainer}>
                    <Imports.Text style={styles.textOne}>Email</Imports.Text>
                    {token ? (<Imports.Text style={styles.textTwo}>{email}</Imports.Text>) : (<Imports.Text style={styles.textTwo}>user@gmail.com</Imports.Text>)}
                    
                </Imports.View>
        </Imports.View>
    );
}

export default MyProfile;

const styles = Imports.StyleSheet.create({
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

