import { StyleSheet, View } from "react-native";
import SwiperFlatListComponent from "../SwiperComponent";

const HomeThirdSwiperComponent = () => {
    const SwiperData =[ {img:'https://images-static.nykaa.com/uploads/9c2b8363-9559-4fe8-ae91-144d8e45f55f.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/3e9ba5ad-6ca0-4536-b6f3-4450bbfe0ee9.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/bd1a9270-5712-49a7-9506-c8c74f0b2718.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/dea35590-d964-4205-b974-0bc552c14340.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/92224d24-7a89-4e2f-b840-daee63d70bb1.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/7a5cc734-2b68-4f63-b039-0caa8c172ef8.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/55298771-cd04-4b4e-afa1-c9b1e1f56227.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/998a8c30-8193-4d77-8659-1da1e3b15343.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/c3c6e0e7-bf09-450e-92eb-89a92dd5a241.jpg?tr=cm-pad_resize,w-450'}, {img:'https://images-static.nykaa.com/uploads/5f8462c9-769c-4bc7-b700-7fdbec31fba9.jpg?tr=cm-pad_resize,w-450'}]
    return(
        <View style={{marginHorizontal:5}}>
        <SwiperFlatListComponent data={SwiperData} styled={styles.imageStyle} />
        </View>
    )
}

export default HomeThirdSwiperComponent;

const styles = StyleSheet.create({
    imageStyle : {
        width:140,
        height:160,
        margin:5,
        borderRadius:10
    }
})