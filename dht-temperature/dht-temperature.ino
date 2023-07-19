#include "./dht/dht.cpp"

dht DHT;
#define DHT11_PIN 15

void setup()
{
    Serial.begin(115200);
    delay(2000);
    Serial.println("Type,\tstatus,\tHumidity (%),\tTemperature (C)");
}

void loop()
{
    uint8_t pin = 15;
    int chk = DHT.read11(DHT11_PIN);
    if (chk == DHTLIB_OK)
    {
        Serial.println("humidity: " + String(DHT.humidity) + "%, temperature: " +
                       String(DHT.temperature) + "C");
    }
    else
    {
        Serial.println("DHT11 Reading data error!");
    }

    delay(2000);
}