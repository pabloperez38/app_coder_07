import * as Location from "expo-location";

import { Alert, Button, Image, Text, View } from "react-native";
import React, { useState } from "react";

import colors from "../../utils/colors";
import { styles } from "./styles";

const LocationSelector = ({ onLocationPicker }) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesitas dar parmisos para obtener la ubicación",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const onHandleGetLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });

    onLocationPicker({ lat: latitude, lng: longitude });
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedLocation ? (
          <Text style={styles.title}>No hay ubicación seleccionada</Text>
        ) : (
          //<Image style={styles.image} />
          <Text>{`latitud: ${pickedLocation.lat}, longitud: ${pickedLocation.lng}`}</Text>
        )}
      </View>
      <Button
        title="Obtener ubicación"
        color={colors.primary}
        onPress={onHandleGetLocation}
      />
    </View>
  );
};

export default LocationSelector;
