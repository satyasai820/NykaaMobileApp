import { StyleSheet, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'
const HeaderRightComponentView = () => {
    return(
        <>
        <View style={styles.container}>
            <View>
                <Ionicons style={styles.innerContainer} name="notifications-outline" size={25} />
            </View>
            <View>
                <Ionicons style={styles.innerContainer} name="heart-outline" size={25}/>
            </View>
            <View>
                <Ionicons style={styles.innerContainer} name="bag-outline" size={25} />
            </View>
        </View>
        </>
    )
}

export default HeaderRightComponentView;

const styles = StyleSheet.create({
    container : {
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    innerContainer : {
        paddingHorizontal:10
    }
})