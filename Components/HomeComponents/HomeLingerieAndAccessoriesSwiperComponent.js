import { View, Text, StyleSheet } from "react-native";
import SwiperFlatListComponent from "../SwiperComponent";
const HomeLingerieAndSccessoriesSwiperComponet = () => {
    const SwiperData = [{img:'https://images-static.nykaa.com/uploads/7e9469cf-e20e-46fa-a877-625e167bb3ef.jpg?tr=cm-pad_resize,w-600'},{img:'https://images-static.nykaa.com/uploads/783ade0e-d5c6-44d9-af0e-25eb3c0d605f.jpg?tr=cm-pad_resize,w-600'}, {img:'https://images-static.nykaa.com/uploads/a260da2d-db12-43f3-b3f0-0d00bbe607a1.jpg?tr=cm-pad_resize,w-600'}]
    return(
        <>
          <View style={styles.container}>
                <View>
                    <Text style={styles.textOne}>Lingerie & Accessories</Text>
                    <Text style={styles.textTwo}>Handpicked styles for you</Text>
                </View>
                <View>
                    <SwiperFlatListComponent data={SwiperData} styled={styles.swiperImages} />
                </View>
            </View>
        </>
    )
}

export default HomeLingerieAndSccessoriesSwiperComponet;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    textOne: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textTwo: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 10
    },
    swiperImages :{
        width:300,
        height:200,
        marginRight:5,
        borderRadius:10
    }
})