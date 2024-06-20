import { StyleSheet, View } from "react-native";
import SwiperFlatListComponentTwo from "../SwiperComponentTwo";

const HomeDiscoverSwiperComponent = () => {

    const SwiperData = [{img:'https://images-static.nykaa.com/uploads/f1962e8a-c987-4966-8e42-ebe46d0b5456.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/6b97644d-0811-4b25-9e60-477ad80b228c.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/85183958-4a6d-434e-9b6b-9358ea5dd2e0.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/85183958-4a6d-434e-9b6b-9358ea5dd2e0.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/b819d12a-3eab-4a0e-89c7-b8b3a3487bb3.jpg?tr=cm-pad_resize,w-450'}]

    return(
        <>
        <View style={styles.container} >
            <SwiperFlatListComponentTwo data={SwiperData} styled={styles.swiperImage}  />
        </View>
        </>
    )
}

export default HomeDiscoverSwiperComponent;

const styles = StyleSheet.create({
    container : {
        padding:10
    },

    swiperImage : {
        width:200,
        height:270,
        borderRadius:5
    }
})