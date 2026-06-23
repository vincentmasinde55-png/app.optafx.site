const token = localStorage.getItem("deriv_token");

const ws = new WebSocket(
    `wss://ws.derivws.com/websockets/v3?app_id=${33tOVg0Ab0mwjyV0Uwiuq}`
);

ws.onopen = () => {
    console.log("Connected");

    ws.send(JSON.stringify({
        authorize: token
    }));
};

ws.onmessage = (msg) => {

    const data = JSON.parse(msg.data);

    console.log(data);

    if (data.msg_type === "authorize") {

        console.log("Logged in");

        ws.send(JSON.stringify({
            balance:1,
            subscribe:1
        }));

    }

    if (data.msg_type === "balance") {

        document.getElementById("balance").innerHTML =
        "$" + data.balance.balance;

    }

};
