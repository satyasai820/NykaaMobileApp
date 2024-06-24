
import { useState } from "react";
import Imports from "../Imports";

const MakeUpComponent = () => {

    const navigation = Imports.useNavigation();

    const data = [{ n: 'Eyes' }, { n: 'Lips' }, { n: 'Nails' }, { n: 'Tools & Brushes' }, { n: 'Mulyi-Functional Makeup' }, { n: 'Makeuo Kits & Combos' }]

    const faceData = [{ n: 'Compact' }, { n: 'Contour' }, { n: 'Losse Powder' }, { n: 'Blush' }, { n: 'BB & CC Cream' }, { n: 'Highlighters' }, { n: 'Setting Spray' }, { n: 'Sindoor' },]

    const [showDropdown, setShowDropdown] = useState(false);
    const [showStaticDropdown , setShowStaticDropdown] = useState('');

    const handleDropDownToggle = () => {
        setShowDropdown(!showDropdown);
    }

    const handleStaticDropDown = (index) => {
        setShowStaticDropdown(index);
    }

    return (
        <Imports.ScrollView>
            <Imports.View style={styles.container}>
                <Imports.View>
                    <Imports.Text style={styles.text}>MakeUp</Imports.Text>
                </Imports.View>
                <Imports.View style={styles.innerContainer}>
                    <Imports.Text>Complete Makeup Collection</Imports.Text>
                    <Imports.Entypo size={18} name="chevron-down" style={{ marginLeft: 'auto' }} />
                </Imports.View>
                <Imports.TouchableOpacity style={styles.dropDowmContainer} onPress={handleDropDownToggle} >
                    <Imports.Text style={[styles.dropDowmText, { color: showDropdown ? '#E80071' : 'orange' }]}>Face</Imports.Text>
                    <Imports.Entypo size={18} name={showDropdown ? 'chevron-up' : 'chevron-down'} style={{ marginLeft: 'auto', color: showDropdown ? '#E80071' : 'orange', }} />
                </Imports.TouchableOpacity>
                <Imports.View>
                    {showDropdown ? (
                        <>
                            <Imports.TouchableOpacity style={{ marginVertical: 12 }} onPress={() => navigation.navigate('Product',{id : 'faceprimer'})}>
                                <Imports.Text style={{ fontSize: 16, color:'orange' }}>Face Primer</Imports.Text>
                            </Imports.TouchableOpacity>
                            <Imports.TouchableOpacity style={{ marginVertical: 12 }} onPress={() => navigation.navigate('Product',{id : 'concealer'})}>
                                <Imports.Text style={{ fontSize: 16, color:'orange' }}>Concealer</Imports.Text>
                            </Imports.TouchableOpacity>
                            <Imports.TouchableOpacity style={{ marginVertical: 12 }} onPress={() => navigation.navigate('Product',{id : 'foundation'})}>
                                <Imports.Text style={{ fontSize: 16, color:'orange' }}>Foundation</Imports.Text>
                            </Imports.TouchableOpacity>
                            {faceData.map((item, index) => (
                                <Imports.View style={{ marginVertical: 12 }} key={index}>
                                    <Imports.Text style={{ fontSize: 16 }}>{item.n}</Imports.Text>
                                </Imports.View>
                            ))}
                        </>
                    ) : ('')}
                </Imports.View>
                {data.map((item, index) => (
                    <Imports.TouchableOpacity style={styles.dropDowmContainer} key={index} onPress={() => handleStaticDropDown(index)}>
                        <Imports.Text style={styles.dropDowmText}>{item.n}</Imports.Text>
                        <Imports.Entypo size={18} name="chevron-down" style={{ marginLeft: 'auto' }} />
                    </Imports.TouchableOpacity>
                ))}
                </Imports.View>
        </Imports.ScrollView>
    )
}

export default MakeUpComponent;

const styles = Imports.StyleSheet.create({
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