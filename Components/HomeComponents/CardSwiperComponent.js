import { View, FlatList, Image, Text, StyleSheet } from "react-native";
import {EvilIcons} from '@expo/vector-icons';

const CardSwiperComponent = ({ data, styled }) => {
    return (
        <>
            <View style={styles.container}>
                <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={data} renderItem={({ item }) => (
                    <View style={styles.innerContainer}>
                        <View>
                            <Image source={{ uri: item.img }} style={styled} />
                        </View>
                        <View>
                            <Text style={styles.title}>Kay Beauty Hd Liquid Concealer</Text>
                            <Text style={{ fontSize: 13, color: 'grey' }}>300ml</Text>
                            <Text><Text>₹422 </Text><Text style={{ fontSize: 13, color: 'grey', textDecorationLine: 'line-through' }}>₹549</Text><Text style={{ fontSize: 13, color: 'green' }}> 23%</Text></Text>
                        </View>
                        <View style={styles.buttonView}>
                            <View>
                            </View>
                            <View style={styles.buttonView}>
                                    <View style={styles.textOne}>
                                        <EvilIcons style={{padding:5, color:'#E80071'}} size={20} name="heart" />
                                    </View>
                                    <View>
                                        <Text style={styles.textTwo}>Add To Buy</Text>
                                    </View>
                            </View>
                        </View>
                    </View>
                )} />
            </View>
        </>
    )
}

export default CardSwiperComponent;

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    innerContainer: {
        margin: 9
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