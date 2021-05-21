import { useState, useEffect, createContext, useContext } from "react";
import { useRouter } from "next/router";
import { Login } from "../../components/Layout/Login";

export const AuthContext = createContext({
  authUser: "",
  handleAuth: () => {}
});

export default function AuthProvider({ Component, pageProps }) {
  const [authUser, setAuthUser] = useState(null);
  const router = useRouter();

  const handleAuth = ({ username, password }) => {
    setAuthUser(`${username}-${password}`);
  };

  useEffect(() => {
    // console.log(Component);
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, handleAuth }}>
      {JSON.stringify(router)}
      {JSON.stringify(Component)}
      {authUser ? <Component {...pageProps} /> : <Login />}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
