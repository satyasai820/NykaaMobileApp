import { View, Text, ScrollView } from "react-native";
import FirstSwiperComponent from "./FirstSwiperComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";

const AllInnerProductComponents = () => {
    return(
        <ScrollView>
        <View>
            <FirstSwiperComponent />
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
        </View>
        </ScrollView>
    )
}

export default AllInnerProductComponents;