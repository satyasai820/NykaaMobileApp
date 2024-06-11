
import { ScrollView, StyleSheet } from "react-native";
import { View } from "react-native";

import HomeFirstSwiper from "../Components/HomeComponents/HomeFirstSwiper";
import SearchBarComponent from "../Components/HomeSearchBarComponent";
import HomeSecondSwiper from "../Components/HomeComponents/HomeSecondSwiper";
import HomeFirstBanner from "../Components/HomeComponents/HomeFirstBanners";
import HomeThirdSwiperComponent from "../Components/HomeComponents/HomeThirdSwiperComponent";
import HomeFourthSwiperComponent from "../Components/HomeComponents/HomeFourthSwiperComponent";
const BeautyScreen = () => {
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <SearchBarComponent />
        <HomeFirstSwiper />
        <HomeSecondSwiper />
        <HomeFirstBanner />
        <HomeThirdSwiperComponent />
        <HomeFourthSwiperComponent />
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