
import Imports from "./Imports";

const HeaderRightComponentView = ({display}) => {
    return(
        <>
        <Imports.View style={styles.container}>
            <Imports.View>
                <Imports.Ionicons style={[styles.innerContainer,{display:display || 'block'}]} name="notifications-outline" size={25} />
            </Imports.View>
            <Imports.View>
                <Imports.Ionicons style={styles.innerContainer} name="heart-outline" size={25}/>
            </Imports.View>
            <Imports.View>
                <Imports.Ionicons style={styles.innerContainer} name="bag-outline" size={25} />
            </Imports.View>
        </Imports.View>
        </>
    )
}

export default HeaderRightComponentView;

const styles = Imports.StyleSheet.create({
    container : {
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    innerContainer : {
        paddingHorizontal:10
    }
})