// Libraries Imports
import { createContext, useContext, useEffect, useState } from "react";
import { getUserInfo } from "@/appWrite";

const userInfoContext = createContext();

const useUserInfoContext = () => useContext(userInfoContext);

const UserInfoContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isUserInfo, setIsUserInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const user = await getUserInfo();
      setUserInfo(user);
      setIsUserInfo(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error?.message);
      setIsUserInfo(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <userInfoContext.Provider value={{ userInfo, isLoading, isUserInfo }}>
      {children}
    </userInfoContext.Provider>
  );
};

export { useUserInfoContext, UserInfoContextProvider };
