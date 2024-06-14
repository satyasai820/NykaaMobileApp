import { StyleSheet, View, Image, Text, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const AccountFooterComponent = () => {
    const navigation = useNavigation();
    const iconsData = [{ m1: 'Authenticity', icon: 'ribbon-outline' }, { m1: 'Privacy', icon: 'lock-closed-outline' }, { m1: 'Terms & Condition', icon: 'document-text-outline' }, { m1: 'Rate App', icon: 'star-outline' }, { m1: 'About Nykaa', icon: 'alert-outline' }, { m1: 'Career', icon: 'bag-check-outline' }, { m1: 'Nykaa CSR', icon: 'rose-outline' },]

    const [token, setToken] = useState();
    const [open, setOpen] = useState(false);

    const tokenFun = async () => {
        try {
            tokenData = await AsyncStorage.getItem('accessToken')
            setToken(tokenData);
        } catch (e) {

        }
    }
    tokenFun();

    const handleLogOut = async () => {
        setOpen(true);
        await AsyncStorage.clear();
        setOpen(false);
        navigation.navigate('Account', { refresh: Date.now() });
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                        <Image style={{ width: 100, height: 25 }} source={require('../assets/nykaa-1 1.png')} />
                        <Text style={{ color: 'grey' }}>ver 3.5.3(25934)</Text>
                    </View>
                    <View style={{ flexWrap: 'wrap', flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        {iconsData.map((item, index) => (
                            <View style={styles.iconText} key={index}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons style={styles.icon} name={item.icon} size={25} color='#7DB0CF' />
                                </View>
                                <Text style={{ color: '#FFFFFF', marginVertical: 4, textAlign: 'center' }}>{item.m1}</Text>
                            </View>
                        ))}
                    </View>
                    {token ? (
                        <TouchableOpacity style={styles.logOutButton} onPress={() => setOpen(true)}>
                            <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' }}>Log Out</Text>
                        </TouchableOpacity>
                    ) : ('')}
                </View>
            </View>
            <Modal transparent={true} animationType="slide" visible={open} statusBarTranslucent={true}>
                <View style={styles.ModalStyle}>
                    <View style={styles.innerModalContainer}>
                        <Text style={styles.title}>Are You Sure you want to logout?</Text>
                        <Text style={styles.text} onPress={handleLogOut}>Logout</Text>
                        <Text style={styles.text} onPress={handleLogOut}>Logout from all devices</Text>
                        <Text style={styles.text} onPress={() => setOpen(false)}>Cancel</Text>
                    </View>
                </View>
            </Modal>
        </>

    )
}

export default AccountFooterComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3A4047'
    },
    innerContainer: {
        marginHorizontal: 10,
        marginVertical: 20,
    },
    icon: {
        margin: 'auto',
        backgroundColor: '#132535',
        borderWidth: 1,
        borderColor: '#7DB0CF',
        padding: 10,
        borderRadius: 400
    },
    iconText: {
        justifyContent: 'center',
        textAlign: 'center',
        width: 100,
        marginTop: 10
    },
    logOutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#7DB0CF',
        paddingVertical: 10,
        margin: 20

    },
    ModalStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    innerModalContainer: {
        backgroundColor: '#FFFFFF',
        width: 230,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center'
    },
    text: {
        color: '#E80071',
        paddingVertical: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        borderTopWidth: 1,
        borderColor: '#ccc'

    }
})