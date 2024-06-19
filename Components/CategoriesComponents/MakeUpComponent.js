import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const MakeUpComponent = () => {

    const navigation = useNavigation();

    const data = [{ n: 'Eyes' }, { n: 'Lips' }, { n: 'Nails' }, { n: 'Tools & Brushes' }, { n: 'Mulyi-Functional Makeup' }, { n: 'Makeuo Kits & Combos' }]

    const faceData = [{ n: 'Compact' }, { n: 'Contour' }, { n: 'Losse Powder' }, { n: 'Blush' }, { n: 'BB & CC Cream' }, { n: 'Highlighters' }, { n: 'Setting Spray' }, { n: 'Sindoor' },]

    const eyesData = [{n:'Kajal'},{n:'Eyeliner'},{n:'Mascara'},{n:'Eye Shadow'},{n:'Eye Brow Enhancers'},{n:'Eye Primer'},{n:'false Eyelashes'},{n:'Eye Makeup Remover'},{n:'Under Eye Concler'},{n:'Contact Lenses'},]

    const [showDropdown, setShowDropdown] = useState(false);
    const [showStaticDropdown , setShowStaticDropdown] = useState('');

    const handleDropDownToggle = () => {
        setShowDropdown(!showDropdown);
    }

    const handleStaticDropDown = (index) => {
        setShowStaticDropdown(index);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>MakeUp</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>Complete Makeup Collection</Text>
                    <Entypo size={18} name="chevron-down" style={{ marginLeft: 'auto' }} />
                </View>
                <TouchableOpacity style={styles.dropDowmContainer} onPress={handleDropDownToggle} >
                    <Text style={[styles.dropDowmText, { color: showDropdown ? '#E80071' : 'orange' }]}>Face</Text>
                    <Entypo size={18} name={showDropdown ? 'chevron-up' : 'chevron-down'} style={{ marginLeft: 'auto', color: showDropdown ? '#E80071' : 'orange', }} />
                </TouchableOpacity>
                <View>
                    {showDropdown ? (
                        <>
                            <TouchableOpacity style={{ marginVertical: 12 }} onPress={() => navigation.navigate('Product',{id : 'faceprimer'})}>
                                <Text style={{ fontSize: 16, color:'orange' }}>Face Primer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginVertical: 12 }} onPress={() => navigation.navigate('Product',{id : 'concealer'})}>
                                <Text style={{ fontSize: 16, color:'orange' }}>Concealer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginVertical: 12 }} onPress={() => navigation.navigate('Product',{id : 'foundation'})}>
                                <Text style={{ fontSize: 16, color:'orange' }}>Foundation</Text>
                            </TouchableOpacity>
                            {faceData.map((item, index) => (
                                <View style={{ marginVertical: 12 }} key={index}>
                                    <Text style={{ fontSize: 16 }}>{item.n}</Text>
                                </View>
                            ))}
                        </>
                    ) : ('')}
                </View>
                {data.map((item, index) => (
                    <TouchableOpacity style={styles.dropDowmContainer} key={index} onPress={() => handleStaticDropDown(index)}>
                        <Text style={styles.dropDowmText}>{item.n}</Text>
                        <Entypo size={18} name="chevron-down" style={{ marginLeft: 'auto' }} />
                    </TouchableOpacity>
                ))}
                </View>
        </ScrollView>
    )
}

export default MakeUpComponent;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    innerContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    dropDowmContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 15
    },
    dropDowmText: {
        fontSize: 18,
    },
})