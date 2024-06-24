
import Imports from "./Imports";

const AccountComponents = () => {
    return(
        <Imports.View style={styles.container}>
            <Imports.View style={styles.innerContainer}>
                <Imports.Text style={styles.title}>EXPOLOR OTHER NYKAA APPS</Imports.Text>
                <Imports.View style={styles.flexView}>
                    <Imports.View style={{marginBottom:14}}>
                        <Imports.Text style={styles.textOne}>Nykaa Fashion</Imports.Text>
                        <Imports.Text style={styles.textTwo}>Explore lifestyle product collections and curations</Imports.Text>
                    </Imports.View>
                    <Imports.View style={{marginLeft:'auto'}}>
                        <Imports.Image style={{width:40, height:40, borderRadius:7 }} source={require('../assets/NykaaFashions.jpg')} />
                    </Imports.View>
                </Imports.View>
                <Imports.View style={[styles.flexView,{borderBottomWidth:0}]}>
                    <Imports.View >
                        <Imports.Text style={styles.textOne}>Nykaa Man</Imports.Text>
                        <Imports.Text style={styles.textTwo}>Explore lifestyle product collections and curations</Imports.Text>
                    </Imports.View>
                    <Imports.View style={{marginLeft:'auto'}}>
                        <Imports.Image style={{width:40, height:40, borderRadius:7 }} source={{uri:'https://play-lh.googleusercontent.com/xEhJExMBAOHIUTYmSZ3vdT5Hyd5UwsG7qpHRQxUqVs6rBjfnpPGmQHplmeEWZk3q7Q'}} />
                    </Imports.View>
                </Imports.View>
            </Imports.View>
        </Imports.View>
    )
}

export default AccountComponents;

const screenWidth = Imports.Dimensions.get('window').width;

const styles = Imports.StyleSheet.create({
    container : {
        backgroundColor:'#fcfcfc'
    },
    innerContainer : {
        margin:20,
    },
    title:{
        color:'grey',
        fontSize: screenWidth < 380 ? 13 : screenWidth <= 420 ? 13 : 16,
        fontWeight:'bold'
    },
    flexView : {
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'grey',
        borderBottomWidth:1
    },

    textOne : {
        marginVertical:6,
         fontSize: screenWidth < 380 ? 16 : screenWidth <= 420 ? 16 : 19,
    }, 
    textTwo : {
        color:'grey',
        fontSize: screenWidth < 380 ? 11 : screenWidth <= 420 ? 12 : 14
    }
})

