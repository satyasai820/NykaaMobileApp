import { View, Text, StyleSheet } from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const OrderScreen = () => {
    return(
        <>
        <View>
            <View style={styles.container}>
                <View>
                    <Ionicons name="gift-outline" size={18} />
                </View>
                <View>
                    <Text style={{fontSize:18, marginLeft:10}}>Your gift card purchases</Text>
                </View>
                <View style={{marginLeft:'auto'}}>
                <Ionicons name="chevron-forward" size={18}/>
                </View>
            </View>
            <View style={styles.secondContainer}>
                <View style={styles.secondInnerContainer}>
                    <View>
                        <Ionicons name="information-circle-sharp" color='blue' size={18}/>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={{fontSize:16}}>Please verify your phone number for security reasons</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{color:'#E80071', fontWeight:'bold'}}>verify Mobile </Text>
                        <Ionicons size={12} color='#E80071' name="arrow-forward" />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.thirdContainer}>
                <View style={{marginHorizontal:'auto'}}>
                    <FontAwesome5 size={100} name='shopping-cart' color='#ccc' />
                </View>
                <View>
                <Text style={{textAlign:'center', marginVertical:5, fontSize:16}}>No Recent Orders</Text>
                <Text style={{textAlign:'center', marginVertical:5, fontSize:15, color:'#E80071',fontWeight:'bold'}}>Start Shopping</Text>
                </View>
            </View>
        </View>
        </>
    )
}

export default OrderScreen;

const styles = StyleSheet.create({
    container : {
        marginTop:5,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:20,
        alignItems:'center'
    },
    secondContainer : {
        backgroundColor:'#FFFFFF',
        padding:20,
        marginTop:10
    },
    secondInnerContainer : {
        backgroundColor:'#E6F2FF',
        flexDirection:'row',
        padding:10,
        borderRadius:10,
    },
    textStyle : {
        marginLeft:20
    },
    thirdContainer : {
        marginTop:25,
        backgroundColor:'#FFFFFF',
        marginHorizontal:15,
        padding:10,
    }
})