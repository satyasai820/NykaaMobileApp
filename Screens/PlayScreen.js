
import Imports from "../Components/Imports";

const PlayScreen = () => {
    return(
        <Imports.View style={styles.container}>
            <Imports.Image style={styles.image} source={require('../assets/offers-image.png')} />
        <Imports.Text style={{fontSize:18, fontWeight:'bold', color:'grey'}}>This is Play Screen</Imports.Text>
        </Imports.View>
    )
}

export default PlayScreen;

const styles = Imports.StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center'
    },
    image : {
        width:200,
        height:250
    }
})