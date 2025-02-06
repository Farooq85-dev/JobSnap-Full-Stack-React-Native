// Libraries Imports
import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "@/appWrite";

const userContext = createContext();

const useUserContext = () => useContext(userContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const user = await getUser();
      setUser(user);
      setIsUser(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error?.message);
      setIsUser(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <userContext.Provider value={{ user, isLoading, isUser }}>
      {children}
    </userContext.Provider>
  );
};

export { useUserContext, UserContextProvider };
