import { View, Text, ScrollView } from "react-native";
import FirstSwiperComponent from "./FirstSwiperComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthSwiperComponent from "./FifthSwiperComponent";
import SixthSwiperComponent from "./SixthSwiperComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBannerDataActionIntiate } from "../../redux/actions/getBannerDataAction";

const AllInnerProductComponents = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBannerDataActionIntiate());
    }, [])

    return(
        <ScrollView>
        <View>
            <FirstSwiperComponent />
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
            <FifthSwiperComponent />
            <SixthSwiperComponent />
        </View>
        </ScrollView>
    )
}

export default AllInnerProductComponents;