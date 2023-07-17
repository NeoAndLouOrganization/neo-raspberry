const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const LED_PINS = [13, 12, 11];
const random = (top) => Math.floor(Math.random() * top);

const red = random(255) / 10;
const green = random(255) / 10;
const blue = random(255) / 10;

for (let i = 0; i < LED_PINS.length; i++) {
  pinMode(LED_PINS[i], OUTPUT);
}

const setColour = (red, green, blue) => {
  analogWrite(LED_PINS[0], 255 - red);
  analogWrite(LED_PINS[1], 255 - green);
  analogWrite(LED_PINS[2], 255 - blue);
};

const main = async () => {
  while (true) {
    const red = random(255) / 10;
    const green = random(255) / 10;
    const blue = random(255) / 10;
    await sleep(200);
    setColour(red, green, blue);
  }
};

main();
