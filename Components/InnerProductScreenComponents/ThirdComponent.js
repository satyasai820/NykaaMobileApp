import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { MaterialCommunityIcons, EvilIcons, Ionicons } from '@expo/vector-icons';

const ThirdComponent = () => {
    const imagesData = [{ img: 'https://images-static.nykaa.com/prod-review/1659609112371_600e9591-be4d-443c-9a95-743f29651097_1.jpeg?tr=w-150,h-150,pr-true' }, { img: 'https://images-static.nykaa.com/prod-review/1659609102074_393a397a-4c66-48b6-8d9f-3fbea47ccb39_1.jpeg?tr=w-150,h-150,pr-true' }, { img: 'https://images-static.nykaa.com/prod-review/1659609071487_6cde20c6-cd65-4906-8706-be32d6968ae6_1.jpg?tr=w-150,h-150,pr-true' }, { img: 'https://images-static.nykaa.com/prod-review/1659609085367_fe10ddbd-e2b0-48f8-a8eb-7bea9f86ce2e_1.jpeg?tr=w-150,h-150,pr-true' }, { img: 'https://images-static.nykaa.com/prod-review/1659609093356_34b09482-ad7d-464b-90d5-3af5183b2577_1.jpeg?tr=w-150,h-150,pr-true' }]
    return (
        <>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.innerText}>Ratings & Reviews</Text>
                </View>
                <View>
                    <View style={styles.secondContainer}>
                        <View>
                            <Text style={styles.innerTextTwo}>4.8/5</Text>
                        </View>
                        <View>
                            <Text>Overall Rating</Text>
                            <Text style={{ color: 'grey' }}>23 ratings</Text>
                        </View>
                        <View style={{ marginLeft: 'auto' }}>
                            <Text style={styles.buttonText}>Rate</Text></View>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={imagesData} renderItem={({ item }) => (
                        <Image style={styles.images} source={{ uri: item.img }} />
                    )} keyExtractor={(item, index) => index.toString()} />
                </View>
                <View>
                    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                        <Text style={styles.innerText}>Most Useful Review</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <View>
                                <Text style={styles.letter}>T</Text>
                            </View>
                            <View style={{ flexDirection: 'colum', alignItems: 'center', }}>
                                <Text>Twinkle Jaiswal</Text>
                                <Text style={{ fontSize: 12, padding: 5, color: 'grey' }}>Verified Buyer</Text>
                            </View>
                            <View style={{ marginLeft: 'auto' }}>
                                <Text style={{ fontSize: 14, color: 'grey' }}>2 days ago</Text>
                            </View>
                        </View>
                        <View style={styles.smallView}>
                            <View style={styles.smallView}>
                                <MaterialCommunityIcons name="message-text-outline" size={20} />
                                <Text style={{ paddingRight: 10, borderRightColor: '#ccc', borderRightWidth: 1 }}> 4 Reviews</Text>
                            </View>
                            <View style={styles.smallView}>
                                <EvilIcons name="image" size={29} />
                                <Text> 6 Photos</Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 2 }}>"Superlight abd hydrates skin primer"</Text>
                            <Text style={{ fontSize: 13 }}>I'm using this super light primer for my base makeup, it is in gel form and very smooth texture which spread on skin evenly. Smell is good and so affordable</Text>
                        </View>
                    </View>
                    <View style={{ borderTopColor: '#ccc', borderTopWidth: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15 }}>
                            <Text style={{ fontWeight: 'bold', color: '#E80071', fontSize: 15 }}>Read All Reviews</Text>
                            <EvilIcons name="chevron-right" color='#E80071' size={25} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginVertical: 15, backgroundColor: '#FFFFFF', paddingVertical: 15,}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, justifyContent: 'space-between' }}>
                    <View style={{ width: '10%' }}>
                        <EvilIcons name="heart" size={28} style={{ padding: 10, borderWidth: 1, borderColor: '#ccc', textAlign: 'center', borderRadius: 5 }} />
                    </View>
                    <View style={{ width: '85%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#E80071', borderRadius: 5, justifyContent: 'center' }}>
                        <Ionicons name="bag-handle-outline" size={21} color='white' />
                        <Text style={styles.bag}>Add to Bag</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ThirdComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
    innerContainer: {
        marginHorizontal: 20,
        paddingVertical: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    innerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    innerTextTwo: {
        fontSize: 29,
        fontWeight: 'bold',
        marginRight: 10
    },
    buttonText: {
        color: '#E80071',
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    images: {
        width: 90,
        height: 90,
        marginHorizontal: 5,
        borderRadius: 5
    },
    letter: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#E80071',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 2,
        borderColor: '#E80071',
        borderRadius: 30,
        backgroundColor: 'pink',
        textAlign: 'center',
        marginHorizontal: 10
    },
    smallView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    },
    bag: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: 11,
        marginLeft: 10
    }

})