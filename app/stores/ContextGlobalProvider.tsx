'use client'
import React, { useEffect } from "react";
import { useState, useContext } from "react";

const MyContext = React.createContext({}) as any;


export function useMyGlobalContext() {
    return useContext(MyContext);
}

export function MyGlobalProvider({ children }: any) {
  const [calls, setCalls] = useState<any>()
  const [Tickets, setTickets] = useState<any>()
   
    return (
        <MyContext.Provider value={{ calls, setCalls, Tickets, setTickets}}>
            {children}
        </MyContext.Provider>
    );
}