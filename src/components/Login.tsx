import { useEffect, useReducer } from "react";
interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

type LoginPayload = {
  username: string;
  nombre: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };
    case "login":
      const { username, nombre } = action.payload;
      return {
        validando: false,
        token: "token",
        username,
        nombre,
      };
    default:
      return state;
  }
};

function Login() {
  const [{ validando, token, username }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const handleLogin = () => {
    dispatch({
      type: "login",
      payload: { username: "Arkandavid", nombre: "Angel" },
    });
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };
  if (validando) {
    return <div className="alert alert-info">Validando...</div>;
  }
  return (
    <div>
      <h3>Login</h3>
      {token ? (
        <>
          <div className="alert alert-success">Auntenticado con {username}</div>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">No autenticado</div>
          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default Login;
