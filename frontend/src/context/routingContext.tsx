import React, { createContext, useState } from "react";

const RoutingContext = createContext({
  summary: null,
  routemap: null,
  setSummary: (summary: any) => {},
  setRoutemap: (routemap: any) => {},
});

export const RoutingProvider = ({ children }) => {
  const [summary, setSummary] = useState(null);
  const [routemap, setRoutemap] = useState(null);

  return (
    <RoutingContext.Provider
      value={{ summary, routemap, setSummary, setRoutemap }}
    >
      {children}
    </RoutingContext.Provider>
  );
};

export default RoutingContext;
