
import Imports from "../Imports";

const CardSwiperComponent = ({ data, styled }) => {
    return (
        <>
            <Imports.View style={styles.container}>
                <Imports.FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={data} renderItem={({ item }) => (
                    <Imports.View style={styles.innerContainer}>
                        <Imports.View>
                            <Imports.Image source={{ uri: item.img }} style={styled} />
                        </Imports.View>
                        <Imports.View>
                            <Imports.Text style={styles.title}>Kay Beauty Hd Liquid Concealer</Imports.Text>
                            <Imports.Text style={{ fontSize: 13, color: 'grey' }}>300ml</Imports.Text>
                            <Imports.Text><Imports.Text>₹422 </Imports.Text><Imports.Text style={{ fontSize: 13, color: 'grey', textDecorationLine: 'line-through' }}>₹549</Imports.Text><Imports.Text style={{ fontSize: 13, color: 'green' }}> 23%</Imports.Text></Imports.Text>
                        </Imports.View>
                        <Imports.View style={styles.buttonView}>
                            <Imports.View>
                            </Imports.View>
                            <Imports.View style={styles.buttonView}>
                                    <Imports.View style={styles.textOne}>
                                        <Imports.EvilIcons style={{padding:5, color:'#E80071'}} size={20} name="heart" />
                                    </Imports.View>
                                    <Imports.View>
                                        <Imports.Text style={styles.textTwo}>Add To Buy</Imports.Text>
                                    </Imports.View>
                            </Imports.View>
                        </Imports.View>
                    </Imports.View>
                )} />
            </Imports.View>
        </>
    )
}

export default CardSwiperComponent;

const screenWidth = Imports.Dimensions.get('window').width;

const styles = Imports.StyleSheet.create({
    container: {
        margin: 5,
    },
    innerContainer: {
        margin: screenWidth < 380 ? 5 : screenWidth <= 420 ? 3 : 9
    },
    title: {
        fontSize: 15,
        flexWrap: 'wrap',
        width: 120,
        fontWeight: 'bold',
        marginVertical: 5
    },
    buttonView: {
        flexDirection: 'row',
        marginVertical:5,
        alignItems:'center',
    },
    textOne : {
        fontSize:15,
        borderColor:'#E80071',
        borderWidth:1,
        borderRadius:10,
    },
    textTwo : {
        fontWeight:'bold',
        marginLeft:5,
        borderColor:'#E80071',
        borderWidth:1,
        paddingVertical:6,
        paddingHorizontal:15,
        borderRadius:10,
        backgroundColor:'#E80071',
        color:'white'
    }
})