import { createContext, useEffect, useState } from "react";
import { apiGetProfil } from "../../utils/api";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [username, setUsernameLoggedIn] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    apiGetProfil().then((res) => {
      setId(res.result.id);
      setUsernameLoggedIn(res.result.username);
    });
  }, []);
  return (
    <UserContext.Provider value={{ username, setUsernameLoggedIn, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
