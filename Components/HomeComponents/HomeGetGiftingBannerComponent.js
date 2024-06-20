import { StyleSheet, Text, View } from "react-native";
import SwiperFlatListComponentTwo from "../SwiperComponentTwo";

const HomeGetGiftingBannerComponent = () => {
    const bannerData = [{img:'https://images-static.nykaa.com/uploads/a92dac26-400d-4158-af51-a7d247658835.jpg?tr=cm-pad_resize,w-600'},{img:'https://images-static.nykaa.com/uploads/97a082e3-76ba-4671-8a10-97c867ff5b2f.jpg?tr=cm-pad_resize,w-600'}]
    return (
        <>
            <View style={styles.container}>
                <View>
                    <View>
                        <Text style={styles.textOne}>Get Gifting</Text>
                        <Text style={styles.textTwo}>Pamper, Delight & Spoil Your Loved Ones</Text>
                    </View>
                    <View>
                        <SwiperFlatListComponentTwo data={bannerData} styled={styles.swiperImages} />
                    </View>
                </View>
            </View>
        </>
    )
}

export default HomeGetGiftingBannerComponent;

const styles = StyleSheet.create({
    container: {
        padding: 10
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

    swiperImages : {
        width:260,
        height:40,
        marginHorizontal:5,
        borderRadius:10
    }

})