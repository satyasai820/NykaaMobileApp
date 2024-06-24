
import Imports from "../Imports";

const ThirdComponent = () => {
    const imagesData = [{ img: 'https://images-static.nykaa.com/prod-review/1659609112371_600e9591-be4d-443c-9a95-743f29651097_1.jpeg?tr=w-150,h-150,pr-true' }, { img: 'https://images-static.nykaa.com/prod-review/1659609102074_393a397a-4c66-48b6-8d9f-3fbea47ccb39_1.jpeg?tr=w-150,h-150,pr-true' }, { img: 'https://images-static.nykaa.com/prod-review/1659609071487_6cde20c6-cd65-4906-8706-be32d6968ae6_1.jpg?tr=w-150,h-150,pr-true' }, { img: 'https://images-static.nykaa.com/prod-review/1659609085367_fe10ddbd-e2b0-48f8-a8eb-7bea9f86ce2e_1.jpeg?tr=w-150,h-150,pr-true' }, { img: 'https://images-static.nykaa.com/prod-review/1659609093356_34b09482-ad7d-464b-90d5-3af5183b2577_1.jpeg?tr=w-150,h-150,pr-true' }]
    return (
        <>
            <Imports.View style={styles.container}>
                <Imports.View style={styles.innerContainer}>
                    <Imports.Text style={styles.innerText}>Ratings & Reviews</Imports.Text>
                </Imports.View>
                <Imports.View>
                    <Imports.View style={styles.secondContainer}>
                        <Imports.View>
                            <Imports.Text style={styles.innerTextTwo}>4.8/5</Imports.Text>
                        </Imports.View>
                        <Imports.View>
                            <Imports.Text>Overall Rating</Imports.Text>
                            <Imports.Text style={{ color: 'grey' }}>23 ratings</Imports.Text>
                        </Imports.View>
                        <Imports.View style={{ marginLeft: 'auto' }}>
                            <Imports.Text style={styles.buttonText}>Rate</Imports.Text></Imports.View>
                    </Imports.View>
                </Imports.View>
                <Imports.View style={{ marginVertical: 10 }}>
                    <Imports.FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={imagesData} renderItem={({ item }) => (
                        <Imports.Image style={styles.images} source={{ uri: item.img }} />
                    )} keyExtractor={(item, index) => index.toString()} />
                </Imports.View>
                <Imports.View>
                    <Imports.View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                        <Imports.Text style={styles.innerText}>Most Useful Review</Imports.Text>
                        <Imports.View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <Imports.View>
                                <Imports.Text style={styles.letter}>T</Imports.Text>
                            </Imports.View>
                            <Imports.View style={{ flexDirection: 'colum', alignItems: 'center', }}>
                                <Imports.Text>Twinkle Jaiswal</Imports.Text>
                                <Imports.Text style={{ fontSize: 12, padding: 5, color: 'grey' }}>Verified Buyer</Imports.Text>
                            </Imports.View>
                            <Imports.View style={{ marginLeft: 'auto' }}>
                                <Imports.Text style={{ fontSize: 14, color: 'grey' }}>2 days ago</Imports.Text>
                            </Imports.View>
                        </Imports.View>
                        <Imports.View style={styles.smallView}>
                            <Imports.View style={styles.smallView}>
                                <Imports.MaterialCommunityIcons name="message-text-outline" size={20} />
                                <Imports.Text style={{ paddingRight: 10, borderRightColor: '#ccc', borderRightWidth: 1 }}> 4 Reviews</Imports.Text>
                            </Imports.View>
                            <Imports.View style={styles.smallView}>
                                <Imports.EvilIcons name="image" size={29} />
                                <Imports.Text> 6 Photos</Imports.Text>
                            </Imports.View>
                        </Imports.View>
                        <Imports.View style={{ marginVertical: 10 }}>
                            <Imports.Text style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 2 }}>"Superlight abd hydrates skin primer"</Imports.Text>
                            <Imports.Text style={{ fontSize: 13 }}>I'm using this super light primer for my base makeup, it is in gel form and very smooth texture which spread on skin evenly. Smell is good and so affordable</Imports.Text>
                        </Imports.View>
                    </Imports.View>
                    <Imports.View style={{ borderTopColor: '#ccc', borderTopWidth: 1 }}>
                        <Imports.View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15 }}>
                            <Imports.Text style={{ fontWeight: 'bold', color: '#E80071', fontSize: 15 }}>Read All Reviews</Imports.Text>
                            <Imports.EvilIcons name="chevron-right" color='#E80071' size={25} />
                        </Imports.View>
                    </Imports.View>
                </Imports.View>
            </Imports.View>
            <Imports.View style={{ marginVertical: 15, backgroundColor: '#FFFFFF', paddingVertical: 15, }}>
                <Imports.View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, justifyContent: 'space-between' }}>
                    <Imports.View style={{ width: '12%' }}>
                        <Imports.EvilIcons name="heart" size={28} style={styles.icon } />
                    </Imports.View>
                    <Imports.View style={{ width: '85%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#E80071', borderRadius: 5, justifyContent: 'center' }}>
                        <Imports.Ionicons name="bag-handle-outline" size={21} color='white' />
                        <Imports.Text style={styles.bag}>Add to Bag</Imports.Text>
                    </Imports.View>
                </Imports.View>
            </Imports.View>
        </>
    )
}

export default ThirdComponent;

const screenWidth = Imports.Dimensions.get('window').width;

const styles = Imports.StyleSheet.create({
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
    },
    icon: {
        padding: screenWidth < 380 ? 6 : 9,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
        borderRadius: 5
    }

})