
import HomeHotListCardSwiperComponent from "../HomeComponents/HomeHotListCardSwiperComponent";
import Imports from "../Imports";

const FourthComponent = () => {
    return(
        <>
        <Imports.View style={{backgroundColor:'#FFFFFF'}}>
            <Imports.View style={styles.container}>
                <Imports.View>
                    <Imports.Text style={styles.text}>More from Lakme</Imports.Text>
                </Imports.View>
                <Imports.View style={{marginLeft:'auto'}}>
                    <Imports.Text style={styles.sideText}>View All</Imports.Text>
                </Imports.View>
            </Imports.View>
            <HomeHotListCardSwiperComponent display='none' />
        </Imports.View>
        </>
    )
}

export default FourthComponent;

const styles = Imports.StyleSheet.create({
    container : {
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:15,
        paddingVertical:10
    },
    text : {
        fontSize:16,
        fontWeight:'bold'
    },
    sideText : {
        fontSize:15,
        fontWeight:'bold',
        color:'#E80071'
    }
})