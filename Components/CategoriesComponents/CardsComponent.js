import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const CardsComponent = ({ data }) => {
    const navigation = useNavigation();
    const tags = [{ n: 'Luxe', icon: 'diamond-outline' }, { n: 'On Offer', icon: 'medical-outline' }, { n: 'Top Rated', icon: 'star-outline' }, { n: 'New', icon: 'pricetag-outline' },]
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Face Primer</Text>
                    <Text style={{ marginTop: 10, color: 'grey' }}>453 products</Text>
                </View>
                <View style={styles.secondContainer}>
                    {tags.map((item, index) => (
                        <View style={styles.text} key={index}>
                            <Ionicons style={{ color: '#E80071', marginRight: 3 }} size={15} name={item.icon} />
                            <Text>{item.n} </Text>
                        </View>
                    ))}
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                    {data.map((item, index) => (
                        <TouchableOpacity style={styles.innerContainer} key={index} onPress={() => navigation.navigate('innerProducts')}>
                            <View>
                                <Image source={{ uri: item.img }} style={styles.cardsImage} />
                            </View>
                            <View>
                                <Text style={styles.title}>Lakme</Text>
                                <Text style={styles.subtitle}>Vitamin C Superglow Skin Perfecting Primer with 1% Vit C</Text>
                                <Text style={styles.subtitle}>300ml</Text>
                                <Text><Text>₹422 </Text><Text style={{ fontSize: 13, color: 'grey', textDecorationLine: 'line-through' }}>₹549</Text><Text style={{ fontSize: 13, color: 'green' }}> 23%</Text></Text>
                                <View style={{flexDirection:'row'}}>
                                    <Ionicons name="star" />
                                    <Ionicons name="star" />
                                    <Ionicons name="star" />
                                    <Ionicons name="star" />
                                    <Ionicons name="star-outline" />
                                </View>
                            </View>
                                <View style={styles.buttonView}>
                                    <View style={styles.textOne}>
                                        <EvilIcons style={{ padding: 5, color: '#E80071' }} size={20} name="heart" />
                                    </View>
                                    <View style={styles.textTwo}>
                                        <Text style={styles.buttonText}>Add To Buy</Text>
                                    </View>
                                </View>
                        </TouchableOpacity>

                    ))}
                </View>
            </View>
        </>
    )
}

export default CardsComponent;

const styles = StyleSheet.create({
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
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardsImage: {
        width: '100%',
        height: 180
    },
    innerContainer: {
        margin: 9,
        width: '45%',
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
        width:'20%',
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