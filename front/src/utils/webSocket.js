import React from "react";

const OpenSocket = () => {
  const ws = new WebSocket("ws://localhost:3004");

  ws.onopen = function (event) {
    console.log("socket is connected");
  };
  return ws;
};

export default OpenSocket;
