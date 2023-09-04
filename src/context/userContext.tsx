import React, { createContext, useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
interface UserContext {
  user: User[] | null;
  setUser: React.Dispatch<React.SetStateAction<User[] | null>>;
}
interface ModeContextProviderProps {
  children: React.ReactNode;
}

export const userContext = createContext<UserContext | null>(null);

const UserContextProvider: React.FC<ModeContextProviderProps> = (prop) => {
  const [user, setUser] = useState<User[] | null>(null);
  useEffect(() => {
    const asyncFun = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/users?id=" +
            (Math.round(Math.random() * 10) + 1)
        );
        if (!result) {
          throw new Error("server error");
        }
        const user: User[] = await result.json();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };
    asyncFun();
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {prop.children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
