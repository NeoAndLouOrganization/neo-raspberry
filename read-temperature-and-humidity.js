const { DHT } = require("dht");
console.log("Test here");
const dht = new DHT(15, DHT.DHT11);
console.log("Dht: ", dht);
let result = dht.read();
console.log("Read: ", result);
if (result) {
  console.log(`Temperature: ${dht.temperature} C`);
  console.log(`Humidity: ${dht.humidity} %`);
} else {
  console.log("Failed to read");
}
