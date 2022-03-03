import React from "react";
import { FlatList, View } from "react-native";
import ItemCategory from "./ItemCategory";

export default function Categories({ commonCategories, setTerm, term }) {
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={commonCategories}
        keyExtractor={(category) => category.name}
        renderItem={({ item, index }) => (
          <ItemCategory
            category={item}
            index={index}
            active={term === item.name}
            onPressCategoryItem={() => setTerm(item.name)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
