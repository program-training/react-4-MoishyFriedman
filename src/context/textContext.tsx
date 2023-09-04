import React, { createContext, useState } from "react";

interface TextContext {
  string: string;
  setString: React.Dispatch<React.SetStateAction<string>>;
}
interface TextContextProviderProps {
  children: React.ReactNode;
}

export const textContext = createContext<TextContext | null>(null);

const TextContextProvider: React.FC<TextContextProviderProps> = (prop) => {
  const [string, setString] = useState<string>("hello world");

  return (
    <textContext.Provider value={{ string, setString }}>
      {prop.children}
    </textContext.Provider>
  );
};

export default TextContextProvider;
