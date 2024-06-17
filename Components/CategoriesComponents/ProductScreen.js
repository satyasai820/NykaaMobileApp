import { View, Text, Image, FlatList, StyleSheet, ScrollView } from "react-native"
import Swiper from "react-native-swiper"
import SmallImagesSwiperComponents from "./SmallImagesSwiperComponent"
import CardSwiperComponent from "../HomeComponents/CardSwiperComponent"
import CardsComponent from "./CardsComponent"

const ProductComponent = () => {
    const banner = [{ img: 'https://images-static.nykaa.com/uploads/3e8dfec3-16c2-4a71-a192-3ac1ff280a1b.jpg?tr=cm-pad_resize,w-1200' }, { img: 'https://images-static.nykaa.com/uploads/62a81c00-c6e2-4a3d-9b4a-4eb310ba07d7.jpg?tr=cm-pad_resize,w-1200' }, { img: 'https://images-static.nykaa.com/uploads/d5ecd2d7-3d45-49fd-bc6d-ec61c0bd564d.jpg?tr=cm-pad_resize,w-1200' }, { img: 'https://images-static.nykaa.com/uploads/cf23df7f-7651-480f-9547-e98f5cd707b6.jpg?tr=cm-pad_resize,w-1200' }]

    const smallImages = [{img:'https://images-static.nykaa.com/uploads/724e8061-3ca8-4065-b8f4-a39c4b266683.png?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/4f65cd27-0d5b-41b4-8a21-0fed25c49c5a.png?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/5bfb0f5a-3fa1-4a4b-83a4-398b368a82ba.png?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/3b224757-e82b-4271-8b62-46f829fb27ab.png?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/b7ebf552-cc12-4a54-a8db-fadae489bcb7.png?tr=cm-pad_resize,w-150'}]

    const smallImagesTwo = [{img:'https://images-static.nykaa.com/uploads/d83edcb5-d8aa-4149-8458-3e450048c08e.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/853f46eb-78c4-4c4c-9331-a942a595998e.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/435935cb-0005-4172-aba3-308d87e28729.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/f8add4b6-47e0-4d76-8d86-457436b36852.jpg?tr=cm-pad_resize,w-150'}, {img:'https://images-static.nykaa.com/uploads/3bdf6f88-a721-4874-9313-02999a416bd7.jpg?tr=cm-pad_resize,w-150'}]

    const cardsImages = [{img:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/a/0ad53ee29837_N-8901030701917.jpg'}, {img:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/4/946f6cbMAYBE00000025ab_1.jpg'}, {img:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/b/6bab12fELFCO00000600_01.jpg'}, {img:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/9/a98dc59607710004733_1.jpg'}, {img:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/4/946f6cbNYINSGHT00036ab_1.jpg'}, {img:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/4/946f6cbKAYBE00000196ab_1.jpg'}, {img:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/5/f507df0800897129965_1.jpg'}, {img:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/8/18e24b08904245706623_1.jpg'}, {img:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/4/946f6cbNYINSGHT00036ab_1.jpg'}, {img:'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/0/a015d9f773602368778ab_0.jpg'}, ]

    return (
        <ScrollView>
            <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
                <View style={{ height: 80,  }}>
                    <Swiper
                        dot={<View style={styles.dot} />}
                        activeDot={<View style={styles.activeDot} />}
                        paginationStyle={styles.pagination}
                        autoplay={true} autoplayTimeout={3}>
                        {banner.map((item, index) => (
                            <Image key={index} style={{ width: '100%', height: 80 }} source={{ uri: item.img }} />
                        ))}
                    </Swiper>
                </View>
                <SmallImagesSwiperComponents dataOne={smallImages} dataTwo={smallImagesTwo} />
                <CardsComponent data={cardsImages} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: '#E80071',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    pagination: {
        bottom: -20,
    },
});

export default ProductComponent
