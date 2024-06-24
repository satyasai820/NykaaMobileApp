
import SwiperFlatListComponent from "../SwiperComponent";
import Imports from "../Imports";

const HomeWatchAndShopSwiperComponent = () => {
    const SwiperData = [{ img: 'https://images-static.nykaa.com/uploads/3b029ea1-c467-48c3-a9d6-46eddf78f234.jpg?tr=cm-pad_resize,w-600' }, { img: 'https://images-static.nykaa.com/uploads/be4c6dcc-5474-4919-be2e-ea215e33b308.jpg?tr=cm-pad_resize,w-600' }, { img: 'https://images-static.nykaa.com/uploads/fef1433c-a149-4283-ad20-e1fe10870625.jpg?tr=cm-pad_resize,w-600' }, { img: 'https://images-static.nykaa.com/uploads/92a04fe7-e06d-458c-ba1e-031319a1679a.jpg?tr=cm-pad_resize,w-600' }, { img: 'https://images-static.nykaa.com/uploads/0d255a03-ae1f-405f-913f-97d79745cac4.jpg?tr=cm-pad_resize,w-600' }]
    return (
        <>
            <Imports.View style={styles.container}>
                <Imports.View>
                    <Imports.Text style={styles.textOne}>Swatch, Watch & Shop</Imports.Text>
                    <Imports.Text style={styles.textTwo}>See, love and make these beauties yours!</Imports.Text>
                </Imports.View>
                <Imports.View>
                    <SwiperFlatListComponent data={SwiperData} styled={styles.swiperImages} />
                </Imports.View>
            </Imports.View>
        </>
    )
}

export default HomeWatchAndShopSwiperComponent;

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
    swiperImages: {
        width: 300,
        height: 200,
        margin: 5,
        borderRadius: 10
    }
})