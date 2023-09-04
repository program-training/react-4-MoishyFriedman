import React, { createContext, useState } from "react";

interface ModeContext {
  mode: "dark" | "light";
  setMode: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}
interface ModeContextProviderProps {
  children: React.ReactNode;
}

export const modeContext = createContext<ModeContext | null>(null);

const ModeContextProvider: React.FC<ModeContextProviderProps> = (prop) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  return (
    <modeContext.Provider value={{ mode, setMode }}>
      {prop.children}
    </modeContext.Provider>
  );
};

export default ModeContextProvider;
