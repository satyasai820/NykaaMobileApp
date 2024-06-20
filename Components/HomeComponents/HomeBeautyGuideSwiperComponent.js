import { StyleSheet, View } from "react-native";
import SwiperFlatListComponentTwo from "../SwiperComponentTwo";

const HomeBeautyGuideSwiperComponent = () => {
    const SwiperData = [ {img:'https://images-static.nykaa.com/uploads/01e873b1-614b-4dc5-b077-439e6edc7d1c.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/9fc92ca8-8e53-4b95-be16-496c3b478c89.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/a64c80e8-402f-4829-9bdd-f95fd7543cdf.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/abebeea7-672e-40c7-b1df-9c96b69a080c.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/cc9b4b27-cdbf-43cd-996a-615f12d35bbf.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/2f02e292-d9d5-4717-bbbc-c8555925e25c.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/0115bf77-fab0-4bea-8e53-1f33db85aef9.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/75a02ca1-56c0-4c7e-bcf4-1d374273fbcd.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/e7bf87f4-55af-46eb-bbdd-1065b1fe4820.jpeg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/fef1f0ef-ad4a-460a-89be-d984abf048b3.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/9d02dc22-5b69-4edc-a10f-ec491823dc9d.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/7b03f41d-d7d5-4267-a451-48a4e03e4679.jpeg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/16ef1d0c-8923-477e-8384-33c7a08a307d.jpg?tr=cm-pad_resize,w-300'}]
    return(
        <>
        <View style={styles.container}>
            <SwiperFlatListComponentTwo  data={SwiperData} styled={styles.swiperImages} />
        </View>
        </>
    )
}

export default HomeBeautyGuideSwiperComponent;

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    swiperImages : {
        width:200,
        height:260,
        margin:5,
        borderRadius:5
    }
})