
import FirstSwiperComponent from "./FirstSwiperComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthSwiperComponent from "./FifthSwiperComponent";
import SixthSwiperComponent from "./SixthSwiperComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBannerDataActionIntiate } from "../../redux/actions/getBannerDataAction";
import Imports from "../Imports";

const AllInnerProductComponents = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBannerDataActionIntiate());
    }, [])

    return(
        <Imports.ScrollView>
        <Imports.View>
            <FirstSwiperComponent />
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
            <FifthSwiperComponent />
            <SixthSwiperComponent />
        </Imports.View>
        </Imports.ScrollView>
    )
}

export default AllInnerProductComponents;