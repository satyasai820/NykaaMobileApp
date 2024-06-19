import { StyleSheet, View, Text } from "react-native";
import CardSwiperComponent from "../HomeComponents/CardSwiperComponent";

const FifthSwiperComponent = () => {
    const cardsData = [{ img: 'https://images-static.nykaa.com/media/catalog/product/3/0/30969908901030561924.jpg?tr=cm-pad_resize,w-300,h-300' }, { img: 'https://images-static.nykaa.com/media/catalog/product/9/4/946f6cbLAK_8901030366086ab_1.jpg?tr=cm-pad_resize,w-300,h-300' }, { img: 'https://images-static.nykaa.com/media/catalog/product/3/0/30969908901030790065.jpg?tr=cm-pad_resize,w-300,h-300' }, { img: 'https://images-static.nykaa.com/media/catalog/product/9/4/946f6cbLAKME00001590ab_1.jpg?tr=cm-pad_resize,w-200,h-200' }, { img: 'https://images-static.nykaa.com/media/catalog/product/9/4/946f6cbLAKME00000324ab_1.jpg?tr=cm-pad_resize,w-200,h-200' }, { img: 'https://images-static.nykaa.com/media/catalog/product/9/4/946f6cbLAKME00000292ab_1.jpg?tr=cm-pad_resize,w-200,h-200' }, { img: 'https://images-static.nykaa.com/media/catalog/product/6/c/6c1a17c8901030583612_0.jpg?tr=cm-pad_resize,w-200,h-200' },]
    return (
        <View style={{backgroundColor:'#FFFFFF'}}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Explore Similar Products</Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                    <Text style={styles.sideText}>View All</Text>
                </View>
            </View>
            <CardSwiperComponent data={cardsData} styled={styles.swiperImages} />
        </View>
    )
}

export default FifthSwiperComponent;

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:15,
        paddingVertical:10
    },
    text : {
        fontSize:16,
        fontWeight:'bold'
    },
    sideText : {
        fontSize:15,
        fontWeight:'bold',
        color:'#E80071'
    },
    swiperImages: {
        width: 140,
        height: 140,
        borderRadius: 10
    }
})