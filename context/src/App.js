import "./App.css";
import A from "./components/A";
import { createContext } from "react";
export const Name = createContext();

function App() {
  const name = "johny jangras";
  return (
    <Name.Provider value={name}>
      <A />
    </Name.Provider>
  );
}

export default App;
