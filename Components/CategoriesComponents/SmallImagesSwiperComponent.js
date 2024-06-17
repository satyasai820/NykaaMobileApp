import { StyleSheet, View, Text, FlatList, Image } from "react-native";

const SmallImagesSwiperComponents = ({dataOne , dataTwo}) => {
    return(
        <View style={styles.container}>
            <View >
                <Text style={{fontSize:16, fontWeight:'bold'}}>Shop By Skin Type</Text>
                <FlatList data={dataOne} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({item}) => (
                    <View>
                        <Image style={{width:100, height:80, margin:5, borderRadius:10}} source={{uri:item.img}} />
                    </View>
                )} kkeyExtractor={(item, index) => index.toString()} />
            </View>
            <View style={{marginVertical:20}} >
                <Text style={{fontSize:16, fontWeight:'bold',}}>Shop By Benefit</Text>
                <FlatList data={dataTwo} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({item}) => (
                    <View>
                        <Image style={{width:100, height:80, margin:5, borderRadius:10}} source={{uri:item.img}} />
                    </View>
                )} kkeyExtractor={(item, index) => index.toString()} />
            </View>
        </View>
    )
}

export default SmallImagesSwiperComponents;

const styles = StyleSheet.create({
    container : {
        marginHorizontal:20,
        marginTop:30
    }
})