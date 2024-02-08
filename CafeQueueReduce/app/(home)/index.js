import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Carousal from '../../Components/Carousal';
import Comp1 from '../../Components/comp1';
import Comp2 from'../../Components/comp2';
import Menu from '../../Components/menu';

const index = () => {
  return (
    <View>
      <Text>home screen</Text>
      <View>
   <Comp1/>
      </View>
      <Comp2/>
      <View>
<Menu/>
      </View>
<Carousal/>

    </View>
  )
}

export default index

const styles = StyleSheet.create({})