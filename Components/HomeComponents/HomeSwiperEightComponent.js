import { View, StyleSheet, Text, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import CardSwiperComponent from "./CardSwiperComponent";


const HomeSwiperEightComponent = () => {

    const cardSwiperData = [{ img: 'https://images-static.nykaa.com/creatives/8d584fba-0099-477e-baa9-ff27d3d651a6/default.jpg?tr=w-200,cm-pad_resize' },
    { img: 'https://images-static.nykaa.com/creatives/0b0b8c93-53ac-45fe-a6f0-37fdc80e928a/default.jpg?tr=w-200,cm-pad_resize' },
    { img: 'https://images-static.nykaa.com/creatives/a75f7f9f-24cf-4df7-befa-3f1b83092912/default.png?tr=w-200,cm-pad_resize' },
    { img: 'https://images-static.nykaa.com/creatives/9190aff0-644e-4185-8b45-94d4facdff53/default.jpg?tr=w-200,cm-pad_resize' },
    { img: 'https://images-static.nykaa.com/creatives/9c6350a8-86fd-4e9c-b243-c39412a98eeb/default.jpg?tr=w-200,cm-pad_resize' },
    { img: 'https://images-static.nykaa.com/creatives/97d6076a-8643-4e03-a9d1-2d7a0ccfa69f/default.jpg?tr=w-200,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/creatives/0c63c839-0f56-421a-9527-871272cd6037/default.jpg?tr=w-200,cm-pad_resize' }]


    return (
        <>
            <View style={styles.Container}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.headerTextStyle}>House of Nykaa</Text>
                        <Text style={styles.headerRightText}>View All <AntDesign name="arrowright" size={16} /></Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.textStyle1}>All</Text>
                        <Text style={styles.textStyle}>Make up</Text>
                        <Text style={styles.textStyle}>Hair</Text>
                        <Text style={styles.textStyle}>Fragrances</Text>
                    </View>
                </View>
                <View>
                    <CardSwiperComponent data={cardSwiperData} styled={styles.swiperImages} />
                </View>
            </View>
        </>
    )
}

export default HomeSwiperEightComponent;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    Container: {
        padding: 10,
    },
    innerContainer: {
        flexDirection: 'row',
    },
    headerTextStyle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    headerRightText: {
        marginLeft: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E80071'
    },
    textStyle1: {
        borderColor: '#E80071',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 16,
        borderRadius: 15,
        fontWeight: '500',
        margin: 5,
        backgroundColor: '#ccc',
        color: '#E80071'
    },
    textStyle: {
        borderColor: 'grey',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 16,
        borderRadius: 15,
        fontWeight: '500',
        margin: 5,
    },

    swiperImages: {
        width: 140,
        height: 200,
        borderRadius: 10
    }


})