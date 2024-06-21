import { View, Text, Image, FlatList, StyleSheet, ScrollView } from "react-native"
import Swiper from "react-native-swiper"
import SmallImagesSwiperComponents from "./SmallImagesSwiperComponent"
import CardSwiperComponent from "../HomeComponents/CardSwiperComponent"
import CardsComponent from "./CardsComponent"
import { useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBannerDataActionIntiate } from "../../redux/actions/getBannerDataAction"
import getCardDataActionIntiate from "../../redux/actions/getCardDataAction"

const ProductComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBannerDataActionIntiate())
        dispatch(getCardDataActionIntiate())
    }, [])

    const bannerData = useSelector((state) => state.bannerdata?.data)
    const cardData = useSelector((state) => state.cardData?.data)
    const route = useRoute()
    const { id } = route.params
    const bannerDataArray = bannerData ? Object.values(bannerData) : [];
    const cardDataArray = cardData ? Object.values(cardData) : [];
    const bannerImages = bannerDataArray.filter((item) => item.status === id);
    const cardImagesData = cardDataArray.filter((item) => item.status === id); 

    const smallImages = [{ img: 'https://images-static.nykaa.com/uploads/724e8061-3ca8-4065-b8f4-a39c4b266683.png?tr=cm-pad_resize,w-150' }, { img: 'https://images-static.nykaa.com/uploads/4f65cd27-0d5b-41b4-8a21-0fed25c49c5a.png?tr=cm-pad_resize,w-150' }, { img: 'https://images-static.nykaa.com/uploads/5bfb0f5a-3fa1-4a4b-83a4-398b368a82ba.png?tr=cm-pad_resize,w-150' }, { img: 'https://images-static.nykaa.com/uploads/3b224757-e82b-4271-8b62-46f829fb27ab.png?tr=cm-pad_resize,w-150' }, { img: 'https://images-static.nykaa.com/uploads/b7ebf552-cc12-4a54-a8db-fadae489bcb7.png?tr=cm-pad_resize,w-150' }]

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <View style={{ height: 80, }}>
                    <Swiper
                        dot={<View style={styles.dot} />}
                        activeDot={<View style={styles.activeDot} />}
                        paginationStyle={styles.pagination}
                        autoplay={true} autoplayTimeout={4}>
                        {bannerImages.map((item, index) => (
                            <Image key={index} style={{ width: '100%', height: 80 }} source={{ uri: item.img }} />
                        ))}
                    </Swiper>
                </View>
                <SmallImagesSwiperComponents dataOne={bannerImages} dataTwo={smallImages} />
                <CardsComponent data={cardImagesData} title={id}  />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: '#E80071',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    pagination: {
        bottom: -20,
    },
});

export default ProductComponent
