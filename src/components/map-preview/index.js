import { Image, View } from "react-native";

import React from "react";
import { URL_MAP } from "../../constants/maps";
import { styles } from "./styles";

const MapPreview = ({ children, location, style }) => {
  const { lat, lng } = location || {};
  const mapPreviewUrl = location ? URL_MAP(lat, lng) : null;
  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? (
        <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
      ) : (
        children
      )}
    </View>
  );
};

export default MapPreview;
