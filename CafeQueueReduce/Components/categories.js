import { 
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
/*nitay*/
const Categories = () => {
  
  const items = [
    {
      id:"1",
      name:"מנות עיקריות"
    },
    {
      id: "2",
      name: "קפה מכל הסוגים",
    },
    {
      id:"3",
      name:"מאפים"
    },
    {
      id:"4",
      name:"שתייה קרה"
     }, 

    {
      id: "3",
      name: "מבצעים",
    },
    {
      id: "4",
      name: "הפסקות איסוף אוכל",
    },
  ];
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 5 }}>
            <View style={styles.cont}>
              <Text style={styles.text}>{item?.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  cont: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    backgroundColor: "#DB7093",
    borderRadius: 4,
  },
  text: {
    paddingHorizontal: 5,
    color: "white",
    fontWeight: "500",
  },
});