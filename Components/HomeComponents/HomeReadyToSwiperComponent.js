
import SwiperFlatListComponent from "../SwiperComponent";
import Imports from "../Imports";

const HomeReadyToSwiperComponent = () => {
    const swiperData = [ {img:'https://images-static.nykaa.com/uploads/a1512f27-030c-4c6c-98f1-517bb6044f71.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/4e53d089-80a5-4b06-aca0-eccddce2552b.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/66c16716-450f-4f3a-b934-ec163478f4d7.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/54056231-33b9-4f4e-b0a9-e7f8c8fed4f0.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/120c8631-eead-419f-8c0f-39433c3a70a2.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/3751727d-7ef7-491c-9cb7-e7967df767ed.jpg?tr=cm-pad_resize,w-300'}, {img:'https://images-static.nykaa.com/uploads/a0df917c-7c81-4542-9461-d670a7cd2845.jpg?tr=cm-pad_resize,w-300'}]
    return(
        <> 
        <Imports.View style={styles.container}>
            <Imports.View>
                <Imports.Image style={{width:400, height:135}} source={{uri:'https://images-static.nykaa.com/uploads/79629bb1-e14f-45d9-8b4c-6fd94c0e0cb7.gif'}} />
            </Imports.View>
            <Imports.View>
                <SwiperFlatListComponent data={swiperData} styled={styles.swiperImages} />
            </Imports.View>
        </Imports.View>
        </>
    )
}

export default HomeReadyToSwiperComponent;

const styles = Imports.StyleSheet.create({
    container : {
        padding:10
    },
    swiperImages : {
        width:200,
        height:100
    }
})