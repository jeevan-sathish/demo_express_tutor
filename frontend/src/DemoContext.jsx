import { createContext, useState } from "react";

export const DemoContext = createContext();

export function DemoHandler({ children }) {
  const [demo, setDemo] = useState("");

  return (
    <DemoContext.Provider value={{ demo, setDemo }}>
      {children}
    </DemoContext.Provider>
  );
}
