
import Imports from "./Imports";

const Wishlist = () => {
    return (
        <>
            <Imports.View style={styles.container}>
                <Imports.View>
                    <Imports.Image style={{width:160, height:152}} source={require('../assets/wishlistimg.png')} />
                </Imports.View>
                <Imports.View>
                <Imports.Text style={{fontSize:16, marginTop:10}}>NO ITEMS IN THIS WISHLIST</Imports.Text>
                </Imports.View>
                <Imports.View>
                    <Imports.Text style={styles.buttomStyle}>GO SHOPPING</Imports.Text>
                </Imports.View>
            </Imports.View>
        </>
    )
}

export default Wishlist;

const styles = Imports.StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttomStyle : {
        color:'white',
        backgroundColor:'#E80071',
        padding:10,
        fontWeight:'bold',
        fontSize:16,
        marginTop:80
    }
})