import { StyleSheet, View } from "react-native";
import SwiperFlatListComponentTwo from "../SwiperComponentTwo";

const HomeFirstSwiper = () => {

    const swiperData = [{img:'https://images-static.nykaa.com/uploads/850caf1e-a12e-4629-93f0-64e4247889b5.jpg?tr=cm-pad_resize,w-225'},{img:'https://images-static.nykaa.com/uploads/6a4a3093-b6a0-4e53-88f1-ede19666dd29.jpg?tr=cm-pad_resize,w-225'},{img:'https://images-static.nykaa.com/uploads/9fca982b-017e-4fcf-9346-ad04a38ac319.jpg?tr=cm-pad_resize,w-225'},{img:'https://images-static.nykaa.com/uploads/e61d7cda-7ba1-4dc5-a851-02ac497bd806.jpg?tr=cm-pad_resize,w-225'},{img:'https://images-static.nykaa.com/uploads/fc7e5159-0a22-4279-97f0-8159c4089112.jpg?tr=cm-pad_resize,w-225'},{img:'https://images-static.nykaa.com/uploads/af2facab-5dc9-4df4-909d-b989d245696e.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/4a104647-c163-40c2-aa05-e13d7f747869.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/057d1ca6-bad3-4b56-a3bc-cb40e9fa3fe1.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/41725308-905a-44aa-97e1-e2aeeeed6525.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/654fd712-94f9-4e15-a27b-934f292896f6.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/311abd2b-5295-40bd-8441-a62b0483f84f.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/5260abcc-7d0d-44e9-a70f-6b5b1d162e1b.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/3079d39e-2f76-4292-be21-c3658c28d77f.jpg?tr=cm-pad_resize,w-150'}]

    return(
        <>
        <View>
        <SwiperFlatListComponentTwo data={swiperData}  styled={styles.images} />
        </View>
        </>
    )
}

export default HomeFirstSwiper;

const styles = StyleSheet.create({
    images:{
        paddingHorizontal:5,
        marginHorizontal:5,
        borderRadius:5,
        width:100,
        height:80
    }
})