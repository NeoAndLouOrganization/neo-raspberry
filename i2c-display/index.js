import LCD from "./i2c-lcd";
const lcd = new LCD();
lcd.begin();

lcd.print("Hello World");
