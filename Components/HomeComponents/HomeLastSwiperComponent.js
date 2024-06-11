import { FlatList, StyleSheet, View, Image, Text } from "react-native";
import SwiperFlatListComponent from "../SwiperComponent";

const HomeLastSwiperComponentSwiper = () => {

    const SmallImagesData = [{ img: 'https://images-static.nykaa.com/uploads/30d93b3e-69d1-407e-9bef-b4fdbbdfe9dc.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/b560de6e-338e-490f-94aa-4d938fa11adc.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/9beb895e-e196-45b8-9110-b87a6535dace.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/b8c1cc89-dbfe-4790-866f-a89787a7ab92.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/b44b8f80-1672-4388-8509-814282b06b8f.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/b3ece4d0-5096-4bac-b013-0608271e8073.jpg?tr=cm-pad_resize,w-200' }, { img: 'https://images-static.nykaa.com/uploads/bebcc6e5-7903-492c-ba60-6bb22e5f9053.jpg?tr=cm-pad_resize,w-200' },]

    const SwiperData = [{ img: 'https://images-static.nykaa.com/uploads/03dc1b15-cdef-4c18-a340-70034dbcfe59.jpg?tr=cm-pad_resize,w-300' }, { img: 'https://images-static.nykaa.com/uploads/76da158d-2ada-47f7-ae2d-d6eaca5f590c.jpg?tr=cm-pad_resize,w-300' }, { img: 'https://images-static.nykaa.com/uploads/0e297dae-2749-4520-aa21-74ceddf7c4aa.jpg?tr=cm-pad_resize,w-300' }, { img: 'https://images-static.nykaa.com/uploads/8bb334eb-7b7b-4079-a7ee-a159db2d8b88.jpg?tr=cm-pad_resize,w-300' }, { img: 'https://images-static.nykaa.com/uploads/64cc19c1-87bd-429d-a4b7-d6b934116588.jpg?tr=cm-pad_resize,w-300' }, { img: 'https://images-static.nykaa.com/uploads/a58ba284-90aa-4193-a14f-47ee5fd724cb.jpg?tr=cm-pad_resize,w-300' },]

    return (
        <>
            <View style={styles.container}>
                <View>
                    <SwiperFlatListComponent data={SmallImagesData} styled={styles.smallImages} />
                </View>
                <View>
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={SwiperData} renderItem={({ item }) => (
                        <View style={{marginVertical:10}}>
                            <Image style={styles.swiperImages} source={{uri:item.img}}   />
                            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:18}}>Up to 70% off</Text>
                        </View>
                    )} />
                </View>
            </View>
        </>
    )
}
export default HomeLastSwiperComponentSwiper;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },

    smallImages: {
        width: 150,
        height: 150,
        borderRadius: 5,
    },

    swiperImages : {
        width:270,
        height:380,
        borderRadius:10,
        margin:5
    }

})