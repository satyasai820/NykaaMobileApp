import { View, Text, StyleSheet, Image, ScrollView, } from "react-native";

import HomeSeventhSwiperComponent from "../Components/HomeComponents/HomeSeventhSwiperComponent";
import HomeSwiperEightComponent from "../Components/HomeComponents/HomeSwiperEightComponent";
import HomeDiscoverSwiperComponent from "../Components/HomeComponents/HomeDiscoverSwiperComponent";
import HomeStellerSwiperComponent from "../Components/HomeComponents/HomeStellerSwiperComponent";
import HomeHotListCardSwiperComponent from "../Components/HomeComponents/HomeHotListCardSwiperComponent";
import HomeStayThankYouSwiperComponent from "../Components/HomeComponents/HomeStayThankYouSwiperComponent";
import HomeNykaaTopSwiperComponent from "../Components/HomeComponents/HomeNykaaTopSwiperComponent";
import HomeReadyToSwiperComponent from "../Components/HomeComponents/HomeReadyToSwiperComponent";
import HomeBeautyGuideSwiperComponent from "../Components/HomeComponents/HomeBeautyGuideSwiperComponent";
import HomeGetGiftingBannerComponent from "../Components/HomeComponents/HomeGetGiftingBannerComponent";
import HomeWatchAndShopSwiperComponent from "../Components/HomeComponents/HomeWatchAndShopSwiperComponent";

const OfferScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* <View style={styles.constainer}>
                <Image style={{ width: 200, height: 250 }} source={require('../assets/offers-image.png')} />
                <Text style={{ fontSize: 16, color: 'grey', fontWeight: 'bold' }}>Nothing In this Screen</Text>
            </View> */}
            <View style={{backgroundColor:'#FFFFFF'}}>
            <HomeDiscoverSwiperComponent />
            <HomeStellerSwiperComponent />
            <HomeHotListCardSwiperComponent />
            <HomeStayThankYouSwiperComponent />
            <HomeNykaaTopSwiperComponent />
            <HomeSeventhSwiperComponent />
            <HomeSwiperEightComponent />
            <HomeReadyToSwiperComponent />
            <HomeBeautyGuideSwiperComponent />
            <HomeGetGiftingBannerComponent />
            <HomeWatchAndShopSwiperComponent />
            </View>
        </ScrollView>
    )
}

export default OfferScreen;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

