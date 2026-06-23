let ws;

function connectTicks(symbol, onTick) {
  ws = new WebSocket(
    `wss://ws.derivws.com/websockets/v3?app_id=${CONFIG.33tOVg0Ab0mwjyV0Uwiuq}`
  );

  ws.onopen = () => {
    ws.send(JSON.stringify({
      ticks: symbol,
      subscribe: 1
    }));
  };

  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    if (data.tick) onTick(data.tick);
  };

  ws.onclose = () => {
    setTimeout(() => connectTicks(symbol, onTick), 1000);
  };
}
