import { StyleSheet, View, Image, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const AccountFooterComponent = () => {
    const iconsData = [ {m1:'Authenticity',icon:'ribbon-outline'},{m1:'Privacy',icon:'lock-closed-outline'},{m1:'Terms & Condition',icon:'document-text-outline'},{m1:'Rate App',icon:'star-outline'},{m1:'About Nykaa',icon:'alert-outline'},{m1:'Career',icon:'bag-check-outline'},{m1:'Nykaa CSR',icon:'rose-outline'},]
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                    <Image style={{ width: 100, height: 25 }} source={require('../assets/nykaa-1 1.png')} />
                    <Text style={{ color: 'grey' }}>ver 3.5.3(25934)</Text>
                </View>
                <View style={{ flexWrap: 'wrap', flex:1, flexDirection:'row' }}>
                    {iconsData.map((item, index) => (
                    <View style={styles.iconText} key={index}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons style={styles.icon} name={item.icon} size={25} color='#7DB0CF' />
                        </View>
                        <Text style={{ color: '#FFFFFF', marginVertical: 4, textAlign: 'center' }}>{item.m1}</Text>
                    </View>
                    ))}
                </View>
            </View>
        </View>
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
    }
})