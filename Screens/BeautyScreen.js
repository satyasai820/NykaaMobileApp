
import { ScrollView, StyleSheet } from "react-native";
import { View } from "react-native";

import HomeFirstSwiper from "../Components/HomeComponents/HomeFirstSwiper";
import SearchBarComponent from "../Components/HomeSearchBarComponent";
import HomeSecondSwiper from "../Components/HomeComponents/HomeSecondSwiper";
import HomeFirstBanner from "../Components/HomeComponents/HomeFirstBanners";
import HomeThirdSwiperComponent from "../Components/HomeComponents/HomeThirdSwiperComponent";
import HomeFourthSwiperComponent from "../Components/HomeComponents/HomeFourthSwiperComponent";
import HomeFifthSwiperComponent from "../Components/HomeComponents/HomeFifthSwiperComponent";
import HomeSixthSwiperComponent from "../Components/HomeComponents/HomeSixthSwiperComponent";
import HomeSeventhSwiperComponent from "../Components/HomeComponents/HomeSeventhSwiperComponent";
import HomeSwiperEightComponent from "../Components/HomeComponents/HomeSwiperEightComponent";
import HomeOnRadarComponent from "../Components/HomeComponents/HomeOnRadarComponent";
import HomeDiscoverSwiperComponent from "../Components/HomeComponents/HomeDiscoverSwiperComponent";
import HomeStellerSwiperComponent from "../Components/HomeComponents/HomeStellerSwiperComponent";
import HomeHotListCardSwiperComponent from "../Components/HomeComponents/HomeHotListCardSwiperComponent";
import HomeStayThankYouSwiperComponent from "../Components/HomeComponents/HomeStayThankYouSwiperComponent";
import HomeNykaaTopSwiperComponent from "../Components/HomeComponents/HomeNykaaTopSwiperComponent";
import HomeReadyToSwiperComponent from "../Components/HomeComponents/HomeReadyToSwiperComponent";
import HomeBeautyGuideSwiperComponent from "../Components/HomeComponents/HomeBeautyGuideSwiperComponent";
import HomeGetGiftingBannerComponent from "../Components/HomeComponents/HomeGetGiftingBannerComponent";
import HomeWatchAndShopSwiperComponent from "../Components/HomeComponents/HomeWatchAndShopSwiperComponent";
import HomeLingerieAndSccessoriesSwiperComponet from "../Components/HomeComponents/HomeLingerieAndAccessoriesSwiperComponent";
import HomeLastSwiperComponentSwiper from "../Components/HomeComponents/HomeLastSwiperComponent";
const BeautyScreen = () => {
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <SearchBarComponent />
        {/* <HomeFirstSwiper />
        <HomeSecondSwiper />
        <HomeFirstBanner />
        <HomeThirdSwiperComponent />
        <HomeFourthSwiperComponent />
        <HomeFifthSwiperComponent />
        <HomeSixthSwiperComponent />
        <HomeOnRadarComponent />
        <HomeDiscoverSwiperComponent />
        <HomeStellerSwiperComponent /> */}
        <HomeHotListCardSwiperComponent />
        <HomeStayThankYouSwiperComponent />
        <HomeNykaaTopSwiperComponent />
        <HomeSeventhSwiperComponent />
        <HomeSwiperEightComponent />
        <HomeReadyToSwiperComponent />
        <HomeBeautyGuideSwiperComponent />
        <HomeGetGiftingBannerComponent />
        <HomeWatchAndShopSwiperComponent />
        <HomeLingerieAndSccessoriesSwiperComponet />
        <HomeLastSwiperComponentSwiper />
        </View>
        </ScrollView>
    )
}

export default BeautyScreen;

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#FFFFFF'
    }
})