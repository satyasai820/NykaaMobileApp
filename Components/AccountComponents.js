import { StyleSheet, View, Text, Image } from "react-native";

const AccountComponents = () => {
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>EXPOLOR OTHER NYKAA APPS</Text>
                <View style={styles.flexView}>
                    <View style={{marginBottom:14}}>
                        <Text style={{marginVertical:6, fontSize:19,}}>Nykaa Fashion</Text>
                        <Text style={{color:'grey'}}>Explore lifestyle product collections and curations</Text>
                    </View>
                    <View style={{marginLeft:'auto'}}>
                        <Image style={{width:40, height:40, borderRadius:7 }} source={require('../assets/NykaaFashions.jpg')} />
                    </View>
                </View>
                <View style={[styles.flexView,{borderBottomWidth:0}]}>
                    <View >
                        <Text style={{marginVertical:6, fontSize:19,}}>Nykaa Man</Text>
                        <Text style={{color:'grey'}}>Explore lifestyle product collections and curations</Text>
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

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#fcfcfc'
    },
    innerContainer : {
        margin:20,
    },
    title:{
        color:'grey',
        fontSize:16,
        fontWeight:'bold'
    },
    flexView : {
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'grey',
        borderBottomWidth:1
    }
})

