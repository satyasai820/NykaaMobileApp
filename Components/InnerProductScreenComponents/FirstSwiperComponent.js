import { View, Image, StyleSheet, Text, Alert } from "react-native"
import Swiper from "react-native-swiper";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FirstSwiperComponent = () => {

    const [cardImages, setCardImages] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const imagesData = await AsyncStorage.getItem('innerImages');
                if (imagesData) {
                    const parsedImages = JSON.parse(imagesData);
                    setCardImages(parsedImages);

                }
            } catch (e) {
                console.log(e);
            }
        };
        getData();
    }, []);

    console.log('getting data ---->', cardImages);

    const stars = Array.from({length:4}, (_, index) => (
        <AntDesign name="star" size={16} style={{ marginHorizontal: 2 }} key={index} />
    ));



    return (
        <>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <View>
                    <Image style={{ width: '100%', height: 50 }} source={{ uri: 'https://images-static.nykaa.com/uploads/412fdf19-cca3-432f-8c24-e9c1f77967ff.jpg?tr=cm-pad_resize,w-1200' }} />
                </View>
                <View style={{ height: 300 }}>
                    <Swiper
                        dot={<View style={styles.dotStyle} />}
                        activeDot={<View style={styles.ActiveDotStyle} />}
                        paginationStyle={styles.pagination}
                    >
                        {cardImages && cardImages.map((item, index) => (
                            <View key={index} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 300, height: 300 }} source={{ uri: item.img }} />
                            </View>
                        ))}
                    </Swiper>
                </View>
                <View style={{ marginHorizontal: 30, marginTop: 10 }}>
                    <Text style={{ borderRadius: 20, borderColor: '#ccc', borderWidth: 1, width: '30%', textAlign: 'center', fontSize: 14, color: 'grey', padding: 3 }}>View Similar</Text>
                </View>
                <View style={{ marginHorizontal: 30 }}>
                    <View style={styles.textContainer}>
                        <Text style={{ fontSize: 15, color: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>Lakme</Text>
                        <Ionicons name="share-social-outline" size={20} style={{ marginLeft: 'auto' }} />
                    </View>
                    <View style={{ width: '100%' }}>
                        <Text style={styles.titleText}> Vitamin C Superglow Skin Perfecting Primer with 1 % Vit C
                            (30ml)</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
                            {/* <AntDesign name="star" size={16} style={{ marginHorizontal: 2 }} />
                            <AntDesign name="star" size={16} style={{ marginHorizontal: 2 }} />
                            <AntDesign name="star" size={16} style={{ marginHorizontal: 2 }} />
                            <AntDesign name="star" size={16} style={{ marginHorizontal: 2 }} />
                            <AntDesign name="star" size={16} style={{ marginHorizontal: 2 }} /> */}
                            {stars}
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>4.8/5 <Text style={{ color: 'grey' }}>(23)</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>₹371 <Text style={{ color: 'grey', fontSize: 14, fontWeight: '200' }}> ₹399</Text><Text style={{ color: 'green', fontSize: 16, fontWeight: '200' }} > 7%</Text></Text>
                        </View>
                        <View style={{ paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                            <Text style={{ fontSize: 15, color: 'grey' }}>Inclusive of all taxes</Text>
                        </View>
                        <View style={{ marginVertical: 15 }}>
                            <Text style={{ color: 'grey', fontSize: 15 }}>Sold by : <Text style={{ color: 'black' }}>Nykaa E retail limited</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginVertical: 20, backgroundColor: '#ffffff', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: '50%', paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRightColor: '#ccc', borderRightWidth: 1 }}>
                    <Ionicons size={13} name="checkmark" style={{ backgroundColor: '#E80071', padding: 5, color: '#FFFFFF', borderRadius: 20, marginRight: 5 }} />
                    <Text style={{ fontSize: 12, }}>100% Authentic</Text>
                </View>
                <View style={{ width: '50%', paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons size={13} name="checkmark" style={{ backgroundColor: '#E80071', padding: 5, color: '#FFFFFF', borderRadius: 20, marginRight: 5 }} />
                    <Text style={{ fontSize: 12, }}>Easy return policy</Text>
                </View>
            </View>
        </>
    )
}

export default FirstSwiperComponent;

const styles = StyleSheet.create({
    dotStyle: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        margin: 3,
        borderRadius: 10
    },
    ActiveDotStyle: {
        backgroundColor: '#E80071',
        width: 8,
        height: 8,
        margin: 3,
        borderRadius: 10
    },
    pagination: {
        bottom: -30
    },
    textContainer: {
        flexDirection: 'row', alignItems: 'center', marginTop: 10
    },
    titleText: {
        marginVertical: 5,
        fontSize: 14
    }
})