import { createContext } from "react";

let LoginContext = createContext()

export default LoginContext;

export let LoginProvider = LoginContext.Provider

