import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox }from "react-native-image-slider-box"
const Carousal = () => {
  const images =["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.calcalist.co.il%2Fsport_news%2Farticle%2Fhknc1gp00i&psig=AOvVaw3IZ8CNyCSTjTdjl_5ToIhl&ust=1709555422994000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiW9r-M2IQDFQAAAAAdAAAAABAD"];
  return (
    <View>
      <Sliderbox
      images={images}
      autoPlay 
      circleLoop 
      dotColor = "#13274F" 
      inactiveDotColor = "#90A4AE" 
      ImageComponentStyle={styles.imagecomp}
      />
      <Text>Carousal</Text>
    </View>
  )
}

export default Carousal

const styles = StyleSheet.create({})