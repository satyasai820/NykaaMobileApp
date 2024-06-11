import { Image, StyleSheet, View } from "react-native";
import SwiperFlatListComponent from "../SwiperComponent";

const HomeStayThankYouSwiperComponent = () => {
    const circleImages = [ {img:'https://images-static.nykaa.com/uploads/f3bb5707-0ef2-4b13-a72b-891d41456248.jpg?tr=cm-pad_resize,w-200'}, {img:'https://images-static.nykaa.com/uploads/add1d1af-35e5-452d-98cb-65a63b305d01.jpg?tr=cm-pad_resize,w-200'}, {img:'https://images-static.nykaa.com/uploads/eff28bb7-9861-4b34-baf5-12d70eaebe88.jpg?tr=cm-pad_resize,w-200'}, {img:'https://images-static.nykaa.com/uploads/beee7a58-ae70-49ea-9802-0e556d6e0b90.jpg?tr=cm-pad_resize,w-200'}, {img:'https://images-static.nykaa.com/uploads/5fa6559a-6af0-45e9-b6da-92d4d534b21d.jpg?tr=cm-pad_resize,w-200'}, {img:'https://images-static.nykaa.com/uploads/2ab7fe8e-2c86-43d0-ab48-1ae0dc8e892c.jpg?tr=cm-pad_resize,w-200'}, {img:'https://images-static.nykaa.com/uploads/a42c1dc2-858d-440f-a752-72bbf1c8813f.jpg?tr=cm-pad_resize,w-200'}, {img:'https://images-static.nykaa.com/uploads/9bd16fbf-023d-41c8-a124-3907f0c8ef47.jpg?tr=cm-pad_resize,w-200'}]
    return(
        <>
        <View style={styles.container}>
            <View>
                <Image style={{width:400, height:140}} source={{uri:'https://images-static.nykaa.com/uploads/02f9b0a2-2d25-4888-b6cf-a9fdfa80f790.jpg?tr=cm-pad_resize,w-1200'}} />
            </View>
            <View>
                <SwiperFlatListComponent data={circleImages} styled={styles.swiperImages} />
            </View>
        </View>
        </>
    )
}

export default HomeStayThankYouSwiperComponent;

const styles = StyleSheet.create({
    container : {
        padding:10,
    },

    swiperImages : {
        width:100,
        height:100,
        margin:5
    },

})