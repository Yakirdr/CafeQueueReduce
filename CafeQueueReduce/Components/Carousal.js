import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import ImageSlider from "react-native-image-slider-box"

function Carousal() {
  const images = [
    require('../../CafeQueueReduce/assets/arabsalad.jpg'),
    require('../../CafeQueueReduce/assets/schnitzelbaget.jpg'),
    require('../../CafeQueueReduce/assets/water.jpg'),
    require('../../CafeQueueReduce/assets/SALADS.jpg'),
    require('../../CafeQueueReduce/assets/ricechicken.jpg'),
    require('../../CafeQueueReduce/assets/prigatanavim.jpg'),
    require('../../CafeQueueReduce/assets/potatoborekas.jpg'),
    require('../../CafeQueueReduce/assets/ziva.jpg'),
    require('../../CafeQueueReduce/assets/pastasalad.jpg'),
    require('../../CafeQueueReduce/assets/hafoh.jpg'),
    require('../../CafeQueueReduce/assets/espreso.jpg'),
    require('../../CafeQueueReduce/assets/espresoshort.jpg'),
    require('../../CafeQueueReduce/assets/DRINKS.jpg'),
    require('../../CafeQueueReduce/assets/croissantchocolate.jpg'),
    require('../../CafeQueueReduce/assets/borekasgvina.jpg'),
    require('../../CafeQueueReduce/assets/soda.jpg'),
    require('../../CafeQueueReduce/assets/zero.jpg'),
    require('../../CafeQueueReduce/assets/kola.jpg'),
    ];
   return (
    <View>
       {images.map((image, index) => (
        <Image key={0} source={image} style={styles.image} />
      ))}
      <ImageSlider
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={styles.imagecomp} />
      <Text>Carousal</Text>
    </View>
  );
}

export default Carousal

const styles = StyleSheet.create({
  imagecomp:{
    borderRadius:6,
    width: "94%",
    marginTop:10,
  }
})