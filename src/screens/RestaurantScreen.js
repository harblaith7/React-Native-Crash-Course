import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import yelp from "../api/yelp";

function RestaurantScreen({ navigation }) {
  const id = navigation.getParam("id");
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;

  const fetchRestaurant = async () => {
    setResults({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await yelp.get(`/${id}`);

      setResults({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: "something went wrong",
      });
    }
  };

  if (results.loading)
    return (
      <View>
        <Text>Inside loading</Text>
      </View>
    );

  if (results.error)
    return (
      <View>
        <Text>Inside error</Text>
      </View>
    );

  return (
    <View>
      {results.data && (
        <FlatList
          data={results.data.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            console.log({ item });
            return (
              <Image
                style={{ height: imageHeight, width: imageWidth }}
                source={{ uri: item }}
              />
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default RestaurantScreen;
