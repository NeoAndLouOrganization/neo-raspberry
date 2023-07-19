const LED = 15;
const POT = 26;

setInterval(() => {
  let v = analogRead(POT);
  analogWrite(LED, v);
}, 100);
