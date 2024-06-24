import Imports from "../Components/Imports";

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
        <Imports.ScrollView showsVerticalScrollIndicator={false}>
            <Imports.View style={{backgroundColor:'#FFFFFF'}}>
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
            </Imports.View>
        </Imports.ScrollView>
    )
}

export default OfferScreen;



