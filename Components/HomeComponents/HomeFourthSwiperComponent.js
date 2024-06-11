import { View, StyleSheet, Text, FlatList, Image } from "react-native";

const HomeFourthSwiperComponent = () => {
    const SwiperData = [{img:'https://images-static.nykaa.com/creatives/9b913ad6-f364-4d5f-a8c1-c3b19a97b603/default.jpg?tr=cm-pad_resize,w-900', m1:'Min 25% Off', m2:'Get a Moisturizer on699+'}, {img:'https://images-static.nykaa.com/creatives/984aeeaf-37ee-427f-b2db-34c19d514aec/default.jpg?tr=cm-pad_resize,w-900', m1:'Min 25% Off', m2:'Get a Moisturizer on699+'},{img:'https://images-static.nykaa.com/creatives/0533587f-03f5-444e-ae80-133f525a4a2a/default.png?tr=cm-pad_resize,w-900', m1:'Min 25% Off', m2:'Get a Moisturizer on699+'},{img:'https://images-static.nykaa.com/creatives/fb16b7d8-0c03-4af7-b307-d24d74ffd39e/default.jpg?tr=cm-pad_resize,w-900', m1:'Min 25% Off', m2:'Get a Moisturizer on699+'},{img:'https://images-static.nykaa.com/creatives/dccc0cea-c0db-461f-9f80-a3ebb69ad0c9/default.jpg?tr=cm-pad_resize,w-900', m1:'Min 25% Off', m2:'Get a Moisturizer on699+'},{img:'https://images-static.nykaa.com/creatives/cdc3fc32-7e24-4e95-9bb0-f12f9d1d5915/default.jpg?tr=cm-pad_resize,w-900', m1:'Min 25% Off', m2:'Get a Moisturizer on699+'}, ]
    return(
        <>
        <View style={styles.container}>
            <View>
                <Text style={styles.textOne}>Explore Our Top Brands</Text>
                <Text style={styles.textTwo}>A list labels to obsess over</Text>
            </View>
            <View style={styles.imageContainer}>
                <FlatList data={SwiperData} renderItem={({item}) => 
                <>
                <View>
                
                    <Image style={styles.imageStyle} source={{uri:item.img}} />
                    <Text style={styles.textContainer}>{item.m1}</Text>
                    <Text style={styles.textContainerTwo}>{item.m2}</Text>
                </View>
                </>
                } />
            </View>
        </View>
        </>
    )
}

export default HomeFourthSwiperComponent;

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
    imageStyle :{
        width:400,
        height:250,
        marginVertical:10,
        borderRadius:10
    },
    imageContainer :{
        justifyContent:'center',
        alignItems:'center'
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