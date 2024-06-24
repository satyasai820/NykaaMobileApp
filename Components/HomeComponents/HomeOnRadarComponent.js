import React, { memo } from "react";
import Imports from "../Imports";

const HomeOnRadarComponent = memo(() => {

   
    const cardsData = [{ img: 'https://images-static.nykaa.com/creatives/c0d1186b-5e74-464b-9c36-c5439dcf82d9/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/4d567adf-dfd2-41c0-915f-b97825fc0ed1/default.png?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/8dfbc23b-04ae-42b8-81f2-8d148a547f21/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/f6eebe78-31fb-468f-95f1-2567a173d969/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/b7e84666-8e82-4578-abe8-c260e8bfe05a/default.jpg?tr=cm-pad_resize,w-450' }, { img: 'https://images-static.nykaa.com/creatives/09eb7ff5-a8fc-48dd-8b6e-1ea00a6992ce/default.jpg?tr=cm-pad_resize,w-450' }]

    return (
        <>
            <Imports.View style={styles.container}>
                <Imports.View>
                    <Imports.Text style={styles.textOne}>On Our Radar</Imports.Text>
                    <Imports.Text style={styles.textTwo}>Best-in-show brands</Imports.Text>
                </Imports.View>
                <Imports.View style={styles.innerView}>
                    {cardsData.map((item, index) => (
                        <Imports.View style={{margin:5, }} key={index}>
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
})

export default HomeOnRadarComponent;

const screenWidth = Imports.Dimensions.get('window').width

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
        width: screenWidth < 380 ? 150 : screenWidth <= 420 ? 170 : 190,
        height: screenWidth < 380 ? 220 : 270,
        borderRadius: 10
    },
    innerTextOne: {
        fontWeight: 'bold',
        fontSize: 18
    }
})