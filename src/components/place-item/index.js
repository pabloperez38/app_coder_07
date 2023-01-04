import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const PLaceItem = ({ id, title, image, address, onSelected }) => {
  return (
    <TouchableOpacity onPress={onSelected} style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PLaceItem;
