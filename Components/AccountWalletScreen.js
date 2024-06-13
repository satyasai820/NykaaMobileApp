import { View, Text, StyleSheet, Image } from "react-native";

const Wallet = () => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={{fontSize:16}}>Wallet Balance</Text>
                    <Text style={{fontSize:25, color:'#E80071', fontWeight:'bold'}}>₹20</Text>
                </View>
            </View>
            <View style={styles.secondContainer}>
                <View>
                    <Text style={styles.textStyle}>NYKAA CASH</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginHorizontal:10,fontSize:18, fontWeight:'bold'}}>₹0</Text>
                    <Text style={{marginHorizontal:10,fontSize:18, color:'#E80071', fontWeight:'bold'}}>History</Text>
                </View>
            </View>
            <View style={styles.secondContainer}>
                <View>
                    <Text style={styles.textStyle}>NYKAA REWARDS</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginHorizontal:10,fontSize:18, fontWeight:'bold'}}>₹20</Text>
                    <Text style={{marginHorizontal:10,fontSize:18, color:'#E80071', fontWeight:'bold'}}>History</Text>
                </View>
            </View>
            <View style={{margin:10}}>
                <Image style={{width:'100%', height:200}} source={{uri:'https://www.nykaa.com/media/wysiwyg/NykaaWallet/wallet_footer_banner_3.png'}} />
            </View>
        </View>
    )
}

export default Wallet;

const styles = StyleSheet.create({
        container : {
            backgroundColor:'#FFFFFF',
            marginTop:10,
            height:130,
            elevation:2
        },
        innerContainer : {
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        },
        secondContainer : {
            marginTop:5,
            backgroundColor:'#FFFFFF',
            padding:15,
            elevation:2,
            flexDirection:'row',
            justifyContent:'space-between'
        },
        textStyle : {
            fontWeight:'bold',
            fontSize:17
        }
})