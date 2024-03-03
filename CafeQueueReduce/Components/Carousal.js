import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox }from "react-native-image-slider-box"
const Carousal = () => {
  const images =["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.calcalist.co.il%2Fsport_news%2Farticle%2Fhknc1gp00i&psig=AOvVaw3IZ8CNyCSTjTdjl_5ToIhl&ust=1709555422994000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiW9r-M2IQDFQAAAAAdAAAAABAD",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pizohaizion.co.il%2Fproduct%2F%25D7%25A7%25D7%2595%25D7%25A7%25D7%2594-%25D7%25A7%25D7%2595%25D7%259C%25D7%2594-1-5-%25D7%259C%25D7%2599%25D7%2598%25D7%25A8%2F&psig=AOvVaw3v1Wex1mFav_VWwmjE76XH&ust=1709556981350000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIDo4ZeS2IQDFQAAAAAdAAAAABAI"];
  return (
    <View>
      <SliderBox
      images={images}
      autoPlay 
      circleLoop 
      dotColor = "#13274F" 
      inactiveDotColor = "#90A4AE" 
      ImageComponentStyle={styles.imagecomp}
      />
    
    </View>
  )
}

export default Carousal

const styles = StyleSheet.create({
  imagecomp:{
    borderRadius:6,
    width: "94%",
    margingTop:10,
    }
})