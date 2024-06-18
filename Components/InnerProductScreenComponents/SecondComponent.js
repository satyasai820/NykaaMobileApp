import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
const SecondComponent = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#ffffff' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Check delivery date</Text>
                <Text style={{ color: '#E80071', padding: 5, borderColor: '#ccc', borderWidth: 1, marginLeft: 'auto', borderRadius: 10, fontSize: 12, fontWeight: 'bold' }}>Enter pincode</Text>
            </View>
            <View style={{ backgroundColor: '#FFFFFF', padding: 20, marginVertical: 20 }}>
                <Text style={{ fontSize: 16, marginVertical: 5 }}>Highlights</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '50%', borderRightColor: '#ccc', borderRightWidth: 1, paddingVertical: 15 }}>
                        <Text style={{ fontSize: 15, color: 'grey', fontWeight: 'bold', marginVertical: 3 }}>Concern</Text>
                        <Text style={{ fontSize: 12 }}>uneven Skin Tone</Text>
                    </View>
                    <View style={{ width: '50%', paddingLeft: 20, paddingVertical: 15 }}>
                        <Text style={{ fontSize: 15, color: 'grey', fontWeight: 'bold', marginVertical: 3 }}>Formulation</Text>
                        <Text style={{ fontSize: 12 }}>Gel</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Product Details</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.innerText}>Description</Text>
                    <Text style={styles.innerTextTwo}>Ingredients</Text>
                    <Text style={styles.innerTextTwo}>How to use</Text>
                </View>
                <View style={styles.thirdContainer}>
                    
                    <View style={{height: showMore ? 'auto' : 200, overflow:'hidden'}}>
                    <View>
                        <Image style={styles.images} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_01.jpg' }} />
                        <Image style={styles.imagesTwo} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_02.jpg' }} />
                        <Image style={styles.imagesTwo} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_03.jpg' }} />
                        <Image style={styles.imagesTwo} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_04.jpg' }} />
                        <Image style={styles.imagesTwo} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_05.jpg' }} />
                        <Image style={styles.imagesThree} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_06.jpg' }} />
                    </View>
                    </View>
                </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleShowMore}>
                        <View style={styles.buttonInnerContainer}>
                            <Text style={styles.buttonText}>{showMore ? 'Read Less' : 'Read More'}</Text>
                            <Ionicons style={styles.icon} size={16} name={!showMore ? 'chevron-forward-outline' : 'chevron-up-outline'} />
                        </View>
                    </TouchableOpacity>
            </View>
        </>
    )
}

export default SecondComponent;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    innerContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    innerText: {
        fontSize: 16,
        color: '#E80071',
        borderBottomColor: '#E80071',
        borderBottomWidth: 2,
        paddingVertical: 10,
        marginRight: 20
    },
    innerTextTwo: {
        fontSize: 16,
        paddingVertical: 10,
        marginRight: 20
    },
    thirdContainer: {
        paddingHorizontal: 20,
        paddingTop:20,
    },
    images: {
        width: '100%',
        height: 280
    },
    imagesTwo: {
        width: '100%',
        height: 395
    },
    imagesThree: {
        width: '100%',
        height: 220
    },
    buttonContainer: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
        backgroundColor:'#FFFFFF'
    },
    buttonInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:5
    },
    buttonText: {
        fontSize: 15,
        color: '#E80071',
        fontWeight: 'bold'
    },
    icon: {
        color: '#E80071',
        marginLeft:2
    }
})