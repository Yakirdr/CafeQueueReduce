// Register.test.js
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import Register from '../(authenticate)/register'; // ודא שהנתיב לקומפוננטה נכון
import { supabase } from "../../Supabase"; // הנתיב לאינסטנס של Supabase שלך

// Mocking supabase auth signUp function
jest.mock('../../Supabase', () => ({
  auth: {
    signUp: jest.fn(() => Promise.resolve({
      user: { role: "authenticated" },
      error: null
    })),
  },
}));

// Mocking Alert
jest.mock('react-native', () => {
  const actualReactNative = jest.requireActual('react-native');
  return {
    ...actualReactNative,
    Alert: {
      alert: jest.fn(),
    },
  };
});

describe('<Register />', () => {
  it('displays success alert when registration is successful', async () => {
    const { getByPlaceholderText, getByText } = render(<Register />);

    fireEvent.changeText(getByPlaceholderText('enter your Name'), 'Test Name');
    fireEvent.changeText(getByPlaceholderText('enter your Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('enter your password'), 'password123');
    
    await act(async () => {
      fireEvent.press(getByText('register'));
    });

    expect(supabase.auth.signUp).toHaveBeenCalledWith({
      name: 'Test Name',
      email: 'test@example.com',
      password: 'password123',
    });

    expect(Alert.alert).toHaveBeenCalledWith("You have been successfully registered");
  });
});
it('displays an error alert when registration fails', async () => {
    supabase.auth.signUp.mockImplementationOnce(() => Promise.resolve({
      user: null,
      error: { message: 'Registration error' },
    }));
  
    const { getByPlaceholderText, getByText } = render(<Register />);
  
    fireEvent.changeText(getByPlaceholderText('enter your Name'), 'Fail Name');
    fireEvent.changeText(getByPlaceholderText('enter your Email'), 'fail@example.com');
    fireEvent.changeText(getByPlaceholderText('enter your password'), 'fail123');
    
    await act(async () => {
      fireEvent.press(getByText('register'));
    });
  
    expect(Alert.alert).toHaveBeenCalledWith("Error while registering", "please try again");
  });
  it('navigates to login screen when clicking on the login prompt', () => {
    const { getByText } = render(<Register />);
    const toLoginButton = getByText('קיים חשבון התחבר');
  
    fireEvent.press(toLoginButton);
  
    expect(router.replace).toHaveBeenCalledWith("/login"); 
  });
    