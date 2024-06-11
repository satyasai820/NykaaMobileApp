
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import CardSwiperComponent from "./CardSwiperComponent";

const HomeHotListCardSwiperComponent = () => {
    const cardsData = [{ img: 'https://images-static.nykaa.com/media/catalog/product/c/4/c44cbfaWISHC00000042_1PO.jpg' }, { img: 'https://images-static.nykaa.com/media/catalog/product/4/d/4deef5cLANEI00000195a_1.jpg' }, { img: 'https://images-static.nykaa.com/media/catalog/product/e/2/e2f1392DOTKE00000199_1090624.jpg' }, { img: 'https://images-static.nykaa.com/media/catalog/product/a/d/adf8a9d6294018402428_1.jpg' }, { img: 'https://images-static.nykaa.com/media/catalog/product/4/c/4c33768800897813727_1.jpg' }, { img: 'https://images-static.nykaa.com/media/catalog/product/8/4/8448d5eNYKMCF0000002_1.jpg' }, { img: 'https://images-static.nykaa.com/media/catalog/product/8/e/8efee3e607710089631_1.jpg' }, { img: 'https://images-static.nykaa.com/media/catalog/product/2/3/23cf730DYOUX00000013_1.jpg' }, { img: 'https://images-static.nykaa.com/media/catalog/product/e/6/e6008b427754_H-8901030957048.jpg' }, { img: 'https://images-static.nykaa.com/media/catalog/product/6/f/6fa60d98005610639161_1.jpg' }, { img: 'https://images-static.nykaa.com/media/catalog/product/1/8/18d33a48809115025050_1509231.jpg' }, { img: 'https://images-static.nykaa.com/media/catalog/product/6/f/6fa60d98901030704680_1.jpg' }]
    return (
        <>
            <View style={styles.Container}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.headerTextStyle}>Hot List</Text>
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
                    <CardSwiperComponent data={cardsData} styled={styles.swiperImages} />
                </View>
            </View>
        </>
    )
}

export default HomeHotListCardSwiperComponent;

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
        height: 140,
        borderRadius: 10
    }
})