import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../../Components/Carousal";
import Categories from "../../components/categories";
const recommended = [
  {
    id: 0,
    name: "המובילים",
    image:
      "https://meatstore.co.il/wp-content/uploads/2020/09/%D7%9B%D7%A0%D7%A4%D7%99%D7%99%D7%9D-%D7%91%D7%A6%D7%99%D7%9C%D7%99-768x614-1.jpg",
    time: "35 - 45",
    type: "",
  },
  {
    id: 0,
    name: "בוכרי",
    image:
      "https://th.bing.com/th/id/R.0395a2e01de5edb59d02e6774e7abe9f?rik=rBnchwcziCvemw&pid=ImgRaw&r=0",
    time: "10 - 35",
    type: "",
  },
  {
    id: 0,
    name: "בוקר טוב",
    image:
      "https://images.rest.co.il/Rests/Media/Articles/19787/d039a8e54d3b4af0bf19ec08725272cc.jpg",
    time: "20 - 25",
    type: "",
  },

  {
    id: 0,
    name: "אחר",
    image:
      "https://www.foodisgood.co.il/wp-content/uploads/2017/12/b12-vitamin-foods.jpg",
    time: "20 - 25",
    type: "",
  },
  {
    id: 0,
    name: "ימי הולדת",
    image:
      "https://tzutzikim.co.il/wp-content/uploads/2018/07/IMG_1804-copy-1170x781.jpg",
    time: "20 - 25",
    type: "",
  },
];
const items = [
  {
    id: "0",
    name: "הזמנה מוקדמת",
    description: "הנחות מרשימות למזמינים מראש",
    image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
  },
  {
    id: "1",
    name: "סוגיי הקפה שלנו",
    description: "Across Sami-Shamoon",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
  },
  {
    id: "2",
    name: "מידע",
    description: "Selections",
    image: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
  },
  {
    id: "3",
    name: "בצלחת",
    description: "Curated dishes",
    image: "https://cdn-icons-png.flaticon.com/128/415/415744.png",
  },
  {
    id: "4",
    name: "Cafe",
    description: "all",
    image: "https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
  },
];
const hotels = [
  {
    images: [
      {
        id: "0",
        image:
          "https://b.zmtcdn.com/data/pictures/chains/8/51828/68d04135bbac1e3d5ff5a87d45974da1.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        description: "",
      },
      {
        id: "0",
        image:
          "https://b.zmtcdn.com/data/pictures/chains/8/51828/1f8008fc1cec3cd7ea2b559c32b1e642.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        description: "",
      },
    ],
    id: "0",
    featured_image:
      "https://img.freepik.com/premium-photo/photo-realistic-beef-schnitzel-sandwich_960911-1575.jpg",

    name: "בגטים",
    time: "10 -25 min",
    aggregate_rating: 4.3,
    offer: "10% OFF",
  },

  {
    id: "1",
    featured_image:
      "https://medias.hashulchan.co.il/www/uploads/2015/11/plov-1140x641-1577709923.jpg",
    name: "בצלחת",
    aggregate_rating: 4.5,

    offer: "10%",

    time: "44 min",
  },

  {
    id: "2",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "קפה מכל הסוגים",

    aggregate_rating: 4.3,
    offer: "",
    time: "20 min",
  },
  {
    id: "3",
    featured_image:
      "https://img.mako.co.il/2021/05/09/burekas_retzel_rotem_lib_2_autoOrient_i.jpg",
    name: "בורקסים",
    aggregate_rating: 4.1,
    offer: "",
    time: "5 min",
  },

  {
    id: "4",
    featured_image:
      "https://images1.ynet.co.il/PicServer4/2016/06/22/7084958/70849500100792980551no.jpg",
    name: "המבורגרים",
    aggregate_rating: 4.4,
    offer: "",
    time: "25 min",
  },
  {
    id: "5",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAW6AHZuQtR_1d9WPZn5mjK_jG-aAJxYfLQ&usqp=CAU",
    name: "כנפיים",
    aggregate_rating: 3.5,
    offer: "",
    time: "15 min",
  },
  {
    id: "6",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvPe-0FZVXXBJkBWf--jnjCcKN6PxD1Zgdw&usqp=CAU",
    name: "תבשילים",

    aggregate_rating: 4.2,

    offer: "",

    time: "במקום",
  },
  {
    id: "7",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVnb3JlCmtRJUTXo3Tj3dl_ZPjq2ScYFE6g&usqp=CAU",
    name: "בפיתה",
    aggregate_rating: 4.5,
    offer: "",
    time: "0 min",
  },

  {
    id: "8",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30R3IntPKgz0A7WzeylvnDyM8EwmAfE2qXA&usqp=CAU",
    name: "שיפודים",

    aggregate_rating: 3.9,

    offer: "",

    time: "25 min",
  },

  {
    id: "9",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEO2PLGXFMmFjaR1Kj19mndyPl-Wh4Kbq0Hw&usqp=CAU",
    name: "סטייק",
    aggregate_rating: 4.5,
    offer: "",
    time: " לפי מידת עשייה",
  },

  {
    id: "11",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOJlhGwhda4tsD8Rgk1A97akTRV8QJJC4DA&usqp=CAU",
    name: "גבינות",
    aggregate_rating: 4.2,
    offer: "",
    time: "20 min",
  },
  {
    id: "12",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGqVUxo6HO-CtXn-AHgAin1tvN4l8_A0e1Q&usqp=CAU",
    name: "פיצות",
    aggregate_rating: 4.6,
    offer: "",

    time: "10 min",
  },
];

