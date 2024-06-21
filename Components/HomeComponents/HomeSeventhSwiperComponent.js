import { StyleSheet, View, Image, Dimensions } from "react-native";
import SwiperFlatListComponent from "../SwiperComponent";

const HomeSeventhSwiperComponent = () => {

    const circleImages = [{img:'https://images-static.nykaa.com/uploads/ef1b2a44-36c7-444e-9777-377d4b3121f3.png?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/549392c2-6ec1-4814-b076-528bb3173941.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/e5703ad3-908c-4179-8219-33316b5cc1f9.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/3c803484-9638-4c22-9de3-5f4737b33c0a.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/fecde496-850a-4d99-8434-0002aa4550a2.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/6a1cea99-5390-4431-8ac9-282c3d0ceb1d.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/d0feeed5-6fe8-45d5-8d8a-b8b30a3e1ac3.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/3d667064-e86e-439d-9881-c8e287431eff.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/d7b03897-0b98-4e9f-8460-f48a8d1ecf20.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/e4478ef7-0ebf-401f-af26-66738647e2a7.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/8073b33f-273b-4538-990d-8814bdbde05b.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/e6f8713a-60ee-46be-aaf6-fe50e90a8520.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/407a469c-0c81-412a-90e9-253932ec2112.jpg?tr=cm-pad_resize,w-150'}]


    const SwiperData = [{img:'https://images-static.nykaa.com/creatives/3bc86135-8529-4b6b-a65e-a91cbab2521c/default.jpg?tr=cm-pad_resize,w-600'},{img:'https://images-static.nykaa.com/creatives/029d7f9a-70ce-469d-8aa0-0e834869f12c/default.png?tr=cm-pad_resize,w-600'},{img:'https://images-static.nykaa.com/creatives/adcc8f45-cd5b-4045-9c15-db2678fc64c7/default.jpg?tr=cm-pad_resize,w-600'},{img:'https://images-static.nykaa.com/creatives/06900e21-8c62-4599-9c07-c6031eedeb83/default.jpg?tr=cm-pad_resize,w-600'},]

    return(
        <>
        <View style={styles.container}>
            <View>
                <Image style={styles.bannerImage} source={{uri:'https://images-static.nykaa.com/uploads/c802253f-4056-42bb-aa92-387bde3b454f.jpg?tr=cm-pad_resize,w-1200'}} />
                <SwiperFlatListComponent data={circleImages} styled={styles.circleImagesStyle} />
            </View>
            <View>
            <SwiperFlatListComponent data={SwiperData} styled={styles.swiperImages} />
            </View>
        </View>
        </>
    )
}

export default HomeSeventhSwiperComponent;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container : {
        padding:10,
    },
    bannerImage : {
        width: screenWidth < 380 ? 340 : 400, 
        height: screenWidth < 380 ? 110 : 120
    },
    circleImagesStyle : {
        width:100,
        height:100,
        margin:5
    },
    swiperImages : {
        width:300,
        height:300,
        margin:5,
        borderRadius:10
    }
})