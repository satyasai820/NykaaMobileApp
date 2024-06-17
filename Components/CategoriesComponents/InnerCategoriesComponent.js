import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

const InnerCategoriesComponent = () => {
    const naviagtion = useNavigation();
    const namesData = [{n:'Makeup', img:'https://images-static.nykaa.com/uploads/5dc59217-9f94-4c16-bf76-a6f6321bc88d.jpg?tr=cm-pad_resize,w-150'}, {n:'Skin', img:'https://images-static.nykaa.com/uploads/a8e1c57a-cfcd-456b-b91f-d27b63a5f3f6.jpg?tr=cm-pad_resize,w-150'}, {n:'Hari', img:'https://images-static.nykaa.com/uploads/25b16fa2-0ce6-45e4-baea-27cdac40acec.jpg?tr=cm-pad_resize,w-150'}, {n:'Bath & Body', img:'https://images-static.nykaa.com/uploads/3395dee7-5fd7-4aee-bdbd-f51c285f6589.jpg?tr=cm-pad_resize,w-150'}, {n:'Fragrances', img:'https://images-static.nykaa.com/uploads/dfe76032-ecb7-4de5-8d99-c9b12b70bdb6.jpg?tr=cm-pad_resize,w-150'}, {n:'Appliances', img:'https://images-static.nykaa.com/uploads/1d26a50a-3281-4698-a4e3-8be11fb964b5.jpg?tr=cm-pad_resize,w-150'}, {n:'Nykaa Luxe', img:'https://images-static.nykaa.com/uploads/f6566894-6dfc-4793-a080-9e383c8c39d6.jpg?tr=cm-pad_resize,w-150'}, {n:'Health', img:'https://images-static.nykaa.com/uploads/6fcc6e0f-8afd-4381-a40c-5e50adfd2d9f.jpg?tr=cm-pad_resize,w-150'}, {n:'Natural', img:'https://images-static.nykaa.com/uploads/b27e73c7-8f40-4471-956e-dc2c9567b140.jpg?tr=cm-pad_resize,w-150'}, {n:'Men`s Grooming', img:'https://images-static.nykaa.com/uploads/ca564d74-c54b-4778-ac39-5f1f1c4cee01.jpg?tr=cm-pad_resize,w-150'}, {n:'Mom & Baby', img:'https://images-static.nykaa.com/uploads/b2af18bb-09c8-419a-8b8d-4cee5d30df3c.jpg?tr=cm-pad_resize,w-150'}, {n:'Lingerie & Accessories', img:'https://images-static.nykaa.com/uploads/50cd75a6-f06a-4e20-9fb7-d37a0c218354.jpg?tr=cm-pad_resize,w-150'}, ]
    return(
        <>
        <ScrollView>
         <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Categories</Text>
                </View>
                <View>
                    {namesData.map((item, index) => (
                        
                            <TouchableOpacity style={styles.innerView} key={index} 
                            onPress={() => naviagtion.navigate('Makeup')

                             }>
                                <View><Text style={styles.innerText}>{item.n}</Text></View>
                                <View style={styles.imageView}>
                                    <Image style={{ width: 40, height: 40, borderRadius: 50 }} source={{ uri: item.img }} />
                                </View>
                            </TouchableOpacity>
                    ))}


                </View>
            </View>
            </ScrollView>
        </>
    )
}

export default InnerCategoriesComponent;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        marginBottom:20
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    innerView: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F3B8CD',
        marginTop: 10,
        paddingVertical: 28,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    innerText: {
        fontSize: 22,
    },
    imageView: {
        marginLeft: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:35
    }

})