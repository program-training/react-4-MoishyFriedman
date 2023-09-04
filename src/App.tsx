import "./App.css";
import TextContextProvider from "./context/textContext";
import ModeContextProvider from "./context/themeContext";
import UserContextProvider from "./context/userContext";
import { Grandpa } from "./components/Grandpa/grandpa";
import Header from "./components/header/header";
import Text from "./components/Text/text";
import Main from "./components/Main/main";

function App() {
  return (
    <div>
      <TextContextProvider>
        <ModeContextProvider>
          <UserContextProvider>
            <Header />
            <Grandpa />
            <Text />
            <Main />
          </UserContextProvider>
        </ModeContextProvider>
      </TextContextProvider>
    </div>
  );
}

export default App;
