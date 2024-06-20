import React, { memo } from "react";
import { View, FlatList, Image } from "react-native";

const SwiperFlatListComponent = memo(({ data, styled }) => {
  const renderItem = ({ item }) => (
    <View>
      <Image source={{ uri: item.img }} style={styled} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
});



export default memo(SwiperFlatListComponent);


