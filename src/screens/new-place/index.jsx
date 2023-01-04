import { Button, ScrollView, Text, TextInput, View } from "react-native";
import {ImageSelector, LocationSelector} from '../../components/';

import colors from '../../utils/colors';
import { savePlace } from '../../store/place.slice';
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { useState } from "react";

const NewPlace = ({ navigation}) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);

  const dispatch = useDispatch();

  const onHandleSubmit = () => {

    dispatch(savePlace({title, image, coords}));
    navigation.navigate("Places");

  }
  const onHandleChange = (text) => {
    setTitle(text);    
  }
  const onImagePicker = (uri) => {
    setImage(uri);
  }
  const onLocationPicker = (location) =>{
    
    setCoords(location);
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contenido}>        
        <Text style={styles.titulo}>Título</Text>
        <TextInput style={styles.input} placeholder="Ingrese el lugar" onChangeText={onHandleChange} />
        <ImageSelector onImagePicker={onImagePicker} />
        <LocationSelector onLocationPicker={onLocationPicker} />
        <Button color={colors.primary} title="Guardar dirección" onPress={onHandleSubmit}  />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
