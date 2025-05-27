import App from "./App.jsx";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";

// import Spinach from "./components/Spinach";
// import Popeye from "./components/Popeye";
// import DefaultProfile from "./components/DefaultProfile.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
    // children: [
    //   { index: true, element: <DefaultProfile /> },
    //   { path: "spinach", element: <Spinach /> },
    //   { path: "popeye", element: <Popeye /> },
    // ],
  },
];

export default routes;
