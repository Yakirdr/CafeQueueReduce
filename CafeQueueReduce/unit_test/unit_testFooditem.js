import { Pressable,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import MenuItem from './MenuItem';
//my test
// בדיקת יחידה למקרה וקיבלנו אייטם לא תקין מהמניו שהוא מכיל לפחות טקסט
test('renders "item not received" when item prop is not passed', () => {
  const { getByText } = render(<FoodItem />);
  const textElement = getByText(/item not received/i);
  expect(textElement).toBeTruthy();
});
//AI test
//  בדיקת יחידה למקרה ולא קיבלנו אייטם תקין מהמניו
test('renders without crashing', () => {
  render(<FoodItem />);
});
// בדיקת יחידה למקרה שהקומפוננטה מציגה את כמות הפריטים ברשימת הפריטים
test('renders item quantity when item prop is passed', () => {
  const mockItem = {
    name: 'Pizza',
    items: [{ name: 'Margarita' }, { name: 'Pepperoni' }],
  };
  const { getByText } = render(<FoodItem item={mockItem} />);
  const quantityElement = getByText(`(${mockItem.items.length})`);
  expect(quantityElement).toBeTruthy();
});
// בדיקת יחידה למקרה שהקומפוננטה מציגה את שם הפריט הראשי
test('renders main item name when item prop is passed', () => {
  const mockItem = {
  name: 'Burger',
  items: [{ name: 'Cheeseburger' }, { name: 'Veggie Burger' }],
  };
  const { getByText } = render(<FoodItem item={mockItem} />);
  const nameElement = getByText(mockItem.name);
  expect(nameElement).toBeTruthy();
  });
      
  

