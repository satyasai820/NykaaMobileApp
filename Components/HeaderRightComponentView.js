import { StyleSheet, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'
const HeaderRightComponentView = ({display}) => {
    return(
        <>
        <View style={styles.container}>
            <View>
                <Ionicons style={[styles.innerContainer,{display:display || 'block'}]} name="notifications-outline" size={25} />
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