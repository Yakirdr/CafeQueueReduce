import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";
import React from 'react'

const main = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
  return (
    <View>
      <Text>main</Text>
    </View>
  )
}

export default main

const styles = StyleSheet.create({})