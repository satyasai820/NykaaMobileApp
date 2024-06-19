import { StyleSheet, View, Text } from "react-native";
import CardSwiperComponent from "../HomeComponents/CardSwiperComponent";

const SixthSwiperComponent = () => {
    const cardsData = [{ img: 'https://images-static.nykaa.com/media/catalog/product/0/a/0ad53ee29844_N-8901030699047.jpg?tr=cm-pad_resize,w-300,h-300' }, { img: 'https://images-static.nykaa.com/media/catalog/product/6/6/661bab28906107057201-01.jpg?tr=cm-pad_resize,w-200,h-200' }, { img: 'https://images-static.nykaa.com/media/catalog/product/0/a/0ad53ee29825_N-8901030701573.jpg?tr=cm-pad_resize,w-300,h-300' }, { img: 'https://images-static.nykaa.com/media/catalog/product/0/a/0ad53ee29853_N-8901030701481.jpg?tr=cm-pad_resize,w-200,h-200' }, { img: 'https://images-static.nykaa.com/media/catalog/product/8/7/87176bc8904207512842_1.jpg?tr=cm-pad_resize,w-200,h-200' }, { img: 'https://images-static.nykaa.com/media/catalog/product/b/f/bf87db15057566518284_1.jpg?tr=cm-pad_resize,w-200,h-200' }, { img: 'https://images-static.nykaa.com/media/catalog/product/6/6/661bab28906107057201-01.jpg?tr=cm-pad_resize,w-200,h-200' }, { img: 'https://images-static.nykaa.com/media/catalog/product/c/c/cc13bdb8906148701019_1.jpg?tr=cm-pad_resize,w-200,h-200' },]
    return (
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Customers Also Bought</Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                    <Text style={styles.sideText}>View All</Text>
                </View>
            </View>
            <CardSwiperComponent data={cardsData} styled={styles.swiperImages} />
        </View>
    )
}

export default SixthSwiperComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        paddingVertical: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    sideText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#E80071'
    },
    swiperImages: {
        width: 140,
        height: 140,
        borderRadius: 10
    }
})