
import Imports from "../Imports";

const ShopComponent = () => {
    const naviagtion = Imports.useNavigation();
    const namesData = [{ n: 'Categories' }, { n: 'Brands' }, { n: 'Luxe' }, { n: 'Bestsellers' }, { n: 'New Launches' }]

    return (
        <>
            <Imports.View style={styles.container}>
                <Imports.View>
                    <Imports.Text style={styles.text}>Shop</Imports.Text>
                </Imports.View>
                <Imports.View>
                    {namesData.map((item, index) => (
                        
                            <Imports.TouchableOpacity style={styles.innerView} key={index} onPress={() => naviagtion.navigate('Category') }>
                                <Imports.View><Imports.Text style={styles.innerText}>{item.n}</Imports.Text></Imports.View>
                                <Imports.View style={styles.imageView}>
                                    <Imports.Image style={{ width: 40, height: 40, borderRadius: 50 }} source={{ uri: 'https://images-static.nykaa.com/uploads/7457b3d9-2577-462f-930b-89be8aa86ecf.jpg?tr=cm-pad_resize,w-150' }} />
                                    <Imports.Image style={{ width: 40, height: 40, borderRadius: 50 }} source={{ uri: 'https://images-static.nykaa.com/uploads/ffbb67d3-55a0-4d7a-bc79-5b0716a3aff7.jpg?tr=cm-pad_resize,w-150' }} />
                                    <Imports.Image style={{ width: 40, height: 40, borderRadius: 50 }} source={{ uri: 'https://images-static.nykaa.com/uploads/61478d13-8516-4857-9010-e6c03e5a29e5.jpg?tr=cm-pad_resize,w-150' }} />
                                </Imports.View>
                            </Imports.TouchableOpacity>
                    ))}


                </Imports.View>
            </Imports.View>
        </>
    )
}

export default ShopComponent;

const styles = Imports.StyleSheet.create({
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