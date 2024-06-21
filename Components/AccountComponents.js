import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

const AccountComponents = () => {
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>EXPOLOR OTHER NYKAA APPS</Text>
                <View style={styles.flexView}>
                    <View style={{marginBottom:14}}>
                        <Text style={styles.textOne}>Nykaa Fashion</Text>
                        <Text style={styles.textTwo}>Explore lifestyle product collections and curations</Text>
                    </View>
                    <View style={{marginLeft:'auto'}}>
                        <Image style={{width:40, height:40, borderRadius:7 }} source={require('../assets/NykaaFashions.jpg')} />
                    </View>
                </View>
                <View style={[styles.flexView,{borderBottomWidth:0}]}>
                    <View >
                        <Text style={styles.textOne}>Nykaa Man</Text>
                        <Text style={styles.textTwo}>Explore lifestyle product collections and curations</Text>
                    </View>
                    <View style={{marginLeft:'auto'}}>
                        <Image style={{width:40, height:40, borderRadius:7 }} source={{uri:'https://play-lh.googleusercontent.com/xEhJExMBAOHIUTYmSZ3vdT5Hyd5UwsG7qpHRQxUqVs6rBjfnpPGmQHplmeEWZk3q7Q'}} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AccountComponents;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#fcfcfc'
    },
    innerContainer : {
        margin:20,
    },
    title:{
        color:'grey',
        fontSize: screenWidth < 380 ? 13 : screenWidth <= 420 ? 13 : 16,
        fontWeight:'bold'
    },
    flexView : {
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'grey',
        borderBottomWidth:1
    },

    textOne : {
        marginVertical:6,
         fontSize: screenWidth < 380 ? 16 : screenWidth <= 420 ? 16 : 19,
    }, 
    textTwo : {
        color:'grey',
        fontSize: screenWidth < 380 ? 11 : screenWidth <= 420 ? 12 : 14
    }
})

