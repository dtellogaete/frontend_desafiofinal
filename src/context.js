import { createContext } from "react";

const Context = createContext({
  user: [],
  setUser: () => {},
});

export default Context;
