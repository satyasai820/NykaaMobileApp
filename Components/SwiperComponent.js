import React, { memo } from "react";
import Imports from "./Imports";

const SwiperFlatListComponent = memo(({ data, styled }) => {
  const renderItem = ({ item }) => (
    <Imports.View>
      <Imports.Image source={{ uri: item.img }} style={styled} />
    </Imports.View>
  );

  return (
    <Imports.View>
      <Imports.FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Imports.View>
  );
});



export default memo(SwiperFlatListComponent);


