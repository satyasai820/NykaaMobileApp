import { StyleSheet, TextInput, View, Text } from "react-native";
import {EvilIcons} from '@expo/vector-icons'
const SearchBarComponent = () => {
    return(
        <>
        <View style={styles.container}>
        <View style={styles.innerView}>
            <View style={styles.icon}>
                <EvilIcons name="search" color='#E80071' size={25} />
            </View>
            <View style={styles.icon}>
                <Text >Search for <Text style={{color:'#E80071'}}>Shampoos</Text></Text>
            </View>
        </View>
        </View>
        </>
    )
}

export default SearchBarComponent;

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#ffffff',
    },
    innerView : {
        borderWidth:1,
        borderColor:'#cccccc',
        // padding:10,
        marginHorizontal:30,
        marginBottom:10,
        justifyContent:'start',
        alignItems:'center',
        flexDirection:'row',
        borderRadius:20,
    },
    icon : {
        paddingVertical:10,
        paddingLeft:5
    }
})