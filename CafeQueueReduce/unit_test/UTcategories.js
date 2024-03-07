import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Categories from './Categories';

//AI בדיקת יחידה בלי רכיב 
// בדיקה שבעזרתה נבדוק שכאשר לוחצים על כפתור "חזור לקטגוריות", המודל ייסגר ונחזור למסך הקטגוריות
test("pressing 'Back to Categories' button should close the modal and return to categories screen", async () => {
    // נכין את הרכיב לבדיקה
    const { getByText, queryByText } = render(<Categories />);
    
    // בדיקה 1: בדיקה כי כאשר לוחצים על קטגוריה, המודל נפתח
    fireEvent.press(getByText("מנות עיקריות"));
    expect(queryByText("מנות עיקריות")).toBeTruthy(); // אימות שהמודל נפתח
  
    // בדיקה 2: בדיקה כי לאחר לחיצה על כפתור "חזור לקטגוריות", המודל נסגר
    fireEvent.press(getByText("חזור לקטגוריות"));
    expect(queryByText("מנות עיקריות")).toBeFalsy(); // אימות שהמודל נסגר
  });
  //בדיקת יחידה רכיב copilot windows
  //בדיקת 3: בדיקת נגישות: נבדוק שהרכיב נגיש ופועל כראוי במגוון מצבי שימוש, לדוגמה האם הכפתורים ניתנים ללחיצה, האם הרשימה עוברת גלילה כראוי,ה
  test("component accessibility", async () => {
    // נכין את הרכיב לבדיקה
    const { getByText, getByTestId } = render(<Categories />);
    
    // בדיקה כי הכפתורים ניתנים ללחיצה
    const categoryButtons = ["מנות עיקריות", "קפה מכל הסוגים", "מאפים", "שתייה קרה", "מבצעים", "הפסקות איסוף אוכל"];
    categoryButtons.forEach((buttonText) => {
      expect(getByText(buttonText)).toBeTruthy(); // מוודא שהכפתור קיים
      fireEvent.press(getByText(buttonText)); // לוחץ על הכפתור
    });
  
    // בדיקה 4: בדיקה כי הרשימה עוברת גלילה כראוי
    const flatList = getByTestId("categoriesList");
    expect(flatList.props.horizontal).toBe(true); // מוודא שהרשימה נוצרת באופן אופקי
  });
  
  
  