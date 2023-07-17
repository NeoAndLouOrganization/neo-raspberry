const LED = 15;
pinMode(LED, OUTPUT);
setInterval(() => {
  digitalToggle(LED);
}, 1000);
