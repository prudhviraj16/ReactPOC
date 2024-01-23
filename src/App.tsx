import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import "./App.css";
import Productdetail from "./pages/productdetails/Productdetail";

const App = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children:
        currentUser.role === "admin"
          ? [
              { path: "/", element: <Home /> },
              { path: "/services", element: <Services /> },
              { path: "/products/:id", element: <Productdetail /> },
              { path: "/contact", element: <Contact /> },
              { path: "/about", element: <About /> },
              { path: "*", element: <Error /> },
            ]
          : [
              { path: "/", element: <Home /> },
              { path: "/about", element: <About /> },
              { path: "*", element: <Error /> },
            ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
