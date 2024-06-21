import React, { memo } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

const HomeStellerSwiperComponent = memo(() => {

    const cardsData = [{ img: 'https://images-static.nykaa.com/creatives/8a58ec3c-c959-4e07-bb7f-be543e052865/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/54a377a3-0ece-490c-8fc6-f8d7eb7c9e0c/default.png?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/731777d1-6db8-4859-8bcb-aacd64922751/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/8aa978d3-e94c-4e9d-9410-9b86f6ed725a/default.jpg?tr=cm-pad_resize,w-450' }]

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.textOne}>Stellar Selections</Text>
                    <Text style={styles.textTwo}>Brands you absolutely can't miss</Text>
                </View>
                <View style={styles.innerView}>
                    {cardsData.map((item, index) => (
                        <View style={{ margin: 5 }} key={index}>
                            <View>
                                <Image source={{ uri: item.img }} style={styles.imageStyle} />
                                <Text style={styles.innerTextOne}>Flat Rs 399</Text>
                                <Text style={{ color: 'grey' }}>On All Body Mists!</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </>
    )
});

export default HomeStellerSwiperComponent;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    textOne: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textTwo: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 10
    },
    innerView: {
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    imageStyle: {
        width: screenWidth < 380 ? 160 : screenWidth <= 420 ? 180 : 190,
        height: screenWidth < 380 ? 220 : screenWidth <= 420 ? 260 : 270,
        borderRadius: 10
    },
    innerTextOne: {
        fontWeight: 'bold',
        fontSize: 18
    }
})