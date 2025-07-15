import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import WatchPage from "./components/WatchPage/WatchPage";
import MainContainer from "./components/Body/MainContainer/MainContainer";
import SearchResults from "./components/SearchResults/SearchResults";
import Body from "./components/Body/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: Body,
    children: [
      { index: true, Component: MainContainer },
      { path: "/watch", Component: WatchPage },
      { path: "/results", Component: SearchResults },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
