let symbol = "R_100";

connectTicks(symbol, (tick) => {
  const price = tick.quote;

  const candles = updateCandles(price, tick.epoch);
  const rsi = calculateRSI(candles);

  document.getElementById("price").innerText = price;
  document.getElementById("rsi").innerText = "RSI: " + rsi.toFixed(2);

  // simple strategy hint
  if (rsi < 30) {
    document.getElementById("signal").innerText = "BUY SIGNAL 🔵";
  } else if (rsi > 70) {
    document.getElementById("signal").innerText = "SELL SIGNAL 🔴";
  } else {
    document.getElementById("signal").innerText = "WAIT ⚪";
  }
});

function buyCall() {
  buy("CALL", symbol, 1);
}

function buyPut() {
  buy("PUT", symbol, 1);
}
