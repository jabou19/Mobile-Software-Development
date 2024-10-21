import { useEffect, useState } from "react";
import {View, Text, StyleSheet, Image, ActivityIndicator} from "react-native";
import { FlatList } from "react-native";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState([1]);

  useEffect(() => {
    console.log(process.env);
    fetchMovies();
  }, []);
  function fetchMovies() {
    //https://api.themoviedb.org/3/movie/popular?api_key=3948d77682e5858510c087b43a9399c6&language=en-US&page=1
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3948d77682e5858510c087b43a9399c6&language=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }
    const renderLoader = () => {
        return(
            <View style={styles.styleLoader}>
                <ActivityIndicator size="large" color="red"/>
            </View>
        );
    };
    const loadMoreItem = () => {
        setCurrentPage(currentPage+1);

    };

  const renderItems = ({ item }) => {
    return(
        <View style={styles.container}>
            <Image style={styles.itemImagesStyle}  source={{ uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,}}/>
            <Text>The Title is:  <Text style={styles.tetNameStyle}>{item.title}</Text>  and its released date {item.release_date}</Text>
            <Text style={styles.item}>More details about the movie </Text>
            <Item navigation={navigation} Id={item.id} title={item.title} />
        </View>

    );
  }
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                      ListFooterComponent={renderLoader}
                      onEndReached={loadMoreItem}
                />
            </View>
        );

}

const Item = ({ navigation, Id }) => (

  <View style={styles.item}>
    <Text

      onPress={() =>
        navigation.navigate("Details", {
          movieId: Id,
        })
      }
    >
        <Text style={styles.title}>
        Click here
        </Text>
    </Text>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemImagesStyle:{
    width:150,
    height:150,
    marginRight:16,
      alignItems:"center"

  },
    styleLoader:{
        marginVertical:16,
        alignItems:"center"
    },
  item: {
      backgroundColor: "#ffffff",
      padding: 1,
      marginVertical: 1,
      marginHorizontal: 1,
  },
  title: {
    fontSize: 15,
      color:"blue"
  },
    container1: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    tetNameStyle:{
        fontSize:16,
        color:"red"
    },

});
