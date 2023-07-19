#include <Arduino.h>
#line 1 "/Users/vvl02/git/neo-raspberry/i2c-display-arduino/i2c-display-arduino.ino"
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

#line 5 "/Users/vvl02/git/neo-raspberry/i2c-display-arduino/i2c-display-arduino.ino"
void setup();
#line 18 "/Users/vvl02/git/neo-raspberry/i2c-display-arduino/i2c-display-arduino.ino"
void loop();
#line 26 "/Users/vvl02/git/neo-raspberry/i2c-display-arduino/i2c-display-arduino.ino"
bool i2CAddrTest(uint8_t addr);
#line 5 "/Users/vvl02/git/neo-raspberry/i2c-display-arduino/i2c-display-arduino.ino"
void setup()
{
    if (!i2CAddrTest(0x27))
    {
        lcd = LiquidCrystal_I2C(0x3F, 16, 2);
    }

    lcd.init();
    lcd.backlight();
    lcd.setCursor(0, 0);
    lcd.print("Hello World");
}

void loop()
{
    lcd.setCursor(0, 1);
    lcd.print("Counter:");
    lcd.print(millis() / 1000);
    delay(1000);
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
