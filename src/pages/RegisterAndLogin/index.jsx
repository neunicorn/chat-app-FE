/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { apiPostRegister, apiPostLogin } from "../../utils/api";
import { UserContext } from "../../Context/UserContext";

const RegisterAndLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const { setUsernameLoggedIn, setId, id } = useContext(UserContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const url = isLogin ? apiPostLogin : apiPostRegister;
    const data = await url({ username, password });
    setUsernameLoggedIn(username);
    setId(data.id);
  };

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto" onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="block w-full rounded-md p-2 mb-2 "
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="block w-full rounded-md p-2 mb-2 "
          required
        />
        <button className="bg-blue-500 text-white block w-full rounded-md p-2">
          {isLogin ? "Login" : "Register"}
        </button>
        <div className="text-center mt-2">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register Here" : "Login Here"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterAndLogin;
