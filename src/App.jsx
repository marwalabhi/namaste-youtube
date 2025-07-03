import "./App.css";
import Header from "./components/Header/Header.jsx";
import Body from "./components/Body/Body.jsx";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import WatchPage from "./components/WatchPage/WatchPage";
import MainContainer from "./components/Body/MainContainer/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: Body,
    children: [
      { index: true, Component: MainContainer },
      { path: "/watch", Component: WatchPage },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
