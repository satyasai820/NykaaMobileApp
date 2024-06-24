
import Imports from "../Imports";

const HomePolicyComponent = () => {
    return(
        <>
        <Imports.View style={styles.container}>
            <Imports.View>
            <Imports.Image style={styles.imageStyle} source={{uri:'https://images-static.nykaa.com/uploads/8c44a337-2f37-41ee-974c-79b0d6ace79e.jpg?tr=cm-pad_resize,w-900'}} />
            </Imports.View>
            <Imports.View>
                <Imports.Image style={styles.textImage} source={{uri:'https://images-static.nykaa.com/uploads/4dd6ad28-3331-4f39-9b5d-1a48ed466cd5.jpg?tr=cm-pad_resize,w-900'}} />
            </Imports.View>
        </Imports.View>
        </>
    )
}

export default HomePolicyComponent;

const screenWidth = Imports.Dimensions.get('window').width

const styles = Imports.StyleSheet.create({
    container : {
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    }, 
    imageStyle : {
        width: screenWidth < 380 ? 320 : screenWidth <= 420 ? 360 : 390,
        height: screenWidth < 380 ? 120 : screenWidth <= 420 ? 135 : 145
    },
    textImage : {
        width: screenWidth < 380 ? 320 : screenWidth <= 420 ? 380 : 386,
        height: screenWidth < 380 ? 52 : screenWidth <= 420 ? 60 : 63,
        marginVertical:15
    }
}) 