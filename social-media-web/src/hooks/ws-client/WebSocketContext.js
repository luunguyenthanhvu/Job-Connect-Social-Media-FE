import React, {createContext, useContext} from "react";
import useWebsocket from "./websocket";

const WebSocketContext = createContext();

export const WebSocketProvider = ({children}) => {
  const websocket = useWebsocket();
  return (
      <WebSocketContext.Provider value={websocket}>
        {children}
      </WebSocketContext.Provider>
  );
};

export const useWebSocketContext = () => useContext(WebSocketContext);
