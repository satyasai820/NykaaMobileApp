import React, { memo } from "react";
import Imports from "../Imports";

const HomeStellerSwiperComponent = memo(() => {

    const cardsData = [{ img: 'https://images-static.nykaa.com/creatives/8a58ec3c-c959-4e07-bb7f-be543e052865/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/54a377a3-0ece-490c-8fc6-f8d7eb7c9e0c/default.png?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/731777d1-6db8-4859-8bcb-aacd64922751/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/8aa978d3-e94c-4e9d-9410-9b86f6ed725a/default.jpg?tr=cm-pad_resize,w-450' }]

    return (
        <>
            <Imports.View style={styles.container}>
                <Imports.View>
                    <Imports.Text style={styles.textOne}>Stellar Selections</Imports.Text>
                    <Imports.Text style={styles.textTwo}>Brands you absolutely can't miss</Imports.Text>
                </Imports.View>
                <Imports.View style={styles.innerView}>
                    {cardsData.map((item, index) => (
                        <Imports.View style={{ margin: 5, width:'47%' }} key={index}>
                            <Imports.View>
                                <Imports.Image source={{ uri: item.img }} style={styles.imageStyle} />
                                <Imports.Text style={styles.innerTextOne}>Flat Rs 399</Imports.Text>
                                <Imports.Text style={{ color: 'grey' }}>On All Body Mists!</Imports.Text>
                            </Imports.View>
                        </Imports.View>
                    ))}
                </Imports.View>
            </Imports.View>
        </>
    )
});

export default HomeStellerSwiperComponent;

const screenWidth = Imports.Dimensions.get('window').width;

const styles = Imports.StyleSheet.create({
    container: {
        padding: 10,
    },
    textOne: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textTwo: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 10
    },
    innerView: {
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    imageStyle: {
        width: screenWidth < 380 ? 160 : screenWidth <= 420 ? 180 : 190,
        height: screenWidth < 380 ? 220 : screenWidth <= 420 ? 260 : 270,
        borderRadius: 10
    },
    innerTextOne: {
        fontWeight: 'bold',
        fontSize: 18
    }
})