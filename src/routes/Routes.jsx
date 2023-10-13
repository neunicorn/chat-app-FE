import { useContext } from "react";
import { UserContext } from "../Context";
import { RegisterAndLogin } from "../pages";

const Routes = () => {
  const { username, id } = useContext(UserContext);
  return username ? "Logged in!" + username : <RegisterAndLogin />;
};

export default Routes;
