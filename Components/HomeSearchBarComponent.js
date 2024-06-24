
import Imports from "./Imports";

const SearchBarComponent = () => {
    return(
        <>
        <Imports.View style={styles.container}>
        <Imports.View style={styles.innerView}>
            <Imports.View style={styles.icon}>
                <Imports.EvilIcons name="search" color='#E80071' size={25} />
            </Imports.View>
            <Imports.View style={styles.icon}>
                <Imports.Text >Search for <Imports.Text style={{color:'#E80071'}}>Shampoos</Imports.Text></Imports.Text>
            </Imports.View>
        </Imports.View>
        </Imports.View>
        </>
    )
}

export default SearchBarComponent;

const styles = Imports.StyleSheet.create({
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