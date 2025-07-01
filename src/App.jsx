import "./App.css";
import Header from "./components/Header/Header.jsx";
import Body from "./components/Body/Body.jsx";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
