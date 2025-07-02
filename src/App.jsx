import "./App.css";
import Header from "./components/Header/Header.jsx";
import Body from "./components/Body/Body.jsx";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: "",
  },
  {},
  {},
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
