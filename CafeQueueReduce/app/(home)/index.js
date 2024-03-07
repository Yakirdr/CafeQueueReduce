import { ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from "../../Components/Carousal";
import Categories from '../../Components/categories'

const index = () => {
  return (
    <View style={{flex:1}}>
    <ScrollView>
      <Text>home screen please done!</Text>
      <Categories/>
       <Carousel/>
     </ScrollView>
    </View>
  )
}

export default index

/*const styles = StyleSheet.create({})*/