const PIN_LED = 15;
const PIN_BUTTON = 14;

pinMode(PIN_LED, OUTPUT);
pinMode(PIN_BUTTON, INPUT);

setWatch(
  () => {
    digitalToggle(PIN_LED);
  },
  PIN_BUTTON,
  FALLING,
  10
);
