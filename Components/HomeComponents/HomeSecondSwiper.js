import { StyleSheet } from "react-native";
import SwiperFlatListComponent from "../SwiperComponent";

const HomeSecondSwiper = () => {
    const swiperData = [{img:'https://images-static.nykaa.com/uploads/76baaafd-d71c-49ed-a09b-aa8cfe6bbe05.jpg?tr=cm-pad_resize,w-900'}, {img:'https://images-static.nykaa.com/creatives/4f8ed496-8c62-404f-af6a-2587c7dcf4d3/default.jpg?tr=cm-pad_resize,w-600'}, {img:'https://images-static.nykaa.com/creatives/86d66bd6-c331-484b-ba57-656412215f4a/default.jpg?tr=cm-pad_resize,w-600'}, {img:'https://images-static.nykaa.com/creatives/35f6a5d7-3722-4b97-90f9-46ed3e21b58f/default.jpg?tr=cm-pad_resize,w-600'}, {img:'https://images-static.nykaa.com/creatives/6b682638-a915-4f65-9ffd-56b64c071508/default.jpg?tr=cm-pad_resize,w-600'}, {img:'https://images-static.nykaa.com/creatives/cd44c26f-8938-4bce-b6bb-724a834ec9ae/default.jpg?tr=cm-pad_resize,w-600'}]
    return(
        <>
        <SwiperFlatListComponent data={swiperData} styled={styles.container} />
        </>
    )
}

export default HomeSecondSwiper;

const styles = StyleSheet.create({
    container :{
        width:350,
        height:350,
        marginHorizontal:5,
        borderRadius:10,
        marginVertical:10
    }
})