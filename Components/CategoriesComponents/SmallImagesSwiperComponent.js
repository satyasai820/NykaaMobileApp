
import Imports from "../Imports";

const SmallImagesSwiperComponents = ({dataOne , dataTwo}) => {
    return(
        <Imports.View style={styles.container}>
            <Imports.View >
                <Imports.Text style={{fontSize:16, fontWeight:'bold'}}>Shop By Skin Type</Imports.Text>
                <Imports.FlatList data={dataOne} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({item}) => (
                    <Imports.View>
                        <Imports.Image style={{width:100, height:80, margin:5, borderRadius:10}} source={{uri:item.img2}} />
                    </Imports.View>
                )} kkeyExtractor={(item, index) => index.toString()} />
            </Imports.View>
            <Imports.View style={{marginVertical:20}} >
                <Imports.Text style={{fontSize:16, fontWeight:'bold',}}>Shop By Benefit</Imports.Text>
                <Imports.FlatList data={dataTwo} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({item}) => (
                    <Imports.View>
                        <Imports.Image style={{width:100, height:80, margin:5, borderRadius:10}} source={{uri:item.img}} />
                    </Imports.View>
                )} kkeyExtractor={(item, index) => index.toString()} />
            </Imports.View>
        </Imports.View>
    )
}

export default SmallImagesSwiperComponents;

const styles = Imports.StyleSheet.create({
    container : {
        marginHorizontal:20,
        marginTop:30
    }
})