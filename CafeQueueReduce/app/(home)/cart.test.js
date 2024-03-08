// components/Cart.test.js
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react-native';
import Cart from './cart';

const mockStore = configureStore([]);

describe('<cart />', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: {
        cart: [{ id: '1', name: 'Item 1', price: 10, quantity: 1 }],
      },
    });
  });

  it('updates total when incrementing item quantity', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    fireEvent.press(getByText('+'));
    expect(getByText('₪20')).toBeTruthy(); // Assuming your component updates the total immediately
  });

  it('clears the cart when the cleanCart button is pressed', () => {
    // הוספת כפתור ריקון העגלה בקומפוננטת Cart ולחיצה עליו
    fireEvent.press(getByText('Clean Cart'));
    // בדיקה שהעגלה ריקה והסכום הכולל הוא 0
    expect(queryByText('₪0')).toBeTruthy();
  });
  it('does not allow item quantity to decrease below 1', () => {
    // נניח שיש פריט אחד בעגלה עם כמות של 1
    fireEvent.press(getByText('-')); // לחיצה על כפתור ההפחתה
    expect(getByText('1')).toBeTruthy(); // הכמות אמורה להישאר 1
  });
  it('displays a message when the cart is empty', () => {
    // ריקון העגלה
    fireEvent.press(getByText('Clean Cart'));
    // בדיקה שההודעה "Your cart is empty" מוצגת
    expect(getByText('Your cart is empty')).toBeTruthy();
  });
      
});
