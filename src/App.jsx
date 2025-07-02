import "./App.css";
import Header from "./components/Header/Header.jsx";
import Body from "./components/Body/Body.jsx";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage/WatchPage";
import MainContainer from "./components/Body/MainContainer/MainContainer";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter}></RouterProvider>
      <Body />
    </Provider>
  );
}

export default App;
