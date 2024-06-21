import { View, Text, StyleSheet, Dimensions } from "react-native";
import SwiperFlatListComponentTwo from "../SwiperComponentTwo";

const HomeFifthSwiperComponent = () => {

    const SwiperData = [{ img: 'https://images-static.nykaa.com/creatives/b72cb8a6-a3d7-4dcf-aa12-f9b14aff1f78/default.jpg?tr=cm-pad_resize,w-600' }, { img: 'https://images-static.nykaa.com/creatives/3f84402e-ee83-4527-967d-4403adc9eab0/default.jpg?tr=cm-pad_resize,w-600' }, { img: 'https://images-static.nykaa.com/creatives/a9783fb9-287b-411b-8b2a-e4611e94a1e1/default.jpg?tr=cm-pad_resize,w-600' }]

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.textOne}>Focuse On :</Text>
                    <Text style={styles.textTwo}>Today's standout lables</Text>
                </View>
                <View>
                    <SwiperFlatListComponentTwo data={SwiperData} styled={styles.images} />
                </View>
            </View>
        </>
    )
}

export default HomeFifthSwiperComponent;

const screenWidth = Dimensions.get('window').width ; 

const styles = StyleSheet.create({
    container :{
        padding:10,
    },
    textOne :{
        fontSize:20,
        fontWeight:'bold',
    },
    textTwo : {
        borderBottomColor:'grey',
        borderBottomWidth:2,
        paddingBottom:10,
        marginBottom:10
    },
    images : {
        width: screenWidth < 380 ? 335 : screenWidth <= 420 ? 390 : 400,
        height: screenWidth < 380 ? 335 : screenWidth <= 420 ? 390 : 400,
        marginVertical:5,
        marginRight:5,
        borderRadius:10
    },
    
    textContainer :{
        position:'absolute',
        top:210,
        marginLeft:15,
        fontSize:20,
        fontWeight:'bold'
    },
    textContainerTwo :{
        position:'absolute',
        top:230,
        marginLeft:15,
        fontSize:16,
    }
})