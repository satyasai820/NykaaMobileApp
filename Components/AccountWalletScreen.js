
import Imports from "./Imports";

const Wallet = () => {
    return (
        <Imports.View>
            <Imports.View style={styles.container}>
                <Imports.View style={styles.innerContainer}>
                    <Imports.Text style={{fontSize:16}}>Wallet Balance</Imports.Text>
                    <Imports.Text style={{fontSize:25, color:'#E80071', fontWeight:'bold'}}>₹20</Imports.Text>
                </Imports.View>
            </Imports.View>
            <Imports.View style={styles.secondContainer}>
                <Imports.View>
                    <Imports.Text style={styles.textStyle}>NYKAA CASH</Imports.Text>
                </Imports.View>
                <Imports.View style={{flexDirection:'row'}}>
                    <Imports.Text style={{marginHorizontal:10,fontSize:18, fontWeight:'bold'}}>₹0</Imports.Text>
                    <Imports.Text style={{marginHorizontal:10,fontSize:18, color:'#E80071', fontWeight:'bold'}}>History</Imports.Text>
                </Imports.View>
            </Imports.View>
            <Imports.View style={styles.secondContainer}>
                <Imports.View>
                    <Imports.Text style={styles.textStyle}>NYKAA REWARDS</Imports.Text>
                </Imports.View>
                <Imports.View style={{flexDirection:'row'}}>
                    <Imports.Text style={{marginHorizontal:10,fontSize:18, fontWeight:'bold'}}>₹20</Imports.Text>
                    <Imports.Text style={{marginHorizontal:10,fontSize:18, color:'#E80071', fontWeight:'bold'}}>History</Imports.Text>
                </Imports.View>
            </Imports.View>
            <Imports.View style={{margin:10}}>
                <Imports.Image style={{width:'100%', height:200}} source={{uri:'https://www.nykaa.com/media/wysiwyg/NykaaWallet/wallet_footer_banner_3.png'}} />
            </Imports.View>
        </Imports.View>
    )
}

export default Wallet;

const styles = Imports.StyleSheet.create({
        container : {
            backgroundColor:'#FFFFFF',
            marginTop:10,
            height:130,
            elevation:2
        },
        innerContainer : {
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        },
        secondContainer : {
            marginTop:5,
            backgroundColor:'#FFFFFF',
            padding:15,
            elevation:2,
            flexDirection:'row',
            justifyContent:'space-between'
        },
        textStyle : {
            fontWeight:'bold',
            fontSize:17
        }
})