const index = () => {
  return (
    <ScrollView style={styles.cont}>
      <View style={styles.v1}>
        <Ionicons name="restaurant-outline" size={24} color="#ffe4b5" />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            אפליקצית ההזמנות של קפיטריית סמי שמעון
          </Text>
          <Text style={{ color: "#E52850", fontSize: 16, marginTop: 3 }}>
            הזמן מהר ולהרצאה לא תאחר
          </Text>
        </View>
        <Pressable style={styles.p1}>
          <Text>Y.D APP</Text>
        </Pressable>
      </View>
      <View style={styles.v2}>
        <TextInput placeholder="Welcome to the cafeteria of Sami Shamoon College" />
        <AntDesign name="search1" size={24} color="blue" />
      </View>
      <Carousel />
      <Categories />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recommended?.map((item, index) => (
          <View style={styles.vrecom}>
            <View>
              <Image style={styles.img} source={{ uri: item?.image }} />
            </View>
            <View style={{ padding: 10, flexDirection: "column" }}>
              <Text style={styles.tname}>{item?.name}</Text>
              <Text style={styles.ttipe}>{item?.type}</Text>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Ionicons name="time" size={24} color="green" />
                <Text>{item?.time} mins</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.texpl}>קטגוריות</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items?.map((item, index) => (
          <View key={index} style={styles.vcatg}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: item?.image }}
            />

            <Text style={styles.tname2}>{item?.name}</Text>

            <Text style={styles.tdescription}> {item?.description}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "#fffff",
  },
  v1: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    padding: 10,
  },
  p1: {
    backgroundColor: "#6CB4EE",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  v2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#C0C0C0",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 11,
    marginTop: 10,
    marginHorizontal: 10,
  },
  vrecom: {
    backgroundColor: "white",
    flexDirection: "row",
    margin: 2,
    borderRadius: 8,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 7,
  },
  tname: {
    fontSize: 25,
    fontWeight: "500",
  },
  ttipe: {
    flex: 1,
    marginTop: 3,
    color: "gray",
    fontWeight: "500",
  },
  texpl: {
    textAlign: "center",
    marginTop: 7,
    letterSpacing: 4,
    marginBottom: 5,
    color: "gray",
  },
  vcatg: {
    width: 90,
    borderColor: "#ffe4b5",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 1,
    borderRadius: 5,
    marginLeft: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  tname2: {
    fontSize: 13,
    fontWeight: "500",
    marginTop: 6,
  },
  tdescription: {
    fontSize: 12,
    color: "gray",
    marginTop: 3,
  },
});
