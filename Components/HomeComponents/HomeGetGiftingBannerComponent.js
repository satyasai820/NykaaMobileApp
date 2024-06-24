
import SwiperFlatListComponentTwo from "../SwiperComponentTwo";
import Imports from "../Imports";

const HomeGetGiftingBannerComponent = () => {
    const bannerData = [{img:'https://images-static.nykaa.com/uploads/a92dac26-400d-4158-af51-a7d247658835.jpg?tr=cm-pad_resize,w-600'},{img:'https://images-static.nykaa.com/uploads/97a082e3-76ba-4671-8a10-97c867ff5b2f.jpg?tr=cm-pad_resize,w-600'}]
    return (
        <>
            <Imports.View style={styles.container}>
                <Imports.View>
                    <Imports.View>
                        <Imports.Text style={styles.textOne}>Get Gifting</Imports.Text>
                        <Imports.Text style={styles.textTwo}>Pamper, Delight & Spoil Your Loved Ones</Imports.Text>
                    </Imports.View>
                    <Imports.View>
                        <SwiperFlatListComponentTwo data={bannerData} styled={styles.swiperImages} />
                    </Imports.View>
                </Imports.View>
            </Imports.View>
        </>
    )
}

export default HomeGetGiftingBannerComponent;

const styles = Imports.StyleSheet.create({
    container: {
        padding: 10
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

    swiperImages : {
        width:260,
        height:40,
        marginHorizontal:5,
        borderRadius:10
    }

})