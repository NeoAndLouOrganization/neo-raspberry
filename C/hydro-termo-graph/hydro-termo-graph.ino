#include "./dht/dht.cpp"
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2); // initialize the LCD
#define DHT11_PIN 15                // the number of the DHT11 sensor pin

dht DHT;

void setup()
{
    if (!i2CAddrTest(0x27))
    {
        lcd = LiquidCrystal_I2C(0x3F, 16, 2);
    }
    lcd.init();      // LCD driver initialization
    lcd.backlight(); // Open the backlight

    lcd.setCursor(0, 0);
    lcd.print("Hello World");
}

void loop()
{
    // lcd.print("DHT11 Data error");
    int chk = DHT.read11(DHT11_PIN); // read DHT11 data and save it
    if (chk == DHTLIB_OK)
    {
        Serial.println("humidity: " + String(DHT.humidity) + "%, temperature: " +
                       String(DHT.temperature) + "C");
        lcd.clear();
        Serial.println("test 1");

        lcd.setCursor(0, 0); // set the cursor to column 0, line 0
        lcd.print("Temp: "); // display the Humidity on the LCD1602
        Serial.println("test2");

        lcd.print(int(DHT.temperature));
        lcd.print(" C");
        lcd.setCursor(0, 1); // set the cursor to column 0, line 1
        lcd.print("Humi: "); // display the Humidity on the LCD1602
        lcd.print(int(DHT.humidity));
        lcd.print(" %");

        Serial.println("test3");
    }
    else
    {
        Serial.println("DHT11 Reading data error!");
        lcd.clear();
        lcd.setCursor(0, 0); // set the cursor to column 0, line 0
        lcd.print("DHT11 Data error");
    }
    delay(2000);
}

bool i2CAddrTest(uint8_t addr)
{
    Wire.begin();
    Wire.beginTransmission(addr);
    if (Wire.endTransmission() == 0)
    {
        return true;
    }
    return false;
}