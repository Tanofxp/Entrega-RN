import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";

import { MapPreview } from "../../components/index";
import { styles } from "./styles";

const PlaceDetail = ({ navigation, route }) => {

  const { placeId } = route.params || {};
  const place = useSelector((state) => state.place.places.find((place) => place.id === placeId));


  return (
    <ScrollView style={styles.container}>
      {placeId !== undefined? <>
      <Text style={styles.title}>{place.title}</Text>
      <Image source={{ uri: place.image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview style={styles.map} location={{ lat: place.coords.lat, lng: place.coords.lng }}>
          <Text style={styles.notFound}>Location not available</Text>
        </MapPreview>
      </View>
      </>:<View style={styles.container}><Text style={styles.notFound}>Por favor elija el Pet Shop mas cercano a su Ubicacion!</Text></View>}
    </ScrollView>
  );
};

export default PlaceDetail;