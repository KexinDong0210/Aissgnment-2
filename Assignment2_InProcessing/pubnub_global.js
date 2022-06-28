/**
 * Written for UTSC New Media in Theory
 * Parts of this code is adapted from Nick Puckett & Kate Hartman's Creation & Computation PubNub Code
 * 
 * This file sets up the publish and subscribe events for the all of the pubnub pages on this website.  
*/

let dataServer;
let pubKey = "pub-c-8023b38b-b78d-4dc5-80cb-ea56808e1983";
let subKey = "sub-c-1c02ba5e-e002-4851-9f24-cb7062034440";
let secretKey = "sec-c-Y2FjZjRmMTktMzdmYS00ZjY5LTk1Y2EtMWJhYzI3MmY3YjEz";

function createServer(y) {

  dataServer = new PubNub({
    subscribeKey: subKey,
    publishKey: pubKey,
    uuid: y,
    secretKey: secretKey,
    heartbeatInterval: 0,
  });

}

