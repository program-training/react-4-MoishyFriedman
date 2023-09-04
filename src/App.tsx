import "./App.css";
import TextContextProvider from "./context/textContext";
import { Grandpa } from "./components/Grandpa/grandpa";

function App() {
  return (
    <div>
      <TextContextProvider>
        <Grandpa />
      </TextContextProvider>
    </div>
  );
}

export default App;
