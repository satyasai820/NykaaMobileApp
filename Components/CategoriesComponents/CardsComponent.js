
import AsyncStorage from "@react-native-async-storage/async-storage";
import Imports from "../Imports";


const CardsComponent = ({ data, title }) => {
    const navigation = Imports.useNavigation();
    const tags = [{ n: 'Luxe', icon: 'diamond-outline' }, { n: 'On Offer', icon: 'medical-outline' }, { n: 'Top Rated', icon: 'star-outline' }, { n: 'New', icon: 'pricetag-outline' },]

    const handleInnerImages = async (innerData) => {
        // console.log('this is inner images of --->', innerData)
        const productImgs = JSON.stringify(innerData);
       await AsyncStorage.setItem('innerImages', productImgs);
       navigation.navigate('innerProducts');
    }   

    const stars = Array.from({ length: 4 }, (_, index) => (
        <Imports.Ionicons key={index} name="star" />
      ));

    return (
        <>
            <Imports.View style={styles.container}>
                <Imports.View>
                    <Imports.Text style={styles.title}>{title}</Imports.Text>
                    <Imports.Text style={{ marginTop: 10, color: 'grey' }}>453 products</Imports.Text>
                </Imports.View>
                <Imports.View style={styles.secondContainer}>
                    {tags.map((item, index) => (
                        <Imports.View style={styles.text} key={index}>
                            <Imports.Ionicons style={{ color: '#E80071', marginRight: 3 }} size={15} name={item.icon} />
                            <Imports.Text>{item.n} </Imports.Text>
                        </Imports.View>
                    ))}
                </Imports.View>
                <Imports.View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                    {data.map((item, index) => (
                        <Imports.TouchableOpacity style={styles.innerContainer} key={index} onPress={() => handleInnerImages(item.innerImgs)}>
                            <Imports.View>
                                <Imports.Image source={{ uri: item.img }} style={styles.cardsImage} />
                            </Imports.View>
                            <Imports.View>
                                <Imports.Text style={styles.title}>Lakme</Imports.Text>
                                <Imports.Text style={styles.subtitle}>Vitamin C Superglow Skin Perfecting Primer with 1% Vit C</Imports.Text>
                                <Imports.Text style={styles.subtitle}>300ml</Imports.Text>
                                <Imports.Text><Imports.Text>₹422 </Imports.Text><Imports.Text style={{ fontSize: 13, color: 'grey', textDecorationLine: 'line-through' }}>₹549</Imports.Text><Imports.Text style={{ fontSize: 13, color: 'green' }}> 23%</Imports.Text></Imports.Text>
                                <Imports.View style={{flexDirection:'row'}}>
                                   {stars}
                                    <Imports.Ionicons name="star-outline" /> 
                                </Imports.View>
                            </Imports.View>
                                <Imports.View style={styles.buttonView}>
                                    <Imports.View style={styles.textOne}>
                                        <Imports.EvilIcons style={{ padding: 5, color: '#E80071' }} size={20} name="heart" />
                                    </Imports.View>
                                    <Imports.View style={styles.textTwo}>
                                        <Imports.Text style={styles.buttonText}>Add To Buy</Imports.Text>
                                    </Imports.View>
                                </Imports.View>
                        </Imports.TouchableOpacity>

                    ))}
                </Imports.View>
            </Imports.View>
        </>
    )
}

export default CardsComponent;

const screenWidth = Imports.Dimensions.get('window').width;

const styles = Imports.StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    secondContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10
    },
    subtitle: {
        fontSize: 13,
        color: 'grey',
        // width:200,
        flexWrap: 'wrap'
    },
    cardsView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    text: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: screenWidth < 410 ? 6 : 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    cardsImage: {
        width: '100%',
        height: screenWidth < 380 ? 150 : screenWidth <= 420 ? 170 : 180,
    },
    innerContainer: {
        margin: screenWidth < 380 ? 6 : 9,
        width: '44%',
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
        marginVertical: 5,
        alignItems: 'center', 
    },
    textOne: {
        fontSize: 15,
        borderColor: '#E80071',
        borderWidth: 1,
        borderRadius: 10,
        width: screenWidth < 380 ? '22%' : '20%',
        justifyContent:'center',
        alignItems:'center'
    },
    textTwo: {
        marginLeft: 5,
        borderColor: '#E80071',
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#E80071',
        width:'75%',
    },
    buttonText : {
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center'

    }
})