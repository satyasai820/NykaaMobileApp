import React, { memo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const HomeOnRadarComponent = memo(() => {

    const cardsData = [{ img: 'https://images-static.nykaa.com/creatives/c0d1186b-5e74-464b-9c36-c5439dcf82d9/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/4d567adf-dfd2-41c0-915f-b97825fc0ed1/default.png?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/8dfbc23b-04ae-42b8-81f2-8d148a547f21/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/f6eebe78-31fb-468f-95f1-2567a173d969/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/b7e84666-8e82-4578-abe8-c260e8bfe05a/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/09eb7ff5-a8fc-48dd-8b6e-1ea00a6992ce/default.jpg?tr=cm-pad_resize,w-450' }]

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.textOne}>On Our Radar</Text>
                    <Text style={styles.textTwo}>Best-in-show brands</Text>
                </View>
                <View style={styles.innerView}>
                    {cardsData.map((item, index) => (
                        <View style={{margin:5}} key={index}>
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
})

export default HomeOnRadarComponent;

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
        width: 190,
        height: 270,
        borderRadius: 10
    },
    innerTextOne: {
        fontWeight: 'bold',
        fontSize: 18
    }
})