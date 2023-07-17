const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const LED_PINS = [16, 17, 18, 19, 20, 21, 22, 26, 27, 28];

const main = async () => {
  for (let i = 0; i < LED_PINS.length; i++) {
    pinMode(LED_PINS[i], OUTPUT);
    await sleep(500);
  }

  for (let i = 0; i < LED_PINS.length; i++) {
    digitalToggle(LED_PINS[i]);
    await sleep(500);
  }

  for (let i = LED_PINS.length - 1; i >= 0; i--) {
    digitalToggle(LED_PINS[i]);
    await sleep(500);
  }
};

main();
