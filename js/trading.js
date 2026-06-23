function buyRise(){

ws.send(JSON.stringify({

buy:1,

price:10,

parameters:{

amount:10,

basis:"stake",

contract_type:"CALL",

currency:"USD",

duration:5,

duration_unit:"t",

symbol:"R_100"

}

}));

}

function buyFall(){

ws.send(JSON.stringify({

buy:1,

price:10,

parameters:{

amount:10,

basis:"stake",

contract_type:"PUT",

currency:"USD",

duration:5,

duration_unit:"t",

symbol:"R_100"

}

}));

}
