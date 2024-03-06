import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
/*ofek*/
function Carousal() {
  return (
    <View>
      <ImageSlider
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={styles.imagecomp} />
     
    </View>
  );
}

export default Carousal

const styles = StyleSheet.create({
  imagecomp:{
    borderRadius:6,
    width: "94%",
    margingTop:10,
    }
})