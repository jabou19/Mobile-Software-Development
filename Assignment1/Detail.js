import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function DetailsScreen({ route }) {

  const [data, setData] = useState({});

  const { movieId } = route.params;
  useEffect(() => {
    getDetails();
  }, []);

  function getDetails() {
    //https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=3948d77682e5858510c087b43a9399c6&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,
        }}
      />
      <Text style={styles.title}>{data.original_title}</Text>
      <Text style={styles.text}>{data.overview}</Text>
      <Text style={styles.text} >Popularity: <Text style={styles.textcolor}>{data.popularity}</Text> </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 35,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {

    width: "100%",
    height: "300px",
    resizeMode: 'contain',
    alignSelf: 'center',

  },
  textcolor:{
    color:"red",
  },
});
