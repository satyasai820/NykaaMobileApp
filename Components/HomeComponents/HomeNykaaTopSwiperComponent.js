
import SwiperFlatListComponent from "../SwiperComponent";
import Imports from "../Imports";

const HomeNykaaTopSwiperComponent = () => {
    const SwiperData = [ {img:'https://images-static.nykaa.com/uploads/434527d6-ad5d-4b38-a648-94df27d77fae.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/f0eacff5-1a47-4ee5-a78d-60c7c3a6d58e.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/868056ba-6435-4cee-91cb-ae426e071046.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/c5724b63-68a5-4844-ab16-cd6284bd20c7.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/d95f859c-b939-4498-80ab-2adc41061921.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/d95f859c-b939-4498-80ab-2adc41061921.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/2444215a-d71f-4f3e-844a-6434d1ca8fd4.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/de7f2e86-0564-4175-a739-c47fbc6e25a3.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/48674b00-ffb7-44d4-b530-26e7468599df.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/923d490e-5183-4a66-9812-0f13c886c004.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/1f4a9863-c376-4d27-96f1-99926c895dae.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/1f4a9863-c376-4d27-96f1-99926c895dae.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/7d7338bf-1dc6-4c8c-9ca1-83a80a186132.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/9bd27747-a111-4c4a-938b-29c0fc386407.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/6f49bf0f-8489-471b-b11e-3d9438a27a94.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/45cdcd01-388f-4631-9840-3f588d3c159d.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/4517895c-5508-400e-99ab-a645dca6ad9e.jpg?tr=cm-pad_resize,w-300'}]
    return(
        <>
        <Imports.View style={styles.container}>
            <SwiperFlatListComponent data={SwiperData} styled={styles.swiperImages} />
        </Imports.View>
        </>
    )
}

export default HomeNykaaTopSwiperComponent;

const styles = Imports.StyleSheet.create({
    container : {
        padding:10
    },
    swiperImages : {
        width:180,
        height:270,
        margin:5,
        borderRadius:10
    }
})