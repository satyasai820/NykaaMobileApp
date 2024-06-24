
import { useState } from "react";
import Imports from "../Imports";

const SecondComponent = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    const innerImages =[ {img:'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_01.jpg'}, {img:'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_02.jpg'}, {img:'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_03.jpg'},{img:'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_04.jpg'},{img:'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_05.jpg'},{img:'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_06.jpg'},]

    return (
        <>
            <Imports.View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#ffffff' }}>
                <Imports.Text style={{ fontSize: 16, fontWeight: 'bold' }}>Check delivery date</Imports.Text>
                <Imports.Text style={{ color: '#E80071', padding: 5, borderColor: '#ccc', borderWidth: 1, marginLeft: 'auto', borderRadius: 10, fontSize: 12, fontWeight: 'bold' }}>Enter pincode</Imports.Text>
            </Imports.View>
            <Imports.View style={{ backgroundColor: '#FFFFFF', padding: 20, marginVertical: 20 }}>
                <Imports.Text style={{ fontSize: 16, marginVertical: 5 }}>Highlights</Imports.Text>
                <Imports.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Imports.View style={{ width: '50%', borderRightColor: '#ccc', borderRightWidth: 1, paddingVertical: 15 }}>
                        <Imports.Text style={{ fontSize: 15, color: 'grey', fontWeight: 'bold', marginVertical: 3 }}>Concern</Imports.Text>
                        <Imports.Text style={{ fontSize: 12 }}>uneven Skin Tone</Imports.Text>
                    </Imports.View>
                    <Imports.View style={{ width: '50%', paddingLeft: 20, paddingVertical: 15 }}>
                        <Imports.Text style={{ fontSize: 15, color: 'grey', fontWeight: 'bold', marginVertical: 3 }}>Formulation</Imports.Text>
                        <Imports.Text style={{ fontSize: 12 }}>Gel</Imports.Text>
                    </Imports.View>
                </Imports.View>
            </Imports.View>
            <Imports.View style={styles.container}>
                <Imports.View>
                    <Imports.Text style={styles.title}>Product Details</Imports.Text>
                </Imports.View>
                <Imports.View style={styles.innerContainer}>
                    <Imports.Text style={styles.innerText}>Description</Imports.Text>
                    <Imports.Text style={styles.innerTextTwo}>Ingredients</Imports.Text>
                    <Imports.Text style={styles.innerTextTwo}>How to use</Imports.Text>
                </Imports.View>
                <Imports.View style={styles.thirdContainer}>
                    
                    <Imports.View style={{height: showMore ? 'auto' : 200, overflow:'hidden'}}>
                    <Imports.View>
                        {innerImages.map((item, index) => (
                                 <Imports.Image style={ index === 0 ? styles.images : index === innerImages.length-1 ? styles.imagesThree : styles.imagesTwo} source={{ uri: item.img}} key={index} />
                        ))}
                        {/* <Image style={styles.images} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_01.jpg' }} />
                        <Image style={styles.imagesTwo} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_02.jpg' }} />
                        <Image style={styles.imagesTwo} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_03.jpg' }} />
                        <Image style={styles.imagesTwo} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_04.jpg' }} />
                        <Image style={styles.imagesTwo} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_05.jpg' }} />
                        <Image style={styles.imagesThree} source={{ uri: 'https://adn-static1.nykaa.com/media/wysiwyg/LAKME00001740Assets_06.jpg' }} /> */}
                    </Imports.View>
                    </Imports.View>
                </Imports.View>
                    <Imports.TouchableOpacity style={styles.buttonContainer} onPress={handleShowMore}>
                        <Imports.View style={styles.buttonInnerContainer}>
                            <Imports.Text style={styles.buttonText}>{showMore ? 'Read Less' : 'Read More'}</Imports.Text>
                            <Imports.Ionicons style={styles.icon} size={16} name={!showMore ? 'chevron-forward-outline' : 'chevron-up-outline'} />
                        </Imports.View>
                    </Imports.TouchableOpacity>
            </Imports.View>
        </>
    )
}

export default SecondComponent;

const screenWidth = Imports.Dimensions.get('window').width;

const styles = Imports.StyleSheet.create({
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
        height: screenWidth < 380 ? 220 : 275
    },
    imagesTwo: {
        width: '100%',
        height: screenWidth < 380 ? 320 : screenWidth <= 420 ? 380 : 395
    },
    imagesThree: {
        width: '100%',
        height: screenWidth < 380 ? 180 : 220
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