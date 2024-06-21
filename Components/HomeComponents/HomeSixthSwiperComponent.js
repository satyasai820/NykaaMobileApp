import { StyleSheet, View, Image, Dimensions } from "react-native";
import SwiperFlatListComponent from "../SwiperComponent";

const HomeSixthSwiperComponent = () => {
    const SwiperData = [{ img: 'https://images-static.nykaa.com/uploads/d395cdcd-733f-4a1b-aa3f-19cf7fced53c.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/1eeb32d8-cd9a-4e04-88cc-163a1d38fbbe.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/61858b3d-50d4-41af-8fae-626967ff914c.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/348cfad0-023d-4429-ab3a-f42a87393b2b.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/6214484e-e5ef-4c65-944e-bf10ef6964a2.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/c5426ba6-8f5d-4787-80e0-49fb47fbdd1b.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/7766dd1d-bf43-4c5b-8296-10097d31732c.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/74e53def-2acc-4ef9-bb77-3f1db1a34cac.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/81133b78-6d34-4d0b-aa55-b54cbff33394.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/3cb45e61-4cff-4e1d-aec2-2a555febd850.jpg?tr=cm-pad_resize,w-200' }]

    const SwiperData2 = [{ img: 'https://images-static.nykaa.com/uploads/3acbc938-60de-4e4f-ac2e-146d3488ea5f.jpg?tr=cm-pad_resize,w-600' }, { img: 'https://images-static.nykaa.com/uploads/84da0b29-cdb4-40d4-a0b0-baeed1301e81.jpg?tr=cm-pad_resize,w-600' }, { img: 'https://images-static.nykaa.com/uploads/d3e21a24-0858-4884-bc4c-f6338f866822.jpg?tr=cm-pad_resize,w-600' }, { img: 'https://images-static.nykaa.com/uploads/05bcacbe-97bb-4433-8497-e82f7a1d4222.jpg?tr=cm-pad_resize,w-600' }, { img: 'https://images-static.nykaa.com/uploads/f9198809-bf82-437b-8faf-a9b628e5959c.jpg?tr=cm-pad_resize,w-600' }]

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Image style={styles.imageStyle} source={{ uri: 'https://images-static.nykaa.com/uploads/94e9019e-908b-4053-94c3-afd0527c6e45.jpg?tr=cm-pad_resize,w-600' }} />
                </View>
                <View>
                    <SwiperFlatListComponent data={SwiperData} styled={styles.SwiperImages} />
                </View>
                <View>
                    <SwiperFlatListComponent data={SwiperData2} styled={styles.swiperImagesTwo} />
                    <Image style={styles.buttonImages} source={{ uri: 'https://images-static.nykaa.com/uploads/4a4dc257-af38-4b6f-996a-733dfa01fba6.jpg?tr=cm-pad_resize,w-600' }} />
                </View>
            </View>
        </>
    )
}

export default HomeSixthSwiperComponent;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    imageStyle: {
        width: screenWidth < 380 ? 340 : screenWidth <= 420 ? 395 : 400,
        height: 80,
    },
    SwiperImages: {
        width: 120,
        height: 50,
        margin: 5,
        borderRadius: 5
    },
    swiperImagesTwo: {
        width: screenWidth < 380 ? 330 : screenWidth <= 420 ? 380 : 400,
        height: screenWidth < 380 ? 420 : 500,
        borderRadius: 10,
        margin: 5
    },
    buttonImages: {
        // width: screenWidth < 380 ? 340 : screenWidth <= 420 ? 390 : 410,
        height: screenWidth < 380 ? 70 : 80
    }
})