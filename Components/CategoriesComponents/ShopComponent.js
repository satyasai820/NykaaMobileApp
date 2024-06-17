import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const ShopComponent = () => {
    const naviagtion = useNavigation();
    const namesData = [{ n: 'Categories' }, { n: 'Brands' }, { n: 'Luxe' }, { n: 'Bestsellers' }, { n: 'New Launches' }]

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Shop</Text>
                </View>
                <View>
                    {namesData.map((item, index) => (
                        
                            <TouchableOpacity style={styles.innerView} key={index} onPress={() => naviagtion.navigate('Category') }>
                                <View><Text style={styles.innerText}>{item.n}</Text></View>
                                <View style={styles.imageView}>
                                    <Image style={{ width: 40, height: 40, borderRadius: 50 }} source={{ uri: 'https://images-static.nykaa.com/uploads/7457b3d9-2577-462f-930b-89be8aa86ecf.jpg?tr=cm-pad_resize,w-150' }} />
                                    <Image style={{ width: 40, height: 40, borderRadius: 50 }} source={{ uri: 'https://images-static.nykaa.com/uploads/ffbb67d3-55a0-4d7a-bc79-5b0716a3aff7.jpg?tr=cm-pad_resize,w-150' }} />
                                    <Image style={{ width: 40, height: 40, borderRadius: 50 }} source={{ uri: 'https://images-static.nykaa.com/uploads/61478d13-8516-4857-9010-e6c03e5a29e5.jpg?tr=cm-pad_resize,w-150' }} />
                                </View>
                            </TouchableOpacity>
                    ))}


                </View>
            </View>
        </>
    )
}

export default ShopComponent;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    innerView: {
        flexDirection: 'row',
        backgroundColor: '#F3B8CD',
        marginTop: 10,
        paddingVertical: 25,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    innerText: {
        fontSize: 25,
    },
    imageView: {
        marginLeft: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

})