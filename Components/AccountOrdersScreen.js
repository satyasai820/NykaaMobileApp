
import Imports from "./Imports";

const OrderScreen = () => {
    return(
        <>
        <Imports.View>
            <Imports.View style={styles.container}>
                <Imports.View>
                    <Imports.Ionicons name="gift-outline" size={18} />
                </Imports.View>
                <Imports.View>
                    <Imports.Text style={{fontSize:18, marginLeft:10}}>Your gift card purchases</Imports.Text>
                </Imports.View>
                <Imports.View style={{marginLeft:'auto'}}>
                <Imports.Ionicons name="chevron-forward" size={18}/>
                </Imports.View>
            </Imports.View>
            <Imports.View style={styles.secondContainer}>
                <Imports.View style={styles.secondInnerContainer}>
                    <Imports.View>
                        <Imports.Ionicons name="information-circle-sharp" color='blue' size={18}/>
                    </Imports.View>
                    <Imports.View style={styles.textStyle}>
                        <Imports.Text style={{fontSize:16}}>Please verify your phone number for security reasons</Imports.Text>
                        <Imports.View style={{flexDirection:'row', alignItems:'center'}}>
                        <Imports.Text style={{color:'#E80071', fontWeight:'bold'}}>verify Mobile </Imports.Text>
                        <Imports.Ionicons size={12} color='#E80071' name="arrow-forward" />
                        </Imports.View>
                    </Imports.View>
                </Imports.View>
            </Imports.View>
            <Imports.View style={styles.thirdContainer}>
                <Imports.View style={{marginHorizontal:'auto'}}>
                    <Imports.FontAwesome5 size={100} name='shopping-cart' color='#ccc' />
                </Imports.View>
                <Imports.View>
                <Imports.Text style={{textAlign:'center', marginVertical:5, fontSize:16}}>No Recent Orders</Imports.Text>
                <Imports.Text style={{textAlign:'center', marginVertical:5, fontSize:15, color:'#E80071',fontWeight:'bold'}}>Start Shopping</Imports.Text>
                </Imports.View>
            </Imports.View>
        </Imports.View>
        </>
    )
}

export default OrderScreen;

const styles = Imports.StyleSheet.create({
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