import { Image, StyleSheet, View } from "react-native";

const HomePolicyComponent = () => {
    return(
        <>
        <View style={styles.container}>
            <View>
            <Image style={styles.imageStyle} source={{uri:'https://images-static.nykaa.com/uploads/8c44a337-2f37-41ee-974c-79b0d6ace79e.jpg?tr=cm-pad_resize,w-900'}} />
            </View>
            <View>
                <Image style={styles.textImage} source={{uri:'https://images-static.nykaa.com/uploads/4dd6ad28-3331-4f39-9b5d-1a48ed466cd5.jpg?tr=cm-pad_resize,w-900'}} />
            </View>
        </View>
        </>
    )
}

export default HomePolicyComponent;

const styles = StyleSheet.create({
    container : {
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    }, 
    imageStyle : {
        width:390,
        height:145
    },
    textImage : {
        width:386,
        height:63,
        marginVertical:15
    }
}) 